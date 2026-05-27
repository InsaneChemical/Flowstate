"use client";

/* ─── Logo definitions ─────────────────────────────────────────────────────── */
const logos = [
  {
    name: "Claude",
    icon: (
      /* Anthropic mark — smooth 6-spoke asterisk (their actual starburst) */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="2"  x2="12" y2="8"  />
        <line x1="12" y1="16" x2="12" y2="22" />
        <line x1="3.51" y1="6.5"  x2="8.34" y2="9.25"  />
        <line x1="15.66" y1="14.75" x2="20.49" y2="17.5" />
        <line x1="3.51" y1="17.5"  x2="8.34" y2="14.75" />
        <line x1="15.66" y1="9.25"  x2="20.49" y2="6.5"  />
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    icon: (
      /* OpenAI mark — 6 rounded rectangular arms at 60° intervals (their pinwheel) */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="11" y="2" width="2" height="6" rx="1" />
        <rect x="11" y="2" width="2" height="6" rx="1" transform="rotate(60 12 12)" />
        <rect x="11" y="2" width="2" height="6" rx="1" transform="rotate(120 12 12)" />
        <rect x="11" y="2" width="2" height="6" rx="1" transform="rotate(180 12 12)" />
        <rect x="11" y="2" width="2" height="6" rx="1" transform="rotate(240 12 12)" />
        <rect x="11" y="2" width="2" height="6" rx="1" transform="rotate(300 12 12)" />
      </svg>
    ),
  },
  {
    name: "n8n",
    icon: (
      /* n8n — three workflow nodes connected in sequence */
      <svg width="22" height="18" viewBox="0 0 30 24" fill="none">
        <circle cx="4"  cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="15" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="26" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <line x1="7"  y1="12" x2="12" y2="12" stroke="currentColor" strokeWidth="1.8" />
        <line x1="18" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    name: "ElevenLabs",
    icon: (
      /* ElevenLabs — "11" numeral mark (their actual brand symbol) */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="6"  y="4" width="3.5" height="16" rx="1.75" />
        <rect x="14.5" y="4" width="3.5" height="16" rx="1.75" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    icon: (
      /* Vercel — solid upward triangle (their exact mark) */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 23,21 1,21" />
      </svg>
    ),
  },
  {
    name: "Mistral",
    icon: (
      /* Mistral — diagonal cascade of blocks (their mosaic mark) */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2"  y="2"  width="5" height="5" rx="1" />
        <rect x="9"  y="2"  width="5" height="5" rx="1" />
        <rect x="16" y="2"  width="5" height="5" rx="1" />
        <rect x="2"  y="9"  width="5" height="5" rx="1" />
        <rect x="9"  y="9"  width="5" height="5" rx="1" />
        <rect x="2"  y="16" width="5" height="5" rx="1" />
      </svg>
    ),
  },
  {
    name: "Hermes",
    icon: (
      /* Hermes — clean H lettermark with serif-style top serifs */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5"  y1="5" x2="5"  y2="19" />
        <line x1="19" y1="5" x2="19" y2="19" />
        <line x1="5"  y1="12" x2="19" y2="12" />
      </svg>
    ),
  },
  {
    name: "OpenClaw",
    icon: (
      /* OpenClaw — round robot/crab body with antennae and claws */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {/* Body */}
        <circle cx="12" cy="13.5" r="5.5" />
        {/* Eyes */}
        <circle cx="10" cy="12.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="14" cy="12.5" r="1" fill="currentColor" stroke="none" />
        {/* Left antenna */}
        <line x1="10" y1="8" x2="8.5" y2="5" />
        <circle cx="8.2" cy="4.4" r="0.9" fill="currentColor" stroke="none" />
        {/* Right antenna */}
        <line x1="14" y1="8" x2="15.5" y2="5" />
        <circle cx="15.8" cy="4.4" r="0.9" fill="currentColor" stroke="none" />
        {/* Left claw */}
        <path d="M6.5 13.5 Q3.5 12.5 4 15.5" />
        {/* Right claw */}
        <path d="M17.5 13.5 Q20.5 12.5 20 15.5" />
        {/* Legs */}
        <line x1="10" y1="19" x2="9.5"  y2="22" />
        <line x1="14" y1="19" x2="14.5" y2="22" />
      </svg>
    ),
  },
];

/* ─── Separator dot ────────────────────────────────────────────────────────── */
function Dot() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 4,
        height: 4,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.12)",
        flexShrink: 0,
        margin: "0 4px",
      }}
    />
  );
}

/* ─── Single logo pill ─────────────────────────────────────────────────────── */
function LogoItem({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "0 28px",
        flexShrink: 0,
        color: "#4a5568",
        transition: "color 0.25s",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.color = "#94a3b8")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.color = "#4a5568")}
    >
      <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>{icon}</span>
      <span
        style={{
          fontFamily: "var(--font-dm)",
          fontSize: 13,
          fontWeight: 600,
          whiteSpace: "nowrap",
          letterSpacing: "0.01em",
        }}
      >
        {name}
      </span>
    </div>
  );
}

/* ─── Main component ───────────────────────────────────────────────────────── */
export function LogoTicker() {
  const doubled = [...logos, ...logos];

  return (
    <div
      style={{
        borderTop: "1px solid rgba(6,182,212,0.08)",
        borderBottom: "1px solid rgba(6,182,212,0.08)",
        background: "rgba(255,255,255,0.01)",
        padding: "18px 0",
        overflow: "hidden",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontFamily: "var(--font-dm)",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#334155",
          textAlign: "center",
          marginBottom: 14,
        }}
      >
        Tools we build with
      </p>

      {/* Scroll container with edge-fade mask */}
      <div
        style={{
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="ticker-track"
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
          }}
        >
          {doubled.map((logo, i) => (
            <span key={`${logo.name}-${i}`} style={{ display: "contents" }}>
              <LogoItem name={logo.name} icon={logo.icon} />
              {i < doubled.length - 1 && <Dot />}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-track {
          animation: ticker 36s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
