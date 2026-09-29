"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { useTranslation } from "../../Language/translator";

const companyLinks = [
  { key: "about", href: "/about" },
  { key: "process", href: "/process" },
  { key: "branches", href: "/branches" },
];

const serviceLinks = [
  { key: "importExport", href: "/services#import-export" },
  { key: "customs", href: "/services#customs" },
  { key: "warehousing", href: "/services#warehousing" },
  {
    key: "importing",
    href: "/services#third-party-import",
  },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden bg-[#05121f] text-white">
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
           <Link href="/" className="inline-flex items-center">
          <Image
            src="/logo.png"
            alt="STARS"
            width={120}
            height={60}
            className="h-10 w-auto object-contain"
          />
        </Link>

            <div className="mt-4 h-px w-8 bg-[#5ba7df]" />

            <p className="mt-4 max-w-sm font-manrope text-xs leading-6 text-white/40">
              {t("footer.description")}
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <span className="font-jakarta text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
                {t("hero.china")}
              </span>

              <span className="h-px w-5 bg-[#005293]" />

              <span className="font-jakarta text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
                {t("hero.saudia")}
              </span>

              <span className="h-px w-5 bg-[#005293]" />

              <span className="font-jakarta text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
                {t("hero.egypt")}
              </span>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-jakarta text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
              {t("footer.company")}
            </h3>

            <nav className="mt-4 flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="group flex items-center gap-2 font-manrope text-xs text-white/50 transition-colors hover:text-white"
                >
                  <span>{t(`nav.${link.key}`)}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-[#5ba7df]" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-jakarta text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
              {t("footer.services")}
            </h3>

            <nav className="mt-4 flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="group flex items-center gap-2 font-manrope text-xs text-white/50 transition-colors hover:text-white"
                >
                  <span>{t(`footer.${link.key}`)}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-[#5ba7df]" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-jakarta text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
              {t("footer.office")}
            </h3>

            <div className="mt-4 flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5ba7df]" />

              <p className="font-manrope text-xs leading-5 text-white/45">
                {t("footer.city")}
                <br />
                {t("footer.region")}
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href="tel:+201008442982"
                className="flex items-center gap-2.5 font-manrope text-xs text-white/50 transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 text-[#5ba7df]" />
                +20 100 844 2982
              </a>

              <a
                href="https://wa.me/201008442982"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-manrope text-xs text-white/50 transition-colors hover:text-white"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#5ba7df]" />
                {t("footer.whatsapp")}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-manrope text-[10px] text-white/25">
            © {new Date().getFullYear()} STARS. {t("footer.rightsReserved")}
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="font-manrope text-[10px] text-white/25 transition-colors hover:text-white/50"
            >
              {t("footer.privacy")}
            </Link>

            <Link
              href="/terms"
              className="font-manrope text-[10px] text-white/25 transition-colors hover:text-white/50"
            >
              {t("footer.terms")}
            </Link>

            <span className="font-jakarta text-[8px] font-bold tracking-[0.15em] text-white/15">
              CN · HK · EG
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}