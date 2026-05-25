"use client";
import { useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";

const panels = [
  {
    num: "01",
    title: "Content System",
    text: "Plan, create, schedule, and engage with a structured content engine that keeps your brand visible and consistent.",
    color: "#06b6d4",
    visual: (
      <div style={{ position: "relative", height: 160 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="glass"
            style={{
              position: "absolute",
              left: `${i * 18}px`,
              top: `${i * 12}px`,
              width: 160,
              height: 100,
              padding: "10px 12px",
              borderRadius: 12,
              zIndex: 3 - i,
              opacity: 1 - i * 0.25,
              background: i === 0 ? "rgba(6,182,212,0.1)" : undefined,
            }}
          >
            <div style={{ height: 8, width: 80, background: "rgba(6,182,212,0.3)", borderRadius: 4, marginBottom: 8 }} />
            <div style={{ height: 6, width: "90%", background: "rgba(255,255,255,0.06)", borderRadius: 3, marginBottom: 5 }} />
            <div style={{ height: 6, width: "70%", background: "rgba(255,255,255,0.04)", borderRadius: 3 }} />
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "02",
    title: "Website System",
    text: "Turn attention into leads with landing pages built around clear conversion paths and measurable outcomes.",
    color: "#06b6d4",
    visual: (
      <div className="glass" style={{ height: 160, padding: "14px", borderRadius: 12 }}>
        <div style={{ height: 10, background: "rgba(6,182,212,0.2)", borderRadius: 4, width: "60%", marginBottom: 10 }} />
        <div style={{ height: 6, background: "rgba(255,255,255,0.05)", borderRadius: 3, width: "90%", marginBottom: 6 }} />
        <div style={{ height: 6, background: "rgba(255,255,255,0.04)", borderRadius: 3, width: "75%", marginBottom: 14 }} />
        <div style={{ display: "inline-block", background: "linear-gradient(135deg,#06b6d4,#818cf8)", borderRadius: 100, padding: "5px 14px" }}>
          <div style={{ height: 6, width: 60, background: "rgba(255,255,255,0.6)", borderRadius: 3 }} />
        </div>
        <div style={{ marginTop: 14, height: 40, background: "rgba(255,255,255,0.03)", borderRadius: 8, border: "1px solid rgba(6,182,212,0.1)" }} />
      </div>
    ),
  },
  {
    num: "03",
    title: "Automation System",
    text: "Move leads through your pipeline without manual follow-up. Smart workflows that work 24/7.",
    color: "#818cf8",
    visual: (
      <div style={{ height: 160, display: "flex", flexDirection: "column", justifyContent: "center", gap: 6 }}>
        {["New Lead", "Send Email", "Notify Team", "Book Call"].map((step, i) => (
          <div key={step} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: i === 0 ? "rgba(129,140,248,0.2)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${i === 0 ? "rgba(129,140,248,0.4)" : "rgba(255,255,255,0.08)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: i === 0 ? "#818cf8" : "rgba(255,255,255,0.2)" }} />
            </div>
            <div className="glass" style={{ flex: 1, padding: "6px 12px", borderRadius: 8 }}>
              <span style={{ fontFamily: "var(--font-dm)", fontSize: 11, color: i === 0 ? "#c7d2fe" : "#64748b", fontWeight: 500 }}>{step}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "04",
    title: "AI Voice Agent",
    text: "Capture missed calls, qualify leads, and support customers with AI-powered voice systems that never sleep.",
    color: "#06b6d4",
    visual: (
      <div style={{ height: 160, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
        <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 44 }}>
          {[0.4, 0.7, 1, 0.8, 0.5, 0.9, 0.6, 1, 0.7, 0.45, 0.85, 0.65].map((h, i) => (
            <div
              key={i}
              style={{
                width: 4,
                borderRadius: 2,
                background: "linear-gradient(180deg,#06b6d4,#818cf8)",
                transformOrigin: "bottom",
                animation: `waveform ${0.6 + i * 0.1}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.07}s`,
                height: `${h * 100}%`,
              }}
            />
          ))}
        </div>
        <div className="glass" style={{ width: "100%", padding: "10px 14px", borderRadius: 10 }}>
          <div style={{ fontFamily: "var(--font-dm)", fontSize: 10, color: "#64748b", marginBottom: 4 }}>Call Summary</div>
          <div style={{ fontFamily: "var(--font-dm)", fontSize: 12, color: "#94a3b8" }}>Qualified lead interested in digital growth services.</div>
        </div>
      </div>
    ),
  },
  {
    num: "05",
    title: "Community System",
    text: "Support and moderate fast-moving online communities across Telegram, Discord, and social channels.",
    color: "#818cf8",
    visual: (
      <div style={{ height: 160, display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
        {[
          { msg: "# announcements · New update is live!", align: "left" },
          { msg: "# general · Great project!", align: "right" },
          { msg: "# support · How can we help?", align: "left" },
        ].map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.align === "right" ? "flex-end" : "flex-start" }}>
            <div
              className="glass"
              style={{
                padding: "7px 12px",
                borderRadius: 10,
                maxWidth: "80%",
                borderColor: i === 0 ? "rgba(129,140,248,0.25)" : undefined,
              }}
            >
              <span style={{ fontFamily: "var(--font-dm)", fontSize: 11, color: i === 0 ? "#a5b4fc" : "#64748b" }}>{m.msg}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export function SystemShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad" id="showcase" style={{ overflow: "hidden" }}>
      <div className="section-inner">
        <SectionHeader
          label="The System"
          title="One smooth system. Multiple growth channels."
          subtitle="Flowstate connects the moving parts of your digital presence into one clear system for attention, conversion, automation, and community."
        />

        {/* Tab navigation */}
        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap", justifyContent: "center" }}>
          {panels.map((p, i) => (
            <button
              key={p.num}
              onClick={() => setActive(i)}
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 13,
                fontWeight: 500,
                padding: "8px 18px",
                borderRadius: 100,
                border: `1px solid ${active === i ? p.color : "rgba(255,255,255,0.08)"}`,
                background: active === i ? `rgba(${p.color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.12)` : "transparent",
                color: active === i ? p.color : "#64748b",
                cursor: "pointer",
                transition: "all 0.25s",
              }}
            >
              {p.num} {p.title}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div
          className="glass"
          style={{
            padding: "40px 48px",
            borderRadius: 24,
            borderColor: `rgba(${panels[active].color === "#06b6d4" ? "6,182,212" : "129,140,248"},0.2)`,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
            minHeight: 280,
            transition: "border-color 0.3s",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: panels[active].color,
                marginBottom: 14,
                fontWeight: 500,
              }}
            >
              System {panels[active].num}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: 28,
                fontWeight: 800,
                color: "#f8fafc",
                marginBottom: 16,
                letterSpacing: "-0.03em",
              }}
            >
              {panels[active].title}
            </h3>
            <p style={{ fontFamily: "var(--font-dm)", fontSize: 15, lineHeight: 1.8, color: "#94a3b8" }}>
              {panels[active].text}
            </p>
          </div>
          <div>{panels[active].visual}</div>
        </div>
      </div>
      <style>{`@media(max-width:700px){ #showcase .glass>div{grid-template-columns:1fr!important} }`}</style>
    </section>
  );
}
