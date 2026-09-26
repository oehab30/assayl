import Link from "next/link";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface ArrowButtonProps {
  href: string;
  children?: React.ReactNode;
  text?: string;
  icon?: LucideIcon;
  className?: string;
}

export default function ArrowButton({
  href,
  children,
  text,
  icon: Icon = ArrowUpRight,
  className = "",
}: ArrowButtonProps) {
  const content = children || text || "Discover our story";

  return (
    <Link
      href={href}
      className={`
        group
        relative
        inline-flex
        w-fit
        items-center
        gap-4
        font-jakarta
        text-[12px]
        font-bold
        uppercase
        tracking-[0.12em]
        text-[#005293]
        sm:text-[13px]
        ${className}
      `}
    >
      <span>{content}</span>

      {/* Circle Icon Wrapper */}
      <span
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#005293]/20
          transition-all
          duration-300
          ease-out
          group-hover:border-[#005293]
          group-hover:bg-[#005293]
        "
      >
        <Icon
          className="
            h-4
            w-4
            text-[#005293]
            transition-all
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-white
          "
        />
      </span>

      {/* Animated underline */}
      <span
        className="
          absolute
          -bottom-1
          left-0
          h-px
          w-0
          bg-[#005293]
          transition-all
          duration-300
          group-hover:w-[calc(100%-56px)]
        "
      />
    </Link>
  );
}