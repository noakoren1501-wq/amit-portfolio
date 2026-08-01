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
      <button
        type="button"
        className="block w-full rounded-2xl overflow-hidden bg-[#EEEEE8] border-0 p-0 cursor-pointer"
        style={{ touchAction: "manipulation" }}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className ?? "w-full h-auto object-contain"}
          sizes={sizes}
        />
      </button>
      {open && (
        <ImageViewer src={src} alt={alt} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
