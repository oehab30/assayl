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
import { useTranslation } from "../../Language/translator";

interface ServiceCardData {
  id: string;
  number: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  icon: React.ReactNode;
  href: string;
}

const HomeServicesData: ServiceCardData[] = [
  {
    id: "01",
    number: "01",
    titleKey: "importExportTitle",
    descriptionKey: "importExportDescription",
    image: "/imgi_9_process-port.png",
    icon: <Ship />,
    href: "/quote?service=import-export",
  },
  {
    id: "02",
    number: "02",
    titleKey: "customsTitle",
    descriptionKey: "customsDescription",
    image: "/imgi_13_network-hub.webp",
    icon: <FileText />,
    href: "/quote?service=customs-clearance",
  },
  {
    id: "03",
    number: "03",
    titleKey: "warehousingTitle",
    descriptionKey: "warehousingDescription",
    image: "/imgi_12_warehouse.webp",
    icon: <Warehouse />,
    href: "/quote?service=warehousing",
  },
  {
    id: "04",
    number: "04",
    titleKey: "importingTitle",
    descriptionKey: "importingDescription",
    image: "/imgi_2_hero-port-v2.jpeg",
    icon: <UserCheck />,
    href: "/quote?service=import-behalf",
  },
  {
    id: "05",
    number: "05",
    titleKey: "sourcingTitle",
    descriptionKey: "sourcingDescription",
    image: "/imgi_10_cargo-air.png",
    icon: <Search />,
    href: "/quote?service=sourcing",
  },
  {
    id: "06",
    number: "06",
    titleKey: "seaFreightTitle",
    descriptionKey: "seaFreightDescription",
    image: "/imgi_2_hero-port-v2.jpeg",
    icon: <Anchor />,
    href: "/quote?service=sea-freight",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(HomeServicesData[0]);
  const { t } = useTranslation();

  return (
    <section
      id="HomeServices"
      className="
        relative
        overflow-hidden
        bg-[#221E20]
        py-24
        sm:py-28
        lg:py-36
      "
    >
      {/* BACKGROUND */}
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
            bg-[#421821]/30
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
            bg-[#662433]/20
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(209,198,185,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(209,198,185,.5)_1px,transparent_1px)]
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
        {/* HEADER */}
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="mb-6">
              <AnimatedLine
                text={t("HomeServices.eyebrow")}
                lines={1}
                lineColor="bg-[#CD2B55]"
                textColor="text-[#D1C6B9]"
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
              {t("HomeServices.titleLead")}
              <br />
              <span className="text-[#D1C6B9]">
                {t("HomeServices.titleTail")}
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
                text-[#D1C6B9]/75
                sm:text-[15px]
              "
            >
              {t("HomeServices.description")}
            </p>
          </div>
        </div>

        {/* MAIN SERVICE EXPERIENCE */}
        <div
          className="
            mt-16
            grid
            overflow-hidden
            border
            border-[#D1C6B9]/15
            lg:grid-cols-[0.95fr_1.05fr]
            lg:min-h-[650px]
          "
        >
          {/* LEFT — SERVICE NAVIGATION */}
          <div
            className="
              flex
              flex-col
              border-b
              border-[#D1C6B9]/15
              bg-[#34161C]/45
              lg:border-b-0
              lg:border-r
            "
          >
            <div
              className="
                border-b
                border-[#D1C6B9]/15
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
                  text-[#D1C6B9]/60
                "
              >
                {t("HomeServices.capabilities")}
              </span>
            </div>

            <div className="flex flex-1 flex-col">
              {HomeServicesData.map((service) => {
                const isActive = activeService.id === service.id;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onMouseEnter={() => setActiveService(service)}
                    onFocus={() => setActiveService(service)}
                    onClick={() => setActiveService(service)}
                    className={`
                      group
                      relative
                      flex
                      flex-1
                      items-center
                      gap-5
                      border-b
                      border-[#D1C6B9]/10
                      px-6
                      py-6
                      text-start
                      transition-colors
                      duration-500
                      last:border-b-0
                      sm:px-8
                      ${
                        isActive
                          ? "bg-[#662433]/30"
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
                        bg-[#CD2B55]
                      "
                    />

                    {/* Number */}
                    <motion.span
                      animate={{
                        color: isActive
                          ? "#CD2B55"
                          : "rgba(209,198,185,0.45)",
                      }}
                      transition={{ duration: 0.45 }}
                      className="
                        w-8
                        shrink-0
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
                          ? "#FFFFFF"
                          : "rgba(209,198,185,0.72)",
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
                      {t(`HomeServices.${service.titleKey}`)}
                    </motion.span>

                    {/* Arrow */}
                    <motion.span
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : -6,
                        y: isActive ? 0 : 4,
                      }}
                      transition={{ duration: 0.45 }}
                    >
                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          shrink-0
                          text-[#CD2B55]
                        "
                      />
                    </motion.span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — FEATURED SERVICE */}
          <div className="relative min-h-[550px] overflow-hidden bg-[#221E20]">
            {/* IMAGE CROSSFADE */}
            <AnimatePresence initial={false}>
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.015 }}
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
                  alt={t(`HomeServices.${activeService.titleKey}`)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />

                {/* Unified charcoal and burgundy image treatment */}
                <div className="absolute inset-0 bg-[#221E20]/35" />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#221E20]
                    via-[#34161C]/35
                    to-[#221E20]/10
                  "
                />
              </motion.div>
            </AnimatePresence>

            {/* TOP METADATA */}
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
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`meta-${activeService.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
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
                      border-[#D1C6B9]/25
                      bg-[#221E20]/55
                      text-[#D1C6B9]
                      backdrop-blur-md
                    "
                  >
                    {React.cloneElement(
                      activeService.icon as React.ReactElement<{
                        className?: string;
                      }>,
                      { className: "h-4 w-4" }
                    )}
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-white/80
                    "
                  >
                    {t("HomeServices.serviceLabel")} {activeService.number}
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
                  text-[#D1C6B9]/65
                "
              >
                ASSAYEL
              </span>
            </div>

            {/* CONTENT CROSSFADE */}
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
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="max-w-xl"
                >
                  <h3
                    className="
                      text-3xl
                      font-bold
                      leading-tight
                      tracking-[-0.03em]
                      text-white
                      sm:text-4xl
                      lg:text-[46px]
                    "
                  >
                    {t(`HomeServices.${activeService.titleKey}`)}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-lg
                      font-manrope
                      text-sm
                      leading-7
                      text-[#D1C6B9]/85
                    "
                  >
                    {t(`HomeServices.${activeService.descriptionKey}`)}
                  </p>

                  <Link
                    href={activeService.href}
                    className="
                      group
                      mt-7
                      inline-flex
                      items-center
                      gap-3
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-white
                      transition-colors
                      duration-300
                      hover:text-[#CD2B55]
                    "
                  >
                    <span>{t("HomeServices.explore")}</span>

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

        {/* BOTTOM CTA */}
        <div
          className="
            mt-12
            flex
            flex-col
            items-start
            justify-between
            gap-6
            border-t
            border-[#D1C6B9]/20
            pt-8
            sm:flex-row
            sm:items-center
          "
        >
          <div>
            <p className="font-jakarta text-sm font-semibold text-white">
              {t("HomeServices.bottomTitle")}
            </p>

            <p className="mt-1 font-manrope text-xs text-[#D1C6B9]/70">
              {t("HomeServices.bottomDescription")}
            </p>
          </div>

          <ArrowButton
            href="/quote"
            text={t("nav.quote")}
            icon={ArrowUpRight}
          />
        </div>
      </div>
    </section>
  );
}
