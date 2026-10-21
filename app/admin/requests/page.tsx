"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";
import RequestTable, { CustomerRequest } from "./RequestTable";

const RequestDetails = dynamic(() => import("./RequestDetails"), {
  loading: () => <div className="p-8 text-[#051428]">Loading request details...</div>,
});

const initialRequests: CustomerRequest[] = [
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
    message: "We need assistance importing electronic products from Guangzhou.",
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
    message: "Requesting customs clearance support for an incoming shipment.",
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
    message: "Looking for a competitive sea freight quotation.",
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
    message: "Customer request was rejected due to unavailable shipping window.",
  },
];

export default function RequestsPage() {
  const [requests, setRequests] = useState<CustomerRequest[]>(initialRequests);
  const [viewState, setViewState] = useState<"list" | "details" | "create">("list");
  const [selectedRequest, setSelectedRequest] = useState<CustomerRequest | null>(null);

  // New Request Form State
  const [newRequest, setNewRequest] = useState({
    customer: "",
    email: "",
    phone: "",
    service: "Import & Export",
    origin: "",
    destination: "",
    cargo: "",
    message: "",
  });

  const handleStatusChange = (requestId: string, newStatus: CustomerRequest["status"]) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === requestId ? { ...r, status: newStatus } : r))
    );
    if (selectedRequest && selectedRequest.id === requestId) {
      setSelectedRequest((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const created: CustomerRequest = {
      id: `REQ-2026-${String(requests.length + 149).padStart(5, "0")}`,
      customer: newRequest.customer,
      email: newRequest.email,
      phone: newRequest.phone,
      service: newRequest.service,
      origin: newRequest.origin || "Not specified",
      destination: newRequest.destination || "Not specified",
      cargo: newRequest.cargo || "General Cargo",
      status: "New",
      createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      requestedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      message: newRequest.message,
    };

    setRequests([created, ...requests]);
    setNewRequest({
      customer: "",
      email: "",
      phone: "",
      service: "Import & Export",
      origin: "",
      destination: "",
      cargo: "",
      message: "",
    });
    setViewState("list");
  };

  return (
    <div className="space-y-6">
      {viewState === "list" && (
        <>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
                Operations
              </p>

              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#051428]">
                Customer Requests
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Review and manage customer service requests.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setViewState("create")}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[14px_2px] bg-[#4F0908] px-5 text-sm font-semibold text-white transition hover:bg-[#3C0706]"
            >
              <Plus className="h-4 w-4" />
              New Request
            </button>
          </div>

          <RequestTable
            requests={requests}
            onView={(request) => {
              setSelectedRequest(request);
              setViewState("details");
            }}
            onEdit={(request) => {
              setSelectedRequest(request);
              setViewState("details");
            }}
          />
        </>
      )}

      {viewState === "details" && selectedRequest && (
        <div className="space-y-6">
          {/* Quick status updater controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4">
            <span className="text-sm font-semibold text-[#051428]">
              Update Status for {selectedRequest.id}:
            </span>
            <div className="flex flex-wrap gap-2">
              {(["New", "Reviewing", "Quoted", "Approved", "Completed", "Rejected"] as CustomerRequest["status"][]).map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => handleStatusChange(selectedRequest.id, st)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                    selectedRequest.status === st
                      ? "bg-[#051428] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          <RequestDetails
            request={selectedRequest}
            onBack={() => setViewState("list")}
          />
        </div>
      )}

      {viewState === "create" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#051428]">Create New Customer Request</h2>
            <button
              type="button"
              onClick={() => setViewState("list")}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleCreateRequest} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Customer Name *</label>
                <input
                  required
                  value={newRequest.customer}
                  onChange={(e) => setNewRequest({ ...newRequest, customer: e.target.value })}
                  placeholder="Company or Contact Person"
                  className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email *</label>
                <input
                  required
                  type="email"
                  value={newRequest.email}
                  onChange={(e) => setNewRequest({ ...newRequest, email: e.target.value })}
                  placeholder="email@company.com"
                  className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
                <input
                  value={newRequest.phone}
                  onChange={(e) => setNewRequest({ ...newRequest, phone: e.target.value })}
                  placeholder="+20 100 000 0000"
                  className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Service Required</label>
                <select
                  value={newRequest.service}
                  onChange={(e) => setNewRequest({ ...newRequest, service: e.target.value })}
                  className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
                >
                  <option value="Import & Export">Import & Export</option>
                  <option value="Customs Clearance">Customs Clearance</option>
                  <option value="Sea Freight">Sea Freight</option>
                  <option value="Air Freight">Air Freight</option>
                  <option value="Warehousing">Warehousing</option>
                  <option value="Third-Party Import">Third-Party Import</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Origin</label>
                <input
                  value={newRequest.origin}
                  onChange={(e) => setNewRequest({ ...newRequest, origin: e.target.value })}
                  placeholder="e.g. Guangzhou, China"
                  className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Destination</label>
                <input
                  value={newRequest.destination}
                  onChange={(e) => setNewRequest({ ...newRequest, destination: e.target.value })}
                  placeholder="e.g. Cairo, Egypt"
                  className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Cargo / Product Details</label>
              <input
                value={newRequest.cargo}
                onChange={(e) => setNewRequest({ ...newRequest, cargo: e.target.value })}
                placeholder="Electronics, Spare Parts..."
                className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-[#C9A96E]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Customer Message / Notes</label>
              <textarea
                rows={4}
                value={newRequest.message}
                onChange={(e) => setNewRequest({ ...newRequest, message: e.target.value })}
                placeholder="Additional notes..."
                className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-[#C9A96E]"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setViewState("list")}
                className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-[#4F0908] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#3C0706]"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}