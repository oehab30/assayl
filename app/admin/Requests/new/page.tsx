"use client";

import { FormEvent, useState } from "react";

export default function NewRequestPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
          Operations
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#051428]">
          Customer requests
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Capture a request and assign it to the right team.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Customer</label>
            <input
              required
              placeholder="Customer name"
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Request type</label>
            <input
              required
              placeholder="Import & Export"
              className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/10"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">Details</label>
            <textarea
              required
              rows={5}
              placeholder="Describe the request details"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-[#C9A96E] focus:ring-2 focus:ring-[#C9A96E]/10"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-[14px_2px] bg-[#4F0908] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3C0706]"
          >
            Save request
          </button>

          {submitted && (
            <span className="text-sm font-medium text-emerald-600">Request saved</span>
          )}
        </div>
      </form>
    </div>
  );
}
