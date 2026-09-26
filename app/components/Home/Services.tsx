"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      className="relative overflow-hidden bg-[#071827] py-24 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Large atmospheric glow */}
        <div className="absolute -right-64 -top-64 h-[700px] w-[700px] rounded-full bg-[#005293]/10 blur-[140px]" />

        {/* Burgundy glow */}
        <div className="absolute -bottom-72 -left-72 h-[650px] w-[650px] rounded-full bg-[#005293]/10 blur-[140px]" />

        {/* Technical grid */}
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

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
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
              <span className="text-[#5ba7df]">with precision.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="max-w-md font-manrope text-sm leading-7 text-white/50 sm:text-[15px]">
              From sourcing at the origin to delivery in Egypt, we coordinate
              the critical stages behind every shipment.
            </p>
          </div>
        </div>

        {/* =====================================================
            MAIN SERVICE EXPERIENCE
        ====================================================== */}
        <div className="mt-16 grid overflow-hidden border border-white/10 lg:grid-cols-[0.95fr_1.05fr] lg:min-h-[650px]">
          {/* =================================================
              LEFT — SERVICE NAVIGATION
          ================================================== */}
          <div className="flex flex-col border-b border-white/10 lg:border-b-0 lg:border-r">
            <div className="border-b border-white/10 px-6 py-5 sm:px-8">
              <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">
                Our capabilities
              </span>
            </div>

            <div className="flex flex-1 flex-col">
              {servicesData.map((service) => {
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
                      border-white/10
                      px-6
                      py-6
                      text-left
                      transition-all
                      duration-300
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
                    <span
                      className={`
                        absolute
                        left-0
                        top-0
                        h-full
                        w-[2px]
                        bg-[#5ba7df]
                        transition-transform
                        duration-300
                        ${
                          isActive
                            ? "scale-y-100"
                            : "scale-y-0 group-hover:scale-y-50"
                        }
                      `}
                    />

                    {/* Number */}
                    <span
                      className={`
                        w-8
                        shrink-0
                        font-jakarta
                        text-xs
                        font-semibold
                        tracking-wider
                        transition-colors
                        ${
                          isActive
                            ? "text-[#5ba7df]"
                            : "text-white/25 group-hover:text-white/50"
                        }
                      `}
                    >
                      {service.number}
                    </span>

                    {/* Title */}
                    <span
                      className={`
                        flex-1
                        font-jakarta
                        text-base
                        font-semibold
                        tracking-[-0.015em]
                        transition-colors
                        sm:text-lg
                        ${
                          isActive
                            ? "text-white"
                            : "text-white/50 group-hover:text-white/80"
                        }
                      `}
                    >
                      {service.title}
                    </span>

                    {/* Arrow */}
                    <ArrowUpRight
                      className={`
                        h-4
                        w-4
                        shrink-0
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "translate-x-0 -translate-y-0 text-[#5ba7df] opacity-100"
                            : "translate-x-[-5px] translate-y-[5px] text-white/20 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              RIGHT — FEATURED SERVICE
          ================================================== */}
          <div className="relative min-h-[550px] overflow-hidden">
            {/* Image */}
            <Image
              key={activeService.id}
              src={activeService.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="
                object-cover
                transition-all
                duration-700
                ease-out
              "
            />

            {/* Image treatment */}
            <div className="absolute inset-0 bg-[#071827]/30" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071827] via-[#071827]/25 to-transparent" />

            {/* Top metadata */}
            <div className="absolute left-6 right-6 top-6 flex items-start justify-between sm:left-8 sm:right-8 sm:top-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#071827]/30 text-white backdrop-blur-md">
                  {React.cloneElement(
                    activeService.icon as React.ReactElement<{
                      className?: string;
                    }>,
                    {
                      className: "h-4 w-4",
                    }
                  )}
                </span>

                <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Service {activeService.number}
                </span>
              </div>

              <span className="font-jakarta text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
                STARS
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <div className="max-w-xl">
                <h3
                  key={`title-${activeService.id}`}
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
                  key={`description-${activeService.id}`}
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
                    hover:text-[#5ba7df]
                  "
                >
                  <span>Explore service</span>

                  <span className="h-px w-10 bg-current transition-all duration-300 group-hover:w-14" />

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-jakarta text-sm font-semibold text-white">
              Have a shipment in mind?
            </p>

            <p className="mt-1 font-manrope text-xs text-white/40">
              Tell us what you need and we&apos;ll help determine the right
              solution.
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
