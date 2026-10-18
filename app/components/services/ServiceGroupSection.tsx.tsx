
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  type LucideIcon,
} from "lucide-react";

import AnimatedLine from "../Common/AnimatedLine";
import { useTranslation } from "../../Language/translator";

export interface ServiceItem {
  id: string;
  number: string;
  image: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  featureKey: string;
  imageAltKey: string;
  href: string;
}

export interface ServiceGroupSectionProps {
  sectionNumber: string;
  eyebrowKey: string;
  headingKey: string;
  descriptionKey: string;
  services: ServiceItem[];
  featured?: boolean;
}

export default function ServiceGroupSection({
  sectionNumber,
  eyebrowKey,
  headingKey,
  descriptionKey,
  services,
  featured = true,
}: ServiceGroupSectionProps) {
  const { t, locale: language } = useTranslation();
  const isRtl = language === "ar";

  const [featuredService, ...regularServices] = services;

  const renderServiceContent = (service: ServiceItem) => {
    const Icon = service.icon;

    return (
      <>
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#421821]/10 bg-[#F8F6F3] text-[#662433] transition-colors duration-300 group-hover:bg-[#421821] group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>

        <h3 className="mb-3 font-jakarta text-xl font-bold text-[#221E20] sm:text-2xl">
          {t(service.titleKey)}
        </h3>

        <p className="mb-5 font-manrope text-xs leading-relaxed text-[#686164] sm:text-sm sm:leading-7">
          {t(service.descriptionKey)}
        </p>

        <div className="mb-6 flex items-start gap-2 border-t border-[#421821]/10 pt-4">
          <Check
            className="mt-0.5 h-4 w-4 shrink-0 text-[#CD2B55]"
            aria-hidden="true"
          />
          <span className="font-manrope text-xs leading-6 text-[#686164] sm:text-sm">
            {t(service.featureKey)}
          </span>
        </div>
      </>
    );
  };

  const renderServiceLink = (service: ServiceItem) => (
    <Link
      href={service.href}
      className="group/link inline-flex items-center gap-2 font-jakarta text-xs font-bold text-[#662433] transition-colors hover:text-[#CD2B55] sm:text-sm"
    >
      <span>{t("services.requestService")}</span>
      <ArrowUpRight
        aria-hidden="true"
        className={`h-4 w-4 transition-transform duration-200 group-hover/link:-translate-y-0.5 ${
          isRtl
            ? "rotate-[-90deg] group-hover/link:-translate-x-0.5"
            : "group-hover/link:translate-x-0.5"
        }`}
      />
    </Link>
  );

  const renderImage = (service: ServiceItem, featured = false) => (
    <div
      className={`relative overflow-hidden ${
        featured
          ? "h-[220px] min-h-[220px] md:col-span-6 md:h-full"
          : "mb-6 h-[180px] w-full rounded-2xl"
      }`}
    >
      <div
        className={`absolute start-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-[#421821]/90 font-jakarta text-xs font-bold text-white backdrop-blur-md ${
          featured ? "start-4 top-4" : ""
        }`}
      >
        {service.number}
      </div>

      <Image
        src={service.image}
        alt={t(service.imageAltKey)}
        fill
        sizes={
          featured
            ? "(max-width: 768px) 100vw, 50vw"
            : "(max-width: 768px) 100vw, 50vw"
        }
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#170303]/20 to-transparent"
      />
    </div>
  );

  if (!featuredService) return null;

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#F8F6F3] py-16 sm:py-24 lg:py-28"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-32 h-[350px] w-[350px] rounded-full bg-[#662433]/[0.05] blur-[110px] ${
          isRtl ? "-left-32" : "-right-32"
        }`}
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <div className="mb-3 inline-flex items-center justify-center rounded-full border border-[#421821]/10 bg-white px-3 py-1 font-jakarta text-xs font-bold text-[#662433]">
            {sectionNumber}
          </div>

          <div className="mb-3">
            <AnimatedLine
              text={t(eyebrowKey)}
              lines={1}
              lineColor="bg-[#CD2B55]"
              textColor="text-[#662433]"
            />
          </div>

          <h2 className="font-jakarta text-3xl font-extrabold leading-tight tracking-tight text-[#221E20] sm:text-4xl lg:text-[44px]">
            {t(headingKey)}
          </h2>

          <p className="mt-4 max-w-xl font-manrope text-xs leading-7 text-[#686164] sm:text-sm">
            {t(descriptionKey)}
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Featured service */}
         {/* First service: featured or regular */}
  {featured ? (
    <article className="group relative grid min-h-[300px] grid-cols-1 overflow-hidden rounded-[24px_4px] border border-[#421821]/10 bg-white shadow-[0_8px_30px_rgba(34,30,32,0.025)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(66,24,33,0.09)] md:grid-cols-12">
      {renderImage(services[0], true)}

      <div className="flex flex-col justify-between p-7 sm:p-9 md:col-span-6">
        <div>{renderServiceContent(services[0])}</div>
        <div className="mt-2">
          {renderServiceLink(services[0])}
        </div>
      </div>
    </article>
  ) : null}

  {/* Remaining services, or all services when none is featured */}
  <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
    {(featured ? services.slice(1) : services).map((service) => (
      <article
        key={service.id}
        className="group relative flex flex-col justify-between overflow-hidden rounded-[24px_4px] border border-[#421821]/10 bg-white p-6 shadow-[0_8px_30px_rgba(34,30,32,0.025)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(66,24,33,0.09)] sm:p-8"
      >
        <div>
          {renderImage(service)}
          {renderServiceContent(service)}
        </div>

        {renderServiceLink(service)}
      </article>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
