"use client";
import { motion, useReducedMotion } from "motion/react";

interface RevealWrapperProps {
  visible: boolean;
  delay?: number;
  direction?: "up" | "right";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function RevealWrapper({
  visible,
  delay = 0,
  direction = "up",
  children,
  style,
}: RevealWrapperProps) {
  const reduce = useReducedMotion();

  // Collapsed (hidden) state
  const hidden = reduce
    ? { opacity: 0 }
    : { opacity: 0, ...(direction === "right" ? { x: 24 } : { y: 28 }) };

  // Expanded (visible) state — always reset both axes so no stale offsets
  const show = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={hidden}
      animate={visible ? show : hidden}
      transition={
        reduce
          ? { duration: 0.15 }
          : {
              opacity:  { duration: 0.6,  delay: delay / 1000, ease: [0.16, 1, 0.3, 1] },
              x:        { duration: 0.75, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] },
              y:        { duration: 0.75, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] },
            }
      }
      style={style}
    >
      {children}
    </motion.div>
  );
}
