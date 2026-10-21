"use client";

import { useState } from "react";
import {
  Boxes,
  Clock,
  FileCheck,
  Globe,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";

interface Order {
  id: string;
  type: "Import" | "Export";
  customer: string;
  origin: string;
  destination: string;
  cargo: string;
  containers: number;
  customsStatus: "Cleared" | "Pending" | "In Inspection";
  orderStatus: "In Transit" | "Processing" | "Delivered";
  date: string;
}

const initialOrders: Order[] = [
  {
    id: "IE-2026-8801",
    type: "Import",
    customer: "Ahmed Trading Co.",
    origin: "Guangzhou, China",
    destination: "Alexandria Port, Egypt",
    cargo: "Industrial Electronics",
    containers: 4,
    customsStatus: "Cleared",
    orderStatus: "In Transit",
    date: "Oct 04, 2026",
  },
  {
    id: "IE-2026-8802",
    type: "Import",
    customer: "Nile Imports",
    origin: "Shenzhen, China",
    destination: "Sokhna Port, Egypt",
    cargo: "Home Appliances",
    containers: 8,
    customsStatus: "In Inspection",
    orderStatus: "Processing",
    date: "Oct 05, 2026",
  },
  {
    id: "IE-2026-8803",
    type: "Export",
    customer: "Delta Agricultural",
    origin: "Cairo, Egypt",
    destination: "Jeddah, Saudi Arabia",
    cargo: "Fresh Produce",
    containers: 2,
    customsStatus: "Cleared",
    orderStatus: "In Transit",
    date: "Oct 03, 2026",
  },
  {
    id: "IE-2026-8804",
    type: "Import",
    customer: "Modern Furniture",
    origin: "Shanghai, China",
    destination: "Damietta Port, Egypt",
    cargo: "Raw Wood & Hardware",
    containers: 6,
    customsStatus: "Pending",
    orderStatus: "Processing",
    date: "Oct 02, 2026",
  },
  {
    id: "IE-2026-8805",
    type: "Export",
    customer: "Cairo Textiles Co.",
    origin: "Alexandria, Egypt",
    destination: "Piraeus, Greece",
    cargo: "Cotton Fabrics",
    containers: 3,
    customsStatus: "Cleared",
    orderStatus: "Delivered",
    date: "Sep 29, 2026",
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"All" | "Import" | "Export">("All");
  const [customsFilter, setCustomsFilter] = useState<"All" | Order["customsStatus"]>("All");

  const filteredOrders = orders.filter((order) => {
    const matchesQuery =
      !search ||
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.cargo.toLowerCase().includes(search.toLowerCase()) ||
      order.origin.toLowerCase().includes(search.toLowerCase()) ||
      order.destination.toLowerCase().includes(search.toLowerCase());

    const matchesType = typeFilter === "All" || order.type === typeFilter;
    const matchesCustoms = customsFilter === "All" || order.customsStatus === customsFilter;

    return matchesQuery && matchesType && matchesCustoms;
  });

  const totalContainers = orders.reduce((sum, o) => sum + o.containers, 0);
  const clearedCount = orders.filter((o) => o.customsStatus === "Cleared").length;

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
            Operations
          </p>

          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#051428]">
            Import & Export
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Monitor international trade movements, customs status, and container logistics.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            const newOrder: Order = {
              id: `IE-2026-${String(orders.length + 8806)}`,
              type: "Import",
              customer: "New Logistics Partner",
              origin: "Ningbo, China",
              destination: "Alexandria, Egypt",
              cargo: "General Goods",
              containers: 4,
              customsStatus: "Pending",
              orderStatus: "Processing",
              date: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
            };
            setOrders([newOrder, ...orders]);
          }}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-[14px_2px] bg-[#4F0908] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3C0706]"
        >
          <Plus className="h-4 w-4" />
          Create Trade Order
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Active Trade Orders
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4F0908]/[0.06] text-[#4F0908]">
              <Globe className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-3xl font-bold text-[#051428]">{orders.length}</p>
          <p className="mt-1 text-xs text-slate-500">Global trade operations</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Total Containers
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#051428]/[0.06] text-[#051428]">
              <Boxes className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-3xl font-bold text-[#051428]">{totalContainers} TEU</p>
          <p className="mt-1 text-xs text-slate-500">Active shipment capacity</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Customs Clearance Rate
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <FileCheck className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-3xl font-bold text-[#051428]">
            {Math.round((clearedCount / orders.length) * 100)}%
          </p>
          <p className="mt-1 text-xs text-emerald-600 font-medium">
            {clearedCount} of {orders.length} cleared
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Avg Port Transit Time
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Clock className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-3 text-3xl font-bold text-[#051428]">2.4 Days</p>
          <p className="mt-1 text-xs text-slate-500">Customs release speed</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search trade ID, customer, cargo, origin..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-900 outline-none focus:border-[#C9A96E]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {/* Type Filter */}
          <div className="flex rounded-xl border border-slate-200 bg-white p-1">
            {(["All", "Import", "Export"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  typeFilter === type
                    ? "bg-[#051428] text-white"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Customs Filter */}
          <div className="relative">
            <SlidersHorizontal className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <select
              value={customsFilter}
              onChange={(e) => setCustomsFilter(e.target.value as "All" | Order["customsStatus"])}
              className="h-11 appearance-none rounded-xl border border-slate-200 bg-white pl-9 pr-8 text-sm text-slate-700 outline-none focus:border-[#C9A96E]"
            >
              <option value="All">All Customs Status</option>
              <option value="Cleared">Cleared</option>
              <option value="Pending">Pending</option>
              <option value="In Inspection">In Inspection</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Trade ID / Type
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Customer
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Route
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Cargo & Volume
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Customs Status
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Order Status
                </th>
                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="transition hover:bg-slate-50/60">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex rounded-lg px-2 py-1 text-xs font-bold ${
                            order.type === "Import"
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : "bg-purple-50 text-purple-700 border border-purple-200"
                          }`}
                        >
                          {order.type}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[#051428]">{order.id}</p>
                          <p className="text-xs text-slate-400">{order.date}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-slate-800">
                      {order.customer}
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-slate-800">{order.origin}</p>
                      <p className="text-xs text-slate-400">→ {order.destination}</p>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm text-slate-800 font-medium">{order.cargo}</p>
                      <p className="text-xs text-slate-500">{order.containers} Containers (TEU)</p>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border ${
                          order.customsStatus === "Cleared"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : order.customsStatus === "In Inspection"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-slate-50 text-slate-600 border-slate-200"
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {order.customsStatus}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span className="text-sm font-medium text-slate-700">
                        {order.orderStatus}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => {
                          setOrders((prev) =>
                            prev.map((o) =>
                              o.id === order.id
                                ? {
                                    ...o,
                                    customsStatus:
                                      o.customsStatus === "Cleared" ? "Pending" : "Cleared",
                                  }
                                : o
                            )
                          );
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#4F0908]"
                      >
                        Toggle Customs Status
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center text-sm text-slate-500">
                    No trade orders matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
