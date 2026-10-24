"use client";

import { ChangeEvent, useRef } from "react";
import { Image as ImageIcon, Upload, X } from "lucide-react";
import Image from "next/image";

interface ImageUploaderProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  aspectRatio?: "video" | "square" | "wide";
}

export default function ImageUploader({
  label,
  value,
  onChange,
  aspectRatio = "wide",
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Convert file to base64 Data URL for instant rendering & persistent CMS storage
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === "string") {
        onChange(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "h-[160px] w-full",
  }[aspectRatio];

  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </label>

      <div className="space-y-3">
        {value ? (
          <div className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 ${aspectClasses}`}>
            {value.startsWith("data:") || value.startsWith("/") || value.startsWith("http") ? (
              <Image
                src={value}
                alt="Uploaded preview"
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
                Invalid Image Path
              </div>
            )}

            <button
              type="button"
              onClick={() => onChange("")}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-white transition hover:bg-red-600"
              title="Remove image"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-6 text-center transition hover:border-[#C9A96E] hover:bg-slate-50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm text-[#4F0908]">
              <Upload size={20} />
            </div>

            <p className="mt-3 text-xs font-bold text-[#051428]">
              Click to upload image file
            </p>

            <p className="mt-1 text-[11px] text-slate-400">
              PNG, JPG, WEBP or GIF (Auto-optimized for CMS)
            </p>
          </div>
        )}

        <div className="flex gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex h-9 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <ImageIcon size={14} />
            {value ? "Replace Image File" : "Choose Image File"}
          </button>

          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Or paste image URL / file path"
            className="h-9 flex-1 rounded-xl border border-slate-200 bg-white px-3 text-xs outline-none focus:border-[#C9A96E]"
          />
        </div>
      </div>
    </div>
  );
}
