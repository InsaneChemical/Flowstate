"use client";

/* ─── Logo definitions ─────────────────────────────────────────────────────── */
const logos = [
  {
    name: "Claude",
    icon: (
      /* Anthropic asterisk mark — 8 radiating spokes */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <line x1="12" y1="2"    x2="12" y2="7"    />
        <line x1="12" y1="17"   x2="12" y2="22"   />
        <line x1="2"  y1="12"   x2="7"  y2="12"   />
        <line x1="17" y1="12"   x2="22" y2="12"   />
        <line x1="4.93" y1="4.93"   x2="8.46" y2="8.46"   />
        <line x1="15.54" y1="15.54" x2="19.07" y2="19.07" />
        <line x1="19.07" y1="4.93"  x2="15.54" y2="8.46"  />
        <line x1="8.46"  y1="15.54" x2="4.93"  y2="19.07" />
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    icon: (
      /* OpenAI-style swirl — two interlocking arcs */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 3a9 9 0 0 1 6.36 15.36" />
        <path d="M12 21a9 9 0 0 1-6.36-15.36" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "n8n",
    icon: (
      /* n8n — two nodes joined by a pipe */
      <svg width="20" height="18" viewBox="0 0 28 24" fill="none">
        <circle cx="4"  cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="24" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <line x1="7.5" y1="12" x2="20.5" y2="12" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="14" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "ElevenLabs",
    icon: (
      /* ElevenLabs — audio waveform bars */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2"  y="9"  width="3" height="6"  rx="1.5" />
        <rect x="7"  y="5"  width="3" height="14" rx="1.5" />
        <rect x="12" y="2"  width="3" height="20" rx="1.5" />
        <rect x="17" y="5"  width="3" height="14" rx="1.5" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    icon: (
      /* Vercel — solid triangle (their exact mark) */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 23,21 1,21" />
      </svg>
    ),
  },
  {
    name: "Mistral",
    icon: (
      /* Mistral — pixelated block grid (their brand mosaic) */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2"  y="2"  width="6" height="6" rx="1" />
        <rect x="10" y="2"  width="6" height="6" rx="1" />
        <rect x="2"  y="10" width="6" height="6" rx="1" />
        <rect x="10" y="10" width="6" height="6" rx="1" />
        <rect x="18" y="10" width="4" height="4" rx="1" opacity="0.6" />
        <rect x="10" y="18" width="6" height="4" rx="1" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Hermes",
    icon: (
      /* Hermes — stylised H lettermark */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="5"  y1="4" x2="5"  y2="20" />
        <line x1="19" y1="4" x2="19" y2="20" />
        <line x1="5"  y1="12" x2="19" y2="12" />
        <line x1="5"  y1="4"  x2="10" y2="4"  />
        <line x1="14" y1="4"  x2="19" y2="4"  />
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
          /* fade logos in/out at left and right edges */
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
              {/* dot separator except after the very last item */}
              {i < doubled.length - 1 && <Dot />}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-track {
          animation: ticker 32s linear infinite;
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
