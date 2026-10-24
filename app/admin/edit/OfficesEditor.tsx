"use client";

import { useEffect, useState } from "react";
import { Plus, Save, Trash2 } from "lucide-react";

export interface OfficeLocationCMS {
  id: string;
  badge: string;
  title: { en: string; ar: string };
  companyName: string;
  address: string;
  phone: string;
}

export interface OfficesContent {
  eyebrow: { en: string; ar: string };
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  locations: OfficeLocationCMS[];
}

const defaultOfficesContent: OfficesContent = {
  eyebrow: { en: "Our Network", ar: "شبكتنا" },
  title: { en: "Strategic Locations across China, Hong Kong & Egypt", ar: "مواقع استراتيجية عبر الصين وهونغ كونغ ومصر" },
  description: {
    en: "Our regional hubs provide local coordination, warehouse consolidation, and direct support.",
    ar: "توفر مراكزنا الإقليمية التنسيق المحلي وتجميع المستودعات والدعم المباشر.",
  },
  locations: [
    {
      id: "01",
      badge: "Hong Kong / KSA Trade Hub",
      title: { en: "Hong Kong Headquarters", ar: "مقر هونغ كونغ" },
      companyName: "Assayel EMAA TRADE LIMITED",
      address: "FLAT 1512, 15/F, LUCKY CENTRE, NO. 165-171 WAN CHAI ROAD, WAN CHAI, HONG KONG",
      phone: "+852 2891 0000",
    },
    {
      id: "02",
      badge: "China Sourcing Hub",
      title: { en: "Guangzhou Sourcing Center", ar: "مركز كوانزو للتوريد" },
      companyName: "Guangzhou Assayel International Supply Chain Co., Limited",
      address: "Room E77-4611, No. 372 Huan Shi Dong Road, Guangzhou City, Guangdong Province, China",
      phone: "+86 185 6551 1660",
    },
    {
      id: "03",
      badge: "Egypt Operations Hub",
      title: { en: "Cairo Logistics Branch", ar: "فرع القاهرة اللوجستي" },
      companyName: "Assayel - Essam El-Din El-Sayed",
      address: "Badr City, Cairo, Arab Republic of Egypt",
      phone: "+20 111 844 2982",
    },
  ],
};

export default function OfficesEditor() {
  const [content, setContent] = useState<OfficesContent>(defaultOfficesContent);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaving(false);
  };

  const updateSectionField = (
    field: "eyebrow" | "title" | "description",
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

  const updateLocation = (
    id: string,
    field: "badge" | "companyName" | "address" | "phone",
    value: string
  ) => {
    setContent((prev) => ({
      ...prev,
      locations: prev.locations.map((loc) =>
        loc.id === id ? { ...loc, [field]: value } : loc
      ),
    }));
  };

  const updateLocationTitle = (id: string, value: string) => {
    setContent((prev) => ({
      ...prev,
      locations: prev.locations.map((loc) =>
        loc.id === id
          ? {
              ...loc,
              title: {
                ...loc.title,
                [language]: value,
              },
            }
          : loc
      ),
    }));
  };

  const addLocation = () => {
    const newLoc: OfficeLocationCMS = {
      id: String(content.locations.length + 1).padStart(2, "0"),
      badge: "New Branch Location",
      title: { en: "New Regional Branch", ar: "فرع إقليمي جديد" },
      companyName: "Assayel Logistics",
      address: "Enter address...",
      phone: "+20 100 000 0000",
    };
    setContent({ ...content, locations: [...content.locations, newLoc] });
  };

  const removeLocation = (id: string) => {
    setContent({
      ...content,
      locations: content.locations.filter((loc) => loc.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#051428]">Our Offices & Network CMS Editor</h2>
          <p className="text-sm text-slate-500">Edit regional branch locations, addresses, and phone numbers.</p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-[14px_2px] bg-[#4F0908] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#350605]"
        >
          <Save size={16} />
          {saving ? "Saving..." : "Save Offices Section"}
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
            Section Eyebrow
          </label>
          <input
            value={content.eyebrow[language]}
            onChange={(e) => updateSectionField("eyebrow", e.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Section Heading ({language.toUpperCase()})
          </label>
          <input
            value={content.title[language]}
            onChange={(e) => updateSectionField("title", e.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
            Section Description ({language.toUpperCase()})
          </label>
          <textarea
            rows={3}
            value={content.description[language]}
            onChange={(e) => updateSectionField("description", e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3.5 text-sm leading-6 outline-none focus:border-[#C9A96E]"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-[#051428]">Office Locations ({content.locations.length})</h3>
          <button
            type="button"
            onClick={addLocation}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-[#4F0908] hover:bg-slate-50"
          >
            <Plus size={15} />
            Add Location
          </button>
        </div>

        {content.locations.map((loc) => (
          <div key={loc.id} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-[#C9A96E]">LOCATION {loc.id}</span>
              <button
                type="button"
                onClick={() => removeLocation(loc.id)}
                className="text-slate-400 hover:text-red-600"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-600">Location Title ({language.toUpperCase()})</label>
                <input
                  value={loc.title[language]}
                  onChange={(e) => updateLocationTitle(loc.id, e.target.value)}
                  className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-600">Badge Label</label>
                <input
                  value={loc.badge}
                  onChange={(e) => updateLocation(loc.id, "badge", e.target.value)}
                  className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-600">Company Legal Name</label>
                <input
                  value={loc.companyName}
                  onChange={(e) => updateLocation(loc.id, "companyName", e.target.value)}
                  className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-600">Contact Phone Number</label>
                <input
                  value={loc.phone}
                  onChange={(e) => updateLocation(loc.id, "phone", e.target.value)}
                  className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1 block text-xs font-semibold text-slate-600">Address Details</label>
                <input
                  value={loc.address}
                  onChange={(e) => updateLocation(loc.id, "address", e.target.value)}
                  className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#C9A96E]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
