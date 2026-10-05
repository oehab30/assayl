"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Boxes,
  Building2,
  ChevronRight,
  ClipboardList,
  Globe2,
  LayoutDashboard,
  PackageSearch,
  Settings,
  Ship,
  Users,
  X,
} from "lucide-react";

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
}

const navigation = [
  {
    label: "Overview",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Shipments",
    href: "/admin/Shipments",
    icon: Ship,
  },
  {
    label: "Import & Export",
    href: "/admin/orders",
    icon: Boxes,
  },
  {
    label: "Customer Requests",
    href: "/admin/Requests",
    icon: ClipboardList,
  },
  {
    label: "Customers",
    href: "/admin/Customers",
    icon: Users,
  },
  {
    label: "Services",
    href: "/admin/services",
    icon: PackageSearch,
  },
  {
    label: "Branches",
    href: "/admin/branches",
    icon: Building2,
  },
];

const secondaryNavigation = [
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar({
  open,
  onClose,
}: AdminSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }

    return pathname.startsWith(href);
  };

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-[100] flex w-[270px] flex-col
        bg-[#051428]
        text-white
        transition-transform duration-300
        lg:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* Brand */}
      <div className="flex h-[88px] items-center justify-between border-b border-white/[0.08] px-6">
        <Link
          href="/admin"
          onClick={onClose}
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A96E]/30 bg-[#4F0908] shadow-[0_8px_30px_rgba(79,9,8,0.35)]">
            <Globe2
              size={20}
              strokeWidth={1.5}
              className="text-[#C9A96E]"
            />
          </div>

          <div>
            <p className="text-[17px] font-bold tracking-[0.16em]">
              Aseel
            </p>

            <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.25em] text-white/40">
              Administration
            </p>
          </div>
        </Link>

        <button
          onClick={onClose}
          aria-label="Close sidebar"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-white/50 transition hover:bg-white/5 hover:text-white lg:hidden"
        >
          <X size={19} />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-7">
        <p className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/30">
          Main menu
        </p>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`
                  group relative flex h-[48px] items-center gap-3 rounded-xl px-3
                  text-sm font-medium
                  transition-all duration-200
                  ${
                    active
                      ? "bg-white/[0.09] text-white"
                      : "text-white/50 hover:bg-white/[0.045] hover:text-white"
                  }
                `}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 h-6 w-[2px] -translate-y-1/2 rounded-full bg-[#C9A96E]" />
                )}

                <span
                  className={`
                    flex h-9 w-9 items-center justify-center rounded-lg
                    transition
                    ${
                      active
                        ? "bg-[#4F0908] text-[#C9A96E]"
                        : "bg-white/[0.035] text-white/40 group-hover:text-white"
                    }
                  `}
                >
                  <Icon size={17} strokeWidth={1.7} />
                </span>

                <span>{item.label}</span>

                {active && (
                  <ChevronRight
                    size={14}
                    className="ml-auto text-[#C9A96E]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="my-7 h-px bg-white/[0.07]" />

        <p className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/30">
          Management
        </p>

        <nav className="space-y-1">
          {secondaryNavigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`
                  group relative flex h-[48px] items-center gap-3 rounded-xl px-3
                  text-sm font-medium transition-all duration-200
                  ${
                    active
                      ? "bg-white/[0.09] text-white"
                      : "text-white/50 hover:bg-white/[0.045] hover:text-white"
                  }
                `}
              >
                <span
                  className={`
                    flex h-9 w-9 items-center justify-center rounded-lg
                    ${
                      active
                        ? "bg-[#4F0908] text-[#C9A96E]"
                        : "bg-white/[0.035] text-white/40"
                    }
                  `}
                >
                  <Icon size={17} strokeWidth={1.7} />
                </span>

                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom profile */}
      <div className="border-t border-white/[0.08] p-4">
        <div className="flex items-center gap-3 rounded-xl bg-white/[0.045] p-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4F0908] text-sm font-semibold text-[#C9A96E]">
            OE
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              Omar Ehab
            </p>

            <p className="truncate text-[11px] text-white/35">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}