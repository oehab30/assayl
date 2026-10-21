export interface SectionContent<T = unknown> {
  id?: string;
  slug: string;
  content: T;
  published: boolean;
  updated_at?: string;
}

export async function fetchSectionContent<T>(
  slug: string,
  defaultContent: T
): Promise<T> {
  if (typeof window !== "undefined") {
    const cached = localStorage.getItem(`cms_section_${slug}`);
    if (cached) {
      try {
        return JSON.parse(cached) as T;
      } catch {
        // Continue to API fetch
      }
    }
  }

  try {
    const response = await fetch(`/api/website-sections?slug=${encodeURIComponent(slug)}`);
    if (response.ok) {
      const json = await response.json();
      if (json.data?.content) {
        if (typeof window !== "undefined") {
          localStorage.setItem(`cms_section_${slug}`, JSON.stringify(json.data.content));
        }
        return json.data.content as T;
      }
    }
  } catch (error) {
    console.warn(`Could not load section ${slug} from API, using default`, error);
  }

  return defaultContent;
}

export async function saveSectionContent<T>(
  slug: string,
  content: T
): Promise<{ success: boolean; message: string }> {
  if (typeof window !== "undefined") {
    localStorage.setItem(`cms_section_${slug}`, JSON.stringify(content));
    window.dispatchEvent(new Event(`cms_update_${slug}`));
  }

  try {
    const response = await fetch(`/api/website-sections?slug=${encodeURIComponent(slug)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, published: true }),
    });

    if (response.ok) {
      return { success: true, message: "Saved to database and live site." };
    } else {
      const json = await response.json().catch(() => ({}));
      if (response.status === 404) {
        // Try creating section if not exists
        const createRes = await fetch(`/api/website-sections`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug, content, published: true }),
        });
        if (createRes.ok) {
          return { success: true, message: "Created and published section to database." };
        }
      }
      return {
        success: true,
        message: json.error ? `Saved locally. Server note: ${json.error}` : "Saved to local CMS cache.",
      };
    }
  } catch {
    return { success: true, message: "Saved to local CMS cache." };
  }
}
