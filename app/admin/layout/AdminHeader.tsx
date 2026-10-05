"use client";

import {
  Bell,
  ChevronDown,
  Search,
} from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="hidden h-[76px] items-center justify-between border-b border-[#051428]/[0.07] bg-[#F6F3EF]/90 px-7 backdrop-blur-xl lg:flex lg:px-10">
      {/* Search */}
      <div className="relative w-full max-w-[380px]">
        <Search
          size={17}
          strokeWidth={1.7}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#051428]/35"
        />

        <input
          type="text"
          placeholder="Search shipments, customers..."
          className="
            h-11 w-full rounded-xl
            border border-[#051428]/[0.08]
            bg-white/70
            pl-11 pr-4
            text-sm text-[#051428]
            outline-none
            placeholder:text-[#051428]/30
            transition
            focus:border-[#C9A96E]/60
            focus:bg-white
          "
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button
          aria-label="Notifications"
          className="
            relative flex h-10 w-10 items-center justify-center
            rounded-xl border border-[#051428]/[0.08]
            bg-white/70 text-[#051428]/60
            transition hover:border-[#C9A96E]/50 hover:text-[#051428]
          "
        >
          <Bell size={18} strokeWidth={1.7} />

          <span className="absolute right-[9px] top-[8px] h-1.5 w-1.5 rounded-full bg-[#4F0908]" />
        </button>

        <div className="h-7 w-px bg-[#051428]/10" />

        <button className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4F0908] text-xs font-bold text-[#C9A96E]">
            OE
          </div>

          <div className="text-left">
            <p className="text-xs font-semibold text-[#051428]">
              Omar Ehab
            </p>

            <p className="text-[10px] text-[#051428]/40">
              Administrator
            </p>
          </div>

          <ChevronDown
            size={15}
            className="ml-1 text-[#051428]/35"
          />
        </button>
      </div>
    </header>
  );
}