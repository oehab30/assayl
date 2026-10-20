
import "server-only";

import { createSupabaseServerClient } from "./server";

export async function getWhyAssaylContent() {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("website_sections")
    .select("id, slug, content, published, updated_at")
    .eq("slug", "why-assayl")
    .eq("published", true)
    .maybeSingle();

  if (error) {
    console.error("Failed to fetch Why Assayl:", error);
    throw new Error("Unable to load Why Assayl content.");
  }

  return data;
}