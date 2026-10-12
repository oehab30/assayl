"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import AnimatedLine from "../Common/AnimatedLine";
import { useTranslation } from "../../Language/translator";

interface JourneyStep {
  id: string;
  number: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  tagKey: string;
}

const steps: JourneyStep[] = [
  {
    id: "step-1",
    number: "01",
    tagKey: "origin",
    titleKey: "inspectTitle",
    descriptionKey: "inspectDescription",
    image: "/hero2.jpg",
  },
  {
    id: "step-2",
    number: "02",
    tagKey: "consolidation",
    titleKey: "consolidateTitle",
    descriptionKey: "consolidateDescription",
    image: "/ship1.jpg",
  },
  {
    id: "step-3",
    number: "03",
    tagKey: "movement",
    titleKey: "movementTitle",
    descriptionKey: "movementDescription",
    image: "/Ship2.jpg",
  },
];

export default function CargoJourney() {
  const { t } = useTranslation();

  return (
    <section
      id="cargo-journey"
      className="relative overflow-hidden bg-[#F8F6F3] py-24 sm:py-28 lg:py-36"
    >
      {/* Technical background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Grid */}
        <div
          className="
            absolute inset-0 opacity-[0.45]
            [background-image:linear-gradient(rgba(66,24,33,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(66,24,33,.045)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        {/* Assayel burgundy atmosphere */}
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#421821]/[0.045] blur-[120px]" />

        {/* Assayel accent atmosphere */}
        <div className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-[#CD2B55]/[0.035] blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* ───────────────── HEADER ───────────────── */}
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="mb-6">
              <AnimatedLine
                text={t("cargo.eyebrow")}
                lines={1}
                textColor="text-[#8c8275]"
              />
            </div>

            <h2
              className="
                max-w-4xl
                text-4xl
                font-extrabold
                leading-[0.98]
                tracking-[-0.045em]
                text-[#221E20]
                sm:text-5xl
                lg:text-[64px]
              "
            >
              {t("cargo.titleLead")}
              <br />
              <span className="text-[#421821]">
                {t("cargo.titleTail")}
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-[#4B4A4B]/75 sm:text-[15px]">
              {t("cargo.description")}
            </p>
          </div>
        </div>

        {/* ───────────────── JOURNEY ───────────────── */}
        <div className="relative mt-16 sm:mt-20">
          {/* Desktop route line */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[16.66%]
              right-[16.66%]
              top-[48px]
              hidden
              h-px
              bg-[#D1C6B9]
              lg:block
            "
          />

          {/* Animated route line */}
          <motion.div
            aria-hidden="true"
            className="
              absolute
              left-[16.66%]
              top-[48px]
              hidden
              h-px
              w-[66.66%]
              origin-left
              bg-[#421821]
              lg:block
            "
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1.4,
              ease: [0.65, 0, 0.35, 1],
            }}
          />

          <div className="grid gap-8 md:grid-cols-3 lg:gap-6">
            {steps.map((step, index) => (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                {/* Step marker */}
                <div className="relative z-20 mb-8 flex items-center">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-[#421821]
                      bg-[#D1C6B9]/35
                      text-xs
                      font-bold
                      tracking-[0.12em]
                      text-[#421821]
                      transition-all
                      duration-500
                      group-hover:bg-[#34161C]
                      group-hover:text-white
                    "
                  >
                    {step.number}
                  </div>

                  <div className="ml-4 hidden h-px flex-1 bg-[#D1C6B9] lg:block" />

                  <span
                    className="
                      ml-auto
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#4B4A4B]/60
                    "
                  >
                    {t(`cargo.${step.tagKey}`)}
                  </span>
                </div>

                {/* Image panel */}
                <div
                  className="
                    relative
                    h-[430px]
                    overflow-hidden
                    border
                    border-[#421821]/15
                    bg-[#221E20]
                    sm:h-[470px]
                  "
                >
                  {/* Image */}
                  <Image
                    src={step.image}
                    alt={t(`cargo.${step.titleKey}`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="
                      object-cover
                      object-center
                      transition-transform
                      duration-[1200ms]
                      ease-out
                      group-hover:scale-[1.055]
                    "
                  />

                  {/* Image overlay */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#221E20]/95
                      via-[#421821]/65
                      to-[#421821]/15
                      opacity-70
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Top technical label */}
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span
                      className="
                        border
                        border-white/20
                        bg-[#221E20]/45
                        px-3
                        py-1.5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-white/75
                        backdrop-blur-sm
                      "
                    >
                      {t("cargo.Aseel")} / {step.number}
                    </span>

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        text-white/60
                        transition-all
                        duration-500
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-[#CD2B55]
                      "
                    />
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <div className="mb-3 h-px w-10 bg-[#CD2B55] transition-all duration-500 group-hover:w-16" />

                    <h3
                      className="
                        font-jakarta
                        text-2xl
                        font-bold
                        tracking-[-0.025em]
                        text-white
                        sm:text-[28px]
                      "
                    >
                      {t(`cargo.${step.titleKey}`)}
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-sm
                        font-manrope
                        text-xs
                        leading-6
                        text-white/70
                        sm:text-sm
                      "
                    >
                      {t(`cargo.${step.descriptionKey}`)}
                    </p>
                  </div>

                  {/* Hover border */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      border
                      border-[#CD2B55]/0
                      transition-colors
                      duration-500
                      group-hover:border-[#421821]
                    "
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ───────────────── BOTTOM INFO ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mt-12
            grid
            border-t
            border-[#D1C6B9]
            pt-7
            sm:grid-cols-[1fr_auto]
            sm:items-center
            sm:gap-8
          "
        >
          <div className="flex items-start gap-4">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#CD2B55]" />

            <div>
              <p className="text-sm font-semibold text-[#421821]">
                {t("cargo.bottomTitle")}
              </p>

              <p className="mt-1 max-w-2xl text-xs leading-6 text-[#4B4A4B]">
                {t("cargo.bottomDescription")}
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 sm:mt-0">
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#4B4A4B]">
              {t("hero.china")}
            </span>

            <span className="h-px w-8 bg-[#D1C6B9]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#4B4A4B]">
              {t("hero.Saudi")}
            </span>

            <span className="h-px w-8 bg-[#D1C6B9]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#4B4A4B]">
              {t("hero.egypt")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
