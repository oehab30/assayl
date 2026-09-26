"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import AnimatedLine from "../Common/AnimatedLine";
import {
  Ship,
  FileText,
  Warehouse,
  UserCheck,
  Search,
  Anchor,
  ArrowUpRight,
} from "lucide-react";
import ArrowButton from "../Common/Arrowbutton";

interface ServiceCardData {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  href: string;
}

const servicesData: ServiceCardData[] = [
  {
    id: "01",
    number: "01",
    title: "Import & Export",
    description:
      "Coordinated import and export services from China to Egypt and destinations worldwide, tailored to each shipment.",
    image: "/hero2.jpg",
    icon: <Ship />,
    href: "/quote?service=import-export",
  },
  {
    id: "02",
    number: "02",
    title: "Customs Clearance",
    description:
      "Support with customs requirements and procedures in line with applicable regulations.",
    image: "/imgi_2_hero-port-v2.jpeg",
    icon: <FileText />,
    href: "/quote?service=customs-clearance",
  },
  {
    id: "03",
    number: "03",
    title: "Secure Warehousing",
    description:
      "Receive, consolidate, and hold products in secure company warehouses before shipment preparation.",
    image: "/imgi_2_hero-port-v2.jpeg",
    icon: <Warehouse />,
    href: "/quote?service=warehousing",
  },
  {
    id: "04",
    number: "04",
    title: "Importing on Behalf",
    description:
      "Import arrangements using client or company documentation, subject to applicable legal frameworks.",
    image: "/imgi_2_hero-port-v2.jpeg",
    icon: <UserCheck />,
    href: "/quote?service=import-behalf",
  },
  {
    id: "05",
    number: "05",
    title: "Sourcing & Supply",
    description:
      "Product sourcing, purchasing, consolidation, and supply according to the requested specifications.",
    image: "/imgi_2_hero-port-v2.jpeg",
    icon: <Search />,
    href: "/quote?service=sourcing",
  },
  {
    id: "06",
    number: "06",
    title: "Sea Freight",
    description:
      "Sea freight solutions for varied shipment sizes, including cubic-meter consolidation.",
    image: "/imgi_2_hero-port-v2.jpeg",
    icon: <Anchor />,
    href: "/quote?service=sea-freight",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#071827]
        py-24
        sm:py-28
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            -right-64
            -top-64
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#005293]/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -bottom-72
            -left-72
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#005293]/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1320px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="mb-6">
              <AnimatedLine
                text="WHAT WE DO"
                lines={1}
                lineColor="bg-[#005293]"
                textColor="text-white/60"
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
                text-white
                sm:text-5xl
                lg:text-[68px]
              "
            >
              Trade, handled
              <br />
              <span className="text-[#5ba7df]">
                with precision.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p
              className="
                max-w-md
                font-manrope
                text-sm
                leading-7
                text-white/50
                sm:text-[15px]
              "
            >
              From sourcing at the origin to delivery in Egypt,
              we coordinate the critical stages behind every
              shipment.
            </p>
          </div>
        </div>

        {/* =====================================================
            MAIN SERVICE EXPERIENCE
        ====================================================== */}

        <div
          className="
            mt-16
            grid
            overflow-hidden
            border
            border-white/10
            lg:grid-cols-[0.95fr_1.05fr]
            lg:min-h-[650px]
          "
        >
          {/* =================================================
              LEFT — SERVICE NAVIGATION
          ================================================== */}

          <div
            className="
              flex
              flex-col
              border-b
              border-white/10
              lg:border-b-0
              lg:border-r
            "
          >
            <div
              className="
                border-b
                border-white/10
                px-6
                py-5
                sm:px-8
              "
            >
              <span
                className="
                  font-jakarta
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-white/30
                "
              >
                Our capabilities
              </span>
            </div>

            <div className="flex flex-1 flex-col">
              {servicesData.map((service) => {
                const isActive =
                  activeService.id === service.id;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onMouseEnter={() =>
                      setActiveService(service)
                    }
                    onFocus={() =>
                      setActiveService(service)
                    }
                    onClick={() =>
                      setActiveService(service)
                    }
                    className={`
                      group
                      relative
                      flex
                      flex-1
                      items-center
                      gap-5
                      border-b
                      border-white/10
                      px-6
                      py-6
                      text-left
                      transition-colors
                      duration-500
                      last:border-b-0
                      sm:px-8
                      ${
                        isActive
                          ? "bg-white/[0.055]"
                          : "hover:bg-white/[0.025]"
                      }
                    `}
                  >
                    {/* Active indicator */}
                    <motion.span
                      initial={false}
                      animate={{
                        scaleY: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.65, 0, 0.35, 1],
                      }}
                      className="
                        absolute
                        left-0
                        top-0
                        h-full
                        w-[2px]
                        origin-center
                        bg-[#5ba7df]
                      "
                    />

                    {/* Number */}
                    <motion.span
                      animate={{
                        color: isActive
                          ? "#5ba7df"
                          : "rgba(255,255,255,0.25)",
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                      className="
                        w-8
                        shrink-0
                        font-jakarta
                        text-xs
                        font-semibold
                        tracking-wider
                      "
                    >
                      {service.number}
                    </motion.span>

                    {/* Title */}
                    <motion.span
                      animate={{
                        color: isActive
                          ? "#ffffff"
                          : "rgba(255,255,255,0.5)",
                        x: isActive ? 4 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.65, 0, 0.35, 1],
                      }}
                      className="
                        flex-1
                        font-jakarta
                        text-base
                        font-semibold
                        tracking-[-0.015em]
                        sm:text-lg
                      "
                    >
                      {service.title}
                    </motion.span>

                    {/* Arrow */}
                    <motion.span
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : -6,
                        y: isActive ? 0 : 4,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                    >
                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          shrink-0
                          text-[#5ba7df]
                        "
                      />
                    </motion.span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              RIGHT — FEATURED SERVICE
          ================================================== */}

          <div className="relative min-h-[550px] overflow-hidden">
            {/* =================================================
                IMAGE CROSSFADE
            ================================================== */}

            <AnimatePresence initial={false}>
              <motion.div
                key={activeService.id}
                initial={{
                  opacity: 0,
                  scale: 1.04,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.015,
                }}
                transition={{
                  opacity: {
                    duration: 0.7,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 1.1,
                    ease: [0.65, 0, 0.35, 1],
                  },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="
                    object-cover
                    object-center
                  "
                />

                {/* Image treatment */}
                <div className="absolute inset-0 bg-[#071827]/30" />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#071827]
                    via-[#071827]/25
                    to-transparent
                  "
                />
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                TOP METADATA
            ================================================== */}

            <div
              className="
                absolute
                left-6
                right-6
                top-6
                z-20
                flex
                items-start
                justify-between
                sm:left-8
                sm:right-8
                sm:top-8
              "
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.div
                  key={`meta-${activeService.id}`}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-[#071827]/30
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {React.cloneElement(
                      activeService.icon as React.ReactElement<{
                        className?: string;
                      }>,
                      {
                        className:
                          "h-4 w-4",
                      }
                    )}
                  </span>

                  <span
                    className="
                      font-jakarta
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-white/70
                    "
                  >
                    Service {activeService.number}
                  </span>
                </motion.div>
              </AnimatePresence>

              <span
                className="
                  font-jakarta
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-white/40
                "
              >
                STARS
              </span>
            </div>

            {/* =================================================
                CONTENT CROSSFADE
            ================================================== */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-20
                p-6
                sm:p-8
                lg:p-10
              "
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.div
                  key={activeService.id}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="max-w-xl"
                >
                  <h3
                    className="
                      font-jakarta
                      text-3xl
                      font-bold
                      leading-tight
                      tracking-[-0.03em]
                      text-white
                      sm:text-4xl
                      lg:text-[46px]
                    "
                  >
                    {activeService.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-lg
                      font-manrope
                      text-sm
                      leading-7
                      text-white/60
                    "
                  >
                    {activeService.description}
                  </p>

                  <Link
                    href={activeService.href}
                    className="
                      group
                      mt-7
                      inline-flex
                      items-center
                      gap-3
                      font-jakarta
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-white
                      transition-colors
                      duration-300
                      hover:text-[#5ba7df]
                    "
                  >
                    <span>Explore service</span>

                    <span
                      className="
                        h-px
                        w-10
                        bg-current
                        transition-all
                        duration-500
                        group-hover:w-14
                      "
                    />

                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-start
            justify-between
            gap-6
            border-t
            border-white/10
            pt-8
            sm:flex-row
            sm:items-center
          "
        >
          <div>
            <p className="font-jakarta text-sm font-semibold text-white">
              Have a shipment in mind?
            </p>

            <p className="mt-1 font-manrope text-xs text-white/40">
              Tell us what you need and we&apos;ll help determine
              the right solution.
            </p>
          </div>

          <ArrowButton
            href="/quote"
            text="Request a Quote"
            icon={ArrowUpRight}
          />
        </div>
      </div>
    </section>
  );
}