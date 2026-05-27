"use client";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const trustPoints = [
  {
    title: "Transparent communication",
    text: "You always know what's happening, what's next, and why decisions are made.",
  },
  {
    title: "Strategy-first approach",
    text: "We don't just execute tasks — every action is connected to a measurable outcome.",
  },
  {
    title: "Built for your business",
    text: "No copy-paste playbooks. Every system is designed around your goals and audience.",
  },
  {
    title: "AI-native by design",
    text: "We integrate automation at every level, not as an afterthought, but as a core capability.",
  },
  {
    title: "Results over vanity metrics",
    text: "Follower counts are noise. We focus on leads, conversions, and real business growth.",
  },
  {
    title: "Web3 community specialists",
    text: "4+ years managing fast-moving crypto and Web3 communities across Telegram and Discord.",
  },
  {
    title: "Consistent delivery",
    text: "Deadlines are commitments. We show up, deliver, and iterate without being chased.",
  },
  {
    title: "One integrated system",
    text: "All your growth channels connected — content, website, automation, voice, community.",
  },
];

export function TrustSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="trust"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, rgba(129,140,248,0.04) 0%, transparent 100%)",
        borderTop: "1px solid rgba(129,140,248,0.06)",
      }}
    >
      <div className="section-inner">
        <SectionHeader
          label="Why Flowstate"
          title="Not just another digital agency."
          subtitle="We've seen what it looks like when strategy, content, tech, and community operate in silos — and we built the alternative."
        />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
          className="trust-grid"
        >
          {trustPoints.map((point, i) => (
            <RevealWrapper key={point.title} visible={visible} delay={i * 80}>
            <div
              className="glass glass-hover"
              style={{
                padding: "28px 32px",
                display: "flex",
                gap: 18,
                alignItems: "flex-start",
              }}
            >
              {/* Check icon */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: i % 2 === 0 ? "rgba(6,182,212,0.12)" : "rgba(129,140,248,0.12)",
                  border: `1px solid ${i % 2 === 0 ? "rgba(6,182,212,0.3)" : "rgba(129,140,248,0.3)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={i % 2 === 0 ? "#06b6d4" : "#818cf8"}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#f8fafc",
                    marginBottom: 6,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "#94a3b8",
                  }}
                >
                  {point.text}
                </p>
              </div>
            </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){ .trust-grid{grid-template-columns:1fr!important} }`}</style>
    </section>
  );
}
