import ShipmentTable from "../Shipments/ShipmentTable";

export default function ShipmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
          Operations
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#051428]">
          Shipments
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage and monitor all STARS shipments.
        </p>
      </div>

      <ShipmentTable />
    </div>
  );
}