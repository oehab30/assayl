"use client";

import { useState } from "react";
import {
  BarChart3,
  Globe2,
  PieChart,
  Ship,
  TrendingUp,
  Users,
} from "lucide-react";

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState("2026 Q3");

  const freightBreakdown = [
    { mode: "Sea Freight (FCL / LCL)", percentage: 68, volume: "1,680 TEU", growth: "+14.2%" },
    { mode: "Air Freight Express", percentage: 22, volume: "420 Tons", growth: "+8.7%" },
    { mode: "Land Transport & Customs", percentage: 10, volume: "190 Trips", growth: "+5.1%" },
  ];

  const topRoutes = [
    { origin: "Guangzhou, China", destination: "Cairo / Alexandria", share: "45%" },
    { origin: "Shenzhen, China", destination: "Cairo / Sokhna", share: "28%" },
    { origin: "Yiwu / Shanghai", destination: "Alexandria Port", share: "18%" },
    { origin: "Hong Kong (Air Hub)", destination: "Cairo Intl. Airport", share: "9%" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
            Insights & Analytics
          </p>

          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#051428]">
            Operational Performance KPIs
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Real-time analytics on shipment volumes, route distribution, and SLAs.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-1">
          {["2026 Q3", "2026 Q2", "Full Year 2026"].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                timeframe === tf
                  ? "bg-[#051428] text-white"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Total Revenue
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <TrendingUp className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-3xl font-bold text-[#051428]">$1,420,500</p>
          <p className="mt-1 text-xs text-emerald-600 font-semibold">+16.4% vs previous quarter</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Shipments Completed
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4F0908]/[0.06] text-[#4F0908]">
              <Ship className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-3xl font-bold text-[#051428]">842</p>
          <p className="mt-1 text-xs text-slate-500">100% fulfill rate</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              On-Time Delivery SLA
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <BarChart3 className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-3xl font-bold text-[#051428]">94.8%</p>
          <p className="mt-1 text-xs text-blue-600 font-semibold">+2.1% SLA gain</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Active Business Clients
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#051428]/[0.06] text-[#051428]">
              <Users className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-3xl font-bold text-[#051428]">128</p>
          <p className="mt-1 text-xs text-slate-500">89% recurring importers</p>
        </div>
      </div>

      {/* Main Breakdown Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Freight Mode Breakdown */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-base font-bold text-[#051428]">Volume by Freight Mode</h2>
              <p className="text-xs text-slate-400">Distribution across transportation channels</p>
            </div>
            <PieChart className="h-5 w-5 text-[#C9A96E]" />
          </div>

          <div className="mt-6 space-y-5">
            {freightBreakdown.map((item) => (
              <div key={item.mode} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-800">{item.mode}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500">{item.volume}</span>
                    <span className="font-bold text-[#051428]">{item.percentage}%</span>
                  </div>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-[#4F0908]"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Trade Routes */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-base font-bold text-[#051428]">Top Trade Corridors</h2>
              <p className="text-xs text-slate-400">Primary import/export origin and destination pairs</p>
            </div>
            <Globe2 className="h-5 w-5 text-[#C9A96E]" />
          </div>

          <div className="mt-6 divide-y divide-slate-100">
            {topRoutes.map((route) => (
              <div key={route.origin} className="flex items-center justify-between py-3.5">
                <div>
                  <p className="text-sm font-semibold text-[#051428]">{route.origin}</p>
                  <p className="text-xs text-slate-400">→ {route.destination}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-[#051428]">{route.share}</span>
                  <p className="text-[10px] text-slate-400">total volume</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
