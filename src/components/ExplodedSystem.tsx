"use client";
import { useEffect, useRef, useState } from "react";

const nodes = [
  { id: "content", label: "Content", sub: "Plan • Create • Engage", angle: -90, dist: 200, color: "#06b6d4" },
  { id: "website", label: "Website", sub: "Convert • Capture • Grow", angle: -18, dist: 200, color: "#06b6d4" },
  { id: "automation", label: "AI Automation", sub: "Automate • Scale", angle: 54, dist: 200, color: "#818cf8" },
  { id: "voice", label: "Voice Agent", sub: "Answer • Convert", angle: 126, dist: 200, color: "#818cf8" },
  { id: "community", label: "Community", sub: "Support • Engage", angle: 198, dist: 200, color: "#06b6d4" },
];

export function ExplodedSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cx = 400, cy = 320;

  return (
    <section
      style={{
        padding: "96px 24px",
        background: "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.03) 50%, transparent 100%)",
        borderTop: "1px solid rgba(6,182,212,0.06)",
        borderBottom: "1px solid rgba(6,182,212,0.06)",
      }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontFamily: "var(--font-dm)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#06b6d4", marginBottom: 16, fontWeight: 500 }}>
            The Full Picture
          </p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(30px,4vw,48px)", fontWeight: 800, color: "#f8fafc", marginBottom: 16, letterSpacing: "-0.03em" }}>
            The full system,{" "}
            <span className="gradient-text">opened up.</span>
          </h2>
          <p style={{ fontFamily: "var(--font-dm)", fontSize: 17, lineHeight: 1.75, color: "#94a3b8", maxWidth: 580, margin: "0 auto" }}>
            Every part of your digital presence works better when it is connected by strategy, automation, and clear conversion paths.
          </p>
        </div>

        {/* Visual */}
        <div ref={ref} style={{ position: "relative", overflow: "hidden", borderRadius: 24 }}>
          {/* Dark bg */}
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(6,182,212,0.08)",
              borderRadius: 24,
              padding: "40px 20px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glow */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(6,182,212,0.06),transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

            <svg
              viewBox="0 0 800 640"
              style={{ width: "100%", maxWidth: 800, display: "block", margin: "0 auto" }}
            >
              <defs>
                <filter id="node-glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Connector lines */}
              {nodes.map((n, i) => {
                const rad = (n.angle * Math.PI) / 180;
                const targetDist = visible ? n.dist : 0;
                const nx = cx + Math.cos(rad) * targetDist;
                const ny = cy + Math.sin(rad) * targetDist;
                return (
                  <line
                    key={n.id}
                    x1={cx} y1={cy} x2={nx} y2={ny}
                    stroke={n.color}
                    strokeWidth="1"
                    strokeOpacity="0.35"
                    strokeDasharray="5 4"
                    style={{ transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s` }}
                  />
                );
              })}

              {/* Node cards */}
              {nodes.map((n, i) => {
                const rad = (n.angle * Math.PI) / 180;
                const dist = visible ? n.dist : 0;
                const nx = cx + Math.cos(rad) * dist;
                const ny = cy + Math.sin(rad) * dist;
                return (
                  <g
                    key={n.id}
                    style={{
                      transition: `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s, opacity 0.7s ease ${i * 0.12}s`,
                      opacity: visible ? 1 : 0,
                      transform: `translate(${nx - cx}px, ${ny - cy}px)`,
                    }}
                  >
                    <rect
                      x={cx - 64}
                      y={cy - 36}
                      width={128}
                      height={72}
                      rx={12}
                      fill="rgba(255,255,255,0.04)"
                      stroke={n.color}
                      strokeOpacity={0.25}
                      strokeWidth={1}
                    />
                    <text
                      x={cx}
                      y={cy - 8}
                      textAnchor="middle"
                      fill="#e2e8f0"
                      fontSize="12"
                      fontWeight="700"
                      fontFamily="Syne, sans-serif"
                    >
                      {n.label}
                    </text>
                    <text
                      x={cx}
                      y={cy + 12}
                      textAnchor="middle"
                      fill={n.color}
                      fontSize="9"
                      fontFamily="DM Sans, sans-serif"
                      opacity="0.8"
                    >
                      {n.sub}
                    </text>
                    {/* Node dot */}
                    <circle cx={cx} cy={cy + 28} r="4" fill={n.color} opacity="0.7" filter="url(#node-glow)" />
                  </g>
                );
              })}

              {/* Central core */}
              <circle cx={cx} cy={cy} r="42" fill="rgba(6,182,212,0.08)" stroke="#06b6d4" strokeOpacity="0.3" strokeWidth="1.5" />
              <circle
                cx={cx} cy={cy} r="54"
                fill="none"
                stroke="#818cf8"
                strokeOpacity="0.15"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="animate-pulse-ring"
              />
              <text x={cx} y={cy - 6} textAnchor="middle" fill="url(#fg)" fontSize="22" fontWeight="800" fontFamily="Syne, sans-serif">F</text>
              <text x={cx} y={cy + 14} textAnchor="middle" fill="#94a3b8" fontSize="8" letterSpacing="2" fontFamily="DM Sans, sans-serif">FLOWSTATE</text>
              <defs>
                <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
