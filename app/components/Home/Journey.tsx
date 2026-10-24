"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import AnimatedLine from "../Common/AnimatedLine";
import { useTranslation } from "../../Language/translator";

interface ProcessStep {
  id: string;
  number: string;
  textKey: string;
}

const steps: ProcessStep[] = [
  { id: "step-1", number: "01", textKey: "step1" },
  { id: "step-2", number: "02", textKey: "step2" },
  { id: "step-3", number: "03", textKey: "step3" },
  { id: "step-4", number: "04", textKey: "step4" },
];

export default function ProcessTimeline() {
  const { t, locale: language } = useTranslation();

  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused] = useState(false);

  // Arabic = RTL
  const isArabic = language === "ar";

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setActiveStep((current) => {
        const next = current + direction;

        if (next >= steps.length) {
          setDirection(-1);
          return current - 1;
        }

        if (next < 0) {
          setDirection(1);
          return current + 1;
        }

        return next;
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [activeStep, direction, isPaused]);

  const progress = (activeStep / (steps.length - 1)) * 100;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-r
        from-[#221E20]
        via-[#34161C]
        to-[#421821]
        py-20
        text-white
        sm:py-28
        lg:py-32
      "
    >
      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Assayel accent glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#CD2B55]/[0.08]
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1240px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Eyebrow */}
        <div className="mb-4">
          <AnimatedLine
            text={t("process.eyebrow")}
            lines={1}
          />
        </div>

        {/* Header */}
        <div className="mb-16 max-w-xl sm:mb-20">
          <h2
            className="
              font-jakarta
              text-3xl
              font-bold
              leading-[1.15]
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-[44px]
            "
          >
            {t("process.titleLead")}
            <br />
            {t("process.titleTail")}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-14">
          {/* Desktop base line */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-0
              right-0
              top-5
              z-0
              hidden
              h-px
              bg-[#D1C6B9]/25
              lg:block
            "
          />

          {/* Desktop animated progress */}
          <motion.div
            aria-hidden="true"
            className={`
              absolute
              top-5
              z-0
              hidden
              h-px
              bg-[#CD2B55]
              lg:block
              ${isArabic ? "right-0" : "left-0"}
            `}
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.65,
              ease: [0.65, 0, 0.35, 1],
            }}
          />

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              gap-8
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-6
            "
          >
            {steps.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <motion.div
                  key={step.id}
                  animate={{
                    opacity: isActive ? 1 : 0.45,
                    y: isActive ? 0 : 2,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    items-start
                  "
                >
                  {/* Mobile vertical connector */}
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-[-32px]
                        left-5
                        top-10
                        w-px
                        bg-[#D1C6B9]/25
                        lg:hidden
                      "
                    />
                  )}

                  {/* Mobile animated connector */}
                  {index < steps.length - 1 && (
                    <motion.div
                      aria-hidden="true"
                      className="
                        absolute
                        left-5
                        top-10
                        z-0
                        w-px
                        origin-top
                        bg-[#CD2B55]
                        lg:hidden
                      "
                      animate={{
                        height:
                          activeStep > index
                            ? "calc(100% + 32px)"
                            : "0%",
                      }}
                      transition={{
                        duration: 0.65,
                        ease: [0.65, 0, 0.35, 1],
                      }}
                    />
                  )}

                  {/* Step marker */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.08 : 1,
                      borderColor: isActive
                        ? "rgba(205,43,85,0.95)"
                        : "rgba(205,43,85,0.4)",
                      backgroundColor: isActive
                        ? "#421821"
                        : "rgba(66,24,33,0.65)",
                      boxShadow: isActive
                        ? "0 0 22px rgba(205,43,85,0.22)"
                        : "0 0 12px rgba(205,43,85,0.08)",
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                    className="
                      relative
                      z-10
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      font-jakarta
                      text-xs
                      font-semibold
                    "
                  >
                    <motion.span
                      animate={{
                        color: isActive
                          ? "#FFFFFF"
                          : "rgba(209,198,185,0.75)",
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    >
                      {step.number}
                    </motion.span>

                    {/* Active pulse */}
                    {isActive && (
                      <motion.span
                        aria-hidden="true"
                        className="
                          absolute
                          inset-[-5px]
                          rounded-full
                          border
                          border-[#CD2B55]/40
                        "
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: [0, 0.7, 0],
                          scale: [0.8, 1.15, 1.25],
                        }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Text */}
                  <motion.p
                    animate={{
                      color: isActive
                        ? "#FFFFFF"
                        : "rgba(209,198,185,0.6)",
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="
                      mt-5
                      max-w-[210px]
                      font-manrope
                      text-xs
                      leading-relaxed
                      sm:text-[13px]
                    "
                  >
                    {t(`process.${step.textKey}`)}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom status */}
        <div
          className="
            mb-10
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-5
          "
        >
          <div className="flex items-center gap-3">
            <motion.span
              animate={{
                opacity: isPaused ? 0.3 : [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.4,
                repeat: isPaused ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#CD2B55]"
            />

            <span
              className="
                font-manrope
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#D1C6B9]
              "
            >
              {isPaused
                ? t("process.paused")
                : t("process.inMotion")}
            </span>
          </div>

          <span
            className="
              font-jakarta
              text-[10px]
              font-bold
              tracking-[0.15em]
              text-[#D1C6B9]
            "
          >
            {steps[activeStep].number} / 04
          </span>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/process"
            className="
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-[#D1C6B9]
              px-6
              py-3
              font-jakarta
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-[#34161C]
              transition-all
              duration-300
              hover:bg-white
              hover:shadow-[0_8px_30px_rgba(205,43,85,0.12)]
            "
          >
            {t("process.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
