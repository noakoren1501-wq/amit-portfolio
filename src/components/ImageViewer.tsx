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
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      requestAnimationFrame(() => window.scrollTo(0, savedScroll.current));
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close — top left (RTL) */}
      <button
        onClick={onClose}
        aria-label="סגור"
        className="absolute top-4 left-4 z-10 w-9 h-9 flex items-center justify-center rounded-full text-black/40 hover:text-black hover:bg-black/6 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100vw",
          maxHeight: "100vh",
          width: "auto",
          height: "auto",
          display: "block",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
