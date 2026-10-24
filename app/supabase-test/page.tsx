"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function SupabaseTestPage() {
  const [status, setStatus] = useState("Not tested yet");
  const [sections, setSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    setStatus("Fetching data...");
    setSections([]);

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

      if (!supabaseUrl || !supabaseKey) {
        setStatus("Configuration Error");
        return;
      }

      const supabase = createClient();

      // جلب البيانات من جدول website_sections
      const { data, error } = await supabase
        .from("website_sections")
        .select("*");

      if (error) {
        setStatus(`Query Failed: ${error.message}`);
        return;
      }

      setSections(data || []);
      setStatus(`Loaded successfully! Found ${data.length} records.`);
    } catch (error) {
      setStatus("Unexpected Error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="w-full min-h-screen bg-slate-950 text-white flex flex-col items-center justify-start p-6">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl mt-10">
        <h1 className="text-3xl font-bold tracking-tight text-center">
          Website Sections Database Viewer
        </h1>

        <p className="mt-2 text-slate-400 text-sm text-center">
          عرض البيانات المخزنة مباشرة من جدول <code className="text-slate-200 bg-slate-800 px-1.5 py-0.5 rounded">website_sections</code>.
        </p>

        <div className="flex justify-center mt-6">
          <button
            onClick={fetchData}
            disabled={loading}
            className="rounded-xl bg-[#4F0908] hover:bg-[#6b0c0a] transition-all px-8 py-3.5
              font-semibold text-white disabled:opacity-50 shadow-lg cursor-pointer"
          >
            {loading ? "Loading Data..." : "Fetch Database Records"}
          </button>
        </div>

        <div className="mt-6 text-sm font-semibold text-slate-300 text-center">
          Status: <span className="text-slate-400 font-normal">{status}</span>
        </div>

        {/* عرض البيانات */}
        <div className="mt-8 space-y-4">
          {sections.length > 0 ? (
            sections.map((section, index) => (
              <div
                key={section.id || index}
                className="bg-slate-950 border border-slate-800 p-5 rounded-xl shadow-inner"
              >
                <div className="flex justify-between items-center mb-3 border-b border-slate-800 pb-2">
                  <span className="text-amber-400 font-mono text-sm">Slug: {section.slug}</span>
                  <span className={`text-xs px-2.5 py-1 rounded-full ${section.published ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'}`}>
                    {section.published ? "Published" : "Draft"}
                  </span>
                </div>

                <h3 className="text-xs text-slate-500 mb-1">Content Data (JSON):</h3>
                <pre className="whitespace-pre-wrap break-words text-xs text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800 font-mono max-h-60 overflow-y-auto">
                  {JSON.stringify(section.content, null, 2)}
                </pre>
              </div>
            ))
          ) : (
            <div className="text-center text-slate-500 py-8 border border-dashed border-slate-800 rounded-xl">
              No data fetched yet or table is empty. Click the button above to load records.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}