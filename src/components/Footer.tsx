"use client";
import Image from "next/image";

const services = [
  "Social Media Management",
  "Website Design",
  "AI Automation",
  "AI Voice Agents",
  "Web3 Community Support",
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "System", href: "#showcase" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(3,6,12,0.9)",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <Image
                src="/logo-transparent.png"
                alt="Flowstate Media"
                width={140}
                height={36}
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 14,
                lineHeight: 1.8,
                color: "#475569",
                maxWidth: 300,
                marginBottom: 24,
              }}
            >
              Smarter media. Smoother growth. We build connected digital systems
              that turn attention into revenue.
            </p>
            {/* Instagram icon */}
            <div style={{ display: "flex", gap: 12 }}>
              <a
                href="https://www.instagram.com/flowstate.builds?igsh=MTFic3VubzNpczNubA=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#475569",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(6,182,212,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#475569";
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services col */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#334155",
                marginBottom: 20,
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 14,
                      color: "#475569",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#475569")}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation col */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#334155",
                marginBottom: 20,
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 14,
                      color: "#475569",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#475569")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 28 }} />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 12,
              color: "#334155",
            }}
          >
            © {new Date().getFullYear()} Flowstate Media. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 12,
                  color: "#334155",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#475569")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#334155")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ .footer-grid{grid-template-columns:1fr!important} }`}</style>
    </footer>
  );
}
