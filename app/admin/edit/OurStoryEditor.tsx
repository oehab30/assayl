"use client";

import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { fetchSectionContent, saveSectionContent } from "@/lib/cms/content-store";

export interface OurStoryContent {
  eyebrow: { en: string; ar: string };
  title: { en: string; ar: string };
  paragraph1: { en: string; ar: string };
  paragraph2: { en: string; ar: string };
  sinceYear: string;
  experienceText: { en: string; ar: string };
  imageUrl: string;
}

const defaultStoryContent: OurStoryContent = {
  eyebrow: { en: "Our Story", ar: "قصتنا" },
  title: { en: "Building Seamless Trade Bridges Since 2018", ar: "بناء جسور تجارية سلسة منذ عام 2018" },
  paragraph1: {
    en: "Assayl was founded to simplify complex importing procedures between China, Hong Kong, Saudi Arabia, and Egypt.",
    ar: "تأسست أصيل لتبسيط إجراءات الاستيراد المعقدة بين الصين وهونغ كونغ والسعودية ومصر.",
  },
  paragraph2: {
    en: "Our dedicated logistics team provides complete visibility, sourcing verification, and customs support.",
    ar: "يقدم فريقنا اللوجستي المخصص رؤية كاملة والتحقق من التوريد والدعم الجمركي.",
  },
  sinceYear: "2018",
  experienceText: {
    en: "Over 8 years of operational excellence in China-Middle East logistics.",
    ar: "أكثر من 8 سنوات من التميز التشغيلي في الخدمات اللوجستية بين الصين والشرق الأوسط.",
  },
  imageUrl: "/exper.jpg",
};

export default function OurStoryEditor() {
  const [content, setContent] = useState<OurStoryContent>(defaultStoryContent);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    fetchSectionContent<OurStoryContent>("our-story", defaultStoryContent).then(setContent);
  }, []);

  const handleSave = async () => {
    setSaving(true);
    const result = await saveSectionContent<OurStoryContent>("our-story", content);
    setStatusMessage(result.message);
    setSaving(false);
  };

  const updateField = (
    field: keyof Omit<OurStoryContent, "sinceYear" | "imageUrl">,
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
          <h2 className="text-xl font-bold text-[#051428]">Our Story / About CMS Editor</h2>
          <p className="text-sm text-slate-500">Edit company background, paragraphs, year established, and image.</p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-[14px_2px] bg-[#4F0908] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#350605]"
        >
          <Save size={16} />
          {saving ? "Saving..." : "Save Story Section"}
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
            Eyebrow Tagline
          </label>
          <input
            value={content.eyebrow[language]}
            onChange={(e) => updateField("eyebrow", e.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Section Title ({language.toUpperCase()})
          </label>
          <input
            value={content.title[language]}
            onChange={(e) => updateField("title", e.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Paragraph 1 ({language.toUpperCase()})
          </label>
          <textarea
            rows={3}
            value={content.paragraph1[language]}
            onChange={(e) => updateField("paragraph1", e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3.5 text-sm leading-6 outline-none focus:border-[#C9A96E]"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Paragraph 2 ({language.toUpperCase()})
          </label>
          <textarea
            rows={3}
            value={content.paragraph2[language]}
            onChange={(e) => updateField("paragraph2", e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3.5 text-sm leading-6 outline-none focus:border-[#C9A96E]"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Established Year
            </label>
            <input
              value={content.sinceYear}
              onChange={(e) => setContent({ ...content, sinceYear: e.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Image URL / Path
            </label>
            <input
              value={content.imageUrl}
              onChange={(e) => setContent({ ...content, imageUrl: e.target.value })}
              className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Experience Badge Statement ({language.toUpperCase()})
          </label>
          <input
            value={content.experienceText[language]}
            onChange={(e) => updateField("experienceText", e.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
          />
        </div>
      </div>
    </div>
  );
}
