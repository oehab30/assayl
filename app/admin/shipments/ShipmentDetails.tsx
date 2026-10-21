"use client";

import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock3,
  Copy,
  FileText,
  MapPin,
  Package,
  Plane,
  Ship,
  Truck,
  User,
} from "lucide-react";

import ShipmentStatus from "./ShipmentStatus";
import { Shipment } from "./ShipmentTable";

interface ShipmentDetailsProps {
  shipment: Shipment;
  onBack?: () => void;
  onEdit?: () => void;
}

const timeline = [
  {
    title: "Shipment created",
    description: "Shipment was created in the STARS system.",
    date: "Oct 03, 2026 · 09:20",
    completed: true,
  },
  {
    title: "Cargo received",
    description: "Cargo received at the China warehouse.",
    date: "Oct 04, 2026 · 14:35",
    completed: true,
  },
  {
    title: "Consolidation completed",
    description: "Cargo inspected and consolidated for shipping.",
    date: "Oct 05, 2026 · 11:10",
    completed: true,
  },
  {
    title: "Departed from origin",
    description: "Shipment departed from China.",
    date: "Oct 06, 2026 · 18:45",
    completed: true,
  },
  {
    title: "Arrived at destination",
    description: "Shipment arrival at Egypt destination.",
    date: "Estimated Oct 12, 2026",
    completed: false,
  },
];

export default function ShipmentDetails({
  shipment,
  onBack,
  onEdit,
}: ShipmentDetailsProps) {
  const MethodIcon =
    shipment.method === "Air"
      ? Plane
      : shipment.method === "Land"
        ? Truck
        : Ship;

  const copyShipmentId = async () => {
    try {
      await navigator.clipboard.writeText(
        shipment.id
      );
    } catch {
      // Clipboard may not be available in some environments.
    }
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="
                mt-1
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                bg-white
                text-slate-500
                transition
                hover:border-[#C9A96E]
                hover:text-[#051428]
              "
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          )}

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-[#051428]">
                {shipment.id}
              </h1>

              <ShipmentStatus
                status={shipment.status}
                size="md"
              />
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Shipment details and operational timeline.
            </p>
          </div>
        </div>

        {onEdit && (
          <button
            type="button"
            onClick={onEdit}
            className="
              h-11
              rounded-[14px_2px]
              bg-[#4F0908]
              px-5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#3C0706]
            "
          >
            Edit Shipment
          </button>
        )}
      </div>

      {/* Overview */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <InfoCard
          icon={<User className="h-4 w-4" />}
          label="Customer"
          value={shipment.customer}
        />

        <InfoCard
          icon={<Package className="h-4 w-4" />}
          label="Cargo"
          value={shipment.cargo}
        />

        <InfoCard
          icon={<CalendarDays className="h-4 w-4" />}
          label="Estimated Arrival"
          value={shipment.eta}
        />

        <InfoCard
          icon={<MethodIcon className="h-4 w-4" />}
          label="Shipping Method"
          value={shipment.method}
        />
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        {/* Main */}
        <div className="space-y-6">
          {/* Route */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-[#051428]">
                  Shipment Route
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Current route for this shipment.
                </p>
              </div>

              <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-[#C9A96E]/10 text-[#8A6B31] sm:flex">
                <MapPin className="h-4 w-4" />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <RoutePoint
                label="Origin"
                value={shipment.origin}
                icon={<MapPin className="h-4 w-4" />}
              />

              <div className="hidden md:flex items-center gap-2">
                <span className="h-px w-14 bg-slate-200" />

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A96E]/40 bg-[#C9A96E]/10 text-[#8A6B31]">
                  <MethodIcon className="h-4 w-4" />
                </div>

                <span className="h-px w-14 bg-slate-200" />
              </div>

              <RoutePoint
                label="Destination"
                value={shipment.destination}
                icon={<MapPin className="h-4 w-4" />}
                destination
              />
            </div>
          </section>

          {/* Timeline */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-7">
              <h2 className="text-base font-semibold text-[#051428]">
                Shipment Timeline
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Track the progress of this shipment.
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-4 left-[15px] top-4 w-px bg-slate-200" />

              <div className="space-y-7">
                {timeline.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="relative flex gap-4"
                  >
                    <div
                      className={`
                        relative
                        z-10
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border-4
                        border-white
                        ${
                          item.completed
                            ? "bg-[#4F0908] text-white"
                            : "bg-slate-200 text-slate-400"
                        }
                      `}
                    >
                      {item.completed ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Clock3 className="h-3.5 w-3.5" />
                      )}
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3
                          className={`text-sm font-semibold ${
                            item.completed
                              ? "text-[#051428]"
                              : "text-slate-500"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <span className="text-xs text-slate-400">
                          {item.date}
                        </span>
                      </div>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Shipment ID */}
          <section className="rounded-2xl border border-slate-200 bg-[#051428] p-5 text-white sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A96E]">
              Shipment Reference
            </p>

            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="break-all text-lg font-semibold">
                {shipment.id}
              </span>

              <button
                type="button"
                onClick={copyShipmentId}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-white/10
                  text-white/70
                  transition
                  hover:bg-white/15
                  hover:text-white
                "
                aria-label="Copy shipment ID"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 h-px bg-white/10" />

            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="text-white/50">
                Created
              </span>

              <span className="font-medium text-white/90">
                {shipment.createdAt}
              </span>
            </div>
          </section>

          {/* Customer */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F0908]/[0.06] text-[#4F0908]">
                <User className="h-4 w-4" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Customer
                </p>

                <p className="mt-1 text-sm font-semibold text-[#051428]">
                  {shipment.customer}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
              <DetailRow
                label="Customer type"
                value="Business"
              />

              <DetailRow
                label="Shipment count"
                value="12 shipments"
              />

              <DetailRow
                label="Account status"
                value="Active"
              />
            </div>
          </section>

          {/* Notes */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-[#C9A96E]" />

              <h2 className="text-sm font-semibold text-[#051428]">
                Internal Notes
              </h2>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Shipment requires inspection before final
              departure confirmation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
          {icon}
        </div>

        <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
          {label}
        </span>
      </div>

      <p className="mt-4 truncate text-sm font-semibold text-[#051428]">
        {value}
      </p>
    </div>
  );
}

function RoutePoint({
  label,
  value,
  icon,
  destination = false,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  destination?: boolean;
}) {
  return (
    <div className={destination ? "md:text-right" : ""}>
      <div
        className={`flex items-center gap-2 ${
          destination ? "md:justify-end" : ""
        }`}
      >
        <span className="text-slate-400">{icon}</span>

        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-semibold text-[#051428]">
        {value}
      </p>
    </div>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span className="text-right text-sm font-medium text-slate-700">
        {value}
      </span>
    </div>
  );
}