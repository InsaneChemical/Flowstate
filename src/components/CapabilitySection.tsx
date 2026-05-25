"use client";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const capabilities = [
  "Social media strategy",
  "Content creation & scheduling",
  "Community management",
  "Landing page design",
  "Conversion optimisation",
  "Lead generation funnels",
  "AI workflow automation",
  "CRM & follow-up systems",
  "AI voice agent setup",
  "Telegram & Discord moderation",
  "Brand positioning",
  "Analytics & reporting",
];

export function CapabilitySection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-pad" id="capabilities">
      <div className="section-inner">
        <SectionHeader
          label="Capabilities"
          title="What flows through every engagement."
          subtitle="Whether you're on one package or all three systems, these are the capabilities we bring to your growth."
        />
        <RevealWrapper visible={visible}>
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
          }}
        >
          {capabilities.map((cap, i) => (
            <div
              key={cap}
              className="glass"
              style={{
                padding: "10px 20px",
                borderRadius: 100,
                fontFamily: "var(--font-dm)",
                fontSize: 13,
                fontWeight: 500,
                color: i % 3 === 2 ? "#a5b4fc" : i % 3 === 0 ? "#67e8f9" : "#cbd5e1",
                borderColor:
                  i % 3 === 2
                    ? "rgba(129,140,248,0.25)"
                    : i % 3 === 0
                    ? "rgba(6,182,212,0.25)"
                    : "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background:
                    i % 3 === 2
                      ? "#818cf8"
                      : i % 3 === 0
                      ? "#06b6d4"
                      : "rgba(255,255,255,0.3)",
                  flexShrink: 0,
                }}
              />
              {cap}
            </div>
          ))}
        </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
