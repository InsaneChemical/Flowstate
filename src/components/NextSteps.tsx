"use client";
import { motion, useReducedMotion } from "motion/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealWrapper } from "./ui/RevealWrapper";

const steps = [
  {
    num: "01",
    title: "Book a free call",
    text: "A 30-minute conversation to understand your business, goals, and biggest growth blockers.",
    color: "#06b6d4",
    colorRgb: "6,182,212",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.6 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.12 4.18 2 2 0 0 1 5.09 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 24 16.92z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Get your proposal",
    text: "Within 48 hours we'll send a clear plan — what we'll build, how it works, and what to expect.",
    color: "#818cf8",
    colorRgb: "129,140,248",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "We get to work",
    text: "Onboarding to first deliverables in under 2 weeks. No long ramp-up, no agency runaround.",
    color: "#06b6d4",
    colorRgb: "6,182,212",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export function NextSteps() {
  const reduce = useReducedMotion();
  const { ref, visible } = useScrollReveal();

  return (
    <section
      className="section-pad next-steps-section"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="section-inner">

        {/* Header */}
        <motion.div
          className="nextsteps-header"
          style={{ marginBottom: 0 }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={reduce ? { duration: 0.15 } : {
            opacity: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
            y:       { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          <p style={{
            fontFamily: "var(--font-dm)",
            fontSize: 12,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#06b6d4",
            fontWeight: 500,
            marginBottom: 14,
          }}>
            What happens next
          </p>
          <h2 style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(26px, 3vw, 38px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#f8fafc",
            lineHeight: 1.15,
            margin: 0,
          }}>
            Three steps.{" "}
            <span style={{ color: "#475569" }}>Zero runaround.</span>
          </h2>
        </motion.div>

        {/* Steps — editorial grid, no card backgrounds */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="steps-editorial-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            marginTop: 48,
          }}
        >
          {steps.map((s, i) => (
            <RevealWrapper key={s.num} visible={visible} delay={i * 100}>
              <div
                className={`step-editorial${i > 0 ? " step-editorial-bordered" : ""} step-item`}
                style={{
                  padding: "48px 0",
                  paddingRight: i < steps.length - 1 ? 48 : 0,
                  paddingLeft: i > 0 ? 48 : 0,
                }}
              >
                {/* Huge faded step number — decorative, not a box */}
                <div
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(56px, 5.5vw, 80px)",
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                    lineHeight: 0.9,
                    marginBottom: 24,
                    background: `linear-gradient(135deg, rgba(${s.colorRgb},0.28) 0%, rgba(${s.colorRgb},0.06) 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    userSelect: "none",
                  }}
                >
                  {s.num}
                </div>

                {/* Icon + title */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ color: s.color, flexShrink: 0 }}>{s.icon}</div>
                  <h3 style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#f8fafc",
                    letterSpacing: "-0.02em",
                    margin: 0,
                  }}>
                    {s.title}
                  </h3>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "#8899b0",
                  margin: 0,
                }}>
                  {s.text}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>

      <style>{`
        .step-editorial-bordered {
          border-left: 1px solid rgba(255,255,255,0.05);
        }
        @media (max-width: 768px) {
          .nextsteps-header { text-align: center; }
          .steps-editorial-grid {
            grid-template-columns: 1fr !important;
          }
          .step-editorial {
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-top: 32px !important;
            padding-bottom: 32px !important;
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.06);
          }
          .steps-editorial-grid > div:first-child .step-editorial {
            border-top: none !important;
            padding-top: 36px !important;
          }
          .step-item { text-align: center; }
          .step-item > div:first-child { text-align: center; }
          .step-item > div[style*="flex"] { justify-content: center; }
          .next-steps-section { padding-top: 52px !important; padding-bottom: 52px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .step-editorial { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
