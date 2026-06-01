"use client";
interface SectionHeaderProps {
  label: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}

import React from "react";

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`${alignClass} mb-16`}>
      <p
        style={{
          fontFamily: "var(--font-dm)",
          fontSize: 12,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#06b6d4",
          marginBottom: 16,
          fontWeight: 500,
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(30px, 4vw, 48px)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "#f8fafc",
          marginBottom: subtitle ? 20 : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: 17,
            lineHeight: 1.75,
            color: "#94a3b8",
            maxWidth: 640,
            margin: align === "center" ? "0 auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
