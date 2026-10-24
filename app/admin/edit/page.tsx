"use client";

import { useState } from "react";
import { Building2, LayoutTemplate, Sparkles, UserCheck } from "lucide-react";
import HeroEditor from "./HeroEditor";
import OurStoryEditor from "./OurStoryEditor";
import OfficesEditor from "./OfficesEditor";
// import WhyAseelEditor from "./WhyAseelEditor";

export default function EditPage() {
  const [activeTab, setActiveTab] = useState<"hero" | "story" | "offices" | "why">("hero");

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
          Website Content Management System (CMS)
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#051428]">
          Public Site Content Editor
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Customize website headlines, descriptions, media, and regional office information in real-time.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveTab("hero")}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
            activeTab === "hero"
              ? "bg-[#051428] text-white"
              : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
          }`}
        >
          <LayoutTemplate size={15} />
          Hero Banner
        </button>

        <button
          onClick={() => setActiveTab("story")}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
            activeTab === "story"
              ? "bg-[#051428] text-white"
              : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
          }`}
        >
          <UserCheck size={15} />
          Our Story / About
        </button>

        <button
          onClick={() => setActiveTab("offices")}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
            activeTab === "offices"
              ? "bg-[#051428] text-white"
              : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Building2 size={15} />
          Offices & Locations
        </button>

        <button
          onClick={() => setActiveTab("why")}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
            activeTab === "why"
              ? "bg-[#051428] text-white"
              : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
          }`}
        >
          <Sparkles size={15} />
          Why Aseel Section
        </button>
      </div>

      {/* Active Editor Panel */}
      {/* {activeTab === "hero" && <HeroEditor />} */}
      {/* {activeTab === "story" && <OurStoryEditor />} */}
      {/* {activeTab === "offices" && <OfficesEditor />} */}
      {/* {activeTab === "why" && <WhyAseelEditor />} */}
    </div>
  );
}
