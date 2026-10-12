
"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function SupabaseTestPage() {
  const [status, setStatus] = useState("Not tested yet");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);

  async function testConnection() {
    setLoading(true);
    setStatus("Connecting...");
    setDetails("");

    try {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("website_sections")
        .select("slug")
        .limit(1);

      if (error) {
        setStatus("Connection/query failed");
        setDetails(
          `${error.message}\nCode: ${error.code ?? "unknown"}`
        );
        return;
      }

      setStatus("Connected successfully!");
      setDetails(
        `Supabase responded successfully.\n` +
        `Rows visible to this client: ${data.length}\n` +
        `Table: website_sections`
      );
    } catch (error) {
      setStatus("Unexpected error");
      setDetails(
        error instanceof Error
          ? error.message
          : "Unknown error"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-2xl p-8 m-50">
      <h1 className="text-2xl font-bold">
        Supabase Connection Test
      </h1>

      <p className="mt-3 text-gray-600">
        Run a real query against your website_sections table.
      </p>

      <button
        onClick={testConnection}
        disabled={loading}
        className="mt-6 rounded-lg bg-[#4F0908] px-5 py-3
          font-semibold text-white disabled:opacity-50"
      >
        {loading ? "Testing..." : "Test Connection"}
      </button>

      <section
        aria-live="polite"
        className="mt-6 rounded-lg border p-4"
      >
        <h2 className="font-semibold">{status}</h2>
        {details && (
          <pre className="mt-3 whitespace-pre-wrap break-words text-sm">
            {details}
          </pre>
        )}
      </section>
    </main>
  );
}
