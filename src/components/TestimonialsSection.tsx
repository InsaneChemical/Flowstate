"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealWrapper } from "./ui/RevealWrapper";
import { SectionHeader } from "./ui/SectionHeader";

const testimonials = [
  {
    quote:
      "Flowstate rebuilt our entire content system in 3 weeks. Our lead flow has been consistent ever since — we're getting qualified enquiries every single week now.",
    name: "Alex M.",
    role: "Founder",
    company: "TechStart",
    initials: "AM",
    variant: "cyan",
  },
  {
    quote:
      "The AI automation setup alone saved us 12 hours a week. We scaled from 200 to 1,400 email subscribers in 60 days. The ROI was immediate.",
    name: "Jordan K.",
    role: "Director",
    company: "GrowthLab",
    initials: "JK",
    variant: "purple",
  },
  {
    quote:
      "Their Web3 community management is best-in-class. Our Telegram went from chaotic to converting. They understand the space and they deliver.",
    name: "Sam T.",
    role: "CMO",
    company: "ChainVentures",
    initials: "ST",
    variant: "cyan",
  },
];

export function TestimonialsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-pad" id="testimonials">
      <div className="section-inner">
        <SectionHeader
          label="Results"
          title="What clients say."
          subtitle="Real outcomes from real businesses that chose to build their digital growth system with us."
        />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <RevealWrapper key={t.name} visible={visible} delay={i * 150}>
              <div
                className={`glass ${t.variant === "purple" ? "border-glow-purple" : "border-glow-cyan"}`}
                style={{
                  padding: "36px 32px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                }}
              >
                {/* Quote mark */}
                <div
                  className="gradient-text"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 72,
                    lineHeight: 0.7,
                    userSelect: "none",
                    opacity: 0.6,
                  }}
                >
                  &ldquo;
                </div>

                {/* Quote text */}
                <p
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 15,
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
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background:
                        t.variant === "purple"
                          ? "linear-gradient(135deg,#818cf8,#06b6d4)"
                          : "linear-gradient(135deg,#06b6d4,#818cf8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "white",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#f8fafc",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-dm)",
                        fontSize: 12,
                        color: "#7c8fa5",
                      }}
                    >
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){ .testimonials-grid{grid-template-columns:1fr!important} }`}</style>
    </section>
  );
}
