"use client";

import {
  Activity,
  ArrowLeft,
  Building2,
  CalendarDays,
  CheckCircle2,
  Copy,
  FileText,
  Globe2,
  Mail,
  Package,
  Phone,
  User,
} from "lucide-react";

import { Customer } from "./CustomerTable";

interface CustomerDetailsProps {
  customer: Customer;
  onBack?: () => void;
  onEdit?: () => void;
}

const recentActivity = [
  {
    title: "Shipment created",
    description:
      "New shipment ST-2026-00124 was created.",
    date: "Oct 05, 2026",
    icon: Package,
  },
  {
    title: "Request submitted",
    description:
      "Customer submitted an Import & Export request.",
    date: "Oct 03, 2026",
    icon: FileText,
  },
  {
    title: "Shipment delivered",
    description:
      "Shipment ST-2026-00119 was successfully delivered.",
    date: "Oct 02, 2026",
    icon: CheckCircle2,
  },
];

export default function CustomerDetails({
  customer,
  onBack,
  onEdit,
}: CustomerDetailsProps) {
  const copyCustomerId = async () => {
    try {
      await navigator.clipboard.writeText(
        customer.id
      );
    } catch {
      // Clipboard may not be available.
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
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
                {customer.company}
              </h1>

              <StatusBadge status={customer.status} />
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Customer account and activity overview.
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
            Edit Customer
          </button>
        )}
      </div>

      {/* Overview */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <InfoCard
          icon={<Package className="h-4 w-4" />}
          label="Shipments"
          value={String(customer.totalShipments)}
        />

        <InfoCard
          icon={<FileText className="h-4 w-4" />}
          label="Requests"
          value={String(customer.totalRequests)}
        />

        <InfoCard
          icon={<Globe2 className="h-4 w-4" />}
          label="Country"
          value={customer.country}
        />

        <InfoCard
          icon={<CalendarDays className="h-4 w-4" />}
          label="Customer Since"
          value={customer.createdAt}
        />
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-6">
          {/* Company profile */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-6">
              <h2 className="text-base font-semibold text-[#051428]">
                Company Profile
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Basic information about this customer.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <ContactItem
                icon={<Building2 className="h-4 w-4" />}
                label="Company"
                value={customer.company}
              />

              <ContactItem
                icon={<User className="h-4 w-4" />}
                label="Contact Person"
                value={customer.contactPerson}
              />

              <ContactItem
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={customer.email}
              />

              <ContactItem
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
                value={customer.phone}
              />

              <ContactItem
                icon={<Globe2 className="h-4 w-4" />}
                label="Country"
                value={customer.country}
              />

              <ContactItem
                icon={<CalendarDays className="h-4 w-4" />}
                label="Created"
                value={customer.createdAt}
              />
            </div>
          </section>

          {/* Performance */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-6">
              <h2 className="text-base font-semibold text-[#051428]">
                Customer Activity
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Recent customer interactions with STARS.
              </p>
            </div>

            <div className="space-y-5">
              {recentActivity.map(
                (activity, index) => {
                  const Icon = activity.icon;

                  return (
                    <div
                      key={`${activity.title}-${index}`}
                      className="flex gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A96E]/10 text-[#8A6B31]">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="text-sm font-semibold text-[#051428]">
                            {activity.title}
                          </h3>

                          <span className="text-xs text-slate-400">
                            {activity.date}
                          </span>
                        </div>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Customer ID */}
          <section className="rounded-2xl border border-slate-200 bg-[#051428] p-5 text-white sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A96E]">
              Customer Reference
            </p>

            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="break-all text-lg font-semibold">
                {customer.id}
              </span>

              <button
                type="button"
                onClick={copyCustomerId}
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
                aria-label="Copy customer ID"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 h-px bg-white/10" />

            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="text-white/50">
                Customer since
              </span>

              <span className="font-medium text-white/90">
                {customer.createdAt}
              </span>
            </div>
          </section>

          {/* Statistics */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-[#C9A96E]" />

              <h2 className="text-sm font-semibold text-[#051428]">
                Account Statistics
              </h2>
            </div>

            <div className="mt-5 space-y-4">
              <StatRow
                label="Total shipments"
                value={customer.totalShipments}
              />

              <StatRow
                label="Total requests"
                value={customer.totalRequests}
              />

              <StatRow
                label="Account status"
                value={customer.status}
              />
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-sm font-semibold text-[#051428]">
              Quick Contact
            </h2>

            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${customer.email}`}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-slate-100
                  p-3
                  text-sm
                  text-slate-600
                  transition
                  hover:border-[#C9A96E]/40
                  hover:bg-slate-50
                "
              >
                <Mail className="h-4 w-4 text-[#C9A96E]" />

                <span className="truncate">
                  {customer.email}
                </span>
              </a>

              <a
                href={`tel:${customer.phone}`}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-slate-100
                  p-3
                  text-sm
                  text-slate-600
                  transition
                  hover:border-[#C9A96E]/40
                  hover:bg-slate-50
                "
              >
                <Phone className="h-4 w-4 text-[#C9A96E]" />

                <span>{customer.phone}</span>
              </a>
            </div>
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

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
          {label}
        </p>

        <p className="mt-1 break-words text-sm font-medium text-slate-700">
          {value}
        </p>
      </div>
    </div>
  );
}

function StatRow({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span className="text-right text-sm font-semibold text-[#051428]">
        {value}
      </span>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: Customer["status"];
}) {
  const styles = {
    Active:
      "border-emerald-200 bg-emerald-50 text-emerald-700",
    Inactive:
      "border-slate-200 bg-slate-50 text-slate-600",
    Pending:
      "border-amber-200 bg-amber-50 text-amber-700",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        rounded-full
        border
        px-3
        py-1.5
        text-sm
        font-medium
        ${styles[status]}
      `}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />

      {status}
    </span>
  );
}