"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";
import dynamic from "next/dynamic";
import CustomerTable, { Customer } from "./CustomerTable";

const CustomerForm = dynamic(() => import("./CustomerForm"), {
  loading: () => <div className="p-8 text-[#051428]">Loading form...</div>,
});

const CustomerDetails = dynamic(() => import("./CustomerDetails"), {
  loading: () => <div className="p-8 text-[#051428]">Loading details...</div>,
});

const initialCustomers: Customer[] = [
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

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [viewState, setViewState] = useState<"list" | "details" | "create" | "edit">("list");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const handleCreateCustomer = (newCustomer: Customer) => {
    setCustomers((prev) => [newCustomer, ...prev]);
    setViewState("list");
  };

  const handleUpdateCustomer = (updatedCustomer: Customer) => {
    setCustomers((prev) =>
      prev.map((c) => (c.id === updatedCustomer.id ? updatedCustomer : c))
    );
    setSelectedCustomer(updatedCustomer);
    setViewState("details");
  };

  return (
    <div className="space-y-6">
      {viewState === "list" && (
        <>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
                CRM
              </p>

              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#051428]">
                Customers
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage registered customer profiles and account details.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedCustomer(null);
                setViewState("create");
              }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[14px_2px] bg-[#4F0908] px-5 text-sm font-semibold text-white transition hover:bg-[#3C0706]"
            >
              <UserPlus className="h-4 w-4" />
              Add Customer
            </button>
          </div>

          <CustomerTable
            customers={customers}
            onView={(customer) => {
              setSelectedCustomer(customer);
              setViewState("details");
            }}
            onEdit={(customer) => {
              setSelectedCustomer(customer);
              setViewState("edit");
            }}
          />
        </>
      )}

      {viewState === "details" && selectedCustomer && (
        <CustomerDetails
          customer={selectedCustomer}
          onBack={() => setViewState("list")}
          onEdit={() => setViewState("edit")}
        />
      )}

      {viewState === "create" && (
        <CustomerForm
          onSubmit={handleCreateCustomer}
          onCancel={() => setViewState("list")}
          submitLabel="Create Customer"
        />
      )}

      {viewState === "edit" && selectedCustomer && (
        <CustomerForm
          initialData={selectedCustomer}
          onSubmit={handleUpdateCustomer}
          onCancel={() => setViewState("details")}
          submitLabel="Save Changes"
        />
      )}
    </div>
  );
}
