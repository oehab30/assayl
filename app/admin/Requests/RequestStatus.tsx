"use client";

import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  FileCheck2,
  XCircle,
  Search,
} from "lucide-react";

export type RequestStatusType =
  | "New"
  | "Reviewing"
  | "Quoted"
  | "Approved"
  | "Completed"
  | "Rejected";

interface RequestStatusProps {
  status: RequestStatusType;
  showIcon?: boolean;
  size?: "sm" | "md";
}

const statusConfig: Record<
  RequestStatusType,
  {
    label: string;
    icon: React.ElementType;
    className: string;
    dotClassName: string;
  }
> = {
  New: {
    label: "New",
    icon: AlertCircle,
    className: "bg-blue-50 text-blue-700 border-blue-200",
    dotClassName: "bg-blue-500",
  },

  Reviewing: {
    label: "Reviewing",
    icon: Search,
    className: "bg-amber-50 text-amber-700 border-amber-200",
    dotClassName: "bg-amber-500",
  },

  Quoted: {
    label: "Quoted",
    icon: FileCheck2,
    className: "bg-purple-50 text-purple-700 border-purple-200",
    dotClassName: "bg-purple-500",
  },

  Approved: {
    label: "Approved",
    icon: CheckCircle2,
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dotClassName: "bg-emerald-500",
  },

  Completed: {
    label: "Completed",
    icon: CheckCircle2,
    className: "bg-teal-50 text-teal-700 border-teal-200",
    dotClassName: "bg-teal-500",
  },

  Rejected: {
    label: "Rejected",
    icon: XCircle,
    className: "bg-red-50 text-red-700 border-red-200",
    dotClassName: "bg-red-500",
  },
};

export default function RequestStatus({
  status,
  showIcon = true,
  size = "sm",
}: RequestStatusProps) {
  const config = statusConfig[status];

  if (!config) return null;

  const Icon = config.icon;

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        rounded-full
        border
        font-medium
        whitespace-nowrap
        ${config.className}
        ${
          size === "sm"
            ? "px-2.5 py-1 text-xs"
            : "px-3 py-1.5 text-sm"
        }
      `}
    >
      {showIcon ? (
        <Icon
          className={
            size === "sm"
              ? "h-3.5 w-3.5"
              : "h-4 w-4"
          }
        />
      ) : (
        <span
          className={`h-1.5 w-1.5 rounded-full ${config.dotClassName}`}
        />
      )}

      {config.label}
    </span>
  );
}