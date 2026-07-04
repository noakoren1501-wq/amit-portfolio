import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "עמית אשתר | קופירייטר";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const rev = (s: string) => [...s].reverse().join("");

export default async function Image() {
  const [bold, regular] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/Heebo-Bold.ttf")),
    readFile(join(process.cwd(), "public/fonts/Heebo-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#000000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Heebo",
          direction: "rtl",
        }}
      >
        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            direction: "rtl",
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.15,
              direction: "rtl",
              display: "flex",
            }}
          >
            {rev("כל רעיון טוב")}
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.15,
              direction: "rtl",
              display: "flex",
            }}
          >
            {rev("מתחיל בתובנה")}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 40,
            height: 1,
            background: "#D7B94B",
            marginTop: 48,
            marginBottom: 40,
            display: "flex",
          }}
        />

        {/* Bottom byline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            direction: "rtl",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 400,
              color: "#FFFFFF",
              direction: "rtl",
              display: "flex",
              opacity: 0.9,
            }}
          >
            {rev("עמית אשתר")}
          </div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "#D7B94B",
              letterSpacing: "0.12em",
              direction: "rtl",
              display: "flex",
            }}
          >
            {rev("קופירייטר")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Heebo", data: bold, weight: 700 },
        { name: "Heebo", data: regular, weight: 400 },
      ],
    }
  );
}
