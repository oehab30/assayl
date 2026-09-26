"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslation } from "../../components/Language/translator";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-[70vh] bg-slate-50 px-5 pb-20 pt-36 sm:px-8 lg:px-10">
      <section className="mx-auto max-w-4xl">
        <p className="font-jakarta text-xs font-bold uppercase tracking-[0.18em] text-[#005293]">
          {t("contact.eyebrow")}
        </p>
        <h1 className="mt-4 font-jakarta text-4xl font-bold text-[#071827] sm:text-5xl">
          {t("contact.title")}
        </h1>
        <p className="mt-5 max-w-2xl font-manrope leading-7 text-slate-600">
          {t("contact.description")}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="tel:+201008442982"
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 text-[#071827] transition-colors hover:border-[#005293]"
          >
            <Phone className="h-5 w-5 text-[#005293]" />
            <span>
              <span className="block text-sm font-semibold">{t("contact.phone")}</span>
              <span className="mt-1 block text-sm text-slate-500">+20 100 844 2982</span>
            </span>
          </a>
          <a
            href="https://wa.me/201008442982"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 text-[#071827] transition-colors hover:border-[#005293]"
          >
            <MessageCircle className="h-5 w-5 text-[#005293]" />
            <span>
              <span className="block text-sm font-semibold">{t("contact.whatsapp")}</span>
              <span className="mt-1 block text-sm text-slate-500">+20 100 844 2982</span>
            </span>
          </a>
          <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 text-[#071827] sm:col-span-2">
            <MapPin className="h-5 w-5 text-[#005293]" />
            <span>
              <span className="block text-sm font-semibold">{t("contact.office")}</span>
              <span className="mt-1 block text-sm text-slate-500">{t("contact.address")}</span>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
