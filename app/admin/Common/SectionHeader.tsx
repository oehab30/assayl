interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        {eyebrow && (
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.28em] text-[#4F0908]/60">
            {eyebrow}
          </p>
        )}

        <h2 className="text-xl font-bold tracking-[-0.02em] text-[#051428] sm:text-2xl">
          {title}
        </h2>

        {description && (
          <p className="mt-1.5 max-w-2xl text-xs leading-5 text-[#051428]/45 sm:text-sm">
            {description}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}