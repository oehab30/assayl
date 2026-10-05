import Link from "next/link";
import { ArrowUpRight, MessageSquareText } from "lucide-react";
import AdminCard from "../Common/AdminCard";

const requests = [
  {
    name: "Mohamed Hassan",
    company: "Cairo Commerce",
    type: "Import & Export",
    time: "12 min ago",
    initials: "MH",
  },
  {
    name: "Ahmed Khaled",
    company: "Nile Imports",
    type: "Customs Clearance",
    time: "34 min ago",
    initials: "AK",
  },
  {
    name: "Sarah Adel",
    company: "Eastern Supplies",
    type: "Air Freight",
    time: "1 hr ago",
    initials: "SA",
  },
  {
    name: "Omar Salem",
    company: "Global Trade Co.",
    type: "Warehousing",
    time: "2 hrs ago",
    initials: "OS",
  },
];

export default function CustomerRequests() {
  return (
    <AdminCard className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#051428]/[0.06] px-5 py-5">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#4F0908]/60">
            Customer activity
          </p>

          <h2 className="mt-1 text-base font-bold text-[#051428]">
            Recent requests
          </h2>
        </div>

        <Link
          href="/admin/Requests"
          className="flex items-center gap-1 text-[10px] font-bold text-[#4F0908]"
        >
          View all
          <ArrowUpRight size={13} />
        </Link>
      </div>

      <div className="divide-y divide-[#051428]/[0.05]">
        {requests.map((request) => (
          <div
            key={`${request.name}-${request.type}`}
            className="group flex items-center gap-3 px-5 py-4 transition hover:bg-[#FAF9F7]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#051428] text-[10px] font-bold text-[#C9A96E]">
              {request.initials}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-xs font-bold text-[#051428]">
                  {request.name}
                </p>

                <span className="shrink-0 text-[9px] text-[#051428]/30">
                  {request.time}
                </span>
              </div>

              <p className="mt-0.5 truncate text-[10px] text-[#051428]/40">
                {request.company}
              </p>

              <div className="mt-2 flex items-center gap-1.5">
                <MessageSquareText
                  size={11}
                  className="text-[#4F0908]/60"
                />

                <span className="text-[9px] font-medium text-[#051428]/45">
                  {request.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[#051428]/[0.06] bg-[#FAF9F7] px-5 py-3">
        <p className="text-center text-[9px] font-medium text-[#051428]/35">
          21 requests currently waiting for review
        </p>
      </div>
    </AdminCard>
  );
}