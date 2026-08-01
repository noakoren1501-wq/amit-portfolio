"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import ImageViewer from "./ImageViewer";

export interface ProjectImage {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: ProjectImage[];
}

export default function Carousel({ images }: CarouselProps) {
  // Clone first and last for infinite loop: [last, ...images, first]
  const extended = [images[images.length - 1], ...images, images[0]];
  const total = extended.length;

  const [index, setIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const [viewerSrc, setViewerSrc] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (next: number, withTransition = true) => {
      setTransitioning(withTransition);
      setIndex(next);
    },
    []
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (!transitioning) return;
    if (index === 0) {
      const t = setTimeout(() => goTo(images.length, false), 420);
      return () => clearTimeout(t);
    }
    if (index === total - 1) {
      const t = setTimeout(() => goTo(1, false), 420);
      return () => clearTimeout(t);
    }
  }, [index, transitioning, total, images.length, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (viewerSrc) return;
      if (e.key === "ArrowLeft") next();
      if (e.key === "ArrowRight") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, viewerSrc]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      delta > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  const realIndex = index === 0 ? images.length - 1 : index === total - 1 ? 0 : index - 1;
  const openViewer = () => setViewerSrc(images[realIndex].src);

  if (images.length === 1) {
    return (
      <>
        {/* position:relative so the overlay can use absolute inset-0 */}
        <div className="relative rounded-2xl overflow-hidden bg-[#EEEEE8]">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={900}
            height={1200}
            className="w-full h-auto object-contain max-h-[80vh] block"
            sizes="(max-width: 768px) 100vw, 1280px"
            priority
          />
          {/* Transparent overlay — covers every pixel, no dead zones */}
          <div className="absolute inset-0 cursor-pointer" onClick={openViewer} />
        </div>
        {viewerSrc && (
          <ImageViewer
            src={viewerSrc}
            alt={images[0].alt}
            onClose={() => setViewerSrc(null)}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="relative select-none" ref={containerRef}>
        {/* Slide track */}
        <div
          className="overflow-hidden rounded-2xl bg-[#EEEEE8]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex"
            style={{
              transform: `translateX(${index * (100 / total)}%)`,
              width: `${total * 100}%`,
              transition: transitioning ? "transform 0.42s cubic-bezier(0.4,0,0.2,1)" : "none",
            }}
          >
            {extended.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="relative flex items-center justify-center bg-[#EEEEE8]"
                style={{ width: `${100 / total}%` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={1200}
                  className="w-full h-auto object-contain max-h-[80vh] block"
                  sizes="(max-width: 768px) 100vw, 1280px"
                  priority={i === 1}
                  draggable={false}
                />
                {/* Transparent overlay — covers every pixel of this slide */}
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={openViewer}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Prev arrow — RTL: right side, z-10 sits above the z-0 overlay */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="הקודם"
          className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-10
                     w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-[#E6E6E4]
                     flex items-center justify-center shadow-md
                     hover:bg-white hover:shadow-lg transition-all duration-200 active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next arrow — RTL: left side */}
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="הבא"
          className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 z-10
                     w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-[#E6E6E4]
                     flex items-center justify-center shadow-md
                     hover:bg-white hover:shadow-lg transition-all duration-200 active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5" role="tablist" aria-label="ניווט שקופיות">
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === realIndex}
              aria-label={`שקופית ${i + 1}`}
              onClick={(e) => { e.stopPropagation(); goTo(i + 1); }}
              className="transition-all duration-300"
              style={{
                width: i === realIndex ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === realIndex ? "#D7B94B" : "rgba(26,26,26,0.18)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {viewerSrc && (
        <ImageViewer
          src={viewerSrc}
          alt={images[realIndex].alt}
          onClose={() => setViewerSrc(null)}
        />
      )}
    </>
  );
}
