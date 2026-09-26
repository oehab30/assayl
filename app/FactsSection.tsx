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
        absolute
        bottom-8
        right-4
        z-20

        grid
        w-[calc(100%-2rem)]
        max-w-[470px]
        grid-cols-1

        overflow-hidden
        border
        border-white/15
        bg-[#140606]/75
        backdrop-blur-[18px]

        shadow-[0_30px_80px_rgba(0,0,0,0.25)]

        sm:grid-cols-3
        lg:bottom-[90px]
        lg:right-0
      "
    >
      {facts.map((fact, index) => (
        <motion.div
          key={fact.number}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5 + index * 0.1,
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            group
            relative
            flex
            min-h-[145px]
            flex-col
            justify-between
            p-5

            transition-colors
            duration-500

            sm:min-h-[165px]
            sm:p-6
          "
        >
          {/* Number */}
          <span
            className="
              font-jakarta
              text-[10px]
              font-bold
              tracking-[0.18em]
              text-white/30
              transition-colors
              duration-300
              group-hover:text-[#C9A96E]
            "
          >
            {fact.number}
          </span>

          {/* Main value */}
          <div>
            <div
              className="
                font-jakarta
                text-[28px]
                font-bold
                leading-none
                tracking-[-0.04em]
                text-white

                sm:text-[30px]
              "
            >
              {fact.value}
            </div>

            {/* Description */}
            <p
              className="
                mt-3
                max-w-[130px]
                font-manrope
                text-[10px]
                font-medium
                uppercase
                leading-[1.5]
                tracking-[0.08em]
                text-white/45

                sm:text-[9px]
              "
            >
              {fact.label}
            </p>
          </div>

          {/* Bottom accent */}
          <span
            className="
              absolute
              bottom-0
              left-0
              h-[2px]
              w-0
              bg-[#4F0908]
              transition-all
              duration-500
              group-hover:w-full
            "
          />

          {/* Vertical separator */}
          {index !== facts.length - 1 && (
            <span
              className="
                absolute
                bottom-5
                right-0
                top-5
                hidden
                w-px
                bg-white/10

                sm:block
              "
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}
