import Link from "next/link";
import { ArrowUpRight, MoreHorizontal } from "lucide-react";
import AdminCard from "../Common/AdminCard";
import StatusBadge from "../Common/StatusBadge";

const shipments = [
  {
    id: "ST-10248",
    customer: "Global Trade Co.",
    origin: "Guangzhou",
    destination: "Cairo",
    mode: "Sea Freight",
    status: "In Transit" as const,
    eta: "Oct 12, 2026",
  },
  {
    id: "ST-10247",
    customer: "Nile Imports",
    origin: "Shenzhen",
    destination: "Cairo",
    mode: "Air Freight",
    status: "Delivered" as const,
    eta: "Oct 08, 2026",
  },
  {
    id: "ST-10246",
    customer: "Al Noor Trading",
    origin: "Yiwu",
    destination: "Alexandria",
    mode: "Sea Freight",
    status: "Processing" as const,
    eta: "Oct 15, 2026",
  },
  {
    id: "ST-10245",
    customer: "Eastern Supplies",
    origin: "Shanghai",
    destination: "Cairo",
    mode: "Sea Freight",
    status: "Delayed" as const,
    eta: "Oct 10, 2026",
  },
  {
    id: "ST-10244",
    customer: "Cairo Commerce",
    origin: "Hong Kong",
    destination: "Cairo",
    mode: "Air Freight",
    status: "Delivered" as const,
    eta: "Oct 06, 2026",
  },
];

export default function RecentShipments() {
  return (
    <AdminCard className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#051428]/[0.06] px-5 py-5 sm:px-6">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#4F0908]/60">
            Logistics
          </p>

          <h2 className="mt-1 text-base font-bold text-[#051428]">
            Recent shipments
          </h2>
        </div>

        <Link
          href="/admin/Shipments"
          className="flex items-center gap-1 text-[10px] font-bold text-[#4F0908] transition hover:text-[#051428]"
        >
          View all
          <ArrowUpRight size={13} />
        </Link>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[720px]">
          <thead>
            <tr className="border-b border-[#051428]/[0.05] bg-[#FAF9F7]">
              <th className="px-6 py-3 text-left text-[9px] font-bold uppercase tracking-[0.16em] text-[#051428]/35">
                Shipment
              </th>

              <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-[0.16em] text-[#051428]/35">
                Route
              </th>

              <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-[0.16em] text-[#051428]/35">
                Mode
              </th>

              <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-[0.16em] text-[#051428]/35">
                Status
              </th>

              <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-[0.16em] text-[#051428]/35">
                ETA
              </th>

              <th className="w-10 px-4 py-3" />
            </tr>
          </thead>

          <tbody>
            {shipments.map((shipment) => (
              <tr
                key={shipment.id}
                className="border-b border-[#051428]/[0.05] last:border-0 transition hover:bg-[#FAF9F7]"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="text-xs font-bold text-[#051428]">
                      {shipment.id}
                    </p>

                    <p className="mt-0.5 text-[10px] text-[#051428]/35">
                      {shipment.customer}
                    </p>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <p className="text-[11px] font-semibold text-[#051428]">
                    {shipment.origin}
                  </p>

                  <p className="text-[9px] text-[#051428]/35">
                    → {shipment.destination}
                  </p>
                </td>

                <td className="px-4 py-4 text-[10px] font-medium text-[#051428]/55">
                  {shipment.mode}
                </td>

                <td className="px-4 py-4">
                  <StatusBadge status={shipment.status} />
                </td>

                <td className="px-4 py-4 text-[10px] font-medium text-[#051428]/55">
                  {shipment.eta}
                </td>

                <td className="px-4 py-4">
                  <button
                    aria-label={`Actions for ${shipment.id}`}
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-[#051428]/30 hover:bg-[#051428]/[0.05] hover:text-[#051428]"
                  >
                    <MoreHorizontal size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="divide-y divide-[#051428]/[0.05] md:hidden">
        {shipments.map((shipment) => (
          <div key={shipment.id} className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-[#051428]">
                  {shipment.id}
                </p>

                <p className="mt-1 text-[10px] text-[#051428]/40">
                  {shipment.customer}
                </p>
              </div>

              <StatusBadge status={shipment.status} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <p className="text-[9px] uppercase tracking-[0.12em] text-[#051428]/30">
                  Route
                </p>

                <p className="mt-1 text-[10px] font-semibold text-[#051428]">
                  {shipment.origin} → {shipment.destination}
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.12em] text-[#051428]/30">
                  ETA
                </p>

                <p className="mt-1 text-[10px] font-semibold text-[#051428]">
                  {shipment.eta}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminCard>
  );
}