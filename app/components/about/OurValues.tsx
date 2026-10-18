
"use client";

import { ShieldCheck, BriefcaseBusiness, LockKeyhole, Workflow } from "lucide-react";
import AnimatedLine from "../Common/AnimatedLine";
import { useTranslation } from "../../Language/translator";

const values = [
  {
    id: "credibility",
    number: "01",
    Icon: ShieldCheck,
  },
  {
    id: "professionalism",
    number: "02",
    Icon: BriefcaseBusiness,
  },
  {
    id: "security",
    number: "03",
    Icon: LockKeyhole,
  },
  {
    id: "flexibility",
    number: "04",
    Icon: Workflow,
  },
] as const;

export default function OurValues() {
  const { t, locale: language } = useTranslation();
  const isRtl = language === "ar";

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-[#F8F6F3] py-16 sm:py-20 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-32 -z-10 h-[350px] w-[350px] rounded-full bg-[#662433]/[0.055] blur-[110px] ${
          isRtl ? "-left-32" : "-right-32"
        }`}
      />

      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-14 lg:mb-16">
          <div className="mb-5">
            <AnimatedLine
              text={t("ourValues.eyebrow")}
              lines={1}
              lineColor="bg-[#CD2B55]"
              textColor="text-[#421821]"
            />
          </div>

          <h2 className="font-jakarta text-3xl font-bold leading-[1.15] tracking-[-0.035em] text-[#221E20] sm:text-4xl lg:text-[46px]">
            {t("ourValues.heading")}
          </h2>

          <p className="mt-4 max-w-2xl font-manrope text-sm leading-7 text-[#4B4A4B] sm:text-base sm:leading-8">
            {t("ourValues.intro")}
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {values.map(({ id, number, Icon }) => (
            <article
              key={id}
              className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[22px_3px] border border-[#421821]/10 bg-white p-6 shadow-[0_8px_30px_rgba(34,30,32,0.025)] transition-all duration-500 hover:-translate-y-1 hover:border-[#662433]/30 hover:shadow-[0_20px_50px_rgba(66,24,33,0.09)] sm:min-h-[300px] sm:p-7 lg:min-h-[330px] lg:p-7 xl:p-8"
            >
              {/* Number and icon */}
              <div className="relative flex items-start justify-between">
                <span className="font-jakarta text-xs font-bold tracking-[0.18em] text-[#662433]">
                  {number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-[13px_2px] border border-[#421821]/10 bg-[#F8F6F3] text-[#421821] transition-all duration-300 group-hover:border-[#421821] group-hover:bg-[#421821] group-hover:text-white sm:h-12 sm:w-12">
                  <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                </div>
              </div>

              {/* Card content */}
              <div className="mt-auto pt-10">
                <div
                  aria-hidden="true"
                  className="mb-4 h-[3px] w-9 rounded-full bg-[#CD2B55] transition-all duration-300 group-hover:w-16"
                />

                <h3 className="font-jakarta text-xl font-bold tracking-tight text-[#221E20] sm:text-[22px]">
                  {t(`ourValues.items.${id}.title`)}
                </h3>

                <p className="mt-3 font-manrope text-[13px] leading-7 text-[#4B4A4B] sm:text-sm sm:leading-[1.9]">
                  {t(`ourValues.items.${id}.description`)}
                </p>
              </div>

              {/* Bottom brand accent */}
              <div
                aria-hidden="true"
                className={`absolute bottom-0 h-[3px] w-0 bg-[#421821] transition-all duration-500 group-hover:w-full ${
                  isRtl ? "right-0" : "left-0"
                }`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
