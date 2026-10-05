"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AdminCard from "../Common/AdminCard";

const monthlyData = [
  38, 48, 44, 62, 55, 70, 64, 78, 72, 84, 76, 91,
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function ShipmentPerformance() {
  const [period, setPeriod] = useState("This year");

  const width = 800;
  const height = 260;
  const paddingX = 20;
  const paddingY = 25;

  const max = 100;

  const points = monthlyData
    .map((value, index) => {
      const x =
        paddingX +
        (index / (monthlyData.length - 1)) *
          (width - paddingX * 2);

      const y =
        height -
        paddingY -
        (value / max) * (height - paddingY * 2);

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <AdminCard className="overflow-hidden">
      <div className="flex flex-col justify-between gap-4 border-b border-[#051428]/[0.06] px-5 py-5 sm:flex-row sm:items-center sm:px-6">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#4F0908]/60">
            Performance
          </p>

          <h2 className="mt-1 text-base font-bold text-[#051428]">
            Shipment activity
          </h2>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#4F0908]" />
            <span className="text-[10px] font-medium text-[#051428]/45">
              Shipments
            </span>
          </div>

          <button
            onClick={() =>
              setPeriod(
                period === "This year"
                  ? "Last 12 months"
                  : "This year",
              )
            }
            className="flex items-center gap-2 rounded-lg border border-[#051428]/[0.08] bg-[#F8F7F5] px-3 py-2 text-[10px] font-semibold text-[#051428]/60"
          >
            {period}
            <ChevronDown size={13} />
          </button>
        </div>
      </div>

      <div className="px-4 pb-5 pt-5 sm:px-6">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-3xl font-bold tracking-[-0.04em] text-[#051428]">
              248
            </p>

            <p className="mt-1 text-[10px] text-[#051428]/35">
              total shipments
            </p>
          </div>

          <p className="text-xs font-semibold text-emerald-600">
            +12.8%
          </p>
        </div>

        <div className="relative h-[260px] w-full overflow-hidden">
          {/* Horizontal grid */}
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
            {[100, 75, 50, 25, 0].map((value) => (
              <div
                key={value}
                className="flex items-center gap-3"
              >
                <span className="w-7 text-right text-[9px] text-[#051428]/25">
                  {value}
                </span>

                <div className="h-px flex-1 bg-[#051428]/[0.055]" />
              </div>
            ))}
          </div>

          <svg
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
            className="absolute inset-x-8 bottom-5 top-0 h-[230px] w-[calc(100%-64px)] overflow-visible"
          >
            <defs>
              <linearGradient
                id="shipmentArea"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#4F0908"
                  stopOpacity="0.14"
                />

                <stop
                  offset="100%"
                  stopColor="#4F0908"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <polygon
              points={`20,235 ${points} 780,235`}
              fill="url(#shipmentArea)"
            />

            <polyline
              points={points}
              fill="none"
              stroke="#4F0908"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {monthlyData.map((value, index) => {
              const x =
                paddingX +
                (index / (monthlyData.length - 1)) *
                  (width - paddingX * 2);

              const y =
                height -
                paddingY -
                (value / max) *
                  (height - paddingY * 2);

              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#FFFFFF"
                  stroke="#4F0908"
                  strokeWidth="2"
                />
              );
            })}
          </svg>

          {/* Months */}
          <div className="absolute bottom-0 left-10 right-0 flex justify-between">
            {months.map((month) => (
              <span
                key={month}
                className="text-[9px] text-[#051428]/30"
              >
                {month}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AdminCard>
  );
}