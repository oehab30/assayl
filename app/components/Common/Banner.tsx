"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedLine from "../Common/AnimatedLine";
import { useTranslation } from "../../Language/translator";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#F8F6F3] py-12 sm:py-16 lg:py-20">
      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* Banner Card Container */}
        <div
          className="
            relative
            flex
            flex-col
            justify-between
            overflow-hidden
            rounded-[28px]
            bg-[#34161C]
            p-8
            shadow-xl
            sm:p-12
            lg:flex-row
            lg:items-center
            lg:p-16
          "
        >

          {/* Background Image */}
          <Image
            src="/imgi_9_process-port.png"
            alt={t("banner.imageAlt")}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1240px"
            className="
              object-cover
              object-center
              opacity-60
            "
          />

          {/* Dark Overlay */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#221E20]/90
              via-[#421821]/75
              to-[#421821]/35
            "
          />

          {/* Bottom Contrast */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#221E20]/65
              via-[#34161C]/15
              to-transparent
            "
          />

          {/* Left Column: Text Content */}
          <div className="relative z-10 max-w-2xl">

            {/* Eyebrow Label */}
            <div className="mb-4">
              <AnimatedLine
                text={t("banner.eyebrow")}
                lines={1}
                lineColor="bg-[#CD2B55]"
                textColor="text-[#D1C6B9]"
              />
            </div>

            {/* Main Headline */}
            <h2
              className="
                text-3xl
                font-bold
                leading-[1.12]
                tracking-tight
                text-white
                sm:text-4xl
                lg:text-[48px]
              "
            >
              {t("banner.titleLead")}{" "}
              <br className="hidden sm:inline" />
              {t("banner.titleTail")}
            </h2>

            {/* Description Text */}
            <p
              className="
                mt-4
                max-w-lg
                font-manrope
                text-xs
                leading-relaxed
                text-[#D1C6B9]/90
                sm:text-sm
              "
            >
              {t("banner.description")}
            </p>
          </div>

          {/* Right Column: Action Buttons */}
          <div
            className="
              relative
              z-10
              mt-8
              flex
              min-w-[200px]
              flex-col
              gap-3.5
              sm:flex-row
              sm:items-center
              lg:mt-0
              lg:items-stretch
            "
          >

            {/* Primary Button */}
            <Link
              href="/quote"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-white
                px-6
                py-3.5
                text-center
                font-jakarta
                text-xs
                font-bold
                text-[#34161C]
                shadow-sm
                transition-all
                duration-300
                hover:bg-[#F8F6F3]
                hover:shadow-md
              "
            >
              {t("nav.quote")}
            </Link>

            {/* Secondary Outline Button */}
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                border
                border-white/30
                bg-white/5
                px-6
                py-3.5
                text-center
                text-xs
                font-bold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-white
                hover:bg-white/10
              "
            >
              {t("banner.whatsapp")}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
