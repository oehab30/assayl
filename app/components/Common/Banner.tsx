"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedLine from "./AnimatedLine";
import { useTranslation } from "../Language/translator";

export default function Banner() {
  const { locale } = useTranslation();
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-12 sm:py-16 lg:py-20">
      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* Banner Card Container */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-[#08182b] p-8 sm:p-12 lg:p-16 lg:flex-row lg:items-center shadow-xl">

          {/* Background Image */}
          <Image
            src="/images/ship-banner-bg.jpg" // استبدل هذا بمسار صورة السفينة/الميناء الخاصة بك
            alt="Cargo vessel and shipping terminal"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1240px"
            className="object-cover object-center opacity-35 mix-blend-luminosity"
          />

          {/* Dark Overlay for Text Readability */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#061322]/95 via-[#08182b]/80 to-[#0a2038]/60"
            aria-hidden="true"
          />

          {/* Left Column: Text Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow Label */}
            <div className="mb-4">
              <AnimatedLine
                text="LET'S START WITH CLARITY"
                lines={1}
                lineColor="bg-sky-400"
                textColor="text-sky-300"
              />
            </div>

            {/* Main Headline */}
            <h2 className="font-jakarta text-3xl sm:text-4xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.12]">
              Planning a product <br className="hidden sm:inline" />
              order or shipment?
            </h2>

            {/* Description Text */}
            <p className="mt-4 font-manrope text-xs sm:text-sm leading-relaxed text-slate-300/90 max-w-lg">
              Share the details through our quote form and we will prepare a structured WhatsApp message with the essential information.
            </p>
          </div>

          {/* Right Column: Action Buttons */}
          <div className="relative z-10 mt-8 flex flex-col gap-3.5 sm:flex-row lg:mt-0 lg:flex-col sm:items-center lg:items-stretch min-w-[200px]">
            {/* Primary Button */}
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 font-jakarta text-xs font-bold text-[#06182e] shadow-sm transition-all duration-300 hover:bg-slate-100 hover:shadow-md text-center"
            >
              Request a Quote
            </Link>

            {/* Secondary Outline Button */}
            <a
              href="https://wa.me/yourwhatsappnumber" // ضع رابط الواتساب الخاص بك هنا
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 font-jakarta text-xs font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 text-center"
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}