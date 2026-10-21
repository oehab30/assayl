
"use client";

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Globe2,
} from "lucide-react";

import AnimatedLine from "../Common/AnimatedLine";
import PageBackground from "../Common/PageBackground";
import { useTranslation } from "../../Language/translator";
import { fetchSectionContent } from "@/lib/cms/content-store";
import type { OfficesContent } from "@/app/admin/edit/OfficesEditor";

const defaultOfficesContent: OfficesContent = {
  eyebrow: { en: "Our Network", ar: "شبكتنا" },
  title: { en: "Strategic Locations across China, Hong Kong & Egypt", ar: "مواقع استراتيجية عبر الصين وهونغ كونغ ومصر" },
  description: {
    en: "Our regional hubs provide local coordination, warehouse consolidation, and direct support.",
    ar: "توفر مراكزنا الإقليمية التنسيق المحلي وتجميع المستودعات والدعم المباشر.",
  },
  locations: [
    {
      id: "01",
      badge: "Hong Kong / KSA Hub",
      title: { en: "Hong Kong Headquarters", ar: "مقر هونغ كونغ" },
      companyName: "Assayel EMAA TRADE LIMITED",
      address: "FLAT 1512, 15/F, LUCKY CENTRE, NO. 165-171 WAN CHAI ROAD, WAN CHAI, HONG KONG",
      phone: "+852 2891 0000",
    },
    {
      id: "02",
      badge: "China Sourcing Hub",
      title: { en: "Guangzhou Sourcing Center", ar: "مركز كوانزو للتوريد" },
      companyName: "Guangzhou Assayel International Supply Chain Co., Limited",
      address: "Room E77-4611, No. 372 Huan Shi Dong Road, Guangzhou City, Guangdong Province, China",
      phone: "+86 185 6551 1660",
    },
    {
      id: "03",
      badge: "Egypt Operations Hub",
      title: { en: "Cairo Logistics Branch", ar: "فرع القاهرة اللوجستي" },
      companyName: "Assayel - Essam El-Din El-Sayed",
      address: "Badr City, Cairo, Arab Republic of Egypt",
      phone: "+20 111 844 2982",
    },
  ],
};

export default function OfficesSection() {
  const { t, locale } = useTranslation();
  const lang = (locale === "ar" ? "ar" : "en") as "en" | "ar";
  const [cms, setCms] = useState<OfficesContent>(defaultOfficesContent);

  useEffect(() => {
    fetchSectionContent<OfficesContent>("offices", defaultOfficesContent).then(setCms);

    const onUpdate = () => {
      fetchSectionContent<OfficesContent>("offices", defaultOfficesContent).then(setCms);
    };

    window.addEventListener("cms_update_offices", onUpdate);
    return () => window.removeEventListener("cms_update_offices", onUpdate);
  }, []);

  return (
    <section
      id="branches"
      className="relative isolate overflow-hidden bg-[#F8F6F3] py-20 sm:py-28 lg:py-32"
    >
      {/* Full-section decorative background */}
      <PageBackground />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-14 lg:mb-20">
          <div className="mb-5">
            <AnimatedLine
              text={cms.eyebrow[lang] || t("offices.eyebrow")}
              lines={1}
              lineColor="bg-[#CD2B55]"
              textColor="text-[#8C8275]"
            />
          </div>

          <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <div>
              <h2 className="w-110  max-w-2xl text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-[#221E20] sm:text-4xl lg:text-[52px]">
                {cms.title[lang] || t("offices.title")}
              </h2>

              <div className="mt-6 h-[3px] w-14 rounded-full bg-[#CD2B55]" />
            </div>

            <p className="max-w-lg font-manrope text-sm leading-7 text-[#696164] sm:text-base sm:leading-8">
              {cms.description[lang] || t("offices.description")}
            </p>
          </div>
        </div>

        {/* Network introduction */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-y border-[#D1C6B9]/70 py-4">
          <div className="flex items-center gap-3">
            <Globe2 className="h-4 w-4 text-[#8C283F]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4B4144] sm:text-xs">
              International Network
            </span>
          </div>

          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8C8275] sm:text-xs">
            03 Operational Locations
          </span>
        </div>

        {/* Office cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {cms.locations.map((office, index) => {
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              office.address
            )}`;

            return (
              <article
                key={office.id}
                className="
                  group relative flex min-w-0 flex-col
                  overflow-hidden rounded-[22px] rounded-tr-[54px]
                  border border-[#D1C6B9]/70
                  bg-white/70
                  p-6 shadow-[0_8px_30px_rgba(34,30,32,0.025)]
                  transition-all duration-500 ease-out
                  hover:-translate-y-1
                  hover:border-[#8C283F]/30
                  hover:bg-white
                  hover:shadow-[0_22px_55px_rgba(66,24,33,0.09)]
                  sm:p-8
                "
              >
                {/* Decorative corner accent */}
                <div
                  aria-hidden="true"
                  className="
                    absolute right-0 top-0 h-20 w-20
                    rounded-bl-[54px]
                    border-b border-l border-[#D1C6B9]/50
                    bg-gradient-to-bl from-[#8C283F]/[0.07] to-transparent
                    transition-colors duration-300
                    group-hover:from-[#8C283F]/[0.12]
                  "
                />

                {/* Card header */}
                <div className="relative mb-10 flex items-start justify-between gap-3">
                  <span className="font-manrope text-xs font-semibold tracking-[0.2em] text-[#A49A91]">
                    / {office.id}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[#D1C6B9]/70 bg-[#F8F6F3] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#421821]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#CD2B55]" />
                    {office.badge}
                  </span>
                </div>

                {/* Office information */}
                <div className="relative flex-1">
                  <h3 className="mb-4 text-2xl font-semibold tracking-[-0.035em] text-[#221E20] transition-colors duration-300 group-hover:text-[#702538] sm:text-[28px]">
                    {office.title[lang] || office.title.en}
                  </h3>

                  <p
                    dir="ltr"
                    className="mb-5 break-words text-[10px] font-bold uppercase leading-5 tracking-[0.12em] text-[#6D2638] sm:text-[11px]"
                  >
                    {office.companyName}
                  </p>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#A47C72]" />

                    <p
                      dir="ltr"
                      className="min-w-0 break-words font-manrope text-xs leading-6 text-[#696164] sm:text-[13px] sm:leading-7"
                    >
                      {office.address}
                    </p>
                  </div>

                  {/* Map link */}
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-6 inline-flex items-center gap-2
                      text-[11px] font-bold uppercase tracking-[0.12em]
                      text-[#702538] transition-colors duration-300
                      hover:text-[#CD2B55]
                      focus-visible:outline-none focus-visible:ring-2
                      focus-visible:ring-[#CD2B55] focus-visible:ring-offset-4
                    "
                  >
                    View location
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Contact footer */}
                <div className="mt-8 border-t border-[#D1C6B9]/60 pt-6">
                  {office.phone ? (
                    <a
                      href={`tel:${office.phone.replace(/[^\d+]/g, "")}`}
                      dir="ltr"
                      className="
                        flex w-fit max-w-full items-center gap-3
                        text-xs font-semibold text-[#393135]
                        transition-colors duration-200
                        hover:text-[#CD2B55]
                        focus-visible:outline-none focus-visible:ring-2
                        focus-visible:ring-[#CD2B55]
                      "
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8F6F3] transition-colors duration-300 group-hover:bg-[#F5E8EB]">
                        <Phone className="h-3.5 w-3.5 text-[#702538]" />
                      </span>

                      <span className="break-all">{office.phone}</span>
                    </a>
                  ) : (
                    <p className="font-manrope text-xs leading-6 text-[#8C8275]">
                      {t("offices.noPhone")}
                    </p>
                  )}
                </div>

                {/* Bottom index */}
                <div className="pointer-events-none absolute bottom-5 right-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-[#8C283F]/50">
                    LOCATION {index + 1}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-5 border-t border-[#D1C6B9]/70 pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md font-manrope text-xs leading-6 text-[#8C8275] sm:text-sm">
            {t("offices.description")}
          </p>

          <Link
            href="/offices"
            className="
              group inline-flex w-fit items-center gap-4
              rounded-[12px_2px] bg-[#421821]
              px-6 py-4 text-xs font-bold text-white
              transition-all duration-300
              hover:bg-[#702538] hover:shadow-lg
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#CD2B55] focus-visible:ring-offset-4
            "
          >
            <span>{t("offices.cta")}</span>

            <ArrowDownRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
