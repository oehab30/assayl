"use client";

import React from "react";
import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import AnimatedLine from "../Common/AnimatedLine";
import { useTranslation } from "../../Language/translator";

interface OfficeLocation {
  id: string;
  tag: string;
  titleKey: string;
  companyName: string;
  address: string;
  phones?: string[];
  badgeKey: string;
}

const offices: OfficeLocation[] = [
  {
    id: "01",
    tag: "01",
    titleKey: "SaudiTitle",
    companyName: "Assayel EMAA TRADE LIMITED",
    address:
      "FLAT 1512, 15/F, LUCKY CENTRE, NO. 165-171 WAN CHAI ROAD, WAN CHAI, HONG KONG",
    badgeKey: "Saudi Arabia",
  },
  {
    id: "02",
    tag: "02",
    titleKey: "chinaTitle",
    companyName: "Guangzhou Stars International Supply Chain Co., Limited",
    address:
      "Room E77-4611, No. 372 Huan Shi Dong Road, Guangzhou City, Guangdong Province, China",
    phones: ["+86 185 6551 1660"],
    badgeKey: "China",
  },
  {
    id: "03",
    tag: "03",
    titleKey: "egyptTitle",
    companyName: "Assayel - Essam El-Din El-Sayed",
    address: "Badr City, Cairo, Arab Republic of Egypt",
    phones: ["+20 111 844 2982", "+20 12 395 5586"],
    badgeKey: "Egypt",
  },
];

export default function OfficesSection() {
  const { t } = useTranslation();

  return (
    <section  id="branches" className="relative overflow-hidden bg-[#F8F6F3] py-16 sm:py-24 lg:py-28">
      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Label */}
        <div   className="mb-4">
          <AnimatedLine
            text={t("offices.eyebrow")}
            lines={1}
            lineColor="bg-[#CD2B55]"
            textColor="text-[#8c8275 ]"
          />
        </div>

        {/* Section Header */}
        <div  className="max-w-xl mb-12 sm:mb-16">
          <h2 className=" text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#221E20] tracking-tight leading-[1.15]">
            {t("offices.title")}
          </h2>
          <p className="mt-4 font-manrope text-xs sm:text-sm leading-relaxed text-[#4B4A4B]">
            {t("offices.description")}
          </p>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mb-12">
          {offices.map((office) => (
            <div
              key={office.id}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl rounded-tr-[52px] border border-[#D1C6B9]/70 bg-gradient-to-br from-white via-[#F8F6F3]/40 to-[#421821]/[0.035] p-7 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Top Section */}
              <div>
                {/* Header Row: ID Tag & Top-Right Map Badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className=" text-xs font-medium text-[#4B4A4B]/60">
                    {office.tag}
                  </span>

                  {/* Corner Map Pin Badge Element */}
                  <div className="relative flex items-center gap-1.5 rounded-full bg-[#CD2B55]/[0.08] border border-[#CD2B55]/20 px-3 py-1  text-[11px] font-semibold text-[#421821]">
                    <span>{t(`offices.${office.badgeKey}`)}</span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CD2B55] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CD2B55]"></span>
                    </span>
                  </div>
                </div>

                {/* Branch Title */}
                <h3 className=" text-xl font-bold text-[#221E20] mb-3">
                  {t(`offices.${office.titleKey}`)}
                </h3>

                {/* Company Legal Name */}
                <p
                  dir="ltr"
                  className=" text-[11px] font-bold uppercase tracking-wider text-[#421821] mb-4"
                >
                  {office.companyName}
                </p>

                {/* Address */}
                <p
                  dir="ltr"
                  className="font-manrope text-xs leading-relaxed text-[#4B4A4B] uppercase tracking-wide"
                >
                  {office.address}
                </p>
              </div>

              {/* Bottom Phone Info Section */}
              <div className="mt-10 pt-6 border-t border-[#D1C6B9]/60">
                {office.phones ? (
                  <div className="space-y-2">
                    {office.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="flex items-center gap-2  text-xs font-semibold text-[#221E20] transition-colors hover:text-[#CD2B55]"
                      >
                        <Phone className="h-3.5 w-3.5 text-[#4B4A4B]" />
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="font-manrope text-xs text-[#4B4A4B]/65">
                    {t("offices.noPhone")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Link */}
        <div className="flex justify-center">
          <Link
            href="/offices"
            className="group inline-flex items-center gap-1.5  text-xs font-bold text-[#421821] hover:underline underline-offset-4"
          >
            <span>{t("offices.cta")}</span>
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
