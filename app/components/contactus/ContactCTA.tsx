

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Ship } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "../../Language/translator";

export default function ContactCTA() {
  const { t, locale } = useTranslation();
  const reduceMotion = useReducedMotion();
  const isArabic = locale === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-[#221e20] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Static background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-[#cd2b55]/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full bg-[#662433]/40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#421821] via-[#34161c] to-[#221e20] px-6 py-10 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:px-10 sm:py-14 lg:px-14 lg:py-16"
        >
          {/* Decorative accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-[#d1c6b9] via-[#cd2b55] to-transparent"
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2">
                <Ship size={15} className="text-[#e5b8c5]" />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e5b8c5]">
                  {t("contactCTA.eyebrow")}
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {t("contactCTA.heading")}
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                {t("contactCTA.description")}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#cd2b55] px-6 py-4 text-sm font-bold text-white transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#cd2b55]/30"
                >
                  {t("contactCTA.primaryButton")}

                  <ArrowDown
                    size={17}
                    className={isArabic ? "rotate-180" : ""}
                  />
                </Link>

                <Link
                  href={isArabic ? "/ar/services" : "/en/services"}
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-white/15"
                >
                  {t("contactCTA.secondaryButton")}

                  <ArrowUpRight
                    size={17}
                    className={isArabic ? "-rotate-90" : ""}
                  />
                </Link>
              </div>
            </div>

            {/* Brand detail */}
            <div className="hidden lg:flex lg:justify-center">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#cd2b55]/40 bg-[#cd2b55]/10">
                  <Ship
                    size={42}
                    strokeWidth={1.2}
                    className="text-[#e5b8c5]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
