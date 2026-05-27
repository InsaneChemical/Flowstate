"use client";
import * as React from "react";
import { motion } from "motion/react";
import type { PanInfo } from "motion/react";
import { SectionHeader } from "./ui/SectionHeader";

const testimonials = [
  {
    quote:
      "Flowstate rebuilt our entire content system in 3 weeks. Our lead flow has been consistent ever since — we're getting qualified enquiries every single week now.",
    name: "Alex M.",
    role: "Founder",
    company: "TechStart",
    initials: "AM",
    variant: "cyan" as const,
  },
  {
    quote:
      "The AI automation setup alone saved us 12 hours a week. We scaled from 200 to 1,400 email subscribers in 60 days. The ROI was immediate.",
    name: "Jordan K.",
    role: "Director",
    company: "GrowthLab",
    initials: "JK",
    variant: "purple" as const,
  },
  {
    quote:
      "Their Web3 community management is best-in-class. Our Telegram went from chaotic to converting. They understand the space and they deliver.",
    name: "Sam T.",
    role: "CMO",
    company: "ChainVentures",
    initials: "ST",
    variant: "cyan" as const,
  },
];

const len = testimonials.length;

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [exitX, setExitX] = React.useState(0);
  const [navigating, setNavigating] = React.useState(false);

  const navigate = (dir: 1 | -1) => {
    if (navigating) return;
    setNavigating(true);
    setExitX(dir === 1 ? -440 : 440);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + dir + len) % len);
      setExitX(0);
      setNavigating(false);
    }, 220);
  };

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (Math.abs(info.offset.x) > 80) {
      navigate(info.offset.x < 0 ? 1 : -1);
    }
  };

  return (
    <section className="section-pad" id="testimonials">
      <div className="section-inner">
        <SectionHeader
          label="Results"
          title="What clients say."
          subtitle="Real outcomes from real businesses that chose to build their digital growth system with us."
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "48px 0 24px",
          }}
        >
          {/* ── Card stack ─────────────────────────────────────── */}
          <div
            className="testimonial-stack"
            style={{ position: "relative", width: 520, height: 300 }}
          >
            {testimonials.map((t, index) => {
              const isFront = index === currentIndex;
              const isMid = index === (currentIndex + 1) % len;
              const isBack = index === (currentIndex + 2) % len;
              if (!isFront && !isMid && !isBack) return null;

              const isCyan = t.variant === "cyan";
              const accent = isCyan ? "#06b6d4" : "#818cf8";
              const accent2 = isCyan ? "#818cf8" : "#06b6d4";
              const borderColor = isCyan
                ? "rgba(6,182,212,0.22)"
                : "rgba(129,140,248,0.22)";
              const glowColor = isCyan
                ? "rgba(6,182,212,0.08)"
                : "rgba(129,140,248,0.08)";

              return (
                <motion.div
                  key={t.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 20,
                    background: `linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)`,
                    border: `1px solid ${borderColor}`,
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: isFront
                      ? `0 20px 48px rgba(0,0,0,0.45), 0 0 0 1px ${borderColor}, inset 0 1px 0 rgba(255,255,255,0.06)`
                      : `0 8px 24px rgba(0,0,0,0.25)`,
                    zIndex: isFront ? 3 : isMid ? 2 : 1,
                    padding: "36px 40px 32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                    cursor: isFront ? "grab" : "default",
                    userSelect: "none",
                    overflow: "hidden",
                  }}
                  drag={isFront ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.65}
                  onDragEnd={isFront ? handleDragEnd : undefined}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{
                    scale: isFront ? 1 : isMid ? 0.96 : 0.92,
                    opacity: isFront ? 1 : isMid ? 0.55 : 0.25,
                    x: isFront ? exitX : 0,
                    y: isFront ? 0 : isMid ? 10 : 20,
                    rotate: isFront ? exitX / 22 : isMid ? -1.5 : -3,
                  }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  whileDrag={{ cursor: "grabbing", scale: 1.02 }}
                >
                  {/* Subtle accent glow in corner */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: -40,
                      right: -40,
                      width: 160,
                      height: 160,
                      borderRadius: "50%",
                      background: glowColor,
                      filter: "blur(40px)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Quote mark */}
                  <div
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 56,
                      lineHeight: 0.75,
                      background: `linear-gradient(135deg, ${accent}, ${accent2})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      opacity: 0.75,
                    }}
                  >
                    &ldquo;
                  </div>

                  {/* Quote */}
                  <p
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 14.5,
                      lineHeight: 1.85,
                      color: "#94a3b8",
                      fontStyle: "italic",
                      flex: 1,
                      margin: 0,
                    }}
                  >
                    {t.quote}
                  </p>

                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${accent}, ${accent2})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontSize: 11,
                          fontWeight: 700,
                          color: "white",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#f1f5f9",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-dm)",
                          fontSize: 11.5,
                          color: "#64748b",
                          marginTop: 1,
                        }}
                      >
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Navigation ─────────────────────────────────────── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginTop: 36,
            }}
          >
            {/* Prev */}
            <button
              onClick={() => navigate(-1)}
              disabled={navigating}
              aria-label="Previous testimonial"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.2s, background 0.2s",
                color: "#64748b",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(6,182,212,0.4)";
                (e.currentTarget as HTMLButtonElement).style.color = "#06b6d4";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLButtonElement).style.color = "#64748b";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const dir = (i - currentIndex + len) % len <= len / 2 ? 1 : -1;
                    setCurrentIndex(i);
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                  style={{
                    width: i === currentIndex ? 20 : 6,
                    height: 6,
                    borderRadius: 3,
                    background:
                      i === currentIndex
                        ? "linear-gradient(90deg,#06b6d4,#818cf8)"
                        : "rgba(255,255,255,0.15)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "width 0.3s, background 0.3s",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => navigate(1)}
              disabled={navigating}
              aria-label="Next testimonial"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.2s, background 0.2s",
                color: "#64748b",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(6,182,212,0.4)";
                (e.currentTarget as HTMLButtonElement).style.color = "#06b6d4";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLButtonElement).style.color = "#64748b";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 11,
              color: "#334155",
              marginTop: 16,
              letterSpacing: "0.05em",
            }}
          >
            drag to swipe · {currentIndex + 1} / {len}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .testimonial-stack { width: calc(100vw - 64px) !important; height: 340px !important; }
        }
      `}</style>
    </section>
  );
}
