import {
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Clock3,
  Ship,
} from "lucide-react";
import AdminCard from "../Common/AdminCard";

const stats = [
  {
    label: "Total Shipments",
    value: "248",
    change: "+12.8%",
    positive: true,
    icon: Ship,
    description: "vs. last month",
  },
  {
    label: "In Transit",
    value: "64",
    change: "+5.4%",
    positive: true,
    icon: Boxes,
    description: "active shipments",
  },
  {
    label: "Delivered",
    value: "139",
    change: "+18.2%",
    positive: true,
    icon: CheckCircle2,
    description: "this month",
  },
  {
    label: "Pending Requests",
    value: "21",
    change: "-8.1%",
    positive: true,
    icon: Clock3,
    description: "awaiting action",
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <AdminCard
            key={stat.label}
            className="group relative overflow-hidden p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_45px_rgba(5,20,40,0.07)]"
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#4F0908]/[0.035] blur-2xl" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#051428]/40">
                  {stat.label}
                </p>

                <p className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#051428]">
                  {stat.value}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F0908]/[0.07] text-[#4F0908]">
                <Icon size={18} strokeWidth={1.7} />
              </div>
            </div>

            <div className="relative mt-5 flex items-center gap-2">
              <span
                className={`
                  inline-flex items-center gap-1 text-[10px] font-bold
                  ${
                    stat.positive
                      ? "text-emerald-600"
                      : "text-red-500"
                  }
                `}
              >
                {stat.positive ? (
                  <ArrowUpRight size={13} />
                ) : (
                  <ArrowDownRight size={13} />
                )}

                {stat.change}
              </span>

              <span className="text-[10px] text-[#051428]/35">
                {stat.description}
              </span>
            </div>
          </AdminCard>
        );
      })}
    </div>
  );
}