"use client";

import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  Building2,
  Globe2,
  Mail,
  Phone,
  Save,
  User,
} from "lucide-react";

import {
  Customer,
  CustomerStatusType,
} from "./CustomerTable";

interface CustomerFormProps {
  initialData?: Partial<Customer>;
  onSubmit?: (customer: Customer) => void;
  onCancel?: () => void;
  submitLabel?: string;
}

export default function CustomerForm({
  initialData,
  onSubmit,
  onCancel,
  submitLabel = "Create Customer",
}: CustomerFormProps) {
  const [form, setForm] = useState({
    id: initialData?.id ?? "",
    company: initialData?.company ?? "",
    contactPerson: initialData?.contactPerson ?? "",
    email: initialData?.email ?? "",
    phone: initialData?.phone ?? "",
    country: initialData?.country ?? "Egypt",
    totalShipments:
      initialData?.totalShipments ?? 0,
    totalRequests:
      initialData?.totalRequests ?? 0,
    status:
      initialData?.status ?? ("Active" as CustomerStatusType),
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
    value: string | number
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const customer: Customer = {
      id: form.id,
      company: form.company,
      contactPerson: form.contactPerson,
      email: form.email,
      phone: form.phone,
      country: form.country,
      totalShipments: Number(form.totalShipments),
      totalRequests: Number(form.totalRequests),
      status: form.status as CustomerStatusType,
      createdAt: form.createdAt,
    };

    onSubmit?.(customer);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
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
              Customer Management
            </span>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-[#051428]">
            {initialData
              ? "Edit Customer"
              : "Create Customer"}
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Add and manage customer information.
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

      {/* Company information */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-[#051428]">
            Company Information
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Basic company and account information.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Customer ID"
            icon={<Building2 className="h-4 w-4" />}
            required
          >
            <input
              required
              value={form.id}
              onChange={(event) =>
                updateField("id", event.target.value)
              }
              placeholder="CUS-2026-007"
              className={inputClass}
            />
          </Field>

          <Field
            label="Company Name"
            icon={<Building2 className="h-4 w-4" />}
            required
          >
            <input
              required
              value={form.company}
              onChange={(event) =>
                updateField(
                  "company",
                  event.target.value
                )
              }
              placeholder="Company name"
              className={inputClass}
            />
          </Field>

          <Field
            label="Contact Person"
            icon={<User className="h-4 w-4" />}
            required
          >
            <input
              required
              value={form.contactPerson}
              onChange={(event) =>
                updateField(
                  "contactPerson",
                  event.target.value
                )
              }
              placeholder="Contact person"
              className={inputClass}
            />
          </Field>

          <Field
            label="Country"
            icon={<Globe2 className="h-4 w-4" />}
            required
          >
            <input
              required
              value={form.country}
              onChange={(event) =>
                updateField(
                  "country",
                  event.target.value
                )
              }
              placeholder="Egypt"
              className={inputClass}
            />
          </Field>
        </div>
      </section>

      {/* Contact */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-[#051428]">
            Contact Information
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            How your team can reach this customer.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Email Address"
            icon={<Mail className="h-4 w-4" />}
            required
          >
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) =>
                updateField("email", event.target.value)
              }
              placeholder="contact@company.com"
              className={inputClass}
            />
          </Field>

          <Field
            label="Phone Number"
            icon={<Phone className="h-4 w-4" />}
            required
          >
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(event) =>
                updateField("phone", event.target.value)
              }
              placeholder="+20 100 000 0000"
              className={inputClass}
            />
          </Field>
        </div>
      </section>

      {/* Account */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-[#051428]">
            Account Status
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Control the current status of this customer.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Customer Status"
            icon={<User className="h-4 w-4" />}
            required
          >
            <select
              value={form.status}
              onChange={(event) =>
                updateField(
                  "status",
                  event.target.value
                )
              }
              className={inputClass}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>
          </Field>

          <Field
            label="Created Date"
            icon={<Building2 className="h-4 w-4" />}
          >
            <input
              value={form.createdAt}
              onChange={(event) =>
                updateField(
                  "createdAt",
                  event.target.value
                )
              }
              className={inputClass}
            />
          </Field>
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