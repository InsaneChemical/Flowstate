"use client";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "Discover",
    text: "We understand your business, goals, audience, and growth opportunities.",
    color: "#06b6d4",
  },
  {
    num: "02",
    title: "Design",
    text: "We map the strategy, creative direction, and system structure.",
    color: "#818cf8",
  },
  {
    num: "03",
    title: "Build",
    text: "We create the content, pages, workflows, and AI tools your business needs.",
    color: "#06b6d4",
  },
  {
    num: "04",
    title: "Optimise",
    text: "We improve performance over time using feedback, data, and conversion insights.",
    color: "#818cf8",
  },
];

export function ProcessSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="process" className="section-pad">
      <div className="section-inner">
        <SectionHeader
          label="How We Work"
          title="A simple process designed for momentum."
        />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
          className="process-list"
        >
          {steps.map((s, i) => (
            <RevealWrapper key={s.num} visible={visible} delay={i * 100}>
              <div
                className="process-step"
                style={{
                  padding: "32px 0",
                  borderRight: i < steps.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
                  paddingRight: i < steps.length - 1 ? 28 : 0,
                  paddingLeft: i > 0 ? 28 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: 13,
                    fontWeight: 800,
                    background: `linear-gradient(135deg, ${s.color}, ${s.color === "#06b6d4" ? "#818cf8" : "#06b6d4"})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: 14,
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.num}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#f8fafc",
                    marginBottom: 10,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 14,
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
        @media(max-width:768px){
          .process-list{ grid-template-columns:repeat(2,1fr)!important; }
          .process-step{ padding-left: 0 !important; padding-right: 20px !important; }
        }
        @media(max-width:480px){
          .process-list{ grid-template-columns:1fr!important; }
          .process-step{ padding-left: 0 !important; padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}
