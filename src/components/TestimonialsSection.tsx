"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Co-Founder",
    company: "Nexus Digital",
    content:
      "Burning 3 hours a day on content repurposing was killing our output. Flowstate built an n8n pipeline that handles everything — formatting, scheduling, distribution. We got that time back in week one and we've never looked back.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11",
    variant: "cyan" as const,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Head of Growth",
    company: "LaunchPad HQ",
    content:
      "They rebuilt our website and took over LinkedIn in the same month. Six weeks later we closed our first enterprise inbound — a £38k contract. That one deal covered a full year of their service. Easiest ROI we've ever justified.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=44",
    variant: "purple" as const,
  },
  {
    id: 3,
    name: "Ryan Kowalski",
    role: "Community Lead",
    company: "Arc Protocol",
    content:
      "Our Telegram had 800 members and practically zero real engagement. Flowstate came in, restructured the whole community, and built a moderation system that actually scales. Ninety days later we hit 3,400 members and it runs itself.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=15",
    variant: "cyan" as const,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  /* Auto-rotate every 6 s */
  useEffect(() => {
    const t = setInterval(
      () => setActiveIndex((i) => (i + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  const active = testimonials[activeIndex];
  const accent = active.variant === "cyan" ? "#06b6d4" : "#818cf8";
  const borderColor =
    active.variant === "cyan"
      ? "rgba(6,182,212,0.2)"
      : "rgba(129,140,248,0.2)";

  return (
    <section
      id="testimonials"
      className="section-pad"
      style={{
        borderTop: "1px solid rgba(6,182,212,0.06)",
        background:
          "linear-gradient(180deg, rgba(129,140,248,0.03) 0%, transparent 100%)",
      }}
    >
      <div
        className="section-inner testimonials-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* ── Left: heading + nav ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: 24 }}
        >
          {/* Label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 14px",
              borderRadius: 100,
              background: "rgba(6,182,212,0.08)",
              border: "1px solid rgba(6,182,212,0.2)",
              width: "fit-content",
            }}
          >
            <Star
              size={12}
              style={{ fill: "#06b6d4", color: "#06b6d4" }}
            />
            <span
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#67e8f9",
              }}
            >
              Client Results
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(32px, 3.5vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#f8fafc",
              margin: 0,
            }}
          >
            What our{" "}
            <span className="gradient-text">clients say.</span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 16,
              lineHeight: 1.75,
              color: "#64748b",
              maxWidth: 420,
              margin: 0,
            }}
          >
            Real outcomes from real businesses. No cherry-picked screenshots
            — just the results we&apos;re most proud of.
          </p>

          {/* Dot nav */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", paddingTop: 8 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`View testimonial ${i + 1}`}
                style={{
                  height: 8,
                  width: i === activeIndex ? 28 : 8,
                  borderRadius: 4,
                  background:
                    i === activeIndex
                      ? "linear-gradient(90deg,#06b6d4,#818cf8)"
                      : "rgba(255,255,255,0.12)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.35s cubic-bezier(0.16,1,0.3,1), background 0.35s",
                }}
              />
            ))}
          </div>

          {/* Who's speaking */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              paddingTop: 8,
              borderTop: "1px solid rgba(255,255,255,0.05)",
              marginTop: 4,
            }}
          >
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(i)}
                aria-label={`Select ${t.name}`}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  opacity: i === activeIndex ? 1 : 0.3,
                  transition: "opacity 0.3s",
                  transform: i === activeIndex ? "scale(1.1)" : "scale(1)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: `2px solid ${i === activeIndex ? accent : "rgba(255,255,255,0.1)"}`,
                    transition: "border-color 0.3s, transform 0.3s",
                    display: "block",
                  }}
                />
              </button>
            ))}
            <div style={{ marginLeft: 4 }}>
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#f1f5f9",
                  }}
                >
                  {active.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 11,
                    color: "#64748b",
                    marginTop: 2,
                  }}
                >
                  {active.role} · {active.company}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ── Right: animated card ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative" }}
        >
          {/* CSS grid overlay — all cards in same cell, natural height, no stretching */}
          <div style={{ display: "grid" }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : 50,
                scale: activeIndex === index ? 1 : 0.97,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                gridRow: 1,
                gridColumn: 1,
                zIndex: activeIndex === index ? 10 : 0,
                pointerEvents: activeIndex === index ? "auto" : "none",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  border: `1px solid ${borderColor}`,
                  borderRadius: 20,
                  padding: "40px 44px",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  boxShadow: `0 24px 56px rgba(0,0,0,0.45), 0 0 0 1px ${borderColor}, inset 0 1px 0 rgba(255,255,255,0.06)`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Accent glow */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -60,
                    right: -60,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background:
                      t.variant === "cyan"
                        ? "rgba(6,182,212,0.07)"
                        : "rgba(129,140,248,0.07)",
                    filter: "blur(48px)",
                    pointerEvents: "none",
                  }}
                />

                {/* Stars */}
                <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      style={{ fill: "#eab308", color: "#eab308" }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <div style={{ position: "relative", marginBottom: 0 }}>
                  {/* Large decorative quote */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: -10,
                      left: -8,
                      fontFamily: "Georgia, serif",
                      fontSize: 80,
                      lineHeight: 1,
                      color: accent,
                      opacity: 0.15,
                      userSelect: "none",
                    }}
                  >
                    &ldquo;
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 17,
                      lineHeight: 1.8,
                      color: "#cbd5e1",
                      margin: 0,
                      paddingLeft: 4,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {t.content}
                  </p>
                </div>

                {/* Flex spacer — absorbs height difference so author always sits at bottom */}
                <div style={{ flex: 1, minHeight: 8 }} />

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: "rgba(255,255,255,0.06)",
                    marginBottom: 24,
                  }}
                />

                {/* Author row */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: `2px solid ${borderColor}`,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#f8fafc",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-dm)",
                        fontSize: 12.5,
                        color: "#64748b",
                        marginTop: 2,
                      }}
                    >
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>{/* end grid overlay */}

          {/* Decorative corner squares */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: -16,
              left: -16,
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "rgba(6,182,212,0.05)",
              border: "1px solid rgba(6,182,212,0.1)",
              zIndex: 0,
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: -16,
              right: -16,
              width: 64,
              height: 64,
              borderRadius: 12,
              background: "rgba(129,140,248,0.05)",
              border: "1px solid rgba(129,140,248,0.1)",
              zIndex: 0,
            }}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
