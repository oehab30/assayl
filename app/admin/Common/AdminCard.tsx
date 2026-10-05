import { ReactNode } from "react";

interface AdminCardProps {
  children: ReactNode;
  className?: string;
}

export default function AdminCard({
  children,
  className = "",
}: AdminCardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border border-[#051428]/[0.07]
        bg-white
        shadow-[0_10px_40px_rgba(5,20,40,0.035)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}