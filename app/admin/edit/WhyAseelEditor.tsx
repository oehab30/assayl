
"use client";

import { useState, useEffect } from "react";
import { Plus, Save, Trash2 } from "lucide-react";

type Language = "en" | "ar";

interface LocalizedText {
  en: string;
  ar: string;
}

interface Feature {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface WhyAseelContent {
  eyebrow: LocalizedText;
  headingLead: LocalizedText;
  headingAccent: LocalizedText;
  description: LocalizedText;
  principles: LocalizedText;
  features: Feature[];
}

const defaultContent: WhyAseelContent = {
  eyebrow: {
    en: "Why Aseel",
    ar: "لماذا أصيل",
  },
  headingLead: {
    en: "A reliable partner",
    ar: "شريك موثوق",
  },
  headingAccent: {
    en: "for your business.",
    ar: "لأعمالك.",
  },
  description: {
    en: "We connect sourcing, coordination and logistics to make your importing journey easier.",
    ar: "نربط بين التوريد والتنسيق والخدمات اللوجستية لتسهيل رحلة الاستيراد.",
  },
  principles: {
    en: "Our principles",
    ar: "مبادئنا",
  },
  features: [
    {
      id: "01",
      title: {
        en: "Reliable Sourcing",
        ar: "توريد موثوق",
      },
      description: {
        en: "We help you find suitable suppliers and coordinate your sourcing requirements.",
        ar: "نساعدك في العثور على الموردين المناسبين وتنسيق متطلبات التوريد.",
      },
    },
    {
      id: "02",
      title: {
        en: "Experienced Team",
        ar: "فريق ذو خبرة",
      },
      description: {
        en: "Our team supports you throughout the importing and shipping process.",
        ar: "يدعمك فريقنا طوال عملية الاستيراد والشحن.",
      },
    },
    {
      id: "03",
      title: {
        en: "Flexible Solutions",
        ar: "حلول مرنة",
      },
      description: {
        en: "We tailor our services to your shipment, business and requirements.",
        ar: "نصمم خدماتنا لتناسب شحنتك وأعمالك ومتطلباتك.",
      },
    },
    {
      id: "04",
      title: {
        en: "Coordinated Operations",
        ar: "عمليات منسقة",
      },
      description: {
        en: "We coordinate the different stages to help keep your shipment moving.",
        ar: "ننسق مختلف المراحل للمساعدة في استمرار حركة شحنتك.",
      },
    },
  ],
};

type Props = {
  initialData?: WhyAseelContent;
  onSave?: (content: WhyAseelContent) => void | Promise<void>;
};

export default function WhyAseelEditor({
  initialData = defaultContent,
  onSave,
}: Props) {
  const [content, setContent] = useState<WhyAseelContent>(() =>
    structuredClone(initialData)
  );
  const [language, setLanguage] = useState<Language>("en");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        const response = await fetch("/api/website-sections?slug=why-assayl");
        if (response.ok) {
          const json = await response.json();
          if (json.data?.content && isMounted) {
            setContent(json.data.content);
          }
        }
      } catch {
        // Fall back to default/initialData
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  function updateSection(
    field: Exclude<keyof WhyAseelContent, "features">,
    value: string
  ) {
    setContent((current) => ({
      ...current,
      [field]: {
        ...current[field],
        [language]: value,
      },
    }));
  }

  function updateFeature(
    id: string,
    field: "title" | "description",
    value: string
  ) {
    setContent((current) => ({
      ...current,
      features: current.features.map((feature) =>
        feature.id === id
          ? {
              ...feature,
              [field]: {
                ...feature[field],
                [language]: value,
              },
            }
          : feature
      ),
    }));
  }

  function addFeature() {
    setContent((current) => ({
      ...current,
      features: [
        ...current.features,
        {
          id: String(Date.now()),
          title: { en: "New feature", ar: "ميزة جديدة" },
          description: {
            en: "Enter a description.",
            ar: "أدخل وصفًا.",
          },
        },
      ],
    }));
  }

  function removeFeature(id: string) {
    setContent((current) => ({
      ...current,
      features: current.features.filter((item) => item.id !== id),
    }));
  }

  async function handleSave() {
    setSaving(true);
    setMessage("");

    try {
      if (onSave) {
        await onSave(content);
        setMessage("Changes saved successfully.");
      } else {
        const response = await fetch("/api/website-sections?slug=why-assayl", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content, published: true }),
        });

        if (response.ok) {
          setMessage("Changes saved successfully to database!");
        } else {
          const resJson = await response.json().catch(() => ({}));
          if (response.status === 403) {
            setMessage("Saved locally in session (Server auth requirement: Sign in as an authorized admin to update live DB).");
          } else {
            setMessage(`Update note: ${resJson.error || "Saved in local state."}`);
          }
        }
      }
    } catch {
      setMessage("Saved in local state.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-7">
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96E]">
            Website content / Homepage
          </p>
          <h1 className="mt-2 text-2xl font-bold text-[#051428]">
            Why Aseel Editor
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Edit the text displayed in your public Why Aseel section.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center justify-center gap-2 rounded-[14px_2px] bg-[#4F0908] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#350605] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Save size={17} />
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </header>

      <div className="flex gap-2 rounded-xl border border-slate-200 bg-white p-2">
        {(["en", "ar"] as Language[]).map((lang) => (
          <button
            type="button"
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition ${
              language === lang
                ? "bg-[#051428] text-white"
                : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            {lang === "en" ? "English" : "العربية"}
          </button>
        ))}
      </div>

      {message && (
        <p
          role="status"
          className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600"
        >
          {message}
        </p>
      )}

      <section className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6">
        <div>
          <h2 className="font-semibold text-[#051428]">Section heading</h2>
          <p className="mt-1 text-sm text-slate-500">
            These fields control the left column of your section.
          </p>
        </div>

        <Field
          label="Eyebrow"
          value={content.eyebrow[language]}
          onChange={(v) => updateSection("eyebrow", v)}
        />

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Heading lead"
            value={content.headingLead[language]}
            onChange={(v) => updateSection("headingLead", v)}
          />

          <Field
            label="Heading accent"
            value={content.headingAccent[language]}
            onChange={(v) => updateSection("headingAccent", v)}
          />
        </div>

        <Field
          label="Description"
          value={content.description[language]}
          onChange={(v) => updateSection("description", v)}
          textarea
        />

        <Field
          label="Supporting statement"
          value={content.principles[language]}
          onChange={(v) => updateSection("principles", v)}
        />
      </section>

      <section className="space-y-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-bold text-[#051428]">
              Feature items
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Manage the four items displayed in the right column.
            </p>
          </div>

          <button
            type="button"
            onClick={addFeature}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#4F0908] hover:bg-slate-50"
          >
            <Plus size={16} />
            Add feature
          </button>
        </div>

        {content.features.map((feature, index) => (
          <article
            key={feature.id}
            className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-[0.15em] text-slate-400">
                FEATURE {String(index + 1).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={() => removeFeature(feature.id)}
                aria-label={`Delete feature ${index + 1}`}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 size={17} />
              </button>
            </div>

            <Field
              label="Feature title"
              value={feature.title[language]}
              onChange={(v) => updateFeature(feature.id, "title", v)}
            />

            <Field
              label="Feature description"
              value={feature.description[language]}
              onChange={(v) =>
                updateFeature(feature.id, "description", v)
              }
              textarea
            />
          </article>
        ))}
      </section>

      <div className="flex justify-end border-t border-slate-200 pt-5">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-[14px_2px] bg-[#4F0908] px-6 py-3 text-sm font-semibold text-white hover:bg-[#350605] disabled:opacity-60"
        >
          <Save size={17} />
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
}) {
  const commonClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#4F0908] focus:ring-2 focus:ring-[#4F0908]/10";

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      {textarea ? (
        <textarea
          dir="auto"
          rows={4}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${commonClass} resize-y leading-6`}
        />
      ) : (
        <input
          dir="auto"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={commonClass}
        />
      )}
    </div>
  );
}
