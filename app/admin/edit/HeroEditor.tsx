"use client";

import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { fetchSectionContent, saveSectionContent } from "@/lib/cms/content-store";

export interface HeroContent {
  eyebrow: { en: string; ar: string };
  titleLead: { en: string; ar: string };
  titleAccent: { en: string; ar: string };
  titleTail: { en: string; ar: string };
  description: { en: string; ar: string };
  primaryCtaText: { en: string; ar: string };
  secondaryCtaText: { en: string; ar: string };
  videoUrl: string;
}

const defaultHeroContent: HeroContent = {
  eyebrow: { en: "International Freight & Logistics", ar: "الشحن الدولي والخدمات اللوجستية" },
  titleLead: { en: "Your trusted bridge for", ar: "جسركم الموثوق لخدمات" },
  titleAccent: { en: "China-Middle East", ar: "الصين والشرق الأوسط" },
  titleTail: { en: "trade & shipping.", ar: "للتجارة والشحن." },
  description: {
    en: "We coordinate end-to-end sourcing, customs clearance, and freight solutions connecting Guangzhou, Hong Kong, Saudi Arabia, and Egypt.",
    ar: "ننسق عمليات التوريد والتخليص الجمركي وحلول الشحن التي تربط كوانزو وهونغ كونغ والسعودية ومصر.",
  },
  primaryCtaText: { en: "Request a Quote", ar: "طلب عرض سعر" },
  secondaryCtaText: { en: "Explore Services", ar: "استكشف خدماتنا" },
  videoUrl: "/Hero_video.mp4",
};

export default function HeroEditor() {
  const [content, setContent] = useState<HeroContent>(defaultHeroContent);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    fetchSectionContent<HeroContent>("hero", defaultHeroContent).then(setContent);
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const result = await saveSectionContent<HeroContent>("hero", content);
    setStatusMessage(result.message);
    setSaving(false);
  };

  const updateField = (
    field: keyof Omit<HeroContent, "videoUrl">,
    value: string
  ) => {
    setContent((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [language]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#051428]">Hero Banner CMS Editor</h2>
          <p className="text-sm text-slate-500">Edit homepage hero headline, description, video, and CTAs.</p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-[14px_2px] bg-[#4F0908] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#350605]"
        >
          <Save size={16} />
          {saving ? "Saving..." : "Save Hero Section"}
        </button>
      </div>

      <div className="flex gap-2 rounded-xl border border-slate-200 bg-white p-1.5">
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${
            language === "en" ? "bg-[#051428] text-white" : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => setLanguage("ar")}
          className={`flex-1 rounded-lg py-2 text-xs font-bold transition ${
            language === "ar" ? "bg-[#051428] text-white" : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          العربية
        </button>
      </div>

      {statusMessage && (
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs font-semibold text-slate-700">
          {statusMessage}
        </div>
      )}

      <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Eyebrow Tagline ({language.toUpperCase()})
          </label>
          <input
            value={content.eyebrow[language]}
            onChange={(e) => updateField("eyebrow", e.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Title Lead
            </label>
            <input
              value={content.titleLead[language]}
              onChange={(e) => updateField("titleLead", e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Title Accent (Highlighted)
            </label>
            <input
              value={content.titleAccent[language]}
              onChange={(e) => updateField("titleAccent", e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Title Tail
            </label>
            <input
              value={content.titleTail[language]}
              onChange={(e) => updateField("titleTail", e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Hero Description Paragraph ({language.toUpperCase()})
          </label>
          <textarea
            rows={4}
            value={content.description[language]}
            onChange={(e) => updateField("description", e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3.5 text-sm leading-6 outline-none focus:border-[#C9A96E]"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Primary Button Label
            </label>
            <input
              value={content.primaryCtaText[language]}
              onChange={(e) => updateField("primaryCtaText", e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Secondary Button Label
            </label>
            <input
              value={content.secondaryCtaText[language]}
              onChange={(e) => updateField("secondaryCtaText", e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Background Video File Path / URL
          </label>
          <input
            value={content.videoUrl}
            onChange={(e) => setContent({ ...content, videoUrl: e.target.value })}
            className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
          />
        </div>
      </div>
    </div>
  );
}
