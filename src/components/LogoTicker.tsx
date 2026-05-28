"use client";

/*
 * All brand SVG paths sourced from Simple Icons (simpleicons.org)
 * and official brand repositories — viewBox preserved as-is per source.
 */

const logos = [
  {
    name: "Claude",
    icon: (
      /* Anthropic official mark — "A" letterform, Simple Icons 24×24 */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    icon: (
      /* OpenAI official hexagonal-knot mark, viewBox 256×260 (n8n/official source) */
      <svg width="18" height="18" viewBox="0 0 256 260" fill="currentColor" aria-hidden="true">
        <path d="M239.184 106.203a64.72 64.72 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.72 64.72 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.67 64.67 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.77 64.77 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483m-97.56 136.338a48.4 48.4 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.6 8.6 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601M37.158 197.93a48.35 48.35 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.34 8.34 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803M23.549 85.38a48.5 48.5 0 0 1 25.58-21.333v61.39a8.29 8.29 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.82.82 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405zm179.466 41.695-63.08-36.63L161.73 77.86a.82.82 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.54 8.54 0 0 0-4.4-7.213m21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.72.72 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391zM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.6 8.6 0 0 0-4.246 7.367zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218-28.188-16.218z" />
      </svg>
    ),
  },
  {
    name: "n8n",
    icon: (
      /* n8n official node-chain mark, Simple Icons 24×24 */
      <svg width="20" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632" />
      </svg>
    ),
  },
  {
    name: "ElevenLabs",
    icon: (
      /* ElevenLabs "11" bar mark, Simple Icons 24×24 */
      <svg width="14" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.6035 0v24h4.9317V0zm9.8613 0v24h4.9317V0z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    icon: (
      /* Vercel triangle mark, Simple Icons 24×24 */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="m12 1.608 12 20.784H0Z" />
      </svg>
    ),
  },
  {
    name: "Mistral",
    icon: (
      /* Mistral AI block-mosaic mark, Simple Icons 24×24 */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.143 3.429v3.428h-3.429v3.429h-3.428V6.857H6.857V3.43H3.43v13.714H0v3.428h10.286v-3.428H6.857v-3.429h3.429v3.429h3.429v-3.429h3.428v3.429h-3.428v3.428H24v-3.428h-3.43V3.429z" />
      </svg>
    ),
  },
  {
    name: "Hermes",
    icon: (
      /* Hermes (Nous Research) — clean H lettermark */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
        <line x1="5"  y1="4" x2="5"  y2="20" />
        <line x1="19" y1="4" x2="19" y2="20" />
        <line x1="5"  y1="12" x2="19" y2="12" />
      </svg>
    ),
  },
  {
    name: "OpenClaw",
    icon: (
      /* OpenClaw — round robot/crab with antennae, eyes and claws */
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="13.5" r="5.5" />
        <circle cx="10" cy="12.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="14" cy="12.5" r="1" fill="currentColor" stroke="none" />
        <line x1="10" y1="8" x2="8.5" y2="5" />
        <circle cx="8.2" cy="4.4" r="0.9" fill="currentColor" stroke="none" />
        <line x1="14" y1="8" x2="15.5" y2="5" />
        <circle cx="15.8" cy="4.4" r="0.9" fill="currentColor" stroke="none" />
        <path d="M6.5 13.5 Q3.5 12.5 4 15.5" />
        <path d="M17.5 13.5 Q20.5 12.5 20 15.5" />
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
        color: "#64748b",
        transition: "color 0.25s",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.color = "#94a3b8")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.color = "#64748b")}
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
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#64748b",
          textAlign: "center",
          marginBottom: 14,
        }}
      >
        Tools we build with
      </p>

      {/* Scroll track with edge-fade mask */}
      <div
        style={{
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="ticker-track"
          style={{ display: "flex", alignItems: "center", width: "max-content" }}
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
        .ticker-track { animation: ticker 36s linear infinite; }
        .ticker-track:hover { animation-play-state: paused; }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
