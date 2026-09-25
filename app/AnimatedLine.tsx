import { memo } from "react";
import { motion } from "framer-motion";

interface AnimatedLineProps {
  text?: string;
  lines?: number;
  lineColor?: string;
  textColor?: string;
}

const AnimatedLine = memo(({
  text = "Frontend Developer",
  lines = 2,               // 1 or 2
  lineColor = "bg-primary/40",
  textColor = "text-primary/80",
}: AnimatedLineProps) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 mb-6 md:mb-8">
      {/* Left line */}
      {(lines === 2 || lines === 1) && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "2rem", opacity: 1, x: [0, -4, 4, 0] }}
          whileInView={{ width: ["1.5rem", "2rem", "3rem"], opacity: 1 }}
          transition={{
            width: { duration: 1.4, ease: "easeInOut" },
            opacity: { duration: 1.2 },
            x: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
          }}
          className={`h-px ${lineColor}`}
          aria-hidden="true"
        />
      )}

      {/* Text */}
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`text-[10px] sm:text-xs md:text-sm font-heading tracking-[0.2em] sm:tracking-[0.4em]
        uppercase font-medium ${textColor}`}
      >
        {text}
      </motion.span>

      {/* Right line */}
      {lines === 2 && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "2rem", opacity: 1, x: [0, 4, -4, 0] }}
          whileInView={{ width: ["1.5rem", "2rem", "3rem"], opacity: 1 }}
          transition={{
            width: { duration: 1.4, ease: "easeInOut" },
            opacity: { duration: 1.2 },
            x: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
          }}
          className={`h-px ${lineColor}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
});

AnimatedLine.displayName = "AnimatedLine";

export default AnimatedLine;