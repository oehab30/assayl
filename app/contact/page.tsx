"use client";

import PageHero from "../components/Common/PageHero";
import RequestFormSection from "../components/contactus/RequestFormSection";
import Banner from "../components/Common/Banner";
import OfficesSection from "../components/Home/Ouroffices";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { useTranslation } from "../Language/translator";

export default function ContactPage() {
  const { t, locale } = useTranslation();
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: t("nav.home"), href: "/#home" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const contactChannels = [
    {
      title: "Direct Phone Call",
      description: "Speak directly with our logistics operational team.",
      value: "+20 100 844 2982",
      href: "tel:+201008442982",
      icon: Phone,
      badge: "24/7 Hotline",
    },
    {
      title: "WhatsApp Express",
      description: "Instant inquiry response and container status updates.",
      value: "+20 100 844 2982",
      href: "https://wa.me/201008442982",
      icon: MessageCircle,
      badge: "Instant Chat",
    },
    {
      title: "Official Email Support",
      description: "For formal RFQs, commercial offers, and documentation.",
      value: "info@assayllogistics.com",
      href: "mailto:info@assayllogistics.com",
      icon: Mail,
      badge: "Fast Response",
    },
    {
      title: "Operating Hours",
      description: "China, Hong Kong & Egypt offices active schedule.",
      value: "Mon - Sat: 08:00 AM - 06:00 PM",
      href: "#contact",
      icon: Clock,
      badge: "Business Hours",
    },
  ];

  return (
    <main className="relative isolate overflow-hidden bg-[#F8F6F3]">
      {/* Hero Banner */}
      <PageHero
        eyebrow={t("requestForm.eyebrow")}
        title={isArabic ? "تواصل مع فريق أصيل اللوجستي" : "Get in Touch with Assayel Logistics"}
        description={
          isArabic
            ? "نحن هنا لمساعدتك في جميع استفسارات الشحن والاستيراد والتصدير والتخليص الجمركي بين الصين ومصر والسعودية."
            : "We are here to support your global trade, freight shipping, customs clearance, and sourcing across China, Saudi Arabia, and Egypt."
        }
        breadcrumbs={breadcrumbs}
        backgroundImage="/hero2.jpg"
        imageAlt="Assayel Contact Support"
        dir={isArabic ? "rtl" : "ltr"}
      />

      {/* Contact Channels Grid */}
      <section dir={isArabic ? "rtl" : "ltr"} className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#CD2B55]">
              Communication Channels
            </span>
            <h2 className="mt-2 text-3xl font-bold text-[#221E20] sm:text-4xl">
              {isArabic ? "طرق التواصل المباشر" : "Direct Contact Channels"}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col justify-between rounded-2xl border border-[#D1C6B9]/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#CD2B55]/50 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#421821]/[0.06] text-[#662433] group-hover:bg-[#421821] group-hover:text-white transition">
                        <Icon size={20} />
                      </div>
                      <span className="rounded-full bg-[#F8F6F3] px-2.5 py-1 text-[10px] font-bold uppercase text-[#662433]">
                        {channel.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-bold text-[#221E20]">{channel.title}</h3>
                    <p className="mt-1.5 text-xs text-[#706467] leading-5">{channel.description}</p>
                  </div>

                  <p dir="ltr" className="mt-6 text-sm font-bold text-[#662433] group-hover:text-[#CD2B55] transition">
                    {channel.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <OfficesSection />

      {/* Interactive Form Section */}
      <RequestFormSection />

      {/* Bottom Banner */}
      <Banner />
    </main>
  );
}
