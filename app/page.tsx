"use client"

import Link from "next/link"
import { motion } from "motion/react"
import Image from "next/image"
import AnimatedLine from "./AnimatedLine"

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        bg-[#051428]
        text-white
      "
    >


 {/* Hero background image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/imgi_2_hero-port-v2.jpeg"
      alt="Hero image"
      fill
      priority
      className="object-cover"
      sizes="100vw"
    />
  </div>

  {/* Dark overlay */}
<div className="absolute inset-0 z-10 bg-gradient-to-r from-[#051428]/90 via-[#051428]/60 to-transparent" />


      {/* Hero content */}
      <div
        className="
          relative z-10
          mx-auto flex min-h-screen w-full max-w-[1240px]
          items-center
           pt-28 lg:px-8
        "
      >


        <div className="max-w-[600px]">

          {/* Small label */}
  <div className="flex gap-4 items-center text-sky-300 ">
          <AnimatedLine text="From China to your destination" lines={1}  lineColor={"bg-sky-300"}/>
        </div>



          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              font-jakarta
              text-wrap
              text-5xl font-bold
              sm:text-6xl
              lg:text-8xl
              "
          >
            Your trusted partner for sourcing and shipping from China.
          </motion.h1>

  {/* <span className="block text-[#55A9D4]"> */}
              {/* partner */}
            {/* </span> */}




          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="
              mt-7 max-w-[600px]
              font-manrope
              text-base
              leading-8
              text-white/65
              sm:text-lg
            "
          >
            STARS connects its presence in China, Hong Kong, and Egypt to deliver coordinated solutions for individuals, traders, importers, and companies.


          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="
              mt-9 flex flex-wrap
              items-center gap-4
            "
          >
            <Link
              href="#contact"
              className="
                inline-flex
                min-h-[54px]
                items-center justify-center
                rounded-[14px_2px]
                bg-[#207EB9]
                px-[27px]
                font-jakarta
                text-sm font-bold
                text-white
                transition-all
                duration-300
                hover:bg-[#55A9D4]
                hover:shadow-[0_12px_30px_#0f649d2e]
              "
            >
              Start a Project
            </Link>

            <Link
              href="#services"
              className="
                inline-flex
                min-h-[54px]
                items-center justify-center
                rounded-[14px_2px]
                border border-white/20
                px-[27px]
                font-jakarta
                text-sm font-bold
                text-white
                transition-all
                duration-300
                hover:border-white/40
                hover:bg-white/5
              "
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>



      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="
          absolute bottom-8
          left-1/2
          -translate-x-1/2
          text-center
        "
      >
        <span
          className="
            mb-3 block
            font-jakarta
            text-[10px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-white/40
          "
        >
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mx-auto h-8 w-[1px]
            bg-gradient-to-b
            from-[#55A9D4]
            to-transparent
          "
        />
      </motion.div>


    </section>
  )
}