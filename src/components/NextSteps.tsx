"use client";
import { motion, useReducedMotion } from "motion/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealWrapper } from "./ui/RevealWrapper";
import { ContainerTextFlip } from "./ui/modern-animated-multi-words";

const steps = [
  {
    num: "01",
    title: "Book a free call",
    text: "A 30-minute conversation to understand your business, goals, and biggest growth blockers.",
    color: "#06b6d4",
    colorRgb: "6,182,212",
    accentEnd: "#818cf8",
    cardClass: "step-card-cyan",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
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
    accentEnd: "#06b6d4",
    cardClass: "step-card-indigo",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "We get to work",
    text: "Onboarding to first deliverables in under 2 weeks. No long ramp-up, no agency runaround.",
    color: "#06b6d4",
    colorRgb: "6,182,212",
    accentEnd: "#818cf8",
    cardClass: "step-card-cyan",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
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
      style={{ paddingTop: 60, paddingBottom: 0 }}
    >
      <div className="section-inner">

        {/* ── Header ────────────────────────────────────────────── */}
        <motion.div
          className="next-steps-header"
          style={{ marginBottom: 56 }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={
            reduce
              ? { duration: 0.15 }
              : {
                  opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  y: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                }
          }
        >
          {/* Label */}
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 12,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#06b6d4",
              fontWeight: 500,
              marginBottom: 20,
            }}
          >
            What happens next
          </p>

          {/* Animated flip word — the visual hook */}
          <div className="next-steps-flip" style={{ marginBottom: 20 }}>
            <ContainerTextFlip
              words={["growing", "scaling", "thriving", "winning"]}
              variant="neon"
              interval={3000}
              animationDuration={700}
              textClassName="text-3xl md:text-4xl font-black tracking-tight whitespace-nowrap"
            />
          </div>

          {/* Sub-heading */}
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(20px, 2.2vw, 30px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#64748b",
              lineHeight: 1.35,
              maxWidth: 420,
              margin: 0,
            }}
          >
            Three clear steps to make it happen.
          </h2>
        </motion.div>

        {/* ── Step cards ────────────────────────────────────────── */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="next-steps-grid"
        >
          {steps.map((s, i) => (
            <RevealWrapper
              key={s.num}
              visible={visible}
              delay={i * 100}
              style={{ height: "100%" }}
            >
              <div className={`step-card ${s.cardClass} step-item`}>
                {/* Top gradient accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 28,
                    right: 28,
                    height: 1,
                    background: `linear-gradient(90deg, transparent, rgba(${s.colorRgb},0.55), transparent)`,
                  }}
                />

                {/* Icon circle */}
                <div
                  className="step-icon"
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: `rgba(${s.colorRgb},0.1)`,
                    border: `1.5px solid rgba(${s.colorRgb},0.3)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: s.color,
                    marginBottom: 28,
                    boxShadow: `0 0 28px rgba(${s.colorRgb},0.15)`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {s.icon}
                </div>

                {/* Step number badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: `rgba(${s.colorRgb},0.08)`,
                    border: `1px solid rgba(${s.colorRgb},0.2)`,
                    borderRadius: 99,
                    padding: "4px 12px",
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      background: `linear-gradient(135deg, ${s.color}, ${s.accentEnd})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    STEP {s.num}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#f8fafc",
                    marginBottom: 12,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: "#8899b0",
                    margin: 0,
                  }}
                >
                  {s.text}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>

      <style>{`
        /* Glass step cards */
        .step-card {
          position: relative;
          background: rgba(255,255,255,0.025);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 24px;
          padding: 36px 28px;
          height: 100%;
          box-sizing: border-box;
          transition: box-shadow 0.35s ease, border-color 0.35s ease, background 0.35s ease, transform 0.35s ease;
        }
        .step-card-cyan {
          border: 1px solid rgba(6,182,212,0.15);
        }
        .step-card-cyan:hover {
          box-shadow: 0 8px 48px rgba(6,182,212,0.1), 0 2px 12px rgba(0,0,0,0.35);
          border-color: rgba(6,182,212,0.38);
          background: rgba(6,182,212,0.03);
          transform: translateY(-2px);
        }
        .step-card-indigo {
          border: 1px solid rgba(129,140,248,0.15);
        }
        .step-card-indigo:hover {
          box-shadow: 0 8px 48px rgba(129,140,248,0.1), 0 2px 12px rgba(0,0,0,0.35);
          border-color: rgba(129,140,248,0.38);
          background: rgba(129,140,248,0.03);
          transform: translateY(-2px);
        }

        /* Mobile */
        @media(max-width:768px){
          .next-steps-grid    { grid-template-columns:1fr !important; gap: 16px !important; }
          .step-item          { text-align: center; }
          .step-item .step-icon { margin-left: auto !important; margin-right: auto !important; }
          .next-steps-header  { text-align: center; }
          .next-steps-header h2 { max-width: 100% !important; margin-left: auto; margin-right: auto; }
          .next-steps-flip    { display: flex; justify-content: center; }
        }
        @media(max-width:600px){
          .next-steps-section { padding-top: 40px !important; }
          .next-steps-header  { margin-bottom: 36px !important; }
        }

        /* Reduced motion — kill card lift */
        @media(prefers-reduced-motion: reduce){
          .step-card { transition: none !important; }
          .step-card:hover { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
