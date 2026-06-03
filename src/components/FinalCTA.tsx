"use client";
import { useState } from "react";
import { CalendlyButton } from "./CalendlyButton";

type FormState = "idle" | "submitting" | "success" | "error";

export function FinalCTA() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    need: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(6,182,212,0.08)",
      }}
    >
      {/* Background photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1800&q=80"
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 40%",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />
      {/* Gradient overlay on top of photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, #050a14 0%, rgba(5,10,20,0.7) 40%, rgba(5,10,20,0.7) 60%, #050a14 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-inner" style={{ position: "relative" }}>
        {/* Header */}
        <div className="cta-header" style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 12,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#06b6d4",
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            Get Started
          </p>
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(32px, 4.5vw, 54px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#f8fafc",
              marginBottom: 16,
            }}
          >
            Ready to grow your{" "}
            <span className="gradient-text">business?</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 17,
              lineHeight: 1.75,
              color: "#94a3b8",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Tell us where you are and where you want to go. We'll get back to you and take it from there.
          </p>
        </div>

        {/* Form card */}
        <div
          className="glass"
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "48px 48px",
            borderColor: "rgba(6,182,212,0.15)",
          }}
        >
          {/* Screen reader live region for form status */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {formState === "success" ? "Enquiry received. We'll be in touch soon." : ""}
            {formState === "submitting" ? "Sending your enquiry..." : ""}
          </div>

          {formState === "success" ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(6,182,212,0.12)",
                  border: "2px solid rgba(6,182,212,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#f8fafc",
                  marginBottom: 12,
                  letterSpacing: "-0.03em",
                }}
              >
                Enquiry received.
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 15,
                  color: "#94a3b8",
                  lineHeight: 1.7,
                }}
              >
                Thanks — your enquiry has been received. We&apos;ll be in touch
                soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                <label style={labelStyle}>
                  <span style={labelTextStyle}>Your name <span style={{ color: "#06b6d4" }} aria-hidden="true">*</span></span>
                  <input
                    className="input-glass"
                    type="text"
                    name="name"
                    placeholder="Alex Chen"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </label>
                <label style={labelStyle}>
                  <span style={labelTextStyle}>Business name <span style={{ color: "#06b6d4" }} aria-hidden="true">*</span></span>
                  <input
                    className="input-glass"
                    type="text"
                    name="business"
                    placeholder="Acme Co."
                    required
                    autoComplete="organization"
                    value={form.business}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <label style={labelStyle}>
                <span style={labelTextStyle}>Email address <span style={{ color: "#06b6d4" }} aria-hidden="true">*</span></span>
                <input
                  className="input-glass"
                  type="email"
                  name="email"
                  placeholder="alex@company.com"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>

              <label style={labelStyle}>
                <span style={labelTextStyle}>What do you need most? <span style={{ color: "#06b6d4" }} aria-hidden="true">*</span></span>
                <select
                  className="input-glass"
                  name="need"
                  required
                  value={form.need}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="social">Social media management</option>
                  <option value="website">Website design</option>
                  <option value="automation">AI automation</option>
                  <option value="voice">AI voice agent</option>
                  <option value="community">Community management</option>
                  <option value="full">Full growth system</option>
                  <option value="unsure">Not sure — help me figure it out</option>
                </select>
              </label>

              <label style={labelStyle}>
                <span style={labelTextStyle}>Tell us a bit more</span>
                <textarea
                  className="input-glass"
                  name="message"
                  rows={4}
                  placeholder="Where are you now, where do you want to go, and what's stopping you?"
                  autoComplete="off"
                  value={form.message}
                  onChange={handleChange}
                  style={{ resize: "vertical", minHeight: 110 }}
                />
              </label>

              <button
                type="submit"
                className="btn-primary"
                disabled={formState === "submitting"}
                style={{
                  justifyContent: "center",
                  padding: "15px 32px",
                  fontSize: 15,
                  marginTop: 4,
                  opacity: formState === "submitting" ? 0.7 : 1,
                  cursor: formState === "submitting" ? "wait" : "pointer",
                }}
              >
                {formState === "submitting" ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ animation: "spin 0.8s linear infinite" }}
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>

              {formState === "error" && (
                <p style={{ fontFamily: "var(--font-dm)", fontSize: 13, color: "#f87171", textAlign: "center" }}>
                  Something went wrong — please try again or email us directly.
                </p>
              )}

              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 13,
                  color: "#64748b",
                  textAlign: "center",
                }}
              >
                Prefer to talk now?{" "}
                <CalendlyButton
                  style={{ background: "none", border: "none", padding: "12px 4px", margin: "-12px 0", color: "#06b6d4", fontSize: 13, fontFamily: "var(--font-dm)", cursor: "pointer", textDecoration: "underline" }}
                >
                  Book a call directly
                </CalendlyButton>
              </p>
            </form>
          )}
        </div>
      </div>
      <style>{`
        @media(max-width:600px){
          .form-row { grid-template-columns: 1fr !important; }
          #contact .glass { padding: 28px 20px !important; }
          .cta-header { margin-bottom: 32px !important; }
        }
        @keyframes spin { to { transform: rotate(360deg) } }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const labelTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm)",
  fontSize: 14,
  fontWeight: 500,
  color: "#b0bfcf",
  letterSpacing: "0.01em",
};
