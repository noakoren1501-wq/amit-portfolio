import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#000",
          display: "flex",
          position: "relative",
        }}
      >
        {/* Briefcase handle */}
        <div
          style={{
            position: "absolute",
            top: 6,
            left: 10,
            width: 12,
            height: 7,
            border: "2.5px solid #fff",
            borderBottom: "none",
            borderRadius: "2px 2px 0 0",
          }}
        />
        {/* Briefcase body */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 3,
            width: 26,
            height: 16,
            background: "#fff",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { width: 32, height: 32 }
  );
}
