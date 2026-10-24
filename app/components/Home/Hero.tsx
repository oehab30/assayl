
import { useTranslation } from "../../Language/translator";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import AnimatedLine from "../Common/AnimatedLine";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        bg-[#221E20]
        text-white
      "
    >
      {/* BACKGROUND VIDEO */}
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

      {/* MAIN DARK GRADIENT */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 z-[1]
          bg-[linear-gradient(90deg,#221E20_0%,#34161C_38%,rgba(52,22,28,0.76)_64%,rgba(34,30,32,0.34)_100%)]
        "
      />

      {/* BOTTOM FADE */}
      <div
        aria-hidden="true"
        className="
          absolute inset-x-0 bottom-0 z-[2]
          h-56
          bg-gradient-to-t
          from-[#221E20]
          to-transparent
        "
      />

      {/* BURGUNDY ATMOSPHERIC GLOW */}
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
          bg-[#421821]/35
          blur-[120px]
        "
      />

      {/* TECHNICAL GRID */}
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

      {/* MAIN CONTENT */}
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
          {/* LEFT CONTENT */}
          <div className="max-w-[760px]">
            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="z-100 mb-7"
            >
              <AnimatedLine
                text={t("hero.eyebrow")}
                lines={1}
                lineColor="bg-[#CD2B55]"
                textColor="text-[#D1C6B9]"
              />
            </motion.div>

            {/* MAIN HEADING */}
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
                text-[46px]
                font-extrabold
                leading-[1.02]
                tracking-[-0.045em]
                text-white
                sm:text-[58px]
                md:text-[68px]
                lg:text-[72px]
                xl:text-[63px]
              "
            >
              {t("hero.titleLead")}{" "}
             {t("hero.titleAccent")}

           {t("hero.titleTail")}
            </motion.h1>

            {/* DESCRIPTION */}
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
                text-[15px]
                leading-7
                text-[#D1C6B9]/90
                sm:text-[17px]
                sm:leading-8
              "
            >
              {t("hero.description")}
            </motion.p>

            {/* CTA */}
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
              {/* PRIMARY CTA */}
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
                  border-[#421821]
                  bg-[#421821]
                  px-6
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  transition-all
                  duration-500
                  hover:border-[#CD2B55]
                  hover:bg-[#662433]
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

              {/* SECONDARY CTA */}
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
                  hover:border-[#D1C6B9]/60
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
                    group-hover:bg-[#CD2B55]
                  "
                />
              </Link>
            </motion.div>

            {/* GLOBAL NETWORK */}
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
                    text-[#D1C6B9]/55
                  "
                >
                  {t("hero.operationalNetwork")}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-y-3">
                {/* CHINA */}
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
                      text-[#D1C6B9]/70
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
                    from-[#421821]
                    to-[#CD2B55]
                    sm:block
                  "
                />

                {/* SAUDI ARABIA */}
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
                      text-[#D1C6B9]/70
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
                    from-[#CD2B55]
                    to-[#421821]
                    sm:block
                  "
                />

                {/* EGYPT */}
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
                      text-[#D1C6B9]/70
                    "
                  >
                    {t("hero.egypt")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE — LOGISTICS SIGNAL */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.65,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="relative hidden lg:block"
          >
            <div
              className="
                relative
                ml-auto
                w-full
                max-w-[330px]
                border
                border-white/15
                bg-[#221E20]/55
                backdrop-blur-[6px]
              "
            >
              {/* TOP LINE */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span
                  className="
                    font-manrope
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#D1C6B9]/70
                  "
                >
                  {t("hero.Aseel")}
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#CD2B55]" />

                  <span
                    className="
                      font-manrope
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      text-[#D1C6B9]/60
                    "
                  >
                    {t("hero.connected")}
                  </span>
                </span>
              </div>

              {/* NETWORK PATH */}
              <div className="px-5 py-7">
                <div className="relative">
                  {/* CONNECTING LINE */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      left-[5px]
                      top-3
                      h-[calc(100%-24px)]
                      w-px
                      bg-gradient-to-b
                      from-[#CD2B55]
                      via-white/20
                      to-[#421821]
                    "
                  />

                  {/* CHINA */}
                  <div className="relative flex items-start gap-5 pb-8">
                    <span className="relative z-10 mt-1 h-2.5 w-2.5 rounded-full border-2 border-[#CD2B55] bg-[#221E20]" />

                    <div>
                      <p className="font-jakarta text-[12px] font-bold uppercase tracking-[0.08em] text-white">
                        {t("hero.china")}
                      </p>

                      <p className="mt-1 font-manrope text-[10px] leading-5 text-[#D1C6B9]/65">
                        {t("hero.chinaDetails")}
                      </p>
                    </div>
                  </div>

                  {/* SAUDI ARABIA */}
                  <div className="relative flex items-start gap-5 pb-8">
                    <span className="relative z-10 mt-1 h-2.5 w-2.5 rounded-full border-2 border-[#D1C6B9]/60 bg-[#221E20]" />

                    <div>
                      <p className="font-jakarta text-[12px] font-bold uppercase tracking-[0.08em] text-white">
                        {t("hero.Saudi")}
                      </p>

                      <p className="mt-1 font-manrope text-[10px] leading-5 text-[#D1C6B9]/65">
                        {t("hero.SaudiDetails")}
                      </p>
                    </div>
                  </div>

                  {/* EGYPT */}
                  <div className="relative flex items-start gap-5">
                    <span className="relative z-10 mt-1 h-2.5 w-2.5 rounded-full border-2 border-[#421821] bg-[#221E20]" />

                    <div>
                      <p className="font-jakarta text-[12px] font-bold uppercase tracking-[0.08em] text-white">
                        {t("hero.egypt")}
                      </p>

                      <p className="mt-1 font-manrope text-[10px] leading-5 text-[#D1C6B9]/65">
                        {t("hero.egyptDetails")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM STATEMENT */}
              <div className="border-t border-white/10 px-5 py-4">
                <p
                  className="
                    font-manrope
                    text-[9px]
                    uppercase
                    leading-5
                    tracking-[0.12em]
                    text-[#D1C6B9]/55
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

      {/* SCROLL INDICATOR */}
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
            text-[#D1C6B9]/60
          "
        >
          {t("hero.scroll")}
        </span>

        <span className="h-px w-10 bg-white/25" />

        <ArrowDown className="h-3.5 w-3.5 text-[#D1C6B9]/70" />
      </motion.div>

      {/* BOTTOM-RIGHT COORDINATE DETAIL */}
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
          text-[#D1C6B9]/45
          lg:block
        "
      >
        CN · KSA · EG / 01
      </div>
    </section>
  );
}