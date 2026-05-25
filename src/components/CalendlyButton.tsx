"use client";
import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/escorpiao-enterprise/30min";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function CalendlyButton({ className, style, children }: Props) {
  const [open, setOpen] = useState(false);
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRoot(document.body);
  }, []);

  return (
    <>
      <button
        className={className}
        style={style}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>

      {root && (
        <PopupModal
          url={CALENDLY_URL}
          open={open}
          onModalClose={() => setOpen(false)}
          rootElement={root}
        />
      )}
    </>
  );
}
