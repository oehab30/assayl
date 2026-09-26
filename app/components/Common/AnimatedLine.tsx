"use client";

import { memo } from "react";
import { motion } from "framer-motion";

interface AnimatedLineProps {
  text?: string;
  lines?: 1 | 2;
  lineColor?: string;
  textColor?: string;
  className?: string;
}

const AnimatedLine = memo(({
  text = "From China To Your Destination",
  lines = 1,
  lineColor = "bg-[#005293]",
  textColor = "text-[#005293]",
  className = "",
}: AnimatedLineProps) => {
  return (
    <div className={`flex items-center gap-3 sm:gap-4 mb-4 ${className}`}>
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
        className={`font-jakarta text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap ${textColor}`}
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