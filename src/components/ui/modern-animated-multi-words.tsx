"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Words to cycle through */
  words?: string[];
  /** Milliseconds between transitions */
  interval?: number;
  /** Extra classes on the outer container */
  className?: string;
  /**
   * Complete Tailwind classes for the animated text.
   * When provided, replaces the default large-size classes entirely.
   */
  textClassName?: string;
  /** Transition animation duration in ms */
  animationDuration?: number;
  /** Visual variant */
  variant?: "gradient" | "primary" | "neon" | "glass" | "cyan";
}

type VariantConfig = {
  container: string;
  glowBg: string;
};

function getVariantClasses(variant: ContainerTextFlipProps["variant"]): VariantConfig {
  switch (variant) {
    case "primary":
      return {
        container:
          "bg-blue-600 text-white shadow-2xl shadow-blue-500/30 border border-blue-400/50",
        glowBg: "rgba(59,130,246,0.25)",
      };
    case "neon":
      return {
        container:
          "bg-gray-900 text-cyan-400 shadow-2xl shadow-cyan-500/40 border border-cyan-400/60",
        glowBg: "rgba(6,182,212,0.3)",
      };
    case "glass":
      return {
        container:
          "bg-white/10 backdrop-blur-xl text-white shadow-2xl shadow-black/20 border border-white/20",
        glowBg: "rgba(255,255,255,0.1)",
      };
    case "cyan":
      return {
        container:
          "bg-cyan-950/50 backdrop-blur-sm text-cyan-300 shadow-lg shadow-cyan-500/20 border border-cyan-500/30",
        glowBg: "rgba(6,182,212,0.2)",
      };
    default: // gradient
      return {
        container:
          "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white shadow-2xl shadow-purple-500/40 border border-white/20",
        glowBg: "rgba(147,51,234,0.3)",
      };
  }
}

export function ContainerTextFlip({
  words = ["revolutionary", "extraordinary", "phenomenal", "incredible"],
  interval = 3500,
  className,
  textClassName,
  animationDuration = 800,
  variant = "gradient",
}: ContainerTextFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, animationDuration / 2);
    }, interval);

    return () => clearInterval(id);
  }, [words, interval, animationDuration]);

  const { container, glowBg } = getVariantClasses(variant);

  const defaultTextClass =
    "text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-center whitespace-nowrap";

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: isAnimating ? [1, 1.06, 1] : 1,
          opacity: isAnimating ? [0.7, 1, 0.7] : 0.7,
        }}
        transition={{ duration: animationDuration / 1000, ease: "easeInOut" }}
        className="absolute inset-0 rounded-2xl blur-xl pointer-events-none"
        style={{ background: glowBg }}
      />

      {/* Main pill */}
      <motion.div
        layout
        animate={{ scale: isAnimating ? [1, 0.98, 1] : 1 }}
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
          layout: { duration: 0.3 },
        }}
        className={cn("relative rounded-2xl overflow-hidden", container, className)}
      >
        {/* Shimmer sweep */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: ["-120%", "120%"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            style={{ transform: "skewX(-20deg)" }}
          />
        </div>

        {/* Text */}
        <div className="relative z-10 px-8 py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={words[currentWordIndex]}
              initial={{ opacity: 0, y: 22, filter: "blur(8px)", scale: 0.9 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, y: -22, filter: "blur(8px)", scale: 1.08 }}
              transition={{
                duration: animationDuration / 1000,
                ease: [0.25, 0.25, 0, 1],
              }}
              className={cn(textClassName ?? defaultTextClass)}
            >
              {words[currentWordIndex].split("").map((letter, index) => (
                <motion.span
                  key={`${words[currentWordIndex]}-${index}`}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {letter === " " ? " " : letter}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/20 rounded-tl-lg pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/20 rounded-tr-lg pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/20 rounded-bl-lg pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white/20 rounded-br-lg pointer-events-none" />
      </motion.div>
    </div>
  );
}
