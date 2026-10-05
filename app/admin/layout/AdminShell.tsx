"use client";

import { ReactNode, useState } from "react";
import { Menu } from "lucide-react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

interface AdminShellProps {
  children: ReactNode;
}

export default function AdminShell({ children }: AdminShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F3EF] text-[#051428]">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-[90] bg-[#051428]/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <AdminSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main */}
      <div className="min-h-screen lg:pl-[270px]">
        {/* Mobile top bar */}
        <div className="sticky top-0 z-[70] flex h-[68px] items-center border-b border-[#051428]/[0.07] bg-[#F6F3EF]/95 px-5 backdrop-blur-xl lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open admin menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#051428]/10 bg-white text-[#051428] transition hover:border-[#C9A96E]/50"
          >
            <Menu size={20} strokeWidth={1.8} />
          </button>

          <div className="ml-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#4F0908]/60">
              Aseel
            </p>

            <p className="text-sm font-semibold text-[#051428]">
              Administration
            </p>
          </div>
        </div>

        <AdminHeader />

        <main className="px-5 pb-10 pt-6 sm:px-7 lg:px-10 lg:pt-8">
          {children}
        </main>
      </div>
    </div>
  );
}