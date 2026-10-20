
import { NextResponse } from "next/server";
import { getWhyAssaylContent } from "@/lib/supabase/website-sections";

export async function GET() {
  try {
    const data = await getWhyAssaylContent();

    if (!data) {
      return NextResponse.json(
        { message: "No published Why Assayl section was found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Why Assayl content loaded successfully!",
      slug: data.slug,
      published: data.published,
      languages: Object.keys(data.content ?? {}),
    });
  } catch (error) {
    console.error("Why Assayl test failed:", error);

    return NextResponse.json(
      { success: false, message: "Could not load Why Assayl content." },
      { status: 500 }
    );
  }
}
