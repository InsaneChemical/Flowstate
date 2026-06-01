"use client";
import { useReducedMotion } from "motion/react";

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

  const initial =
    direction === "right"
      ? "translateX(28px)"
      : "translateY(32px)";

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible || reduce ? "translate(0,0)" : initial,
        transition: reduce
          ? `opacity 0.2s ease ${delay}ms`
          : `opacity 0.65s ease ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
