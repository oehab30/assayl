"use client";

import React from "react";
import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import AnimatedLine from "../Common/AnimatedLine"; // Adjust import path as needed

interface OfficeLocation {
  id: string;
  tag: string;
  title: string;
  companyName: string;
  address: string;
  phones?: string[];
  noPhoneText?: string;
  badgeLabel: string;
}

const offices: OfficeLocation[] = [
  {
    id: "01",
    tag: "01",
    title: "Hong Kong Branch",
    companyName: "STARS EMAA TRADE LIMITED",
    address: "FLAT 1512, 15/F, LUCKY CENTRE, NO. 165-171 WAN CHAI ROAD, WAN CHAI, HONG KONG",
    noPhoneText: "No verified phone available",
    badgeLabel: "Hong Kong",
  },
  {
    id: "02",
    tag: "02",
    title: "China Branch",
    companyName: "Guangzhou Stars International Supply Chain Co., Limited",
    address: "Room E77-4611, No. 372 Huan Shi Dong Road, Guangzhou City, Guangdong Province, China",
    phones: ["+86 185 6551 1660"],
    badgeLabel: "China",
  },
  {
    id: "03",
    tag: "03",
    title: "Representative Office in Egypt",
    companyName: "STARS - Essam El-Din El-Sayed",
    address: "Badr City, Cairo, Arab Republic of Egypt",
    phones: ["+20 100 844 2982", "+20 102 395 5586"],
    badgeLabel: "Egypt",
  },
];

export default function OfficesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28">
      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* Eyebrow Label */}
        <div className="mb-4">
          <AnimatedLine
            text="OUR OFFICES"
            lines={1}
            lineColor="bg-[#005293]"
            textColor="text-[#005293]"
          />
        </div>

        {/* Section Header */}
        <div className="max-w-xl mb-12 sm:mb-16">
          <h2 className="font-jakarta text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0a192f] tracking-tight leading-[1.15]">
            Close to both source and client
          </h2>
          <p className="mt-4 font-manrope text-xs sm:text-sm leading-relaxed text-slate-500">
            Our China, Hong Kong, and Egypt offices work together to simplify communication and coordinate the import and freight journey.
          </p>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mb-12">
          {offices.map((office) => (
            <div
              key={office.id}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl rounded-tr-[52px] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/40 to-sky-50/20 p-7 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Top Section */}
              <div>
                {/* Header Row: ID Tag & Top-Right Map Badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-jakarta text-xs font-medium text-slate-400">
                    {office.tag}
                  </span>

                  {/* Corner Map Pin Badge Element */}
                  <div className="relative flex items-center gap-1.5 rounded-full bg-sky-100/70 border border-sky-200/60 px-3 py-1 font-jakarta text-[11px] font-semibold text-[#005293]">
                    <span>{office.badgeLabel}</span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005293]"></span>
                    </span>
                  </div>
                </div>

                {/* Branch Title */}
                <h3 className="font-jakarta text-xl font-bold text-[#0a192f] mb-3">
                  {office.title}
                </h3>

                {/* Company Legal Name */}
                <p className="font-jakarta text-[11px] font-bold uppercase tracking-wider text-[#005293] mb-4">
                  {office.companyName}
                </p>

                {/* Address */}
                <p className="font-manrope text-xs leading-relaxed text-slate-500 uppercase tracking-wide">
                  {office.address}
                </p>
              </div>

              {/* Bottom Phone Info Section */}
              <div className="mt-10 pt-6 border-t border-slate-100">
                {office.phones ? (
                  <div className="space-y-2">
                    {office.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="flex items-center gap-2 font-jakarta text-xs font-semibold text-[#0a192f] transition-colors hover:text-[#005293]"
                      >
                        <Phone className="h-3.5 w-3.5 text-slate-500" />
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="font-manrope text-xs text-slate-400">
                    {office.noPhoneText}
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
            className="group inline-flex items-center gap-1.5 font-jakarta text-xs font-bold text-[#005293] hover:underline underline-offset-4"
          >
            <span>Branch and office details</span>
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}