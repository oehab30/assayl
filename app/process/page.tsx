"use client";

import Banner from "../components/Common/Banner";
import PageHero from "../components/Common/PageHero";
import JourneyTimeline from "../components/process/HowWeWork";
import { useTranslation } from "../Language/translator";

export default function ProcessPage() {
  const { t, locale } = useTranslation();
  const isArabic = locale === "ar";

  return (
    <>
      <PageHero
        eyebrow={t("process.eyebrow")}
        title={t("nav.process")}
        description={t("process.description")}
        backgroundImage="https://images.unsplash.com/photo-1579360826591-2c98525b8dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        imageAlt={t("process.imageAlt") || "Assayel team and operations"}
        dir={isArabic ? "rtl" : "ltr"}
        breadcrumbs={[
          { label: t("nav.home"), href: "/" },
          { label: t("nav.process") },
        ]}
        primaryCta={{
          label: t("nav.quote"),
          href: "/quote",
        }}
        secondaryCta={{
          label: t("nav.contact"),
          href: "/contact",
        }}
      />
      <JourneyTimeline />
      <Banner />
    </>
  );
}