"use client";

import { useEffect, useRef, useState } from "react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  title?: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, index, title, onClose, onPrev, onNext }: LightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  // Refs for event handlers (avoid stale closures)
  const zoomRef = useRef(1);
  const panRef = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panAtDragStart = useRef({ x: 0, y: 0 });
  const pinchDist = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  const onPrevRef = useRef(onPrev);
  const onNextRef = useRef(onNext);

  useEffect(() => { onCloseRef.current = onClose; }, [onClose]);
  useEffect(() => { onPrevRef.current = onPrev; }, [onPrev]);
  useEffect(() => { onNextRef.current = onNext; }, [onNext]);

  const applyZoom = (next: number) => {
    const clamped = Math.max(1, Math.min(3, next));
    zoomRef.current = clamped;
    setZoom(clamped);
    if (clamped <= 1) {
      panRef.current = { x: 0, y: 0 };
      setPan({ x: 0, y: 0 });
    }
  };

  const applyPan = (x: number, y: number) => {
    panRef.current = { x, y };
    setPan({ x, y });
  };

  const resetView = () => {
    zoomRef.current = 1;
    panRef.current = { x: 0, y: 0 };
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };


  // Reset zoom/pan when image changes
  useEffect(() => { resetView(); }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
      if (e.key === "ArrowLeft")  { resetView(); onNextRef.current(); }
      if (e.key === "ArrowRight") { resetView(); onPrevRef.current(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Wheel zoom — must be non-passive to preventDefault
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      const dir = e.deltaY < 0 ? 1 : -1;
      applyZoom(zoomRef.current * (1 + dir * 0.12));
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  // Touch events — non-passive to allow preventDefault on pinch
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        pinchDist.current = Math.hypot(dx, dy);
      } else if (e.touches.length === 1 && zoomRef.current > 1) {
        isDragging.current = true;
        dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        panAtDragStart.current = { ...panRef.current };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && pinchDist.current !== null) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        applyZoom(zoomRef.current * (dist / pinchDist.current));
        pinchDist.current = dist;
      } else if (e.touches.length === 1 && isDragging.current) {
        e.preventDefault();
        applyPan(
          panAtDragStart.current.x + (e.touches[0].clientX - dragStart.current.x),
          panAtDragStart.current.y + (e.touches[0].clientY - dragStart.current.y),
        );
      }
    };

    const onTouchEnd = () => {
      isDragging.current = false;
      pinchDist.current = null;
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    if (zoomRef.current <= 1) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
    panAtDragStart.current = { ...panRef.current };
    e.preventDefault();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    applyPan(
      panAtDragStart.current.x + (e.clientX - dragStart.current.x),
      panAtDragStart.current.y + (e.clientY - dragStart.current.y),
    );
  };

  const stopDrag = () => { isDragging.current = false; };

  // Double-click: toggle 2× zoom
  const onDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoomRef.current > 1.2) { resetView(); } else { applyZoom(2); }
  };

  const handleNav = (fn: () => void) => { resetView(); fn(); };

  const img = images[index];
  const isSingle = images.length === 1;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex flex-col select-none"
      style={{
        background: "rgba(0,0,0,0.9)",
        animation: "lbFadeIn 0.18s ease forwards",
      }}
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
    >

      {/* ── Close — top right ── */}
      <button
        className="absolute top-5 right-5 z-30 w-11 h-11 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all"
        onClick={onClose}
        aria-label="סגור"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </button>

      {/* ── Prev — RTL: right side ── */}
      {!isSingle && (
        <button
          className="absolute right-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/8 hover:bg-white/18 border border-white/10 flex items-center justify-center transition-colors"
          onClick={() => handleNav(onPrev)}
          aria-label="הקודם"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* ── Next — RTL: left side ── */}
      {!isSingle && (
        <button
          className="absolute left-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/8 hover:bg-white/18 border border-white/10 flex items-center justify-center transition-colors"
          onClick={() => handleNav(onNext)}
          aria-label="הבא"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* ── Image area ── */}
      <div
        className="flex-1 flex items-center justify-center overflow-hidden"
        onClick={zoom <= 1 ? onClose : undefined}
        style={{ cursor: zoom > 1 ? "grab" : "default" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          alt={img.alt}
          draggable={false}
          onMouseDown={onMouseDown}
          onDoubleClick={onDoubleClick}
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "block",
            maxWidth: "92vw",
            maxHeight: "calc(100vh - 110px)",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            userSelect: "none",
            WebkitUserDrag: "none",
            borderRadius: 4,
            transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
            transformOrigin: "center center",
            transition: isDragging.current ? "none" : "transform 0.14s ease",
          } as React.CSSProperties}
        />
      </div>

      {/* ── Caption ── */}
      <div className="flex-shrink-0 h-14 flex flex-col items-center justify-center gap-1 px-20">
        {title && (
          <p className="text-white/55 text-sm font-medium tracking-wide truncate max-w-full">
            {title}
          </p>
        )}
        {!isSingle && (
          <p className="text-white/30 text-xs tabular-nums">
            {index + 1} / {images.length}
          </p>
        )}
      </div>

    </div>
  );
}
