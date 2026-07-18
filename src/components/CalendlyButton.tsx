"use client";
import { useState } from "react";
import { PopupModal } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/nuno-flowstatemedia/15-minute-check-in";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function CalendlyButton({ className, style, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={className}
        style={style}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>

      {typeof document !== "undefined" && (
        <PopupModal
          url={CALENDLY_URL}
          open={open}
          onModalClose={() => setOpen(false)}
          rootElement={document.body}
        />
      )}
    </>
  );
}
