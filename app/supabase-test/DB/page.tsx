
"use client";

import { useState } from "react";
import { createClient } from "../../../lib/supabase/client";

interface HomeSection {
  id: number | string;
  slug: string;
  published: boolean;
  content: Record<string, unknown> | null;
  [key: string]: unknown;
}

export default function SupabaseTestPage() {
  const [status, setStatus] = useState("Not tested yet");
  const [sections, setSections] = useState<HomeSection[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState<number | null>(null);

  async function fetchData() {
    setLoading(true);
    setStatus("Fetching all records...");
    setSections([]);
    setTotal(null);

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey =
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

      if (!supabaseUrl || !supabaseKey) {
        setStatus("Configuration Error: Missing Supabase environment variables.");
        return;
      }

      const supabase = createClient();

      // Fetch every row visible to the current client.
      // Pagination prevents the normal API row limit from
      // silently restricting the results.
      const pageSize = 500;
      let from = 0;
      let allSections: HomeSection[] = [];

      while (true) {
        const { data, error, count } = await supabase
          .from("Home_sections")
          .select("*", { count: "exact" })
          .order("id", { ascending: true })
          .range(from, from + pageSize - 1);

        if (error) {
          throw error;
        }

        const batch = (data ?? []) as HomeSection[];

        allSections = [...allSections, ...batch];

        if (count !== null) {
          setTotal(count);
        }

        if (batch.length < pageSize) {
          break;
        }

        from += pageSize;
      }

      setSections(allSections);

      setStatus(
        `Loaded successfully! Retrieved ${allSections.length} records.`
      );
    } catch (err) {
      console.error("Supabase fetch error:", err);

      setStatus(
        err instanceof Error
          ? `Query Failed: ${err.message}`
          : "Unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen w-full bg-slate-950 px-4 py-10 text-white sm:px-6">
      <div className="mx-auto mt-4 w-full max-w-5xl rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl sm:p-8">
        <h1 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Website Sections Database Viewer
        </h1>

        <p className="mt-3 text-center text-sm text-slate-400">
          View every accessible record in{" "}
          <code className="rounded bg-slate-800 px-2 py-1 text-slate-200">
            Home_sections
          </code>
          .
        </p>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={fetchData}
            disabled={loading}
            className="cursor-pointer rounded-xl bg-[#4F0908] px-8 py-3.5 font-semibold text-white shadow-lg transition-colors hover:bg-[#6b0c0a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Loading Data..." : "Fetch All Database Records"}
          </button>
        </div>

        {/* Status */}
        <div className="mt-6 rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm">
          <p className="font-semibold text-slate-300">
            Status:{" "}
            <span className="font-normal text-slate-400">
              {status}
            </span>
          </p>

          {total !== null && (
            <p className="mt-2 text-slate-400">
              Total rows visible to this query:{" "}
              <span className="font-semibold text-amber-400">
                {total}
              </span>
            </p>
          )}

          <p className="mt-2 text-slate-400">
            Records retrieved:{" "}
            <span className="font-semibold text-emerald-400">
              {sections.length}
            </span>
          </p>
        </div>

        {/* All sections */}
        <div className="mt-8 space-y-5">
          {sections.length > 0 ? (
            sections.map((section) => (
              <article
                key={section.id}
                className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-5 shadow-inner"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                  <div>
                    <p className="text-xs text-slate-500">
                      Section ID
                    </p>
                    <p className="mt-1 font-mono text-sm text-slate-300">
                      {section.id}
                    </p>

                    <p className="mt-3 text-xs text-slate-500">
                      Slug
                    </p>
                    <h2 className="mt-1 font-mono text-lg font-semibold text-amber-400">
                      {section.slug}
                    </h2>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                      section.published
                        ? "border-emerald-800 bg-emerald-950 text-emerald-400"
                        : "border-rose-800 bg-rose-950 text-rose-400"
                    }`}
                  >
                    {section.published ? "Published" : "Draft"}
                  </span>
                </div>

                {/* Display every column returned by select("*") */}
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Complete Record (JSON)
                </h3>

                <pre className="max-h-[500px] overflow-auto whitespace-pre-wrap break-words rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-xs leading-6 text-slate-300">
                  {JSON.stringify(section, null, 2)}
                </pre>
              </article>
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-slate-800 py-10 text-center text-sm text-slate-500">
              {loading
                ? "Fetching records..."
                : "No records retrieved yet. Click the button to fetch data."}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
