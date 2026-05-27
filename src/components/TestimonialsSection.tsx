"use client";
import * as React from "react";
import { motion } from "motion/react";
import type { PanInfo } from "motion/react";
import { SectionHeader } from "./ui/SectionHeader";

const testimonials = [
  {
    quote:
      "We were burning 3 hours a day on content repurposing alone. Flowstate wired up an n8n pipeline that handles everything — formatting, scheduling, cross-channel distribution. We got that time back in the first week and haven't looked back.",
    name: "Marcus Chen",
    role: "Co-Founder",
    company: "Nexus Digital",
    avatar: "https://i.pravatar.cc/150?img=11",
    variant: "cyan" as const,
  },
  {
    quote:
      "They rebuilt our site and took over our LinkedIn in the same month. Six weeks later we closed our first enterprise inbound — a £38k contract. That one deal paid for a full year of their service. The ROI conversation ended there.",
    name: "Priya Sharma",
    role: "Head of Growth",
    company: "LaunchPad HQ",
    avatar: "https://i.pravatar.cc/150?img=44",
    variant: "purple" as const,
  },
  {
    quote:
      "Our Telegram had 800 members and zero real engagement. Flowstate came in, restructured the whole community, and built a moderation system that actually scales. 90 days later we're at 3,400 members and the group runs itself.",
    name: "Ryan Kowalski",
    role: "Community Lead",
    company: "Arc Protocol",
    avatar: "https://i.pravatar.cc/150?img=15",
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
            paddingTop: 32,
            paddingBottom: 8,
          }}
        >
          {/* ── Card stack ─────────────────────────────────────── */}
          <div
            className="testimonial-stack"
            style={{ position: "relative", width: 520, height: 272 }}
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
                ? "rgba(6,182,212,0.07)"
                : "rgba(129,140,248,0.07)";

              return (
                <motion.div
                  key={t.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 18,
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
                    border: `1px solid ${borderColor}`,
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: isFront
                      ? `0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px ${borderColor}, inset 0 1px 0 rgba(255,255,255,0.06)`
                      : "0 6px 20px rgba(0,0,0,0.22)",
                    zIndex: isFront ? 3 : isMid ? 2 : 1,
                    padding: "26px 30px 22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
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
                  {/* Corner glow */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: -40,
                      right: -40,
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      background: glowColor,
                      filter: "blur(36px)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Quote mark */}
                  <div
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 44,
                      lineHeight: 0.75,
                      background: `linear-gradient(135deg, ${accent}, ${accent2})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      opacity: 0.7,
                    }}
                  >
                    &ldquo;
                  </div>

                  {/* Quote */}
                  <p
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 13.5,
                      lineHeight: 1.8,
                      color: "#94a3b8",
                      fontStyle: "italic",
                      flex: 1,
                      margin: 0,
                    }}
                  >
                    {t.quote}
                  </p>

                  {/* Author */}
                  <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={36}
                      height={36}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        objectFit: "cover",
                        flexShrink: 0,
                        border: `2px solid ${borderColor}`,
                      }}
                    />
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
                          fontSize: 11,
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
              gap: 16,
              marginTop: 28,
            }}
          >
            <button
              onClick={() => navigate(-1)}
              disabled={navigating}
              aria-label="Previous testimonial"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
                color: "#475569",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(6,182,212,0.4)";
                (e.currentTarget as HTMLButtonElement).style.color = "#06b6d4";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLButtonElement).style.color = "#475569";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: i === currentIndex ? 18 : 5,
                    height: 5,
                    borderRadius: 3,
                    background:
                      i === currentIndex
                        ? "linear-gradient(90deg,#06b6d4,#818cf8)"
                        : "rgba(255,255,255,0.14)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "width 0.3s cubic-bezier(0.16,1,0.3,1), background 0.3s",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              disabled={navigating}
              aria-label="Next testimonial"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
                color: "#475569",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(6,182,212,0.4)";
                (e.currentTarget as HTMLButtonElement).style.color = "#06b6d4";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLButtonElement).style.color = "#475569";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 10.5,
              color: "#2d3e52",
              marginTop: 12,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            swipe or drag to browse
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .testimonial-stack { width: calc(100vw - 56px) !important; height: 320px !important; }
        }
      `}</style>
    </section>
  );
}
