"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealWrapper } from "./ui/RevealWrapper";

const steps = [
  {
    num: "01",
    title: "Book a free call",
    text: "A 30-minute conversation to understand your business, goals, and biggest growth blockers.",
    color: "#06b6d4",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.6 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.12 4.18 2 2 0 0 1 5.09 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 24 16.92z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Get your proposal",
    text: "Within 48 hours we'll send a clear plan — what we'll build, how it works, and what to expect.",
    color: "#818cf8",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export function NextSteps() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-pad" style={{ paddingTop: 60, paddingBottom: 0 }}>
      <div className="section-inner">
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
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
            maxWidth: 480,
          }}>
            Three steps from here{" "}
            <span style={{ color: "#64748b" }}>to moving.</span>
          </h2>
        </div>

        {/* Steps */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            position: "relative",
          }}
          className="next-steps-grid"
        >
          {/* Connecting line */}
          <div style={{
            position: "absolute",
            top: 28,
            left: "16.66%",
            right: "16.66%",
            height: 1,
            background: "linear-gradient(90deg, rgba(6,182,212,0.3) 0%, rgba(129,140,248,0.3) 50%, rgba(6,182,212,0.3) 100%)",
            zIndex: 0,
          }} className="steps-connector" />

          {steps.map((s, i) => (
            <RevealWrapper key={s.num} visible={visible} delay={i * 120}>
              <div style={{
                padding: "0 32px 0 0",
                paddingLeft: i > 0 ? 32 : 0,
                paddingRight: i < steps.length - 1 ? 32 : 0,
                position: "relative",
                zIndex: 1,
              }}>
                {/* Icon circle */}
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: `rgba(${s.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.1)`,
                  border: `1px solid rgba(${s.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.3)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: s.color,
                  marginBottom: 24,
                  boxShadow: `0 0 20px rgba(${s.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.15)`,
                  backdropFilter: "blur(8px)",
                }}>
                  {s.icon}
                </div>

                {/* Step number */}
                <div style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 12,
                  fontWeight: 800,
                  background: `linear-gradient(135deg, ${s.color}, ${s.color === "#06b6d4" ? "#818cf8" : "#06b6d4"})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.08em",
                  marginBottom: 10,
                }}>
                  STEP {s.num}
                </div>

                <h3 style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#f8fafc",
                  marginBottom: 10,
                  letterSpacing: "-0.02em",
                }}>
                  {s.title}
                </h3>

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
        @media(max-width:768px){
          .next-steps-grid{ grid-template-columns:1fr !important; gap: 40px; }
          .steps-connector{ display:none; }
        }
      `}</style>
    </section>
  );
}
