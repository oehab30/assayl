"use client";

import { useEffect, useState } from "react";
import AnimatedLine from "../Common/AnimatedLine";
import { useTranslation } from "../../Language/translator";
import PageBackground from "../Common/PageBackground";
import { createClient } from "../../../lib/supabase/client";

type Locale = "en" | "ar";

interface FeatureContent {
  title: string;
  description: string;
}

interface why_assayl {
  eyebrow: string;
  headingLead: string;
  headingAccent: string;
  description: string;
  principles: string;
  items: {
    team: FeatureContent;
    source: FeatureContent;
    solutions: FeatureContent;
    coordination: FeatureContent;
  };
}

interface Home_sections {
  id: number;
  slug: string;
  content: {
    en: why_assayl;
    ar: why_assayl;
  };
  published: boolean;
}

const features = [
  { id: "01", key: "source" as const },
  { id: "02", key: "team" as const },
  { id: "03", key: "solutions" as const },
  { id: "04", key: "coordination" as const },
];

export default function WhyAssayel() {
  const { locale } = useTranslation();

  const [section, setSection] = useState<Home_sections | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchWhyAssaylContent() {
      try {
        setLoading(true);
        setError(null);

        const supabase = createClient();

        const { data, error: queryError } = await supabase
          .from("Home_sections")
          .select("id, slug, content, published")
          .eq("slug", "why_assayl")
          .eq("published", true)
          .maybeSingle();

        if (queryError) {
          throw queryError;
        }

        if (!data) {
          throw new Error(
            "The published Why Assayl section was not found."
          );
        }

        if (isMounted) {
          setSection(data as unknown as Home_sections);
        }
      } catch (err) {
        console.error("Failed to load Why Assayl content:", err);

        if (isMounted) {
          setError(
            "Unable to load this section. Please try again later check the connection ."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchWhyAssaylContent();

    return () => {
      isMounted = false;
    };
  }, []);

  const currentLocale: Locale = locale === "ar" ? "ar" : "en";

  const content = section?.content?.[currentLocale];

  // Loading state
  if (loading) {
    return (
      <section
        className="relative min-h-[400px] bg-[#F8F6F3] px-5 py-20"
        aria-busy="true"
        aria-label="Loading Why Assayl section"
      >
        <PageBackground />
        <div className="relative mx-auto max-w-[1240px]">
          <div className="h-4 w-40 animate-pulse rounded bg-[#D1C6B9]/50" />
          <div className="mt-6 h-12 max-w-md animate-pulse rounded bg-[#D1C6B9]/50" />
          <div className="mt-8 h-4 max-w-lg animate-pulse rounded bg-[#D1C6B9]/50" />
          <div className="mt-12 space-y-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-20 animate-pulse rounded bg-white/70"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error or missing content state
  if (error || !content) {
    return (
      <section
        id="why-Assayel"
        className="bg-[#F8F6F3] px-5 py-20"
      >
        <div
          className="mx-auto max-w-[1240px] text-sm text-[#4B4A4B]"
          role="status"
        >
          {error ?? "Why Assayl content is unavailable."}
        </div>
      </section>
    );
  }

  return (
    <section
      id="why-Assayel"
      aria-labelledby="why-Assayel-title"
      dir={currentLocale === "ar" ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-[#F8F6F3] py-20 sm:py-24 lg:py-32"
    >
      <PageBackground />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="max-w-lg">
              <div className="mb-5">
                <AnimatedLine
                  text={content.eyebrow}
                  lines={1}
                  textColor="text-[#8c8275]"
                />
              </div>

              <h2
                id="why-Assayel-title"
                className="text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-[#221E20] sm:text-5xl lg:text-[52px]"
              >
                {content.headingLead}
                <span className="text-brand-primary">
                  {" "}
                  {content.headingAccent}
                </span>
              </h2>

              <div
                aria-hidden="true"
                className="mt-7 h-[2px] w-14 bg-brand-accent"
              />

              <p className="mt-7 max-w-md font-manrope text-sm leading-7 text-[#4B4A4B] sm:text-[15px]">
                {content.description}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[#D1C6B9]"
                />

                <span className="font-jakarta text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4B4A4B]/75">
                  {content.principles}
                </span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden border-y border-[#D1C6B9]">
              {features.map((feature) => {
                const item = content.items[feature.key];

                return (
                  <article
                    key={feature.key}
                    className="group relative grid grid-cols-[48px_1fr] gap-4 py-7 transition-all duration-300 sm:grid-cols-[64px_1fr] sm:gap-6 sm:py-8"
                  >
                    {/* Hover background */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -z-10 translate-x-[-101%] bg-white opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                    />

                    {/* Number */}
                    <div className="relative pt-1">
                      <span className="text-xs font-bold tracking-wider text-[#D1C6B9] transition-colors duration-300 group-hover:text-brand-accent">
                        {feature.id}
                      </span>

                      <span
                        aria-hidden="true"
                        className="absolute start-0 top-7 h-0 w-[2px] bg-brand-accent transition-all duration-300 group-hover:h-8"
                      />
                    </div>

                    {/* Database content */}
                    <div>
                      <h3 className="text-lg font-bold tracking-[-0.015em] text-[#221E20] transition-colors duration-300 group-hover:text-brand-primary sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 max-w-xl text-xs leading-6 text-[#4B4A4B] sm:text-sm sm:leading-7">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      aria-hidden="true"
                      className="absolute end-2 top-1/2 -translate-y-1/2 translate-x-2 text-lg text-brand-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      {currentLocale === "ar" ? "←" : "→"}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}