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
  { key: "branches", href: "/#branches" },
];

const serviceLinks = [
  { key: "importExport", href: "/services" },
  { key: "customs", href: "/services" },
  { key: "warehousing", href: "/services" },
  { key: "importing", href: "/services" },
];

export default function Footer() {
  const { locale, t } = useTranslation();

  const isArabic = locale === "ar";
  const bodyFont = isArabic ? "font-body-ar" : "font-body-en";
  const headlineFont = isArabic
    ? "font-headline-ar"
    : "font-headline-en";

  const brandColor = "#421821";
  const accentColor = "#CD2B55";
  const neutralColor = "#D1C6B9";

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-brand-dark text-white"
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Brand-colored ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 h-[360px] w-[360px] rounded-full blur-[120px]"
        style={{
          backgroundColor: `${accentColor}0D`,
          [isArabic ? "right" : "left"]: "-120px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-9 py-10 sm:py-12 lg:grid-cols-12 lg:gap-8 lg:py-14">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Assayel home"
              className="inline-flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Assayel"
                width={160}
                height={65}
                priority
                className="h-10 w-auto object-contain sm:h-11"
              />
            </Link>

            <div
              className="mt-4 h-px w-9"
              style={{ backgroundColor: accentColor }}
            />

            <p
              className={`mt-4 max-w-sm text-xs leading-6 text-white/50 ${bodyFont}`}
            >
              {t("footer.description")}
            </p>

            {/* Operating markets */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <span
                className={`${bodyFont} text-[9px] font-semibold uppercase tracking-[0.14em]`}
                style={{ color: neutralColor }}
              >
                {t("hero.china")}
              </span>

              <span
                aria-hidden="true"
                className="h-px w-4"
                style={{ backgroundColor: brandColor }}
              />

              <span
                className={`${bodyFont} text-[9px] font-semibold uppercase tracking-[0.14em]`}
                style={{ color: neutralColor }}
              >
                {t("hero.Saudi")}
              </span>

              <span
                aria-hidden="true"
                className="h-px w-4"
                style={{ backgroundColor: brandColor }}
              />

              <span
                className={`${bodyFont} text-[9px] font-semibold uppercase tracking-[0.14em]`}
                style={{ color: neutralColor }}
              >
                {t("hero.egypt")}
              </span>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3
              className={`${headlineFont} text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70`}
            >
              {t("footer.company")}
            </h3>

            <nav
              aria-label={t("footer.company")}
              className="mt-4 flex flex-col items-start gap-3"
            >
              {companyLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`group inline-flex items-center gap-2 text-xs text-white/50 transition-colors duration-300 hover:text-white ${bodyFont}`}
                >
                  <span>{t(`nav.${link.key}`)}</span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className={`h-3 w-3 shrink-0 opacity-0 transition-all duration-300 group-hover:opacity-100 ${
                      isArabic
                        ? "translate-x-1 group-hover:translate-x-0 rotate-[-90deg]"
                        : "-translate-x-1 group-hover:translate-x-0"
                    }`}
                    style={{ color: accentColor }}
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3
              className={`${headlineFont} text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70`}
            >
              {t("footer.services")}
            </h3>

            <nav
              aria-label={t("footer.services")}
              className="mt-4 flex flex-col items-start gap-3"
            >
              {serviceLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`group inline-flex items-center gap-2 text-xs text-white/50 transition-colors duration-300 hover:text-white ${bodyFont}`}
                >
                  <span>{t(`footer.${link.key}`)}</span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className={`h-3 w-3 shrink-0 opacity-0 transition-all duration-300 group-hover:opacity-100 ${
                      isArabic
                        ? "translate-x-1 group-hover:translate-x-0 rotate-[-90deg]"
                        : "-translate-x-1 group-hover:translate-x-0"
                    }`}
                    style={{ color: accentColor }}
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3
              className={`${headlineFont} text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70`}
            >
              {t("footer.office")}
            </h3>

            <div className="mt-4 flex items-start gap-2.5">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: accentColor }}
              />

              <p
                className={`${bodyFont} text-xs leading-5 text-white/50`}
              >
                {t("footer.city")}
                <br />
                {t("footer.region")}
              </p>
            </div>

            <div className="mt-4 flex flex-col items-start gap-3">
              <a
                href="tel:+201008442982"
                dir="ltr"
                className={`inline-flex items-center gap-2.5 text-xs text-white/50 transition-colors duration-300 hover:text-white ${bodyFont}`}
              >
                <Phone
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0"
                  style={{ color: accentColor }}
                />
                <span>+20 100 844 2982</span>
              </a>

              <a
                href="https://wa.me/201008442982"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2.5 text-xs text-white/50 transition-colors duration-300 hover:text-white ${bodyFont}`}
              >
                <MessageCircle
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0"
                  style={{ color: accentColor }}
                />

                <span>{t("footer.whatsapp")}</span>

                <ArrowUpRight
                  aria-hidden="true"
                  className={`h-3 w-3 shrink-0 transition-transform duration-300 ${
                    isArabic
                      ? "rotate-[-90deg] group-hover:-translate-x-0.5"
                      : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  }`}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p
            className={`${bodyFont} text-[10px] leading-5 text-white/35`}
          >
            © {new Date().getFullYear()} STARS.{" "}
            {t("footer.rightsReserved")}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href="/privacy"
              className={`${bodyFont} text-[10px] text-white/35 transition-colors duration-300 hover:text-white/70`}
            >
              {t("footer.privacy")}
            </Link>

            <Link
              href="/terms"
              className={`${bodyFont} text-[10px] text-white/35 transition-colors duration-300 hover:text-white/70`}
            >
              {t("footer.terms")}
            </Link>

            <span
              dir="ltr"
              className={`${headlineFont} text-[9px] font-semibold tracking-[0.12em]`}
              style={{ color: `${neutralColor}66` }}
            >
              CN · HK · EG
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
