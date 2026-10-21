import WhyAseelEditor from "./WhyAseelEditor";

export default function Edit() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
          Network
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#051428]">
          Edit
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Overview of all operational Edit and regional coverage.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
        This section is ready for the branch directory.
      </div>

<WhyAseelEditor />

    </div>
  );
}
