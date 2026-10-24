
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedLine from "../Common/AnimatedLine";
import PageBackground from "../Common/PageBackground";
import { useTranslation } from "../../Language/translator";
import { createClient } from "../../../lib/supabase/client";
type Locale = "en" | "ar";

interface BannerContent {
  eyebrow: string;
  imageAlt: string;
  whatsapp: string;
  titleLead: string;
  titleTail: string;
  description: string;
  whatsappUrl: string;
}

interface Home_sections {
  id: number;
  slug: string;
  content: {
    en: BannerContent;
    ar: BannerContent;
  };
  published: boolean;
}

export default function Banner() {
  const { locale, t } = useTranslation();

  const [section, setSection] = useState<Home_sections | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentLocale: Locale = locale === "ar" ? "ar" : "en";
  const isArabic = currentLocale === "ar";

  useEffect(() => {
    let isMounted = true;

    async function fetchBannerContent() {
      try {
        setLoading(true);
        setError(null);

        const supabase = createClient();

      const { data, error: queryError } = await supabase
  .from("Home_sections")
  .select("id, slug, content, published")
  .eq("slug", "BannerContent")
  .eq("published", true)
  .maybeSingle();

        if (queryError) {
          throw queryError;
        }

        if (!data) {
          throw new Error(
            "The published Banner section was not found."
          );
        }

        const bannerData = data as unknown as Home_sections;

        if (
          !bannerData.content?.en ||
          !bannerData.content?.ar
        ) {
          throw new Error(
            "English or Arabic banner content is missing."
          );
        }

        if (isMounted) {
          setSection(bannerData);
        }
      } catch (err) {
        console.error("Failed to load Banner content:", err);

        if (isMounted) {
          setError(
            "Unable to load this section. Please try again later."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchBannerContent();

    return () => {
      isMounted = false;
    };
  }, []);

  const content = section?.content?.[currentLocale];

  // WhatsApp number: international format without +, spaces, or dashes.

  // Loading state
  if (loading) {
    return (
      <section
        className="relative min-h-[320px] bg-[#F8F6F3] px-5 py-16 sm:py-20"
        aria-busy="true"
        aria-label="Loading banner"
      >
        <PageBackground />

        <div className="relative mx-auto max-w-[1240px]">
          <div className="min-h-[250px] animate-pulse rounded-[28px] bg-[#D1C6B9]/40 sm:min-h-[280px]" />
        </div>
      </section>
    );
  }

  // Error or missing content state
  if (error || !content) {
    return (
      <section
        id="banner"
        className="bg-[#F8F6F3] px-5 py-8"
      >
        <div
          className="mx-auto max-w-[1240px] text-sm text-[#4B4A4B]"
          role="status"
        >
          {error ?? "Banner content is unavailable."}
        </div>
      </section>
    );
  }

  return (
    <section
      id="banner"
      dir={isArabic ? "rtl" : "ltr"}
      lang={currentLocale}
      aria-labelledby="banner-title"
      className="relative isolate overflow-hidden bg-[#F8F6F3] py-12 sm:py-16 lg:py-20"
    >
      <PageBackground />

      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Banner card */}
        <div
          className="
            relative flex flex-col justify-between overflow-hidden
            rounded-[28px] bg-[#34161C] p-8 shadow-xl
            sm:p-12 lg:flex-row lg:items-center lg:p-16
          "
        >
          {/* Background image */}
          <Image
            src="/imgi_9_process-port.png"
            alt={content.imageAlt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1240px"
            className="object-cover object-center"
          />

          {/* Dark overlay */}
          <div
            aria-hidden="true"
            className={`
              absolute inset-0
              bg-gradient-to-r
              from-[#221E20]/90 to-[#421821]/35
              ${isArabic ? "scale-x-[-1]" : ""}
            `}
          />

          {/* Bottom contrast */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#221E20]/65 via-[#34161C]/15 to-transparent
            "
          />

          {/* Text content */}
          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-4">
              <AnimatedLine
                text={content.eyebrow}
                lines={1}
                lineColor="bg-[#CD2B55]"
                textColor="text-[#D1C6B9]"
              />
            </div>

            {/* Headline */}
            <h2
              id="banner-title"
              className="
                text-3xl font-bold leading-[1.2] tracking-tight
                text-white sm:text-4xl lg:text-[48px]
              "
            >
              <span className="block">{content.titleLead}</span>

              <span className="mt-1 block">
                {content.titleTail}
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-4 max-w-lg font-manrope text-xs leading-relaxed
                text-[#D1C6B9]/90 sm:text-sm sm:leading-7
              "
            >
              {content.description}
            </p>
          </div>

          {/* Action buttons */}
          <div
            className="
              relative z-10 mt-8 flex min-w-[200px] flex-col gap-3.5
              sm:flex-row sm:items-center
              lg:mt-0 lg:items-stretch
            "
          >
            {/* Primary CTA */}
            <Link
              href="/quote"
              className="
                inline-flex items-center justify-center rounded-lg
                bg-white px-6 py-3.5 text-center
                text-xs font-bold text-[#34161C]
                shadow-sm transition-all duration-300
                hover:bg-[#F8F6F3] hover:shadow-md
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-white
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#34161C]
              "
            >
              {t("nav.quote")}
            </Link>

            {/* WhatsApp CTA */}
            {content.whatsappUrl && (
              <a
                href={content.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center rounded-lg
                  border border-white/30 bg-white/5 px-6 py-3.5
                  text-center text-xs font-bold text-white
                  backdrop-blur-sm transition-all duration-300
                  hover:border-white hover:bg-white/10
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-white
                "
              >
                {content.whatsapp}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
