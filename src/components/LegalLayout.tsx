"use client";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface Section {
  heading: string;
  body: React.ReactNode;
}

interface LegalLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalLayout({ badge, title, subtitle, lastUpdated, sections }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        style={{
          minHeight: "100svh",
          background: "#050a14",
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      >
        {/* Radial fade over grid */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 20%, #050a14 80%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Hero strip */}
        <div
          className="legal-hero"
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: 140,
            paddingBottom: 64,
            paddingLeft: 24,
            paddingRight: 24,
            textAlign: "center",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 14px",
              borderRadius: 100,
              background: "rgba(6,182,212,0.08)",
              border: "1px solid rgba(6,182,212,0.2)",
              marginBottom: 24,
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#67e8f9",
              }}
            >
              {badge}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              color: "#f8fafc",
              marginBottom: 20,
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 17,
              lineHeight: 1.75,
              color: "#8899b0",
              maxWidth: 560,
              margin: "0 auto 20px",
            }}
          >
            {subtitle}
          </p>

          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 13,
              color: "#6b7d99",
              letterSpacing: "0.03em",
            }}
          >
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Body */}
        <div
          className="legal-body"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 780,
            margin: "0 auto",
            padding: "72px 24px 96px",
          }}
        >
          {sections.map((s, i) => (
            <div
              key={i}
              style={{
                marginBottom: 52,
                paddingBottom: 52,
                borderBottom:
                  i < sections.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#f1f5f9",
                  marginBottom: 18,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#06b6d4",
                    background: "rgba(6,182,212,0.08)",
                    border: "1px solid rgba(6,182,212,0.15)",
                    borderRadius: 6,
                    padding: "2px 8px",
                    letterSpacing: "0.05em",
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.heading}
              </h2>
              <div
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 16,
                  lineHeight: 1.85,
                  color: "#94a3b8",
                }}
              >
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
