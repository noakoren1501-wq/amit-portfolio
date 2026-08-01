"use client";

import { useEffect, useRef, useState } from "react";
import type { ProjectImage } from "./Carousel";

interface CarouselViewerProps {
  images: ProjectImage[];
  startIndex: number;
  onClose: () => void;
}

export default function CarouselViewer({ images, startIndex, onClose }: CarouselViewerProps) {
  const savedScroll = useRef(0);
  const [closing, setClosing] = useState(false);
  const [idx, setIdx] = useState(startIndex);
  const didClose = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const hasMany = images.length > 1;

  useEffect(() => {
    savedScroll.current = window.scrollY;
    document.body.style.overflow = "hidden";
    const len = images.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (didClose.current) return;
        didClose.current = true;
        setClosing(true);
        setTimeout(onClose, 340);
      }
      // RTL: ArrowLeft = next image, ArrowRight = previous image
      if (e.key === "ArrowLeft") setIdx(i => (i + 1) % len);
      if (e.key === "ArrowRight") setIdx(i => (i - 1 + len) % len);
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

  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const backdropAnim = closing ? "backdropOut 0.32s ease forwards" : "backdropIn 0.32s ease forwards";
  const boxAnim = closing
    ? "viewerOut 0.30s cubic-bezier(0.4,0,1,1) forwards"
    : "viewerIn 0.42s cubic-bezier(0.34,1.18,0.64,1) forwards";

  // Leave room for nav arrows (44px each side + gap) when multiple images
  const imgMaxW = hasMany ? "min(calc(92vw - 112px), 1200px)" : "min(92vw, 1280px)";

  return (
    <>
      {/* Backdrop */}
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

      {/* Centred column: image + counter */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 101,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          pointerEvents: "none",
        }}
      >
        {/* Row: prev arrow — image — next arrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: hasMany ? 12 : 0,
            animation: boxAnim,
            pointerEvents: "auto",
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={(e) => e.stopPropagation()}
        >
          {/* RTL: right side = הקודם (prev) */}
          {hasMany && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="הקודם"
              style={arrowStyle}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[idx].src}
            alt={images[idx].alt}
            draggable={false}
            style={{
              display: "block",
              maxWidth: imgMaxW,
              maxHeight: "88vh",
              width: "auto",
              height: "auto",
              borderRadius: 16,
              boxShadow: "0 32px 96px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06)",
              flexShrink: 0,
            }}
          />

          {/* RTL: left side = הבא (next) */}
          {hasMany && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="הבא"
              style={arrowStyle}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>

        {/* Position counter */}
        {hasMany && (
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "rgba(26,26,26,0.45)",
              letterSpacing: "0.08em",
              direction: "ltr",
              pointerEvents: "auto",
              animation: backdropAnim,
            }}
          >
            {idx + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Close button — top-left for RTL */}
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

const arrowStyle: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: "50%",
  border: "1px solid rgba(26,26,26,0.1)",
  background: "rgba(255,255,255,0.95)",
  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};
