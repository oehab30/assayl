"use client";

import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock3,
  Copy,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

import RequestStatus from "./RequestStatus";
import { CustomerRequest } from "./RequestTable";

interface RequestDetailsProps {
  request: CustomerRequest;
  onBack?: () => void;
  onEdit?: () => void;
}

const timeline = [
  {
    title: "Request received",
    description:
      "Customer request was submitted through the STARS website.",
    date: "Oct 05, 2026 · 09:20",
    completed: true,
  },
  {
    title: "Request assigned",
    description:
      "Request was assigned to the operations team.",
    date: "Oct 05, 2026 · 09:45",
    completed: true,
  },
  {
    title: "Requirements reviewed",
    description:
      "Customer requirements are being reviewed.",
    date: "Oct 05, 2026 · 10:30",
    completed: true,
  },
  {
    title: "Quotation",
    description:
      "Quotation will be prepared based on the reviewed requirements.",
    date: "Pending",
    completed: false,
  },
];

export default function RequestDetails({
  request,
  onBack,
  onEdit,
}: RequestDetailsProps) {
  const copyRequestId = async () => {
    try {
      await navigator.clipboard.writeText(request.id);
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
                {request.id}
              </h1>

              <RequestStatus
                status={request.status}
                size="md"
              />
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Customer request details and activity.
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
            Update Request
          </button>
        )}
      </div>

      {/* Overview cards */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <InfoCard
          icon={<User className="h-4 w-4" />}
          label="Customer"
          value={request.customer}
        />

        <InfoCard
          icon={<FileText className="h-4 w-4" />}
          label="Service"
          value={request.service}
        />

        <InfoCard
          icon={<CalendarDays className="h-4 w-4" />}
          label="Requested Date"
          value={request.requestedDate}
        />

        <InfoCard
          icon={<MapPin className="h-4 w-4" />}
          label="Destination"
          value={request.destination}
        />
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-6">
          {/* Customer information */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-6">
              <h2 className="text-base font-semibold text-[#051428]">
                Customer Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Contact details associated with this request.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <ContactItem
                icon={<User className="h-4 w-4" />}
                label="Customer"
                value={request.customer}
              />

              <ContactItem
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={request.email}
              />

              <ContactItem
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
                value={request.phone}
              />

              <ContactItem
                icon={<FileText className="h-4 w-4" />}
                label="Service"
                value={request.service}
              />
            </div>
          </section>

          {/* Route */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-6">
              <h2 className="text-base font-semibold text-[#051428]">
                Request Route
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Requested shipping route and cargo.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <RoutePoint
                label="Origin"
                value={request.origin}
              />

              <RoutePoint
                label="Destination"
                value={request.destination}
              />
            </div>

            <div className="mt-5 border-t border-slate-100 pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Cargo
              </p>

              <p className="mt-2 text-sm font-semibold text-[#051428]">
                {request.cargo}
              </p>
            </div>
          </section>

          {/* Customer message */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-[#C9A96E]" />

              <h2 className="text-base font-semibold text-[#051428]">
                Customer Message
              </h2>
            </div>

            <div className="mt-5 rounded-xl bg-slate-50 p-4">
              <p className="text-sm leading-7 text-slate-600">
                {request.message ||
                  "No additional message was provided by the customer."}
              </p>
            </div>
          </section>

          {/* Timeline */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-7">
              <h2 className="text-base font-semibold text-[#051428]">
                Request Timeline
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Track how the request is progressing.
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
                        <h3 className="text-sm font-semibold text-[#051428]">
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

        {/* Right sidebar */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-[#051428] p-5 text-white sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C9A96E]">
              Request Reference
            </p>

            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="break-all text-lg font-semibold">
                {request.id}
              </span>

              <button
                type="button"
                onClick={copyRequestId}
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
                aria-label="Copy request ID"
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
                {request.createdAt}
              </span>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-sm font-semibold text-[#051428]">
              Request Summary
            </h2>

            <div className="mt-5 space-y-4">
              <DetailRow
                label="Service"
                value={request.service}
              />

              <DetailRow
                label="Cargo"
                value={request.cargo}
              />

              <DetailRow
                label="Requested date"
                value={request.requestedDate}
              />

              <DetailRow
                label="Status"
                value={request.status}
              />
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

function RoutePoint({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-[#C9A96E]" />

        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </span>
      </div>

      <p className="mt-3 text-sm font-semibold text-[#051428]">
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