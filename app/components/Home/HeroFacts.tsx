"use client"

import { motion } from "motion/react"

const facts = [
  {
    value: "15+",
    label: "years of team experience",
    number: "01",
  },
  {
    value: "3",
    label: "operationally connected markets",
    number: "02",
  },
  {
    value: "Air & Sea",
    label: "flexible freight options",
    number: "03",
  },
]

export default function HeroFacts() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[440px]

        overflow-hidden

        border
        border-white/15

        bg-[#140606]/65

        shadow-[0_30px_100px_rgba(0,0,0,0.30)]

        backdrop-blur-[20px]
      "
    >
      {/* Subtle top accent */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-gradient-to-r
          from-[#4F0908]
          via-[#C9A96E]
          to-transparent
        "
      />

      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          px-6
          py-5

          sm:px-7
          sm:py-6
        "
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-[#C9A96E]" />

          <span
            className="
              font-jakarta
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/55
            "
          >
            At a glance
          </span>
        </div>

        <span
          className="
            font-jakarta
            text-[9px]
            font-bold
            tracking-[0.15em]
            text-white/25
          "
        >
          01—03
        </span>
      </div>

      {/* Facts */}
      <div className="flex flex-col">
        {facts.map((fact, index) => (
          <motion.div
            key={fact.number}
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.4 + index * 0.12,
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              group
              relative
              flex
              min-h-[125px]
              items-center
              gap-5
              border-b
              border-white/10
              px-6
              py-6

              transition-colors
              duration-500

              last:border-b-0

              hover:bg-white/[0.025]

              sm:min-h-[140px]
              sm:px-7
            "
          >
            {/* Number */}
            <span
              className="
                absolute
                right-5
                top-5

                font-jakarta
                text-[9px]
                font-bold
                tracking-[0.18em]
                text-white/20

                transition-colors
                duration-300

                group-hover:text-[#C9A96E]/70
              "
            >
              {fact.number}
            </span>

            {/* Main value */}
            <div
              className="
                min-w-[100px]
                font-jakarta
                text-[2rem]
                font-bold
                leading-none
                tracking-[-0.055em]
                text-white

                transition-transform
                duration-500

                group-hover:translate-x-1

                sm:min-w-[125px]
                sm:text-[2.4rem]
              "
            >
              {fact.value}
            </div>

            {/* Divider */}
            <div
              className="
                h-9
                w-px
                shrink-0
                bg-white/10

                transition-colors
                duration-300

                group-hover:bg-[#C9A96E]/50
              "
            />

            {/* Description */}
            <div className="pr-5">
              <p
                className="
                  max-w-[150px]
                  font-manrope
                  text-[10px]
                  font-semibold
                  uppercase
                  leading-[1.6]
                  tracking-[0.08em]
                  text-white/45

                  transition-colors
                  duration-300

                  group-hover:text-white/70

                  sm:text-[11px]
                "
              >
                {fact.label}
              </p>
            </div>

            {/* Hover accent */}
            <span
              className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-0
                bg-gradient-to-r
                from-[#4F0908]
                to-[#C9A96E]

                transition-all
                duration-500

                group-hover:w-full
              "
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom footer */}
      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-white/10
          px-6
          py-4

          sm:px-7
        "
      >
        <span
          className="
            font-manrope
            text-[9px]
            uppercase
            tracking-[0.15em]
            text-white/30
          "
        >
          Global logistics
        </span>

        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#C9A96E]
            shadow-[0_0_12px_rgba(201,169,110,0.5)]
          "
        />
      </div>
    </div>
  )
}
