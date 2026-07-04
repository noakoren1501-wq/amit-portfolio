"use client";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        borderRadius: 20,
        boxShadow: "0 24px 64px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.07)",
        background: "#0e0e0e",
      }}
    >
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className="w-full h-auto block"
        style={{ borderRadius: 20, display: "block" }}
      />
    </div>
  );
}
