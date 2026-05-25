"use client";

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
  const initial =
    direction === "right"
      ? "translateX(28px)"
      : "translateY(32px)";

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : initial,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
