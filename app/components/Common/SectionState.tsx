
"use client";

import type { ReactNode } from "react";

interface SectionStateProps {
  loading: boolean;
  error?: string | null;
  children: ReactNode;
  loadingLabel?: string;
  onRetry?: () => void;
}

export default function SectionState({
  loading,
  error,
  children,
  loadingLabel = "Loading section",
  onRetry,
}: SectionStateProps) {
  if (loading) {
    return (
      <section
        className="relative min-h-[320px] bg-[#F8F6F3] px-5 py-16 sm:py-20"
        aria-busy="true"
        aria-label={loadingLabel}
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="min-h-[250px] animate-pulse rounded-[28px] bg-[#D1C6B9]/40 sm:min-h-[280px]" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        className="bg-[#F8F6F3] px-5 py-10 sm:py-12"
        role="alert"
      >
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-[#D1C6B9]/70 bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="text-sm leading-6 text-[#4B4A4B]">
            {error}
          </p>

          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#421821] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#662433] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CD2B55] focus-visible:ring-offset-2"
            >
              Try again
            </button>
          )}
        </div>
      </section>
    );
  }

  return <>{children}</>;
}
