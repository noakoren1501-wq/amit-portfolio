"use client";

interface AudioPlayerProps {
  src: string;
  title: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  return (
    <div
      className="flex flex-col gap-3 p-5 rounded-2xl bg-[#F0EFE9]"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
    >
      <span
        className="text-sm font-semibold text-[#1A1A1A]/60 leading-snug"
        style={{ fontFamily: "var(--font-heebo)" }}
      >
        {title}
      </span>
      <audio
        src={src}
        controls
        preload="metadata"
        className="w-full"
        style={{ borderRadius: 8, outline: "none" }}
      />
    </div>
  );
}
