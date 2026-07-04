import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#000",
          display: "flex",
          position: "relative",
        }}
      >
        {/* Briefcase handle */}
        <div
          style={{
            position: "absolute",
            top: 34,
            left: 56,
            width: 68,
            height: 40,
            border: "14px solid #fff",
            borderBottom: "none",
            borderRadius: "11px 11px 0 0",
          }}
        />
        {/* Briefcase body */}
        <div
          style={{
            position: "absolute",
            top: 67,
            left: 17,
            width: 146,
            height: 90,
            background: "#fff",
            borderRadius: 11,
          }}
        />
      </div>
    ),
    { width: 180, height: 180 }
  );
}
