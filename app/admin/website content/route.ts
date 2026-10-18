
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

async function isAdmin(
  supabase: Awaited<ReturnType<typeof createClient>>
) {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) return false;

  const { data, error } = await supabase
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  return !error && Boolean(data);
}

// READ: GET /api/website-sections?slug=why-assayl
export async function GET(request: Request) {
  const supabase = await createClient();
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const query = supabase
    .from("website_sections")
    .select("id, slug, content, published, updated_at");

  if (slug) {
    const { data, error } = await query
      .eq("slug", slug)
      .maybeSingle();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: "Section not found or not published." },
        { status: 404 }
      );
    }

    return NextResponse.json({ data });
  }

  const { data, error } = await query.order("updated_at", {
    ascending: false,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ data });
}

// CREATE: POST /api/website-sections
export async function POST(request: Request) {
  const supabase = await createClient();

  if (!(await isAdmin(supabase))) {
    return NextResponse.json(
      { error: "You must sign in as an authorized admin." },
      { status: 403 }
    );
  }

  let body: {
    slug?: string;
    content?: unknown;
    published?: boolean;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (
    !body.slug?.trim() ||
    !body.content ||
    typeof body.content !== "object" ||
    Array.isArray(body.content)
  ) {
    return NextResponse.json(
      { error: "A slug and valid content object are required." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("website_sections")
    .insert({
      slug: body.slug.trim(),
      content: body.content,
      published: body.published ?? false,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }

  return NextResponse.json({ data }, { status: 201 });
}

// UPDATE: PATCH /api/website-sections?slug=why-assayl
export async function PATCH(request: Request) {
  const supabase = await createClient();

  if (!(await isAdmin(supabase))) {
    return NextResponse.json(
      { error: "You must sign in as an authorized admin." },
      { status: 403 }
    );
  }

  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { error: "The section slug is required." },
      { status: 400 }
    );
  }

  let body: {
    content?: unknown;
    published?: boolean;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const updates: {
    content?: Record<string, unknown>;
    published?: boolean;
    updated_at: string;
  } = {
    updated_at: new Date().toISOString(),
  };

  if (body.content !== undefined) {
    if (
      !body.content ||
      typeof body.content !== "object" ||
      Array.isArray(body.content)
    ) {
      return NextResponse.json(
        { error: "Content must be a JSON object." },
        { status: 400 }
      );
    }

    updates.content = body.content as Record<string, unknown>;
  }

  if (body.published !== undefined) {
    if (typeof body.published !== "boolean") {
      return NextResponse.json(
        { error: "Published must be a boolean." },
        { status: 400 }
      );
    }

    updates.published = body.published;
  }

  if (
    updates.content === undefined &&
    updates.published === undefined
  ) {
    return NextResponse.json(
      { error: "No changes were provided." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("website_sections")
    .update(updates)
    .eq("slug", slug)
    .select()
    .maybeSingle();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }

  if (!data) {
    return NextResponse.json(
      { error: "Section not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({ data });
}

// DELETE: DELETE /api/website-sections?slug=why-assayl
export async function DELETE(request: Request) {
  const supabase = await createClient();

  if (!(await isAdmin(supabase))) {
    return NextResponse.json(
      { error: "You must sign in as an authorized admin." },
      { status: 403 }
    );
  }

  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { error: "The section slug is required." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("website_sections")
    .delete()
    .eq("slug", slug)
    .select("slug")
    .maybeSingle();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }

  if (!data) {
    return NextResponse.json(
      { error: "Section not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    deletedSlug: data.slug,
  });
}
