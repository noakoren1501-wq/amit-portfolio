"use client";

import { useEffect, useRef } from "react";

interface ImageViewerProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageViewer({ src, alt, onClose }: ImageViewerProps) {
  const savedScroll = useRef(0);

  useEffect(() => {
    savedScroll.current = window.scrollY;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      // Restore scroll after the page re-renders
      requestAnimationFrame(() => window.scrollTo(0, savedScroll.current));
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col"
      style={{ background: "#F8F7F2" }}
    >
      {/* ── Top bar — matches site header height ── */}
      <div
        className="flex-shrink-0 flex items-center px-6 md:px-12 border-b border-[#E6E6E4]"
        style={{ height: 72 }}
      >
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#D7B94B]"
          style={{ color: "rgba(26,26,26,0.45)", fontFamily: "var(--font-heebo)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3l-5 5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          חזרה
        </button>
      </div>

      {/* ── Image — fills remaining space, never crops ── */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-14 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          draggable={false}
          style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
