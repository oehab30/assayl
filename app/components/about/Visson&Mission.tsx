
"use client";

import React from "react";
import { Eye, Compass, ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { useTranslation } from "../../Language/translator";

interface VisionMissionItem {
  id: "vision" | "mission";
  number: string;
  title: string;
  description: string;
  variant: "light" | "dark";
  Icon: typeof Eye;
}

export default function VisionMission() {
  const { t, locale: language } = useTranslation();
  const isRtl = language === "ar";

  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;

  const items: VisionMissionItem[] = [
    {
      id: "vision",
      number: "01",
      title: t("visionMission.visionTitle"),
      description: t("visionMission.visionDescription"),
      variant: "light",
      Icon: Eye,
    },
    {
      id: "mission",
      number: "02",
      title: t("visionMission.missionTitle"),
      description: t("visionMission.missionDescription"),
      variant: "dark",
      Icon: Compass,
    },
  ];

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-[#F8F6F3] py-16 sm:py-20 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-32 -z-10 h-[360px] w-[360px] rounded-full bg-[#662433]/[0.07] blur-[110px] ${
          isRtl ? "-left-40" : "-right-40"
        }`}
      />

      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Section introduction */}
        <div className="mb-10 max-w-2xl sm:mb-14">
          <div className="mb-5">
            <span className="inline-flex items-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#421821]">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#CD2B55]"
              />
              {t("visionMission.eyebrow")}
            </span>
          </div>

          <h2 className="font-jakarta text-3xl font-bold leading-tight tracking-[-0.035em] text-[#221E20] sm:text-4xl lg:text-5xl">
            {t("visionMission.heading")}
          </h2>

          <p className="mt-4 max-w-xl font-manrope text-sm leading-7 text-[#4B4A4B] sm:text-base sm:leading-8">
            {t("visionMission.intro")}
          </p>
        </div>

        {/* Vision and mission cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">
          {items.map((item) => {
            const isLight = item.variant === "light";
            const Icon = item.Icon;

            return (
              <article
                key={item.id}
                className={`group relative flex min-h-[330px] flex-col overflow-hidden rounded-[24px_3px] border p-7 transition-all duration-500 hover:-translate-y-1.5 sm:min-h-[360px] sm:p-9 lg:min-h-[390px] lg:p-11 ${
                  isLight
                    ? "border-[#421821]/10 bg-white text-[#221E20] shadow-[0_12px_40px_rgba(34,30,32,0.045)] hover:shadow-[0_24px_60px_rgba(66,24,33,0.10)]"
                    : "border-[#662433] bg-gradient-to-br from-[#421821] via-[#34161C] to-[#221E20] text-white shadow-[0_16px_45px_rgba(52,22,28,0.12)] hover:shadow-[0_24px_60px_rgba(52,22,28,0.22)]"
                }`}
              >
                {/* Decorative circles */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border ${
                    isLight
                      ? "border-[#421821]/[0.07]"
                      : "border-white/[0.08]"
                  }`}
                />

                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border ${
                    isLight
                      ? "border-[#CD2B55]/[0.10]"
                      : "border-[#CD2B55]/20"
                  }`}
                />

                {/* Card header */}
                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className={`font-jakarta text-sm font-bold tracking-[0.16em] ${
                      isLight ? "text-[#662433]" : "text-[#D1C6B9]"
                    }`}
                  >
                    {item.number}
                  </span>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-[15px_2px] border transition-colors duration-300 sm:h-14 sm:w-14 ${
                      isLight
                        ? "border-[#421821]/10 bg-[#F8F6F3] text-[#421821] group-hover:border-[#CD2B55]/30 group-hover:bg-[#421821] group-hover:text-white"
                        : "border-white/15 bg-white/[0.06] text-[#D1C6B9] group-hover:border-[#CD2B55]/60 group-hover:bg-[#CD2B55]/10 group-hover:text-white"
                    }`}
                  >
                    <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                </div>

                {/* Card content */}
                <div className="relative mt-auto pt-12 sm:pt-16">
                  <div
                    aria-hidden="true"
                    className="mb-5 h-[3px] w-12 rounded-full bg-[#CD2B55] transition-all duration-300 group-hover:w-20"
                  />

                  <h3
                    className={`font-jakarta text-2xl font-bold tracking-tight sm:text-3xl lg:text-[34px] ${
                      isLight ? "text-[#221E20]" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-4 max-w-lg font-manrope text-sm leading-7 sm:text-[15px] sm:leading-8 ${
                      isLight ? "text-[#4B4A4B]" : "text-[#D1C6B9]"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Bottom index and arrow */}
                  <div
                    className={`mt-7 flex items-center justify-between border-t pt-5 ${
                      isLight ? "border-[#421821]/10" : "border-white/15"
                    }`}
                  >
                    <span
                      className={`font-manrope text-[10px] font-semibold uppercase tracking-[0.16em] ${
                        isLight ? "text-[#4B4A4B]/65" : "text-[#D1C6B9]/75"
                      }`}
                    >
                      {item.id === "vision"
                        ? t("visionMission.visionLabel")
                        : t("visionMission.missionLabel")}
                    </span>

                    <ArrowIcon
                      size={19}
                      aria-hidden="true"
                      className={`transition-transform duration-300 ${
                        isLight ? "text-[#421821]" : "text-[#D1C6B9]"
                      } ${
                        isRtl
                          ? "group-hover:-translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </div>

                {/* Accent edge */}
                <div
                  aria-hidden="true"
                  className={`absolute bottom-0 h-1 w-20 bg-[#CD2B55] transition-all duration-500 group-hover:w-32 ${
                    isRtl ? "right-0" : "left-0"
                  }`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
