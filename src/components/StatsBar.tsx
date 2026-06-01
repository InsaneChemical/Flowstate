"use client";
import { useEffect, useRef, useState } from "react";
import { RevealWrapper } from "./ui/RevealWrapper";

type StatDef = {
  target: number | null; // null = non-numeric, keeps original text
  suffix: string;
  text: string;          // shown as-is when target is null
  label: string;
};

const stats: StatDef[] = [
  { target: 20,   suffix: "+", text: "20+",  label: "Clients Served"   },
  { target: 4,    suffix: "+", text: "4+",   label: "Years Experience" },
  { target: null, suffix: "",  text: "Web3", label: "Community Native" },
  { target: 100,  suffix: "%", text: "100%", label: "Growth Focused"   },
];

/* ─── Count-up hook ────────────────────────────────────────────────────────
   Uses its own IntersectionObserver with rootMargin so it only fires once
   the bar has been scrolled at least 120px above the viewport bottom —
   not on initial page load when the bar might just be at the fold edge.
─────────────────────────────────────────────────────────────────────────── */
function useCountUpTrigger() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        // Shrink the bottom of the observation window so the element must
        // be at least ~120 px inside the viewport before counting starts.
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, triggered };
}

/* ─── Single animated number ───────────────────────────────────────────── */
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
  const [display, setDisplay] = useState<string>("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!triggered || target === null || hasAnimated.current) return;

    const run = () => {
      hasAnimated.current = true;
      const duration = Math.min(1800, target * 55 + 700);
      const startTime = performance.now();

      function tick(now: number) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
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

/* ─── StatsBar ─────────────────────────────────────────────────────────── */
export function StatsBar() {
  const { ref: revealRef, triggered } = useCountUpTrigger();
  // RevealWrapper uses the same trigger so the fade-in and count-up sync
  const [fadeVisible, setFadeVisible] = useState(false);

  useEffect(() => {
    if (triggered) setFadeVisible(true);
  }, [triggered]);

  return (
    <div className="stats-outer" style={{ padding: "0 24px 64px" }}>
      <style>{`
        @media (max-width: 600px) {
          .stats-outer    { padding: 0 16px 36px !important; }
          .stats-bar-inner { flex-wrap: wrap !important; }
          .stat-cell      { flex: 0 0 50% !important; box-sizing: border-box; padding: 20px 16px !important; }
          .stat-cell-0, .stat-cell-2 { border-right: 1px solid rgba(255,255,255,0.06) !important; }
          .stat-cell-1, .stat-cell-3 { border-right: none !important; }
          .stat-cell-0, .stat-cell-1 { border-bottom: 1px solid rgba(255,255,255,0.06); }
          .stat-cell-2, .stat-cell-3 { border-bottom: none; }
        }
      `}</style>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <RevealWrapper visible={fadeVisible}>
          <div
            ref={revealRef}
            className="glass border-glow-cyan stats-bar-inner"
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
                className={`stat-cell stat-cell-${i}`}
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
                    triggered={triggered}
                    delay={i * 80}
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
