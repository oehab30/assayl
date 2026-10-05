"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardPlus,
  PackagePlus,
  UserPlus,
} from "lucide-react";
import AdminCard from "../Common/AdminCard";

const actions = [
  {
    title: "Create shipment",
    description: "Add a new shipment",
    href: "/admin/Shipments/new",
    icon: PackagePlus,
  },
  {
    title: "Customer request",
    description: "Create service request",
    href: "/admin/Requests/new",
    icon: ClipboardPlus,
  },
  {
    title: "Add customer",
    description: "Register a customer",
    href: "/admin/Customers/new",
    icon: UserPlus,
  },
];

export default function QuickActions() {
  return (
    <AdminCard className="p-5 sm:p-6">
      <div className="mb-5">
        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#4F0908]/60">
          Shortcuts
        </p>

        <h2 className="mt-1 text-base font-bold text-[#051428]">
          Quick actions
        </h2>
      </div>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="
                group flex items-center gap-3
                rounded-xl border border-[#051428]/[0.06]
                bg-[#F8F7F5]
                p-3
                transition
                hover:border-[#C9A96E]/50
                hover:bg-white
              "
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4F0908] text-[#C9A96E]">
                <Icon size={17} strokeWidth={1.7} />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-bold text-[#051428]">
                  {action.title}
                </p>

                <p className="mt-0.5 text-[10px] text-[#051428]/40">
                  {action.description}
                </p>
              </div>

              <ArrowUpRight
                size={15}
                className="ml-auto text-[#051428]/25 transition group-hover:text-[#4F0908]"
              />
            </Link>
          );
        })}
      </div>

      <div className="mt-5 rounded-xl bg-[#051428] p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C9A96E]">
              Operations
            </p>

            <p className="mt-1 text-xs font-semibold text-white">
              94.2% delivery performance
            </p>
          </div>

          <span className="text-[10px] font-semibold text-emerald-400">
            +3.8%
          </span>
        </div>

        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[94%] rounded-full bg-[#C9A96E]" />
        </div>
      </div>
    </AdminCard>
  );
}