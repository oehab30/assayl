
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedLine from "../Common/AnimatedLine";
import { ArrowDownLeft, ArrowDownRight } from "lucide-react";
import { useTranslation } from "../../Language/translator";
import type { OurStoryContent } from "@/app/admin/edit/OurStoryEditor";

const defaultStoryContent: OurStoryContent = {
  eyebrow: { en: "Our Story", ar: "قصتنا" },
  title: { en: "Building Seamless Trade Bridges Since 2018", ar: "بناء جسور تجارية سلسة منذ عام 2018" },
  paragraph1: {
    en: "Assayl was founded to simplify complex importing procedures between China, Hong Kong, Saudi Arabia, and Egypt.",
    ar: "تأسست أصيل لتبسيط إجراءات الاستيراد المعقدة بين الصين وهونغ كونغ والسعودية ومصر.",
  },
  paragraph2: {
    en: "Our dedicated logistics team provides complete visibility, sourcing verification, and customs support.",
    ar: "يقدم فريقنا اللوجستي المخصص رؤية كاملة والتحقق من التوريد والدعم الجمركي.",
  },
  sinceYear: "2018",
  experienceText: {
    en: "Over 8 years of operational excellence in China-Middle East logistics.",
    ar: "أكثر من 8 سنوات من التميز التشغيلي في الخدمات اللوجستية بين الصين والشرق الأوسط.",
  },
  imageUrl: "/exper.jpg",
};

export default function OurStory() {
  const { t, locale: language } = useTranslation();
  const lang = (language === "ar" ? "ar" : "en") as "en" | "ar";
  const [cms, setCms] = useState<OurStoryContent>(defaultStoryContent);

  useEffect(() => {

    const onUpdate = () => {
    };

    window.addEventListener("cms_update_our-story", onUpdate);
    return () => window.removeEventListener("cms_update_our-story", onUpdate);
  }, []);

  const isRtl = language === "ar";
  const DirectionArrow = isRtl ? ArrowDownLeft : ArrowDownRight;

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      {/* Soft brand background accents */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 -z-10 h-[380px] w-[380px] rounded-full bg-[#662433]/[0.055] blur-[120px] ${
          isRtl ? "-right-48" : "-left-48"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 -z-10 h-[320px] w-[320px] rounded-full bg-[#D1C6B9]/25 blur-[100px] ${
          isRtl ? "-left-40" : "-right-40"
        }`}
      />

      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Editorial introduction */}
        <div className="mb-10 grid grid-cols-1 items-start gap-7 sm:mb-14 lg:grid-cols-12 lg:gap-14">
          {/* Heading */}
          <div className="lg:col-span-6">
            <div className="mb-5">
              <AnimatedLine
                text={cms.eyebrow[lang] || t("ourStory.eyebrow")}
                lines={1}
                lineColor="bg-[#CD2B55]"
                textColor="text-[#421821]"
              />
            </div>

            <h2 className="max-w-2xl font-jakarta text-3xl font-bold leading-[1.15] tracking-[-0.035em] text-[#221E20] sm:text-4xl lg:text-[46px]">
              {cms.title[lang] || t("ourStory.title")}
            </h2>

            {/* Short decorative accent */}
            <div
              aria-hidden="true"
              className="mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent"
            />
          </div>

          {/* Description */}
          <div className="space-y-4 font-manrope text-sm leading-7 text-[#4B4A4B] sm:text-[15px] sm:leading-8 lg:col-span-6 lg:pt-10">
            <p>{cms.paragraph1[lang] || t("ourStory.paragraph1")}</p>
            <p>{cms.paragraph2[lang] || t("ourStory.paragraph2")}</p>
          </div>
        </div>

        {/* Image and experience highlight */}
        <div className="relative">
          <div className="group relative h-[360px] overflow-hidden rounded-[22px_2px] border border-[#421821]/10 bg-[#221E20] shadow-[0_24px_70px_rgba(34,30,32,0.12)] sm:h-[430px] sm:rounded-[30px_2px] lg:h-[500px]">
            <Image
              src="/exper.jpg"
              alt={t("ourStory.imageAlt")}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1240px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />

            {/* Image overlays */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#221E20]/95 via-[#34161C]/35 to-[#221E20]/10"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#421821]/25 via-transparent to-[#221E20]/35"
            />

            {/* Top image label */}
            <div
              className={`absolute top-5 flex items-center gap-3 rounded-full border border-white/20 bg-[#221E20]/35 px-4 py-2 backdrop-blur-md sm:top-7 sm:px-5 ${
                isRtl ? "right-5 sm:right-7" : "left-5 sm:left-7"
              }`}
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#CD2B55] shadow-[0_0_12px_rgba(205,43,85,0.7)]"
              />
              <span className="font-manrope text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:text-xs">
                {t("ourStory.imageLabel")}
              </span>
            </div>

            {/* Experience highlight */}
            <div
              className={`absolute bottom-5 z-10 w-[calc(100%-40px)] max-w-[390px] rounded-[18px_2px] border border-white/15 bg-[#221E20]/75 p-5 text-white shadow-2xl backdrop-blur-xl sm:bottom-8 sm:w-[390px] sm:p-7 lg:bottom-10 lg:p-8 ${
                isRtl ? "right-5 sm:right-8 lg:right-10" : "left-5 sm:left-8 lg:left-10"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 font-manrope text-xs font-medium text-[#D1C6B9] sm:text-sm">
                    {t("ourStory.since")}
                  </p>

                  <p
                    dir="ltr"
                    className="font-jakarta text-5xl font-bold leading-none tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl"
                  >
                    {cms.sinceYear || "2018"}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#CD2B55]/50 bg-[#421821]/70 text-[#D1C6B9] sm:h-12 sm:w-12"
                >
                  <DirectionArrow size={21} />
                </div>
              </div>

              <div className="my-5 h-px w-full bg-gradient-to-r from-[#CD2B55]/80 via-[#D1C6B9]/25 to-transparent" />

              <p className="max-w-sm font-manrope text-xs leading-6 text-white/80 sm:text-sm sm:leading-7">
                {t("ourStory.experience")}
              </p>
            </div>

            {/* Corner accent */}
            <div
              aria-hidden="true"
              className={`absolute bottom-0 h-1 w-24 bg-[#CD2B55] ${
                isRtl ? "right-0" : "left-0"
              }`}
            />
          </div>

          {/* Small caption below image */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="font-manrope text-[10px] font-medium uppercase tracking-[0.14em] text-[#4B4A4B]/70 sm:text-xs">
              {t("ourStory.caption")}
            </p>

            <span
              aria-hidden="true"
              className="h-px w-12 shrink-0 bg-[#421821]/25 sm:w-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
