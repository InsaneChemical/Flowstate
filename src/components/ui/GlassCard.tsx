"use client";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "cyan" | "purple" | "neutral";
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  variant = "cyan",
}: GlassCardProps) {
  const variantClass =
    variant === "purple" ? "glass-purple" : "glass";
  return (
    <div
      className={`${variantClass} ${hover ? "glass-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
