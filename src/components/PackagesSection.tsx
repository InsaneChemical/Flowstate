"use client";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const packages = [
  {
    name: "Launch",
    pricingSignal: "From a single conversation",
    subtitle: "For businesses that need a stronger online foundation.",
    highlight: false,
    variant: "cyan",
    bullets: [
      "Conversion landing page",
      "Brand-aligned visual direction",
      "Basic content setup",
      "Contact / enquiry pathway",
      "Mobile-friendly design",
    ],
  },
  {
    name: "Growth",
    pricingSignal: "Flexible monthly retainer",
    subtitle: "For businesses ready to post consistently and generate leads.",
    highlight: true,
    badge: "Most Popular",
    variant: "cyan",
    bullets: [
      "Social media content system",
      "Website or landing page support",
      "Lead generation setup",
      "Basic AI automation",
      "Monthly optimisation",
    ],
  },
  {
    name: "Flowstate",
    pricingSignal: "Full-system partnership",
    subtitle: "For businesses that want the full digital growth system.",
    highlight: false,
    variant: "purple",
    bullets: [
      "Content strategy",
      "Conversion-focused website",
      "AI automation workflows",
      "AI voice agent setup",
      "Community management support",
      "Ongoing strategy & optimisation",
    ],
  },
];

export function PackagesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="packages"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, transparent, rgba(129,140,248,0.03) 50%, transparent)",
        borderTop: "1px solid rgba(129,140,248,0.06)",
        borderBottom: "1px solid rgba(129,140,248,0.06)",
      }}
    >
      <div className="section-inner">
        <SectionHeader
          label="Investment"
          title="Choose the level of flow your business needs."
        />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, alignItems: "start" }}
          className="packages-grid"
        >
          {packages.map((pkg, i) => (
            <RevealWrapper key={pkg.name} visible={visible} delay={i * 150}>
            <div
              className={`glass ${pkg.highlight ? "border-glow-cyan glow-cyan" : pkg.variant === "purple" ? "border-glow-purple" : ""}`}
              style={{
                padding: "36px 32px",
                position: "relative",
                transition: "all 0.35s",
                transform: pkg.highlight ? "scale(1.03)" : undefined,
              }}
            >
              {pkg.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg,#06b6d4,#818cf8)",
                    color: "white",
                    fontFamily: "var(--font-dm)",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "5px 16px",
                    borderRadius: 100,
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 20px rgba(6,182,212,0.3)",
                  }}
                >
                  {pkg.badge}
                </div>
              )}
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 26,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  marginBottom: 4,
                  background: pkg.variant === "purple"
                    ? "linear-gradient(135deg,#818cf8,#06b6d4)"
                    : "linear-gradient(135deg,#06b6d4,#818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {pkg.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 11,
                  color: "#334155",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                {pkg.pricingSignal}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 13,
                  color: "#64748b",
                  lineHeight: 1.6,
                  marginBottom: 28,
                }}
              >
                {pkg.subtitle}
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {pkg.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      marginBottom: 12,
                      fontFamily: "var(--font-dm)",
                      fontSize: 14,
                      color: "#94a3b8",
                      lineHeight: 1.5,
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={pkg.variant === "purple" ? "#818cf8" : "#06b6d4"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      style={{ flexShrink: 0, marginTop: 1 }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={pkg.highlight ? "btn-primary" : "btn-secondary"}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "13px 24px",
                  fontSize: 14,
                  ...(pkg.variant === "purple" && !pkg.highlight
                    ? {
                        borderColor: "rgba(129,140,248,0.3)",
                        color: "#a5b4fc",
                      }
                    : {}),
                }}
              >
                Enquire Now
              </a>
            </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){ .packages-grid{grid-template-columns:1fr!important} .packages-grid>div:nth-child(2){transform:none!important} }`}</style>
    </section>
  );
}
