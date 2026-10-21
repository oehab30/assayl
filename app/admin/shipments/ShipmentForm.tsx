"use client";

import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  Save,
  Ship,
  Plane,
  Truck,
  Package,
  MapPin,
  User,
  CalendarDays,
  FileText,
} from "lucide-react";

import {
  Shipment,
} from "./ShipmentTable";

interface ShipmentFormProps {
  initialData?: Partial<Shipment>;
  onSubmit?: (data: Shipment) => void;
  onCancel?: () => void;
  submitLabel?: string;
}

export default function ShipmentForm({
  initialData,
  onSubmit,
  onCancel,
  submitLabel = "Create Shipment",
}: ShipmentFormProps) {
  const [form, setForm] = useState({
    id: initialData?.id ?? "",
    customer: initialData?.customer ?? "",
    origin: initialData?.origin ?? "",
    destination: initialData?.destination ?? "",
    method: initialData?.method ?? "Sea",
    cargo: initialData?.cargo ?? "",
    status: initialData?.status ?? "Pending",
    eta: initialData?.eta ?? "",
    createdAt:
      initialData?.createdAt ??
      new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
  });

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const shipment: Shipment = {
      id: form.id,
      customer: form.customer,
      origin: form.origin,
      destination: form.destination,
      method: form.method as Shipment["method"],
      cargo: form.cargo,
      status: form.status as Shipment["status"],
      eta: form.eta,
      createdAt: form.createdAt,
    };

    onSubmit?.(shipment);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  text-slate-400
                  transition
                  hover:bg-slate-100
                  hover:text-[#051428]
                "
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            )}

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
              Shipment Management
            </span>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-[#051428]">
            {initialData ? "Edit Shipment" : "Create Shipment"}
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Add and manage shipment information.
          </p>
        </div>

        <button
          type="submit"
          className="
            inline-flex
            h-11
            items-center
            justify-center
            gap-2
            rounded-[14px_2px]
            bg-[#4F0908]
            px-5
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition
            hover:bg-[#3C0706]
            focus:outline-none
            focus:ring-2
            focus:ring-[#4F0908]/20
          "
        >
          <Save className="h-4 w-4" />

          {submitLabel}
        </button>
      </div>

      {/* Basic information */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-[#051428]">
            Shipment Information
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Basic identification and customer information.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Shipment ID"
            icon={<Package className="h-4 w-4" />}
            required
          >
            <input
              required
              value={form.id}
              onChange={(event) =>
                updateField("id", event.target.value)
              }
              placeholder="ST-2026-00125"
              className={inputClass}
            />
          </Field>

          <Field
            label="Customer"
            icon={<User className="h-4 w-4" />}
            required
          >
            <input
              required
              value={form.customer}
              onChange={(event) =>
                updateField("customer", event.target.value)
              }
              placeholder="Customer or company name"
              className={inputClass}
            />
          </Field>

          <Field
            label="Cargo Type"
            icon={<Package className="h-4 w-4" />}
            required
          >
            <input
              required
              value={form.cargo}
              onChange={(event) =>
                updateField("cargo", event.target.value)
              }
              placeholder="Electronics, furniture..."
              className={inputClass}
            />
          </Field>

          <Field
            label="Estimated Arrival"
            icon={<CalendarDays className="h-4 w-4" />}
            required
          >
            <input
              required
              value={form.eta}
              onChange={(event) =>
                updateField("eta", event.target.value)
              }
              placeholder="Oct 20, 2026"
              className={inputClass}
            />
          </Field>
        </div>
      </section>

      {/* Route */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-[#051428]">
            Shipping Route
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Define where the shipment starts and where it is going.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Origin"
            icon={<MapPin className="h-4 w-4" />}
            required
          >
            <input
              required
              value={form.origin}
              onChange={(event) =>
                updateField("origin", event.target.value)
              }
              placeholder="Guangzhou, China"
              className={inputClass}
            />
          </Field>

          <Field
            label="Destination"
            icon={<MapPin className="h-4 w-4" />}
            required
          >
            <input
              required
              value={form.destination}
              onChange={(event) =>
                updateField(
                  "destination",
                  event.target.value
                )
              }
              placeholder="Cairo, Egypt"
              className={inputClass}
            />
          </Field>
        </div>
      </section>

      {/* Shipping details */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-[#051428]">
            Shipping Details
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Choose the transportation method and current status.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Shipping Method"
            icon={<Ship className="h-4 w-4" />}
            required
          >
            <div className="grid grid-cols-3 gap-2">
              <MethodButton
                active={form.method === "Sea"}
                icon={<Ship className="h-4 w-4" />}
                label="Sea"
                onClick={() => updateField("method", "Sea")}
              />

              <MethodButton
                active={form.method === "Air"}
                icon={<Plane className="h-4 w-4" />}
                label="Air"
                onClick={() => updateField("method", "Air")}
              />

              <MethodButton
                active={form.method === "Land"}
                icon={<Truck className="h-4 w-4" />}
                label="Land"
                onClick={() =>
                  updateField("method", "Land")
                }
              />
            </div>
          </Field>

          <Field
            label="Shipment Status"
            icon={<Package className="h-4 w-4" />}
            required
          >
            <select
              value={form.status}
              onChange={(event) =>
                updateField("status", event.target.value)
              }
              className={inputClass}
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="In Transit">In Transit</option>
              <option value="Delivered">Delivered</option>
              <option value="Delayed">Delayed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </Field>
        </div>
      </section>

      {/* Notes */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-[#051428]">
            Internal Notes
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Additional information for your operations team.
          </p>
        </div>

        <div className="relative">
          <FileText className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />

          <textarea
            rows={5}
            placeholder="Add internal shipment notes..."
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-slate-200
              bg-white
              px-10
              py-3
              text-sm
              text-slate-800
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-[#C9A96E]
              focus:ring-2
              focus:ring-[#C9A96E]/10
            "
          />
        </div>
      </section>

      {/* Bottom actions */}
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="
              h-11
              rounded-xl
              border
              border-slate-200
              bg-white
              px-5
              text-sm
              font-semibold
              text-slate-700
              transition
              hover:border-slate-300
              hover:bg-slate-50
            "
          >
            Cancel
          </button>
        )}

        <button
          type="submit"
          className="
            inline-flex
            h-11
            items-center
            justify-center
            gap-2
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
          <Save className="h-4 w-4" />

          {submitLabel}
        </button>
      </div>
    </form>
  );
}

const inputClass = `
  h-11
  w-full
  rounded-xl
  border
  border-slate-200
  bg-white
  px-3.5
  text-sm
  text-slate-800
  outline-none
  transition
  placeholder:text-slate-400
  focus:border-[#C9A96E]
  focus:ring-2
  focus:ring-[#C9A96E]/10
`;

function Field({
  label,
  icon,
  required,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
        {icon && (
          <span className="text-slate-400">
            {icon}
          </span>
        )}

        {label}

        {required && (
          <span className="text-[#4F0908]">*</span>
        )}
      </label>

      {children}
    </div>
  );
}

function MethodButton({
  active,
  icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        h-11
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        text-sm
        font-medium
        transition
        ${
          active
            ? "border-[#4F0908] bg-[#4F0908] text-white"
            : "border-slate-200 bg-white text-slate-600 hover:border-[#C9A96E]"
        }
      `}
    >
      {icon}
      {label}
    </button>
  );
}