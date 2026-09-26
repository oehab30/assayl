"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import AnimatedLine from "../Common/AnimatedLine";

interface ProcessStep {
  id: string;
  number: string;
  text: string;
}

const steps: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    text: "Share your product or request details",
  },
  {
    id: "step-2",
    number: "02",
    text: "Review the request and define requirements",
  },
  {
    id: "step-3",
    number: "03",
    text: "Source, purchase, or arrange supply",
  },
  {
    id: "step-4",
    number: "04",
    text: "Consolidate and inspect",
  },
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * Faster automatic process:
   *
   * 01 → 02 → 03 → 04
   * 04 → 03 → 02 → 01
   *
   * 1500ms = 1.5 seconds per step
   */
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

  const progress =
    (activeStep / (steps.length - 1)) * 100;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-r
        from-[#030e1e]
        via-[#081b33]
        to-[#0a2342]
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

      {/* Blue atmospheric glow */}
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
          bg-sky-400/[0.05]
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
            text="A CLEAR JOURNEY"
            lines={1}
            lineColor="bg-sky-400"
            textColor="text-sky-300"
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
            From request details
            <br />
            to arrival procedures
          </h2>
        </div>

        {/* Timeline */}
        <div
          className="
            relative
            mb-14
          "
        >
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
              bg-slate-700/60
              lg:block
            "
          />

          {/* Desktop animated progress */}
          <motion.div
            aria-hidden="true"
            className="
              absolute
              left-0
              top-5
              z-0
              hidden
              h-px
              bg-sky-400
              lg:block
            "
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
                    ease: "easeOut"
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
                        bg-slate-700/60
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
                        bg-sky-400
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
                        ? "rgba(56,189,248,0.9)"
                        : "rgba(56,189,248,0.4)",
                      backgroundColor: isActive
                        ? "rgba(10,39,76,1)"
                        : "rgba(10,39,76,0.65)",
                      boxShadow: isActive
                        ? "0 0 22px rgba(56,189,248,0.22)"
                        : "0 0 12px rgba(56,189,248,0.08)",
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
                          ? "#7dd3fc"
                          : "rgba(186,230,253,0.7)",
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
                          border-sky-400/30
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
                        ? "rgba(226,232,240,1)"
                        : "rgba(203,213,225,0.55)",
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
                    {step.text}
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
                opacity: isPaused
                  ? 0.3
                  : [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.4,
                repeat: isPaused ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-sky-400
              "
            />

            <span
              className="
                font-manrope
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-400
              "
            >
              {isPaused
                ? "Process paused"
                : "Process in motion"}
            </span>
          </div>

          <span
            className="
              font-jakarta
              text-[10px]
              font-bold
              tracking-[0.15em]
              text-sky-300
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
              bg-white
              px-6
              py-3
              font-jakarta
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-[#06182e]
              transition-all
              duration-300
              hover:bg-slate-100
              hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]
            "
          >
            See the complete process
          </Link>
        </div>
      </div>
    </section>
  );
}