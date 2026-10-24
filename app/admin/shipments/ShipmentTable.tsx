"use client";

import { useMemo, useState } from "react";
import {
  Eye,
  MoreHorizontal,
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  Ship,
  Plane,
  Truck,
  Package,
} from "lucide-react";

import ShipmentStatus, {
  ShipmentStatusType,
} from "./ShipmentStatus";

export interface Shipment {
  id: string;
  customer: string;
  origin: string;
  destination: string;
  method: "Sea" | "Air" | "Land";
  cargo: string;
  status: ShipmentStatusType;
  eta: string;
  createdAt: string;
}

interface ShipmentTableProps {
  shipments?: Shipment[];
  onView?: (shipment: Shipment) => void;
  onEdit?: (shipment: Shipment) => void;
}

const defaultShipments: Shipment[] = [
  {
    id: "ST-2026-00124",
    customer: "Ahmed Trading Co.",
    origin: "Guangzhou, China",
    destination: "Cairo, Egypt",
    method: "Sea",
    cargo: "Electronics",
    status: "In Transit",
    eta: "Oct 12, 2026",
    createdAt: "Sep 28, 2026",
  },
  {
    id: "ST-2026-00123",
    customer: "Nile Imports",
    origin: "Shenzhen, China",
    destination: "Alexandria, Egypt",
    method: "Sea",
    cargo: "Home Appliances",
    status: "Delivered",
    eta: "Oct 02, 2026",
    createdAt: "Sep 15, 2026",
  },
  {
    id: "ST-2026-00122",
    customer: "Modern Furniture",
    origin: "Shanghai, China",
    destination: "Cairo, Egypt",
    method: "Sea",
    cargo: "Furniture",
    status: "Processing",
    eta: "Oct 18, 2026",
    createdAt: "Oct 01, 2026",
  },
  {
    id: "ST-2026-00121",
    customer: "Delta Electronics",
    origin: "Hong Kong",
    destination: "Cairo, Egypt",
    method: "Air",
    cargo: "Electronic Parts",
    status: "In Transit",
    eta: "Oct 08, 2026",
    createdAt: "Sep 30, 2026",
  },
  {
    id: "ST-2026-00120",
    customer: "Golden Imports",
    origin: "Yiwu, China",
    destination: "Alexandria, Egypt",
    method: "Sea",
    cargo: "General Cargo",
    status: "Delayed",
    eta: "Oct 15, 2026",
    createdAt: "Sep 22, 2026",
  },
  {
    id: "ST-2026-00119",
    customer: "Cairo Retail Group",
    origin: "Guangzhou, China",
    destination: "Cairo, Egypt",
    method: "Air",
    cargo: "Fashion Items",
    status: "Pending",
    eta: "Oct 20, 2026",
    createdAt: "Oct 03, 2026",
  },
];

function MethodIcon({
  method,
}: {
  method: Shipment["method"];
}) {
  if (method === "Air") {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4F0908]/[0.06] text-[#4F0908]">
        <Plane className="h-4 w-4" />
      </div>
    );
  }

  if (method === "Land") {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#051428]/[0.06] text-[#051428]">
        <Truck className="h-4 w-4" />
      </div>
    );
  }

  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C9A96E]/[0.15] text-[#8A6B31]">
      <Ship className="h-4 w-4" />
    </div>
  );
}

export default function ShipmentTable({
  shipments = defaultShipments,
  onView,
  onEdit,
}: ShipmentTableProps) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "All" | ShipmentStatusType
  >("All");

  const [sortNewest, setSortNewest] = useState(true);

  const filteredShipments = useMemo(() => {
    const query = search.toLowerCase().trim();

    const result = shipments.filter((shipment) => {
      const matchesSearch =
        !query ||
        shipment.id.toLowerCase().includes(query) ||
        shipment.customer.toLowerCase().includes(query) ||
        shipment.origin.toLowerCase().includes(query) ||
        shipment.destination.toLowerCase().includes(query) ||
        shipment.cargo.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" ||
        shipment.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    return [...result].sort((a, b) => {
      const first = new Date(a.createdAt).getTime();
      const second = new Date(b.createdAt).getTime();

      return sortNewest ? second - first : first - second;
    });
  }, [search, statusFilter, shipments, sortNewest]);

  return (
    <div className="space-y-5">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search shipment, customer, cargo..."
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              pl-10
              pr-4
              text-sm
              text-slate-900
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-[#C9A96E]
              focus:ring-2
              focus:ring-[#C9A96E]/10
            "
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <SlidersHorizontal className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(
                  event.target.value as
                    | "All"
                    | ShipmentStatusType
                )
              }
              className="
                h-11
                appearance-none
                rounded-xl
                border
                border-slate-200
                bg-white
                pl-9
                pr-9
                text-sm
                text-slate-700
                outline-none
                focus:border-[#C9A96E]
              "
            >
              <option value="All">All statuses</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="In Transit">In Transit</option>
              <option value="Delivered">Delivered</option>
              <option value="Delayed">Delayed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => setSortNewest((value) => !value)}
            className="
              inline-flex
              h-11
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              text-sm
              font-medium
              text-slate-700
              transition
              hover:border-[#C9A96E]
              hover:text-[#4F0908]
            "
          >
            <ArrowUpDown className="h-4 w-4" />

            {sortNewest ? "Newest" : "Oldest"}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Shipment
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Customer
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Route
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Cargo
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Status
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  ETA
                </th>

                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredShipments.length > 0 ? (
                filteredShipments.map((shipment) => (
                  <tr
                    key={shipment.id}
                    className="group transition hover:bg-slate-50/60"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <MethodIcon method={shipment.method} />

                        <div>
                          <p className="text-sm font-semibold text-[#051428]">
                            {shipment.id}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-400">
                            {shipment.createdAt}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-slate-800">
                        {shipment.customer}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <div className="text-sm">
                        <p className="font-medium text-slate-800">
                          {shipment.origin}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          → {shipment.destination}
                        </p>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-slate-400" />

                        <span className="text-sm text-slate-700">
                          {shipment.cargo}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <ShipmentStatus status={shipment.status} />
                    </td>

                    <td className="px-5 py-4">
                      <span className="text-sm font-medium text-slate-700">
                        {shipment.eta}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-1">
                        <button
                          type="button"
                          onClick={() => onView?.(shipment)}
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            text-slate-400
                            transition
                            hover:bg-[#051428]/[0.05]
                            hover:text-[#051428]
                          "
                          aria-label={`View ${shipment.id}`}
                        >
                          <Eye className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onEdit?.(shipment)}
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            text-slate-400
                            transition
                            hover:bg-[#4F0908]/[0.05]
                            hover:text-[#4F0908]
                          "
                          aria-label={`More actions for ${shipment.id}`}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-16 text-center"
                  >
                    <div className="mx-auto flex max-w-sm flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                        <Search className="h-5 w-5 text-slate-400" />
                      </div>

                      <h3 className="mt-4 text-sm font-semibold text-[#051428]">
                        No shipments found
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Try changing your search or filter.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-2 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {filteredShipments.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-700">
              {shipments.length}
            </span>{" "}
            shipments
          </p>

          <p className="text-xs text-slate-400">
            Shipment management
          </p>
        </div>
      </div>
    </div>
  );
}