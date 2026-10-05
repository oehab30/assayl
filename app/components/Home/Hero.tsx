"use client"

import { useTranslation } from "../../Language/translator";
import Link from "next/link"
import { motion } from "motion/react"
import Image from "next/image"
import { ArrowUpRight, ArrowDown } from "lucide-react"
import AnimatedLine from "../Common/AnimatedLine"

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        bg-[#051428]
        text-white
      "
    >
  {/* =========================================================
    BACKGROUND VIDEO
========================================================== */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <video
    src="/Hero_video.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="
      h-full
      w-full
      object-cover
      object-[62%_center]
      scale-[1.03]
    "
  />
</div>

      {/* =========================================================
          IMAGE TREATMENT
      ========================================================== */}

      {/* Main dark gradient */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 z-[1]
          bg-[linear-gradient(90deg,#03101f_0%,#06182a_38%,rgba(5,20,40,0.68)_64%,rgba(5,20,40,0.28)_100%)]
        "
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0 z-[2]
          h-56
          bg-gradient-to-t
          from-[#051428]
          to-transparent
        "
      />



      {/* Blue atmospheric glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-48
          bottom-0
          z-[2]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#005293]/20
          blur-[120px]
        "
      />

      {/* =========================================================
          TECHNICAL GRID
      ========================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-[2]
          opacity-[0.055]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* =========================================================
          TOP TECHNICAL LABEL
      ========================================================== */}


      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div
        className="
          relative z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1440px]
          items-center
          px-6
          pb-24
          pt-32
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        <div className="grid w-full items-center lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16 xl:gap-24">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="max-w-[760px]">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="mb-7 z-100"
            >
              <AnimatedLine
                text={t("hero.eyebrow")}
                lines={1}
              />
            </motion.div>

            {/* =================================================
                MAIN HEADING
            ================================================== */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.28,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                max-w-[820px]
                font-jakarta
                text-[46px]
                font-extrabold
                leading-[1.02]
                tracking-[-0.045em]
                text-white
                sm:text-[58px]
                md:text-[68px]
                lg:text-[72px]
                xl:text-[84px]
              "
            >
              {t("hero.titleLead")} {" "}
              <span className="relative inline-block text-[#5ba7df]">
                {t("hero.titleAccent")}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-1/2
                  "
                />
              </span>{" "}
              {t("hero.titleTail")}
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                mt-7
                max-w-[610px]
                font-manrope
                text-[15px]
                leading-7
                text-slate-300/80
                sm:text-[17px]
                sm:leading-8
              "
            >
              {t("hero.description")}
            </motion.p>

            {/* =================================================
                CTA
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.58,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              {/* Primary CTA */}
              <Link
                href="#contact"
                className="
                  group
                  relative
                  inline-flex
                  h-[54px]
                  items-center
                  justify-center
                  overflow-hidden
                  border
                  border-[#005293]
                  bg-[#005293]
                  px-6
                  font-jakarta
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  transition-all
                  duration-500
                  hover:border-[#5ba7df]
                  hover:bg-[#0765a0]
                "
              >
                <span className="relative z-10 flex items-center gap-3">
                  {t("hero.start")}

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-500
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#services"
                className="
                  group
                  inline-flex
                  h-[54px]
                  items-center
                  justify-center
                  border
                  border-white/20
                  bg-white/[0.025]
                  px-6
                  font-jakarta
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:border-white/40
                  hover:bg-white/[0.07]
                "
              >
                <span>{t("hero.services")}</span>

                <span
                  className="
                    ml-3
                    h-px
                    w-5
                    bg-white/40
                    transition-all
                    duration-500
                    group-hover:w-8
                    group-hover:bg-[#5ba7df]
                  "
                />
              </Link>
            </motion.div>

            {/* =================================================
                GLOBAL NETWORK
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.72,
              }}
              className="
                mt-12
                border-t
                border-white/10
                pt-5
              "
            >
              <div className="mb-3">
                <span
                  className="
                    font-manrope
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white/35
                  "
                >
                  {t("hero.operationalNetwork")}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-y-3">

                {/* China */}
                <div className="flex items-center gap-2.5 pr-5">
                  <span
                    className="
                      font-jakarta
                      text-[14px]
                      font-extrabold
                      tracking-[0.08em]
                      text-white
                    "
                  >
                    CN
                  </span>

                  <span className="h-3 w-px bg-white/20" />

                  <span
                    className="
                      font-manrope
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-white/40
                    "
                  >
                    {t("hero.china")}
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className="
                    hidden
                    h-px
                    w-8
                    bg-gradient-to-r
                    from-[#005293]
                    to-[#5ba7df]
                    sm:block
                  "
                />

                {/* Saudi */}
                <div className="flex items-center gap-2.5 px-5">
                  <span
                    className="
                      font-jakarta
                      text-[14px]
                      font-extrabold
                      tracking-[0.08em]
                      text-white
                    "
                  >
                    KSA
                  </span>

                  <span className="h-3 w-px bg-white/20" />

                  <span
                    className="
                      font-manrope
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-white/40
                    "
                  >
                    {t("hero.Saudi")}
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className="
                    hidden
                    h-px
                    w-8
                    bg-gradient-to-r
                    from-[#5ba7df]
                    to-[#4F0908]
                    sm:block
                  "
                />

                {/* Egypt */}
                <div className="flex items-center gap-2.5 pl-5">
                  <span
                    className="
                      font-jakarta
                      text-[14px]
                      font-extrabold
                      tracking-[0.08em]
                      text-white
                    "
                  >
                    EG
                  </span>

                  <span className="h-3 w-px bg-white/20" />

                  <span
                    className="
                      font-manrope
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-white/40
                    "
                  >
                    {t("hero.egypt")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT SIDE — LOGISTICS SIGNAL
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.65,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              relative
              hidden
              lg:block
            "
          >
            <div
              className="
                relative
                ml-auto
                w-full
                max-w-[330px]
                border
                border-white/10
                bg-[#051428]/35
                backdrop-blur-[6px]
              "
            >
              {/* Top line */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span
                  className="
                    font-manrope
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white/40
                  "
                >
                  {t("hero.Aseel")}
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5ba7df]" />
                  <span
                    className="
                      font-manrope
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      text-white/35
                    "
                  >
                    {t("hero.connected")}
                  </span>
                </span>
              </div>

              {/* Network path */}
              <div className="px-5 py-7">

                <div className="relative">

                  {/* Connecting line */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      left-[5px]
                      top-3
                      h-[calc(100%-24px)]
                      w-px
                      bg-gradient-to-b
                      from-[#5ba7df]
                      via-white/20
                      to-[#4F0908]
                    "
                  />

                  {/* China */}
                  <div className="relative flex items-start gap-5 pb-8">
                    <span className="relative z-10 mt-1 h-2.5 w-2.5 rounded-full border-2 border-[#5ba7df] bg-[#051428]" />

                    <div>
                      <p className="font-jakarta text-[12px] font-bold uppercase tracking-[0.08em] text-white">
                        {t("hero.china")}
                      </p>

                      <p className="mt-1 font-manrope text-[10px] leading-5 text-white/35">
                        {t("hero.chinaDetails")}
                      </p>
                    </div>
                  </div>

                  {/* Saudi */}
                  <div className="relative flex items-start gap-5 pb-8">
                    <span className="relative z-10 mt-1 h-2.5 w-2.5 rounded-full border-2 border-white/30 bg-[#051428]" />

                    <div>
                      <p className="font-jakarta text-[12px] font-bold uppercase tracking-[0.08em] text-white">
                        {t("hero.Saudi")}
                      </p>

                      <p className="mt-1 font-manrope text-[10px] leading-5 text-white/35">
                     {t("hero.SaudiDetails")}
                      </p>
                    </div>
                  </div>

                  {/* Egypt */}
                  <div className="relative flex items-start gap-5">
                    <span className="relative z-10 mt-1 h-2.5 w-2.5 rounded-full border-2 border-[#4F0908] bg-[#051428]" />

                    <div>
                      <p className="font-jakarta text-[12px] font-bold uppercase tracking-[0.08em] text-white">
                        {t("hero.egypt")}
                      </p>

                      <p className="mt-1 font-manrope text-[10px] leading-5 text-white/35">
                        {t("hero.egyptDetails")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom statement */}
              <div className="border-t border-white/10 px-5 py-4">
                <p
                  className="
                    font-manrope
                    text-[9px]
                    uppercase
                    leading-5
                    tracking-[0.12em]
                    text-white/30
                  "
                >
                  {t("hero.routeFirst")}
                  <br />
                  {t("hero.routeSecond")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="
          absolute
          bottom-8
          left-6
          z-20
          hidden
          items-center
          gap-4
          lg:flex
        "
      >
        <span
          className="
            font-manrope
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.24em]
            text-white/30
          "
        >
          {t("hero.scroll")}
        </span>

        <span className="h-px w-10 bg-white/20" />

        <ArrowDown className="h-3.5 w-3.5 text-white/40" />
      </motion.div>

      {/* Bottom-right coordinate detail */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-8
          right-8
          z-20
          hidden
          font-manrope
          text-[8px]
          uppercase
          tracking-[0.22em]
          text-white/20
          lg:block
        "
      >
        CN · HK · EG / 01
      </div>
    </section>
  )
}