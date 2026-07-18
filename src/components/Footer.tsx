"use client";
import Image from "next/image";
import Link from "next/link";

const services = [
  "Social Media Management",
  "Website Design",
  "AI Automation",
  "AI Voice Agents",
  "Web3 Community Support",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "System", href: "/#showcase" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer
      className="footer-root"
      style={{
        position: "relative",
        zIndex: 1,
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
          className="footer-grid footer-main-grid"
        >
          {/* Brand col */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <Image
                src="/logo-transparent.png"
                alt="Flowstate Media"
                width={142}
                height={36}
                style={{ height: "36px", width: "auto", objectFit: "contain", objectPosition: "left" }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 14,
                lineHeight: 1.8,
                color: "#6b7d99",
                maxWidth: 300,
                marginBottom: 24,
              }}
            >
              Smarter media. Smoother growth. We build connected digital systems
              that turn attention into revenue.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/flowstate.builds?igsh=MTFic3VubzNpczNubA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Flowstate Media on Instagram"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6b7d99",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(6,182,212,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#6b7d99";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com/flowstatebuilds"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Flowstate Media on X (Twitter)"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6b7d99",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(6,182,212,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#6b7d99";
                }}
              >
                {/* X logo */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services col */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6b7d99",
                marginBottom: 20,
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/#services"
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 14,
                      color: "#6b7d99",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6b7d99")}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation col */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6b7d99",
                marginBottom: 20,
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 14,
                      color: "#6b7d99",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6b7d99")}
                  >
                    {link.label}
                  </Link>
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
              color: "#6b7d99",
            }}
          >
            © {new Date().getFullYear()} Flowstate Media. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 12,
                  color: "#6b7d99",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6b7d99")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-main-grid { gap: 32px !important; margin-bottom: 36px !important; }
        }
        @media(max-width:600px){
          .footer-root { padding: 40px 20px 24px !important; }
          .footer-main-grid { gap: 28px !important; margin-bottom: 28px !important; }
        }
      `}</style>
    </footer>
  );
}
