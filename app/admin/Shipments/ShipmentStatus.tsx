"use client";

import {
  CheckCircle2,
  Clock3,
  PackageCheck,
  Plane,
  Ship,
  Truck,
  XCircle,
  AlertTriangle,
} from "lucide-react";

export type ShipmentStatusType =
  | "Pending"
  | "Processing"
  | "In Transit"
  | "Delivered"
  | "Delayed"
  | "Cancelled";

interface ShipmentStatusProps {
  status: ShipmentStatusType;
  showIcon?: boolean;
  size?: "sm" | "md";
}

const statusConfig: Record<
  ShipmentStatusType,
  {
    label: string;
    icon: React.ElementType;
    className: string;
    dotClassName: string;
  }
> = {
  Pending: {
    label: "Pending",
    icon: Clock3,
    className: "bg-amber-50 text-amber-700 border-amber-200",
    dotClassName: "bg-amber-500",
  },

  Processing: {
    label: "Processing",
    icon: PackageCheck,
    className: "bg-blue-50 text-blue-700 border-blue-200",
    dotClassName: "bg-blue-500",
  },

  "In Transit": {
    label: "In Transit",
    icon: Truck,
    className: "bg-indigo-50 text-indigo-700 border-indigo-200",
    dotClassName: "bg-indigo-500",
  },

  Delivered: {
    label: "Delivered",
    icon: CheckCircle2,
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dotClassName: "bg-emerald-500",
  },

  Delayed: {
    label: "Delayed",
    icon: AlertTriangle,
    className: "bg-orange-50 text-orange-700 border-orange-200",
    dotClassName: "bg-orange-500",
  },

  Cancelled: {
    label: "Cancelled",
    icon: XCircle,
    className: "bg-red-50 text-red-700 border-red-200",
    dotClassName: "bg-red-500",
  },
};

export default function ShipmentStatus({
  status,
  showIcon = true,
  size = "sm",
}: ShipmentStatusProps) {
  const config = statusConfig[status];

  if (!config) return null;

  const Icon = config.icon;

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        border
        rounded-full
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