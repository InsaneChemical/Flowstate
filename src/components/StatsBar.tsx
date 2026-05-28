"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealWrapper } from "./ui/RevealWrapper";

const stats = [
  { value: "20+", label: "Clients Served" },
  { value: "4+", label: "Years Experience" },
  { value: "Web3", label: "Community Native" },
  { value: "100%", label: "Growth Focused" },
];

export function StatsBar() {
  const { ref, visible } = useScrollReveal(0.3);

  return (
    <div style={{ padding: "0 24px 64px" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <RevealWrapper visible={visible}>
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="glass border-glow-cyan"
            style={{
              display: "flex",
              alignItems: "stretch",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  flex: 1,
                  padding: "24px 32px",
                  textAlign: "center",
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                }}
              >
                <div
                  className="gradient-text"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: 28,
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 13,
                    color: "#8899b0",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
}
