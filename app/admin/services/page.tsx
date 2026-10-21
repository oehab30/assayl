"use client";

import { useState } from "react";
import {
  Plus,
  Search,
} from "lucide-react";

interface ServiceCatalogItem {
  id: string;
  name: string;
  category: "Import/Export" | "Freight" | "Customs" | "Specialized";
  iconName: string;
  description: string;
  activeRequests: number;
  status: "Active" | "Maintenance" | "Inactive";
}

const initialServices: ServiceCatalogItem[] = [
  {
    id: "SRV-01",
    name: "Full Container Load (FCL) Sea Freight",
    category: "Freight",
    iconName: "Ship",
    description: "Dedicated sea container freight service connecting major Asian ports directly with Egypt.",
    activeRequests: 42,
    status: "Active",
  },
  {
    id: "SRV-02",
    name: "Air Express Shipping",
    category: "Freight",
    iconName: "Plane",
    description: "Time-critical air cargo delivery within 48 to 72 hours for emergency & high-value goods.",
    activeRequests: 19,
    status: "Active",
  },
  {
    id: "SRV-03",
    name: "Comprehensive Customs Clearance",
    category: "Customs",
    iconName: "ClipboardCheck",
    description: "End-to-end documentation, tariff classification, and port clearance handling.",
    activeRequests: 28,
    status: "Active",
  },
  {
    id: "SRV-04",
    name: "Third-Party Import Licensing & On-Behalf Sourcing",
    category: "Import/Export",
    iconName: "Boxes",
    description: "Complete import clearance and license coverage for businesses importing without trade register.",
    activeRequests: 15,
    status: "Active",
  },
  {
    id: "SRV-05",
    name: "Bonded & Temperature-Controlled Warehousing",
    category: "Specialized",
    iconName: "Warehouse",
    description: "Secure storage facilities at major port hubs with inventory tracking.",
    activeRequests: 8,
    status: "Active",
  },
];

export default function ServicesPage() {
  const [services, setServices] = useState<ServiceCatalogItem[]>(initialServices);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const toggleStatus = (id: string) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "Active" ? "Inactive" : "Active" }
          : s
      )
    );
  };

  const filteredServices = services.filter((s) => {
    const matchesSearch =
      !search ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "All" || s.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
            Operations
          </p>

          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#051428]">
            Service Catalog Management
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Configure logistics services offered to clients and monitor active demand.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            const newItem: ServiceCatalogItem = {
              id: `SRV-0${services.length + 1}`,
              name: "Land Transportation & Local Distribution",
              category: "Specialized",
              iconName: "Truck",
              description: "Door-to-door heavy truck transport across Egypt governorates.",
              activeRequests: 5,
              status: "Active",
            };
            setServices([...services, newItem]);
          }}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-[14px_2px] bg-[#4F0908] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3C0706]"
        >
          <Plus className="h-4 w-4" />
          Add Service
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search service catalog..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-900 outline-none focus:border-[#C9A96E]"
          />
        </div>

        <div className="flex rounded-xl border border-slate-200 bg-white p-1">
          {["All", "Freight", "Customs", "Import/Export", "Specialized"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                categoryFilter === cat
                  ? "bg-[#051428] text-white"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Services */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C9A96E]">
                  {service.category}
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border ${
                    service.status === "Active"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-slate-100 text-slate-600 border-slate-200"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {service.status}
                </span>
              </div>

              <h3 className="mt-4 text-base font-bold text-[#051428]">{service.name}</h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">{service.description}</p>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400">Active Requests</p>
                <p className="text-sm font-bold text-[#051428]">{service.activeRequests} inquiries</p>
              </div>

              <button
                type="button"
                onClick={() => toggleStatus(service.id)}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#4F0908]"
              >
                Toggle Status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
