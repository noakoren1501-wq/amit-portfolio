"use client";

import Image from "next/image";
import { useState } from "react";
import ImageViewer from "./ImageViewer";

interface ClickableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
}

export default function ClickableImage({ src, alt, width, height, sizes, className }: ClickableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* position:relative so the transparent overlay can use inset-0 */}
      <div className="relative rounded-2xl overflow-hidden bg-[#EEEEE8]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className ?? "w-full h-auto object-contain"}
          sizes={sizes}
        />
        {/* Full-area click target — covers every visible pixel */}
        <div
          className="absolute inset-0 cursor-zoom-in"
          onClick={() => setOpen(true)}
        />
      </div>
      {open && (
        <ImageViewer src={src} alt={alt} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
