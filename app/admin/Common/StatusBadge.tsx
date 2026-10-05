interface StatusBadgeProps {
  status:
    | "In Transit"
    | "Delivered"
    | "Pending"
    | "Processing"
    | "Delayed"
    | "Cancelled";
}

const styles = {
  "In Transit":
    "bg-[#051428]/[0.06] text-[#051428]",
  Delivered:
    "bg-emerald-50 text-emerald-700",
  Pending:
    "bg-amber-50 text-amber-700",
  Processing:
    "bg-[#4F0908]/[0.07] text-[#4F0908]",
  Delayed:
    "bg-orange-50 text-orange-700",
  Cancelled:
    "bg-red-50 text-red-700",
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        rounded-full px-2.5 py-1
        text-[10px] font-semibold
        ${styles[status]}
      `}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}