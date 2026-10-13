import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, MoveUpRight } from "lucide-react";

import AnimatedLine from "../Common/AnimatedLine";
import { useTranslation } from "../../Language/translator";

function Coordination() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F6F3] py-24 sm:py-28 md:py-32 lg:py-40 xl:py-48"
    >
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#421821_1px,transparent_1px),linear-gradient(90deg,#421821_1px,transparent_1px)] [background-size:80px_80px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-20 h-[500px] w-[500px] rounded-full bg-[#CD2B55]/[0.035] blur-[120px]"
      />

      {/* Container */}
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        {/* Section intro */}
        <div className="mb-16 flex flex-col gap-6 border-b border-[#421821]/10 pb-8 sm:mb-20 sm:flex-row sm:items-end sm:justify-between lg:mb-24">
          <div>
            <AnimatedLine
              text={t("about.eyebrow")}
              lines={1}
              lineColor="bg-[#CD2B55]"
              textColor="text-[#421821]"
            />
          </div>

          <div className="max-w-[280px] font-sans text-[10px] uppercase leading-[1.7] tracking-[0.18em] text-[#4B4A4B] sm:text-right">
            {t("about.markets")}
            <br />
            {t("about.networkLine")}
          </div>
        </div>

        {/* Main grid */}
        <div className="grid items-start gap-14 lg:grid-cols-[1.9fr_2.1fr] lg:gap-20 xl:grid-cols-[2.82fr 3.18fr] xl:gap-17">
          {/* Left — content */}
          <div className="lg:sticky lg:top-32">
            <h2 className="max-w-[670px] font-headline text-[2.8rem] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#221E20] sm:text-[3.6rem] md:text-[4.1rem] lg:text-[4rem] xl:text-[3rem]">
              {t("about.titleLead")}{" "}
              <span className="text-brand-primary">
                {t("about.titleAccent")}
              </span>{" "}
              {t("about.titleTail")}
            </h2>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-brand-accent" />
              <span className="h-px w-20 bg-[#421821]/10" />
            </div>

            <p className="mt-8 max-w-[580px] font-sans text-[15px] leading-[1.85] text-[#4B4A4B] sm:text-[16px] lg:text-[17px]">
              {t("about.description")}
            </p>

            <p className="mt-4 max-w-[560px] font-sans text-[14px] leading-[1.8] text-[#4B4A4B]">
              {t("about.supportingDescription")}
            </p>

            {/* CTA */}
            <Link
              href="/#about"
              className="group relative mt-10 inline-flex items-center gap-4 font-headline text-[11px] font-bold uppercase tracking-[0.16em] text-[#221E20] sm:mt-12"
            >
              <span>{t("about.cta")}</span>

              <span className="flex h-11 w-11 items-center justify-center border border-[#421821]/15 bg-brand-white transition-all duration-500 group-hover:border-[#421821] group-hover:bg-[#421821]">
                <ArrowUpRight className="h-4 w-4 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </span>

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-brand-accent transition-all duration-500 group-hover:w-[calc(100%-60px)]" />
            </Link>

            {/* Trust statement */}
            <div className="mt-14 flex max-w-[420px] items-start gap-4 border-t border-[#421821]/10 pt-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#421821]/15 bg-[#421821]/[0.045]">
                <ShieldCheck
                  className="h-[18px] w-[18px] text-brand-primary"
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <p className="font-headline text-[12px] font-bold tracking-[-0.01em] text-[#221E20] sm:text-[13px]">
                  {t("about.trustTitle")}
                </p>

                <p className="mt-1 font-sans text-[10px] leading-[1.7] text-[#4B4A4B] sm:text-[11px]">
                  {t("about.trustDescription")}
                </p>
              </div>
            </div>
          </div>

          {/* Right — image experience */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-1 -top-12 hidden font-headline text-[100px] font-extrabold leading-none tracking-[-0.08em] text-[#421821]/[0.035] xl:block"
            >
              01
            </div>

            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 z-0 h-24 w-24 border-l border-t border-[#421821]/50"
            />

            {/* Image frame */}
            <div className="relative z-10 overflow-hidden border border-[#421821]/10 bg-[#34161C]">
              <div className="relative h-[400px] w-full sm:h-[500px] md:h-[560px] lg:h-[620px] xl:h-[680px]">
                <Image
                  src="/exper.jpg"
                  alt={t("about.imageAlt")}
                  fill
                  className="object-cover object-center transition-transform duration-[1400ms] ease-out hover:scale-[1.035]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 60vw"
                />

                {/* Image treatment */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#221E20]/80 via-[#221E20]/10 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#221E20]/20 via-transparent to-[#421821]/[0.08]" />

                {/* Image top label */}
                <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-7 sm:top-7">
                  <span className="h-px w-8 bg-white/50" />

                  <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.22em] text-white/65">
                    {t("about.imageLabel")}
                  </span>
                </div>

                {/* Floating info */}
                <div className="absolute bottom-5 left-5 right-5 z-20 border border-white/15 bg-[#221E20]/85 p-5 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:w-[390px] sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#CD2B55]/20 bg-[#CD2B55]/[0.07]">
                      <ShieldCheck
                        className="h-[18px] w-[18px] text-brand-accent"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>
                      <p className="font-headline text-[12px] font-bold uppercase tracking-[0.04em] text-white sm:text-[13px]">
                        {t("about.overlayTitle")}
                      </p>

                      <p className="mt-1.5 font-sans text-[10px] leading-[1.7] text-white/45 sm:text-[11px]">
                        {t("about.overlayDescription")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image footer */}
            <div className="flex items-center justify-between border-b border-[#421821]/10 py-4 pl-1 pr-1">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-brand-accent" />

                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#4B4A4B] sm:text-[10px]">
                  {t("about.globalOperations")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#4B4A4B]/75">
                  {t("about.source")}
                </span>

                <MoveUpRight
                  className="h-3 w-3 text-brand-accent"
                  strokeWidth={1.5}
                />

                <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#4B4A4B]/75">
                  {t("about.destination")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom process strip */}
        <div className="mt-20 grid border-y border-[#421821]/10 sm:grid-cols-3 lg:mt-28">
          {/* Item 1 */}
          <div className="flex items-center gap-5 border-b border-[#421821]/10 py-6 sm:border-b-0 sm:border-r sm:px-7 sm:py-7 lg:px-10">
            <span className="font-headline text-[11px] font-bold text-brand-accent">
              01
            </span>

            <div>
              <p className="font-headline text-[11px] font-bold uppercase tracking-[0.08em] text-[#221E20]">
                {t("about.source")}
              </p>

              <p className="mt-1 font-sans text-[10px] text-[#4B4A4B]">
                {t("about.sourcing")}
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-5 border-b border-[#421821]/10 py-6 sm:border-b-0 sm:border-r sm:px-7 sm:py-7 lg:px-10">
            <span className="font-headline text-[11px] font-bold text-brand-accent">
              02
            </span>

            <div>
              <p className="font-headline text-[11px] font-bold uppercase tracking-[0.08em] text-[#221E20]">
                {t("about.coordinate")}
              </p>

              <p className="mt-1 font-sans text-[10px] text-[#4B4A4B]">
                {t("about.consolidation")}
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-5 py-6 sm:px-7 sm:py-7 lg:px-10">
            <span className="font-headline text-[11px] font-bold text-brand-accent">
              03
            </span>

            <div>
              <p className="font-headline text-[11px] font-bold uppercase tracking-[0.08em] text-[#221E20]">
                {t("about.deliver")}
              </p>

              <p className="mt-1 font-sans text-[10px] text-[#4B4A4B]">
                {t("about.customs")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coordination;
