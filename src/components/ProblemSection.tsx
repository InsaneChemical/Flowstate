"use client";
import { RevealWrapper } from "./ui/RevealWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  "Posting without a strategy or system",
  "A website that looks good but doesn't convert",
  "Too much manual work that AI could handle",
];

export function ProblemSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div className="section-inner">
        <RevealWrapper visible={visible}>
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: 64,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#06b6d4",
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              The Challenge
            </p>
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(28px,3.5vw,44px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
                marginBottom: 40,
                maxWidth: 680,
                lineHeight: 1.15,
              }}
            >
              Most businesses aren&apos;t short on ideas.{" "}
              <span style={{ color: "#64748b" }}>They&apos;re short on systems.</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {problems.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    fontFamily: "var(--font-dm)",
                    fontSize: 16,
                    color: "#8899b0",
                    lineHeight: 1.6,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "rgba(6,182,212,0.4)",
                      flexShrink: 0,
                    }}
                  />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
