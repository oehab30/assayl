
"use client";

import AnimatedLine from "../Common/AnimatedLine";
import { useTranslation } from "../../Language/translator";
import PageBackground from "../Common/PageBackground";

interface WhyAssaylItem {
  title: string;
  description: string;
}

interface WhyAssaylContent {
  eyebrow: string;
  headingLead: string;
  headingAccent: string;
  description: string;
  principles: string;
  items: {
    source: WhyAssaylItem;
    team: WhyAssaylItem;
    solutions: WhyAssaylItem;
    coordination: WhyAssaylItem;
  };
}

interface WhyAssaylProps {
  content: {
    en: WhyAssaylContent;
    ar: WhyAssaylContent;
  };
}

interface FeatureItem {
  id: string;
  contentKey: keyof WhyAssaylContent["items"];
}

const features: FeatureItem[] = [
  { id: "01", contentKey: "source" },
  { id: "02", contentKey: "team" },
  { id: "03", contentKey: "solutions" },
  { id: "04", contentKey: "coordination" },
];

export default function WhyAssayel({ content }: WhyAssaylProps) {
  const { locale } = useTranslation();
  const contentForLocale = content[locale];

  return (
    <section
      id="why-Assayel"
      aria-labelledby="why-Assayel-title"
      className="relative isolate overflow-hidden bg-[#F8F6F3] py-20 sm:py-24 lg:py-32"
    >
      {/* Background */}
      <PageBackground />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="max-w-lg">
              {/* Eyebrow */}
              <div className="mb-5">
                <AnimatedLine
                  text={contentForLocale.eyebrow}
                  lines={1}
                  textColor="text-[#8c8275]"
                />
              </div>

              {/* Heading */}
              <h2
                id="why-Assayel-title"
                className="
                  text-4xl
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-[#221E20]
                  sm:text-5xl
                  lg:text-[52px]
                "
              >
                {contentForLocale.headingLead}
                <span className="text-brand-primary">
                  {" "}
                  {contentForLocale.headingAccent}
                </span>
              </h2>

              {/* Accent Line */}
              <div
                aria-hidden="true"
                className="mt-7 h-[2px] w-14 bg-brand-accent"
              />

              {/* Description */}
              <p
                className="
                  mt-7
                  max-w-md
                  font-manrope
                  text-sm
                  leading-7
                  text-[#4B4A4B]
                  sm:text-[15px]
                "
              >
                {contentForLocale.description}
              </p>

              {/* Supporting Statement */}
              <div className="mt-8 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[#D1C6B9]"
                />

                <span className="font-jakarta text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4B4A4B]/75">
                  {contentForLocale.principles}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden border-y border-[#D1C6B9]">
              {features.map((feature) => {
                const item = contentForLocale.items[feature.contentKey];

                return (
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
                    {/* Hover Background */}
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
                          text-xs
                          font-bold
                          tracking-wider
                          text-[#D1C6B9]
                          transition-colors
                          duration-300
                          group-hover:text-brand-accent
                        "
                      >
                        {feature.id}
                      </span>

                      {/* Vertical Accent */}
                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          left-0
                          top-7
                          h-0
                          w-[2px]
                          bg-brand-accent
                          transition-all
                          duration-300
                          group-hover:h-8
                        "
                      />
                    </div>

                    {/* Feature Content */}
                    <div>
                      <h3
                        className="
                          text-lg
                          font-bold
                          tracking-[-0.015em]
                          text-[#221E20]
                          transition-colors
                          duration-300
                          group-hover:text-brand-primary
                          sm:text-xl
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2.5
                          max-w-xl
                          text-xs
                          leading-6
                          text-[#4B4A4B]
                          sm:text-sm
                          sm:leading-7
                        "
                      >
                        {item.description}
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
                        text-lg
                        text-brand-accent
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
