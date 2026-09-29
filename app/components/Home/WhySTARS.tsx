"use client";

import React from "react";
import Image from "next/image";
import AnimatedLine from "../Common/AnimatedLine";
import { useTranslation } from "../../Language/translator";

interface FeatureItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
}

const features: FeatureItem[] = [
  {
    id: "01",
    titleKey: "sourceTitle",
    descriptionKey: "sourceDescription",
  },
  {
    id: "02",
    titleKey: "teamTitle",
    descriptionKey: "teamDescription",
  },
  {
    id: "03",
    titleKey: "solutionsTitle",
    descriptionKey: "solutionsDescription",
  },
  {
    id: "04",
    titleKey: "coordinationTitle",
    descriptionKey: "coordinationDescription",
  },
];

export default function WhySTARS() {
  const { t } = useTranslation();

  return (
    <section
      id="why-stars"
      aria-labelledby="why-stars-title"
      className="relative isolate overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-32"
    >
      {/* -------------------------------------------------
          Background
      -------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Image
          src="/H-banner.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.055] grayscale"
        />

        {/* Main fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/95 to-slate-50" />

        {/* Subtle blue atmospheric glow */}
        <div className="absolute -right-40 top-1/4 h-[420px] w-[420px] rounded-full bg-[#005293]/[0.035] blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-[#4F0908]/[0.025] blur-3xl" />
      </div>

      {/* -------------------------------------------------
          Content
      -------------------------------------------------- */}
      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">

          {/* -------------------------------------------------
              Left Column
          -------------------------------------------------- */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="max-w-lg">

              {/* Eyebrow */}
              <div className="mb-5">
                <AnimatedLine
                  text={t("why.eyebrow")}
                  lines={1}
                  lineColor="bg-[#005293]"
                  textColor="text-[#005293]"
                />
              </div>

              {/* Heading */}
              <h2
                id="why-stars-title"
                className="
                  font-jakarta
                  text-4xl
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-[#0a192f]
                  sm:text-5xl
                  lg:text-[52px]
                "
              >
                {t("why.headingLead")}
                <span className="text-[#005293]"> {t("why.headingAccent")}</span>
              </h2>

              {/* Accent line */}
              <div
                aria-hidden="true"
                className="mt-7 h-[2px] w-14 bg-[#005293]"
              />

              {/* Description */}
              <p
                className="
                  mt-7
                  max-w-md
                  font-manrope
                  text-sm
                  leading-7
                  text-slate-500
                  sm:text-[15px]
                "
              >
                {t("why.description")}
              </p>

              {/* Small supporting statement */}
              <div className="mt-8 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-slate-300"
                />

                <span className="font-jakarta text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {t("why.principles")}
                </span>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------
              Right Column
          -------------------------------------------------- */}
          <div className="lg:col-span-7">
            <div
              className="
                overflow-hidden
                border-y
                border-slate-200
              "
            >
              {features.map((feature, index) => (
                <article
                  key={feature.id}
                  className="
                    group
                    relative
                    grid
                    grid-cols-[48px_1fr]
                    gap-4
                    py-7
                    transition-all
                    duration-300
                    sm:grid-cols-[64px_1fr]
                    sm:gap-6
                    sm:py-8
                  "
                >
                  {/* Hover background */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -z-10
                      translate-x-[-101%]
                      bg-white
                      opacity-0
                      transition-all
                      duration-500
                      ease-out
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />

                  {/* Number */}
                  <div className="relative pt-1">
                    <span
                      className="
                        font-jakarta
                        text-xs
                        font-bold
                        tracking-wider
                        text-slate-300
                        transition-colors
                        duration-300
                        group-hover:text-[#005293]
                      "
                    >
                      {feature.id}
                    </span>

                    {/* Vertical accent */}
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        left-0
                        top-7
                        h-0
                        w-[2px]
                        bg-[#005293]
                        transition-all
                        duration-300
                        group-hover:h-8
                      "
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="
                        font-jakarta
                        text-lg
                        font-bold
                        tracking-[-0.015em]
                        text-[#0a192f]
                        transition-colors
                        duration-300
                        group-hover:text-[#005293]
                        sm:text-xl
                      "
                    >
                      {t(`why.${feature.titleKey}`)}
                    </h3>

                    <p
                      className="
                        mt-2.5
                        max-w-xl
                        font-manrope
                        text-xs
                        leading-6
                        text-slate-500
                        sm:text-sm
                        sm:leading-7
                      "
                    >
                      {t(`why.${feature.descriptionKey}`)}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      right-2
                      top-1/2
                      -translate-y-1/2
                      translate-x-2
                      font-jakarta
                      text-lg
                      text-[#005293]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    →
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
