"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import AnimatedLine from "../Common/AnimatedLine";

interface JourneyStep {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

const steps: JourneyStep[] = [
  {
    id: "step-1",
    number: "01",
    tag: "ORIGIN",
    title: "Inspect & verify",
    description:
      "Products are checked against the requested specifications before they move forward.",
    image: "/hero2.jpg",
  },
  {
    id: "step-2",
    number: "02",
    tag: "CONSOLIDATION",
    title: "Consolidate & store",
    description:
      "Cargo is received, organized, and consolidated before shipment preparation.",
    image: "/hero2.jpg",
  },
  {
    id: "step-3",
    number: "03",
    tag: "MOVEMENT",
    title: "Ship & move",
    description:
      "Prepared cargo moves through the selected freight route toward its destination.",
    image: "/hero2.jpg",
  },
];

export default function CargoJourney() {
  return (
    <section
      id="cargo-journey"
      className="relative overflow-hidden bg-[#F4F7F9] py-24 sm:py-28 lg:py-36"
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
            [background-image:linear-gradient(rgba(7,24,39,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(7,24,39,.045)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        {/* Blue atmosphere */}
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#005293]/[0.045] blur-[120px]" />

        {/* Burgundy atmosphere */}
        <div className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-[#4F0908]/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* ───────────────── HEADER ───────────────── */}
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="mb-6">
              <AnimatedLine
                text="CARGO JOURNEY"
                lines={1}
                lineColor="bg-[#005293]"
                textColor="text-[#005293]/70"
              />
            </div>

            <h2
              className="
                max-w-4xl
                font-jakarta
                text-4xl
                font-extrabold
                leading-[0.98]
                tracking-[-0.045em]
                text-[#071827]
                sm:text-5xl
                lg:text-[64px]
              "
            >
              From selection
              <br />
              <span className="text-[#005293]">to movement.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md font-manrope text-sm leading-7 text-[#071827]/55 sm:text-[15px]">
              Every shipment moves through a coordinated sequence. From
              verification at the origin to final freight movement, each stage
              is handled with clarity and control.
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
              bg-[#071827]/10
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
              bg-[#005293]/30
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
                      border-[#005293]
                      bg-[#F4F7F9]
                      font-jakarta
                      text-xs
                      font-bold
                      tracking-[0.12em]
                      text-[#005293]
                      transition-all
                      duration-500
                      group-hover:bg-[#005293]
                      group-hover:text-white
                    "
                  >
                    {step.number}
                  </div>

                  <div className="ml-4 hidden h-px flex-1 bg-[#071827]/10 lg:block" />

                  <span
                    className="
                      ml-auto
                      font-jakarta
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#071827]/30
                    "
                  >
                    {step.tag}
                  </span>
                </div>

                {/* Image panel */}
                <div
                  className="
                    relative
                    h-[430px]
                    overflow-hidden
                    border
                    border-[#071827]/10
                    bg-[#071827]
                    sm:h-[470px]
                  "
                >
                  {/* Image */}
                  <Image
                    src={step.image}
                    alt={step.title}
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
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#071827]
                      via-[#071827]/35
                      to-transparent
                      opacity-90
                    "
                  />

                  {/* Top technical label */}
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span
                      className="
                        border
                        border-white/20
                        bg-[#071827]/35
                        px-3
                        py-1.5
                        font-jakarta
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-white/70
                        backdrop-blur-sm
                      "
                    >
                      STARS / {step.number}
                    </span>

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        text-white/50
                        transition-all
                        duration-500
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-[#5ba7df]
                      "
                    />
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <div className="mb-3 h-px w-10 bg-[#5ba7df] transition-all duration-500 group-hover:w-16" />

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
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-sm
                        font-manrope
                        text-xs
                        leading-6
                        text-white/55
                        sm:text-sm
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Hover border */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      border
                      border-[#5ba7df]/0
                      transition-colors
                      duration-500
                      group-hover:border-[#5ba7df]/50
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
            border-[#071827]/10
            pt-7
            sm:grid-cols-[1fr_auto]
            sm:items-center
            sm:gap-8
          "
        >
          <div className="flex items-start gap-4">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#005293]" />

            <div>
              <p className="font-jakarta text-sm font-semibold text-[#071827]">
                One coordinated journey.
              </p>

              <p className="mt-1 max-w-2xl font-manrope text-xs leading-6 text-[#071827]/45">
                Inspection, consolidation, and freight movement work together
                as one connected process.
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 sm:mt-0">
            <span className="font-jakarta text-[9px] font-bold uppercase tracking-[0.18em] text-[#071827]/30">
              CHINA
            </span>

            <span className="h-px w-8 bg-[#005293]/40" />

            <span className="font-jakarta text-[9px] font-bold uppercase tracking-[0.18em] text-[#071827]/30">
              HONG KONG
            </span>

            <span className="h-px w-8 bg-[#005293]/40" />

            <span className="font-jakarta text-[9px] font-bold uppercase tracking-[0.18em] text-[#071827]/30">
              EGYPT
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}