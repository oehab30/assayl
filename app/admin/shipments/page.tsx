"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";
import ShipmentTable, { Shipment } from "./ShipmentTable";

const ShipmentForm = dynamic(() => import("./ShipmentForm"), {
  loading: () => <div className="p-8 text-[#051428]">Loading form...</div>,
});

const ShipmentDetails = dynamic(() => import("./ShipmentDetails"), {
  loading: () => <div className="p-8 text-[#051428]">Loading details...</div>,
});

const initialShipments: Shipment[] = [
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

export default function ShipmentsPage() {
  const [shipments, setShipments] = useState<Shipment[]>(initialShipments);
  const [viewState, setViewState] = useState<"list" | "details" | "create" | "edit">("list");
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);

  const handleCreateShipment = (newShipment: Shipment) => {
    setShipments((prev) => [newShipment, ...prev]);
    setViewState("list");
  };

  const handleUpdateShipment = (updatedShipment: Shipment) => {
    setShipments((prev) =>
      prev.map((item) => (item.id === updatedShipment.id ? updatedShipment : item))
    );
    setSelectedShipment(updatedShipment);
    setViewState("details");
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
                Shipments
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage and monitor all STARS shipments.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedShipment(null);
                setViewState("create");
              }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[14px_2px] bg-[#4F0908] px-5 text-sm font-semibold text-white transition hover:bg-[#3C0706]"
            >
              <Plus className="h-4 w-4" />
              New Shipment
            </button>
          </div>

          <ShipmentTable
            shipments={shipments}
            onView={(shipment) => {
              setSelectedShipment(shipment);
              setViewState("details");
            }}
            onEdit={(shipment) => {
              setSelectedShipment(shipment);
              setViewState("edit");
            }}
          />
        </>
      )}

      {viewState === "details" && selectedShipment && (
        <ShipmentDetails
          shipment={selectedShipment}
          onBack={() => setViewState("list")}
          onEdit={() => setViewState("edit")}
        />
      )}

      {viewState === "create" && (
        <ShipmentForm
          onSubmit={handleCreateShipment}
          onCancel={() => setViewState("list")}
          submitLabel="Create Shipment"
        />
      )}

      {viewState === "edit" && selectedShipment && (
        <ShipmentForm
          initialData={selectedShipment}
          onSubmit={handleUpdateShipment}
          onCancel={() => setViewState("details")}
          submitLabel="Save Changes"
        />
      )}
    </div>
  );
}