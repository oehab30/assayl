"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpDown,
  Eye,
  FileText,
  MoreHorizontal,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import RequestStatus, {
  RequestStatusType,
} from "./RequestStatus";

export interface CustomerRequest {
  id: string;
  customer: string;
  email: string;
  phone: string;
  service: string;
  origin: string;
  destination: string;
  cargo: string;
  status: RequestStatusType;
  createdAt: string;
  requestedDate: string;
  message?: string;
}

interface RequestTableProps {
  requests?: CustomerRequest[];
  onView?: (request: CustomerRequest) => void;
  onEdit?: (request: CustomerRequest) => void;
}

const defaultRequests: CustomerRequest[] = [
  {
    id: "REQ-2026-00148",
    customer: "Ahmed Trading Co.",
    email: "info@ahmedtrading.com",
    phone: "+20 100 123 4567",
    service: "Import & Export",
    origin: "Guangzhou, China",
    destination: "Cairo, Egypt",
    cargo: "Electronics",
    status: "New",
    createdAt: "Oct 05, 2026",
    requestedDate: "Oct 15, 2026",
    message:
      "We need assistance importing electronic products from Guangzhou.",
  },
  {
    id: "REQ-2026-00147",
    customer: "Nile Imports",
    email: "contact@nileimports.com",
    phone: "+20 111 456 7890",
    service: "Customs Clearance",
    origin: "Alexandria Port",
    destination: "Cairo, Egypt",
    cargo: "Home Appliances",
    status: "Reviewing",
    createdAt: "Oct 04, 2026",
    requestedDate: "Oct 12, 2026",
    message:
      "Requesting customs clearance support for an incoming shipment.",
  },
  {
    id: "REQ-2026-00146",
    customer: "Modern Furniture",
    email: "sales@modernfurniture.com",
    phone: "+20 102 987 6543",
    service: "Sea Freight",
    origin: "Shanghai, China",
    destination: "Cairo, Egypt",
    cargo: "Furniture",
    status: "Quoted",
    createdAt: "Oct 03, 2026",
    requestedDate: "Oct 20, 2026",
    message:
      "Looking for a competitive sea freight quotation.",
  },
  {
    id: "REQ-2026-00145",
    customer: "Delta Electronics",
    email: "orders@deltaelectronics.com",
    phone: "+20 109 321 7654",
    service: "Air Freight",
    origin: "Hong Kong",
    destination: "Cairo, Egypt",
    cargo: "Electronic Parts",
    status: "Approved",
    createdAt: "Oct 02, 2026",
    requestedDate: "Oct 08, 2026",
  },
  {
    id: "REQ-2026-00144",
    customer: "Golden Imports",
    email: "hello@goldenimports.com",
    phone: "+20 115 654 3210",
    service: "Warehousing",
    origin: "Yiwu, China",
    destination: "Cairo, Egypt",
    cargo: "General Cargo",
    status: "Completed",
    createdAt: "Sep 29, 2026",
    requestedDate: "Oct 05, 2026",
  },
  {
    id: "REQ-2026-00143",
    customer: "Cairo Retail Group",
    email: "procurement@cairoretail.com",
    phone: "+20 101 765 4321",
    service: "Third-Party Import",
    origin: "Guangzhou, China",
    destination: "Alexandria, Egypt",
    cargo: "Fashion Items",
    status: "Rejected",
    createdAt: "Sep 28, 2026",
    requestedDate: "Oct 10, 2026",
    message:
      "Customer request was rejected due to unavailable shipping window.",
  },
];

export default function RequestTable({
  requests = defaultRequests,
  onView,
  onEdit,
}: RequestTableProps) {
  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState<
    "All" | RequestStatusType
  >("All");

  const [sortNewest, setSortNewest] = useState(true);

  const filteredRequests = useMemo(() => {
    const query = search.toLowerCase().trim();

    const result = requests.filter((request) => {
      const matchesSearch =
        !query ||
        request.id.toLowerCase().includes(query) ||
        request.customer.toLowerCase().includes(query) ||
        request.email.toLowerCase().includes(query) ||
        request.service.toLowerCase().includes(query) ||
        request.origin.toLowerCase().includes(query) ||
        request.destination.toLowerCase().includes(query) ||
        request.cargo.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" ||
        request.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    return [...result].sort((a, b) => {
      const first = new Date(a.createdAt).getTime();
      const second = new Date(b.createdAt).getTime();

      return sortNewest ? second - first : first - second;
    });
  }, [search, statusFilter, requests, sortNewest]);

  return (
    <div className="space-y-5">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search request, customer, service..."
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
                    | RequestStatusType
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
              <option value="New">New</option>
              <option value="Reviewing">Reviewing</option>
              <option value="Quoted">Quoted</option>
              <option value="Approved">Approved</option>
              <option value="Completed">Completed</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() =>
              setSortNewest((value) => !value)
            }
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
          <table className="w-full min-w-[1100px] text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Request
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Customer
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Service
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Route
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Status
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Created
                </th>

                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredRequests.length > 0 ? (
                filteredRequests.map((request) => (
                  <tr
                    key={request.id}
                    className="group transition hover:bg-slate-50/60"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4F0908]/[0.06] text-[#4F0908]">
                          <FileText className="h-4 w-4" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-[#051428]">
                            {request.id}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-400">
                            {request.requestedDate}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-slate-800">
                        {request.customer}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {request.email}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <span className="text-sm font-medium text-slate-700">
                        {request.service}
                      </span>

                      <p className="mt-1 text-xs text-slate-400">
                        {request.cargo}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <div className="text-sm">
                        <p className="font-medium text-slate-800">
                          {request.origin}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          → {request.destination}
                        </p>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <RequestStatus status={request.status} />
                    </td>

                    <td className="px-5 py-4">
                      <span className="text-sm font-medium text-slate-700">
                        {request.createdAt}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-1">
                        <button
                          type="button"
                          onClick={() => onView?.(request)}
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
                          aria-label={`View ${request.id}`}
                        >
                          <Eye className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onEdit?.(request)}
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
                          aria-label={`More actions for ${request.id}`}
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
                        No requests found
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

        <div className="flex flex-col gap-2 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {filteredRequests.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-700">
              {requests.length}
            </span>{" "}
            requests
          </p>

          <p className="text-xs text-slate-400">
            Customer request management
          </p>
        </div>
      </div>
    </div>
  );
}