
"use client";

export default function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Subtle architectural grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#421821_1px,transparent_1px),linear-gradient(90deg,#421821_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Burgundy glow — upper right */}
      <div
        className="
          absolute -right-48 top-20
          h-[500px] w-[500px]
          rounded-full
          bg-[#662433]/[0.06]
          blur-[130px]
        "
      />

      {/* Warm neutral glow — lower left */}
      <div
        className="
          absolute -left-48 bottom-0
          h-[450px] w-[450px]
          rounded-full
          bg-[#D1C6B9]/[0.30]
          blur-[120px]
        "
      />
    </div>
  );
}
