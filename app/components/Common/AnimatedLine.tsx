"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedLineProps {
  text?: string;
  lines?: 1 | 2;
  lineColor?: string;
  textColor?: string;
  className?: string;
}

const AnimatedLine = memo(function AnimatedLine({
  text = "From China To Your Destination",
  lines = 1,
  lineColor = "bg-[#CD2B55]",
  textColor = "text-[#D1C6B9]",
  className = "",
}: AnimatedLineProps) {
  const shouldReduceMotion = useReducedMotion();

  const lineAnimation = {
    initial: shouldReduceMotion
      ? { opacity: 1 }
      : { width: 0, opacity: 0 },
    animate: shouldReduceMotion
      ? { opacity: 1 }
      : {
          width: "2rem",
          opacity: 1,
          x: [0, -4, 4, 0],
        },
    whileInView: shouldReduceMotion
      ? { opacity: 1 }
      : {
          width: ["1.5rem", "2rem", "3rem"],
          opacity: 1,
        },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : {
          width: { duration: 1.4, ease: "easeInOut" as const },
          opacity: { duration: 1.2 },
          x: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 1.6,
          },
        },
  };

  return (
    <div
      className={` flex items-center gap-3 sm:gap-4 ${className}`}
    >
      {/* Decorative line before the label */}
      <motion.div
        {...lineAnimation}
        className={`h-px shrink-0 ${lineColor}`}
        aria-hidden="true"
      />

      {/* Brand label */}
      <motion.h1
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 1.2, ease: "easeOut" }
        }
        className={` whitespace-nowrap text-xs font-medium uppercase tracking-[0.15em] ${textColor}`}
      >
        {text}
      </motion.h1>

      {/* Optional second decorative line */}
      {lines === 2 && (
        <motion.div
          {...lineAnimation}
          className={`h-px shrink-0 ${lineColor}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
});

AnimatedLine.displayName = "AnimatedLine";

export default AnimatedLine;