"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpDown,
  Eye,
  Mail,
  MoreHorizontal,
  Search,
  SlidersHorizontal,
  User,
} from "lucide-react";

export type CustomerStatusType =
  | "Active"
  | "Inactive"
  | "Pending";

export interface Customer {
  id: string;
  company: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  totalShipments: number;
  totalRequests: number;
  status: CustomerStatusType;
  createdAt: string;
}

interface CustomerTableProps {
  customers?: Customer[];
  onView?: (customer: Customer) => void;
  onEdit?: (customer: Customer) => void;
}

const defaultCustomers: Customer[] = [
  {
    id: "CUS-2026-001",
    company: "Ahmed Trading Co.",
    contactPerson: "Ahmed Hassan",
    email: "info@ahmedtrading.com",
    phone: "+20 100 123 4567",
    country: "Egypt",
    totalShipments: 18,
    totalRequests: 7,
    status: "Active",
    createdAt: "Jan 15, 2026",
  },
  {
    id: "CUS-2026-002",
    company: "Nile Imports",
    contactPerson: "Mohamed Ali",
    email: "contact@nileimports.com",
    phone: "+20 111 456 7890",
    country: "Egypt",
    totalShipments: 12,
    totalRequests: 5,
    status: "Active",
    createdAt: "Feb 08, 2026",
  },
  {
    id: "CUS-2026-003",
    company: "Modern Furniture",
    contactPerson: "Omar Khaled",
    email: "sales@modernfurniture.com",
    phone: "+20 102 987 6543",
    country: "Egypt",
    totalShipments: 9,
    totalRequests: 4,
    status: "Active",
    createdAt: "Mar 21, 2026",
  },
  {
    id: "CUS-2026-004",
    company: "Delta Electronics",
    contactPerson: "Karim Samir",
    email: "orders@deltaelectronics.com",
    phone: "+20 109 321 7654",
    country: "Egypt",
    totalShipments: 24,
    totalRequests: 11,
    status: "Active",
    createdAt: "Apr 05, 2026",
  },
  {
    id: "CUS-2026-005",
    company: "Golden Imports",
    contactPerson: "Youssef Adel",
    email: "hello@goldenimports.com",
    phone: "+20 115 654 3210",
    country: "Egypt",
    totalShipments: 6,
    totalRequests: 3,
    status: "Inactive",
    createdAt: "May 12, 2026",
  },
  {
    id: "CUS-2026-006",
    company: "Cairo Retail Group",
    contactPerson: "Mostafa Ibrahim",
    email: "procurement@cairoretail.com",
    phone: "+20 101 765 4321",
    country: "Egypt",
    totalShipments: 3,
    totalRequests: 2,
    status: "Pending",
    createdAt: "Sep 29, 2026",
  },
];

const statusStyles: Record<
  CustomerStatusType,
  string
> = {
  Active:
    "border-emerald-200 bg-emerald-50 text-emerald-700",
  Inactive:
    "border-slate-200 bg-slate-50 text-slate-600",
  Pending:
    "border-amber-200 bg-amber-50 text-amber-700",
};

export default function CustomerTable({
  customers = defaultCustomers,
  onView,
  onEdit,
}: CustomerTableProps) {
  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState<
    "All" | CustomerStatusType
  >("All");

  const [sortNewest, setSortNewest] = useState(true);

  const filteredCustomers = useMemo(() => {
    const query = search.toLowerCase().trim();

    const result = customers.filter((customer) => {
      const matchesSearch =
        !query ||
        customer.id.toLowerCase().includes(query) ||
        customer.company.toLowerCase().includes(query) ||
        customer.contactPerson
          .toLowerCase()
          .includes(query) ||
        customer.email.toLowerCase().includes(query) ||
        customer.phone.toLowerCase().includes(query) ||
        customer.country.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" ||
        customer.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    return [...result].sort((a, b) => {
      const first = new Date(a.createdAt).getTime();
      const second = new Date(b.createdAt).getTime();

      return sortNewest ? second - first : first - second;
    });
  }, [search, statusFilter, customers, sortNewest]);

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
            placeholder="Search company, contact, email..."
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
                    | CustomerStatusType
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
              <option value="All">All customers</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
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
                  Customer
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Contact
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Location
                </th>

                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Shipments
                </th>

                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Requests
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Status
                </th>

                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="group transition hover:bg-slate-50/60"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4F0908]/[0.06] text-sm font-semibold text-[#4F0908]">
                          {getInitials(
                            customer.company
                          )}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-[#051428]">
                            {customer.company}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-400">
                            {customer.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-slate-800">
                        {customer.contactPerson}
                      </p>

                      <div className="mt-1 flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-slate-400" />

                        <span className="text-xs text-slate-400">
                          {customer.email}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span className="text-sm text-slate-700">
                        {customer.country}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-center">
                      <span className="text-sm font-semibold text-[#051428]">
                        {customer.totalShipments}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-center">
                      <span className="text-sm font-semibold text-[#051428]">
                        {customer.totalRequests}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`
                          inline-flex
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          px-2.5
                          py-1
                          text-xs
                          font-medium
                          ${statusStyles[customer.status]}
                        `}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />

                        {customer.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-1">
                        <button
                          type="button"
                          onClick={() => onView?.(customer)}
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
                          aria-label={`View ${customer.company}`}
                        >
                          <Eye className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onEdit?.(customer)}
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
                          aria-label={`More actions for ${customer.company}`}
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
                        <User className="h-5 w-5 text-slate-400" />
                      </div>

                      <h3 className="mt-4 text-sm font-semibold text-[#051428]">
                        No customers found
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
              {filteredCustomers.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-700">
              {customers.length}
            </span>{" "}
            customers
          </p>

          <p className="text-xs text-slate-400">
            Customer management
          </p>
        </div>
      </div>
    </div>
  );
}

function getInitials(company: string) {
  const words = company
    .split(" ")
    .filter(Boolean);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return `${words[0][0]}${words[1][0]}`.toUpperCase();
}