
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpLeft, ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
  imageAlt?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  dir?: "ltr" | "rtl";
}

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  backgroundImage,
  imageAlt = "",
  primaryCta,
  secondaryCta,
  dir = "ltr",
}: PageHeroProps) {
  const isRtl = dir === "rtl";
  const DirectionArrow = isRtl ? ArrowUpLeft : ArrowDownRight;

  return (
    <section
      dir={dir}
      className="relative isolate flex min-h-[540px] w-full items-center overflow-hidden bg-[#221E20] text-white sm:min-h-[600px] lg:min-h-[70w0px]"
    >
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0 -z-30">
          <Image
            src={backgroundImage}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      )}

      {/* Deep charcoal and burgundy image treatment */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#221E20]/90  to-[#421821]/40"
      />

      {/* Bottom shadow for visual depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-t from-[#221E20]/85 via-transparent to-[#221E20]/35"
      />

      {/* Soft burgundy light */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -z-10 h-[360px] w-[360px] rounded-full bg-[#662433]/30 blur-[120px] sm:h-[500px] sm:w-[500px] ${
          isRtl ? "-left-40 top-10" : "-right-40 top-10"
        }`}
      />

      {/* Subtle brand texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10] [background-image:linear-gradient(rgba(209,198,185,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(209,198,185,0.16)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />

      {/* Decorative brand marker */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full border border-[#D1C6B9]/10 lg:block ${
          isRtl ? "left-[-120px]" : "right-[-120px]"
        }`}
      >
        <div className="absolute inset-5 rounded-full border border-[#CD2B55]/20" />
        <div className="absolute inset-12 rounded-full border border-[#D1C6B9]/10" />
        <div className="absolute right-1/2 top-0 h-full w-px translate-x-1/2 bg-gradient-to-b from-transparent via-[#D1C6B9]/15 to-transparent" />
      </div>

      {/* Main content */}
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="max-w-4xl">
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 font-manrope text-xs sm:text-sm">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <li
                    key={`${item.label}-${index}`}
                    className="flex items-center gap-2"
                  >
                    {index > 0 && (
                      <ChevronRight
                        aria-hidden="true"
                        size={13}
                        className={`text-[#D1C6B9]/40 ${
                          isRtl ? "rotate-180" : ""
                        }`}
                      />
                    )}

                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="text-[#D1C6B9]/65 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CD2B55]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        aria-current={isLast ? "page" : undefined}
                        className={
                          isLast
                            ? "font-semibold text-[#FFFFFF]"
                            : "text-[#D1C6B9]/80"
                        }
                      >
                        {item.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>


          {/* Heading */}
          <h1 className="max-w-4xl text-balance  text-4xl font-bold leading-[1.12] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[72px]">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="mt-6 max-w-2xl  text-sm leading-7 text-[#D1C6B9] sm:mt-7 sm:text-base sm:leading-8 lg:text-[17px]">
              {description}
            </p>
          )}

          {/* Calls to action */}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[12px_2px] border border-[#662433] bg-[#421821] px-6 py-3 font-jakarta text-sm font-semibold text-white shadow-[0_8px_30px_rgba(34,30,32,0.18)] transition-all duration-300 hover:border-[#CD2B55] hover:bg-[#662433] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CD2B55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#221E20]"
                >
                  <span>{primaryCta.label}</span>
                  <DirectionArrow
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-[12px_2px] border border-[#D1C6B9]/35 bg-[#221E20]/20 px-6 py-3 font-jakarta text-sm font-semibold text-[#FFFFFF] backdrop-blur-sm transition-all duration-300 hover:border-[#D1C6B9]/75 hover:bg-[#D1C6B9]/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CD2B55]"
                >
                  <span>{secondaryCta.label}</span>
                  <DirectionArrow
                    size={17}
                    className="text-[#D1C6B9] transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom brand accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#CD2B55]/80 to-transparent"
      />

      {/* Small burgundy corner detail */}
      <div
        aria-hidden="true"
        className={`absolute bottom-0 h-1 w-24 bg-[#421821] ${
          isRtl ? "right-0" : "left-0"
        }`}
      />
    </section>
  );
}
