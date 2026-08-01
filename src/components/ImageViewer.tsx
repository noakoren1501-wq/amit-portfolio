"use client";

import { useEffect, useRef, useState } from "react";

interface ImageViewerProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageViewer({ src, alt, onClose }: ImageViewerProps) {
  const savedScroll = useRef(0);
  const [closing, setClosing] = useState(false);
  const didClose = useRef(false);

  useEffect(() => {
    savedScroll.current = window.scrollY;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.scrollTo(0, savedScroll.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    if (didClose.current) return;
    didClose.current = true;
    setClosing(true);
    setTimeout(onClose, 340);
  };

  const backdropAnim = closing
    ? "backdropOut 0.32s ease forwards"
    : "backdropIn 0.32s ease forwards";

  const boxAnim = closing
    ? "viewerOut 0.30s cubic-bezier(0.4,0,1,1) forwards"
    : "viewerIn 0.42s cubic-bezier(0.34,1.18,0.64,1) forwards";

  return (
    <>
      {/* Backdrop — page background color, not dark */}
      <div
        aria-hidden="true"
        onClick={handleClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          backgroundColor: "rgba(248,247,242,0.94)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          animation: backdropAnim,
        }}
      />

      {/* Centred image box */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 101,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: "min(92vw, 1280px)",
            maxHeight: "92vh",
            borderRadius: 20,
            overflow: "hidden",
            backgroundColor: "#F8F7F2",
            pointerEvents: "auto",
            animation: boxAnim,
            boxShadow: "0 32px 96px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            draggable={false}
            style={{
              display: "block",
              maxWidth: "min(92vw, 1280px)",
              maxHeight: "92vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* Close button — top-left for RTL layout */}
      <button
        onClick={handleClose}
        aria-label="סגור"
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 102,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "none",
          background: "rgba(26,26,26,0.08)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: backdropAnim,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(26,26,26,0.14)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(26,26,26,0.08)";
        }}
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M1 1l13 13M14 1L1 14" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
}
