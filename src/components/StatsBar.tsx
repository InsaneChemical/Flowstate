"use client";
import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { RevealWrapper } from "./ui/RevealWrapper";

type StatDef = {
  target: number | null; // null = non-numeric, keeps original text
  suffix: string;
  text: string;          // shown as-is when target is null
  label: string;
};

const stats: StatDef[] = [
  { target: 20,   suffix: "+", text: "20+",  label: "Clients Served"    },
  { target: 4,    suffix: "+", text: "4+",   label: "Years Experience"  },
  { target: null, suffix: "",  text: "Web3", label: "Community Native"  },
  { target: 100,  suffix: "%", text: "100%", label: "Growth Focused"    },
];

/* ─── Single animated number ──────────────────────────────────────────────── */
function AnimatedNumber({
  target,
  suffix,
  text,
  triggered,
  delay = 0,
}: {
  target: number | null;
  suffix: string;
  text: string;
  triggered: boolean;
  delay?: number;
}) {
  const [display, setDisplay] = useState<string>(target !== null ? "0" : text);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!triggered || target === null || hasAnimated.current) return;

    const run = () => {
      hasAnimated.current = true;
      // Duration scales with target so 4+ feels snappier than 100%
      const duration = Math.min(1800, target * 55 + 700);
      const startTime = performance.now();

      function tick(now: number) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        // ease-out cubic: fast start, soft landing
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(String(Math.round(eased * target!)));
        if (t < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    };

    if (delay > 0) {
      const id = setTimeout(run, delay);
      return () => clearTimeout(id);
    }
    run();
  }, [triggered, target, delay]);

  if (target === null) return <>{text}</>;
  return <>{display}{suffix}</>;
}

/* ─── StatsBar ─────────────────────────────────────────────────────────────── */
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
                  <AnimatedNumber
                    target={stat.target}
                    suffix={stat.suffix}
                    text={stat.text}
                    triggered={visible}
                    delay={i * 80} // slight stagger between columns
                  />
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
