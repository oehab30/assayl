"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass, Ship } from "lucide-react";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#F4F7F9] text-[#071827]">
      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(#071827_1px,transparent_1px),linear-gradient(90deg,#071827_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Atmospheric glows */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/3
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#005293]/[0.06]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#4F0908]/[0.035]
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col px-5 py-6 sm:px-8 lg:px-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center">
            <span className="font-jakarta text-2xl font-extrabold tracking-[-0.06em] text-[#071827]">
              Aseel
            </span>
          </Link>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-px w-8 bg-[#005293]/40" />

            <span className="font-jakarta text-[9px] font-bold uppercase tracking-[0.2em] text-[#071827]/40">
              Global Logistics
            </span>
          </div>
        </header>

        {/* Main */}
        <div className="flex flex-1 items-center py-16 lg:py-20">
          <div className="grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-10">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-jakarta text-[10px] font-bold tracking-[0.2em] text-[#005293]">
                  ROUTE 404
                </span>

                <span className="h-px w-10 bg-[#005293]/40" />

                <span className="font-manrope text-[10px] uppercase tracking-[0.15em] text-[#071827]/35">
                  Destination unavailable
                </span>
              </div>

              <h1 className="mt-7 font-jakarta text-[clamp(4.5rem,11vw,9rem)] font-extrabold leading-[0.8] tracking-[-0.09em] text-[#071827]">
                404
              </h1>

              <div className="mt-8 max-w-xl">
                <h2 className="font-jakarta text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-[3.2rem]">
                  This route
                  <span className="text-[#005293]"> doesn’t exist.</span>
                </h2>

                <p className="mt-5 max-w-lg font-manrope text-sm leading-7 text-[#071827]/55 sm:text-base">
                  It looks like this shipment took a wrong turn. The page
                  you&apos;re looking for may have moved, been renamed, or is no
                  longer available.
                </p>
              </div>

              {/* Route */}
              <div className="mt-8 flex max-w-md items-center">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#005293]" />
                  <span className="font-jakarta text-[9px] font-bold uppercase tracking-[0.15em] text-[#071827]/50">
                    China
                  </span>
                </div>

                <div className="relative mx-4 h-px flex-1 overflow-hidden bg-[#071827]/10">
                  <motion.span
                    animate={{ x: ["-100%", "300%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-0 top-0 h-px w-1/3 bg-[#005293]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full border border-[#4F0908]" />

                  <span className="font-jakarta text-[9px] font-bold uppercase tracking-[0.15em] text-[#071827]/50">
                    Destination
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="
                    group
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    gap-3
                    bg-[#071827]
                    px-6
                    font-jakarta
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-white
                    transition-colors
                    hover:bg-[#005293]
                  "
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to Home
                </Link>

                <Link
                  href="/en/services"
                  className="
                    group
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    gap-3
                    border
                    border-[#071827]/15
                    bg-white/60
                    px-6
                    font-jakarta
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-[#071827]
                    transition-colors
                    hover:border-[#005293]
                    hover:text-[#005293]
                  "
                >
                  Explore Services
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>

            {/* Right shipping visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-6"
            >
              <div className="relative mx-auto aspect-square max-w-[560px] border border-[#071827]/10 bg-white/50">
                {/* Inner technical frame */}
                <div className="absolute inset-5 border border-[#071827]/[0.07]" />

                {/* Coordinates */}
                <div className="absolute left-8 top-8">
                  <p className="font-jakarta text-[8px] font-bold uppercase tracking-[0.2em] text-[#071827]/25">
                    Navigation error
                  </p>

                  <p className="mt-1 font-manrope text-[10px] text-[#071827]/40">
                    STARS / GLOBAL ROUTE
                  </p>
                </div>

                {/* Compass */}
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-8 top-8"
                >
                  <Compass className="h-8 w-8 text-[#005293]/50" />
                </motion.div>

                {/* Large 404 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="font-jakarta text-[clamp(8rem,20vw,15rem)] font-extrabold leading-none tracking-[-0.12em] text-[#071827]/[0.035]">
                      404
                    </span>

                    {/* Ship */}
                    <motion.div
                      animate={{
                        x: [0, 7, 0, -5, 0],
                        y: [0, -2, 0, 2, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="relative flex h-24 w-24 items-center justify-center border border-[#005293]/20 bg-[#F4F7F9]">
                        <Ship className="h-10 w-10 text-[#005293]" />

                        <span className="absolute -bottom-1 left-1/2 h-px w-20 -translate-x-1/2 bg-[#005293]/30" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Broken route */}
                <div className="absolute bottom-24 left-10 right-10">
                  <div className="relative h-px bg-[#071827]/10">
                    <motion.span
                      animate={{ width: ["0%", "42%", "42%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                      }}
                      className="absolute left-0 top-0 h-px bg-[#005293]"
                    />

                    <span className="absolute left-[42%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 border border-[#4F0908] bg-[#F4F7F9]" />

                    <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#071827]/20" />
                  </div>

                  <div className="mt-3 flex justify-between">
                    <span className="font-jakarta text-[8px] font-bold uppercase tracking-[0.18em] text-[#071827]/30">
                      Origin
                    </span>

                    <span className="font-jakarta text-[8px] font-bold uppercase tracking-[0.18em] text-[#4F0908]/60">
                      Route lost
                    </span>

                    <span className="font-jakarta text-[8px] font-bold uppercase tracking-[0.18em] text-[#071827]/30">
                      Destination
                    </span>
                  </div>
                </div>

                {/* Corner labels */}
                <div className="absolute bottom-8 left-8">
                  <span className="font-manrope text-[9px] text-[#071827]/25">
                    01° 24&apos; N
                  </span>
                </div>

                <div className="absolute bottom-8 right-8">
                  <span className="font-manrope text-[9px] text-[#071827]/25">
                    103° 51&apos; E
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom status */}
        <footer className="flex flex-col gap-3 border-t border-[#071827]/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-manrope text-[9px] uppercase tracking-[0.15em] text-[#071827]/30">
            STARS · China · Hong Kong · Egypt
          </p>

          <p className="font-manrope text-[9px] uppercase tracking-[0.15em] text-[#071827]/30">
            Route status: <span className="text-[#4F0908]">Unavailable</span>
          </p>
        </footer>
      </div>
    </main>
  );
}