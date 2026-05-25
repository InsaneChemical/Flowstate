"use client";

export function PhotoDivider() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(220px, 24vw, 360px)",
        overflow: "hidden",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
        alt="Team collaborating on a project"
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 35%",
        }}
      />

      {/* Edge fades only — let the photo breathe */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, #050a14 0%, transparent 18%, transparent 82%, #050a14 100%)",
        }}
      />
    </div>
  );
}
