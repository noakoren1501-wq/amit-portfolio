"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { useEffect, useState } from "react";

/* ── Torn paper fragment ─────────────────────────────────────────── */
function PaperFragment({
  clipPath,
  style,
}: {
  clipPath: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        background: "linear-gradient(140deg, #ccc5b0 0%, #b8b09a 60%, #a8a08a 100%)",
        clipPath,
        ...style,
      }}
    >
      {/* Simulated handwriting lines on paper */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 17px, rgba(0,0,0,0.07) 17px, rgba(0,0,0,0.07) 18px)",
          backgroundPosition: "0 12px",
        }}
      />
    </div>
  );
}

/* ── Crosshair SVG ──────────────────────────────────────────────── */
function Crosshair({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
      aria-hidden="true"
      style={{ position: "absolute", ...style }}
    >
      <circle cx="44" cy="44" r="36" stroke="#D7B94B" strokeWidth="0.8" opacity="0.3" />
      <circle cx="44" cy="44" r="3.5" stroke="#D7B94B" strokeWidth="0.8" opacity="0.35" />
      <line x1="44" y1="4" x2="44" y2="24" stroke="#D7B94B" strokeWidth="0.7" opacity="0.3" />
      <line x1="44" y1="64" x2="44" y2="84" stroke="#D7B94B" strokeWidth="0.7" opacity="0.3" />
      <line x1="4" y1="44" x2="24" y2="44" stroke="#D7B94B" strokeWidth="0.7" opacity="0.3" />
      <line x1="64" y1="44" x2="84" y2="44" stroke="#D7B94B" strokeWidth="0.7" opacity="0.3" />
    </svg>
  );
}

/* ── Home page ──────────────────────────────────────────────────── */
export default function HomePage() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOn(true), 60);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number) => ({
    opacity: on ? 1 : 0,
    transform: on ? "none" : "translateY(20px)",
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section
      className="relative overflow-hidden flex flex-col"
      style={{ minHeight: "calc(100vh - 72px)", backgroundColor: "#0e0e0e" }}
    >
      {/* ── GLOBAL BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Gold glow — left side */}
        <div
          className="absolute inset-y-0"
          style={{
            left: 0, width: "50%",
            background: "radial-gradient(ellipse 80% 70% at 12% 55%, rgba(215,185,75,0.09) 0%, transparent 70%)",
          }}
        />
        {/* Dark vignette — top right */}
        <div
          className="absolute"
          style={{
            top: 0, right: 0, width: "45%", height: "55%",
            background: "radial-gradient(ellipse 70% 60% at 90% 0%, rgba(10,15,25,0.7) 0%, transparent 70%)",
          }}
        />
        {/* Ghost "עמית" watermark */}
        <div
          className="absolute font-black"
          style={{
            bottom: "-5%", right: "-1%",
            fontSize: "clamp(100px, 18vw, 240px)",
            lineHeight: 1, letterSpacing: "-0.04em",
            color: "rgba(255,255,255,0.022)",
            userSelect: "none", whiteSpace: "nowrap",
            opacity: on ? 1 : 0,
            transition: "opacity 2.5s ease 0.4s",
          }}
        >
          עמית
        </div>
        {/* Horizontal rules */}
        <div className="absolute w-full" style={{ top: "13%", height: "1px", background: "rgba(255,255,255,0.05)", transformOrigin: "right", animation: on ? "lineExpand 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s both" : "none" }} />
        <div className="absolute w-full" style={{ bottom: "11%", height: "1px", background: "rgba(255,255,255,0.05)", transformOrigin: "right", animation: on ? "lineExpand 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s both" : "none" }} />
        {/* Vertical gold accent at column boundary */}
        <div
          className="absolute"
          style={{
            top: "13%", bottom: "11%", right: "calc(55% - 1px)",
            width: "1px",
            background: "linear-gradient(to bottom, transparent 0%, #D7B94B 25%, #D7B94B 75%, transparent 100%)",
            opacity: 0.28, transformOrigin: "top",
            animation: on ? "lineGrow 1s cubic-bezier(0.16,1,0.3,1) 0.65s both" : "none",
          }}
        />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full mx-auto" style={{ maxWidth: "1280px" }}>

          {/* ── DESKTOP: two-column grid (RTL: first child = visual RIGHT) ── */}
          <div
            className="hidden md:grid items-stretch"
            style={{ gridTemplateColumns: "1.35fr 1fr", minHeight: "calc(100vh - 72px)" }}
          >
            {/* RIGHT — text column (first in DOM = visual right in RTL) */}
            <div className="flex flex-col justify-center px-10 py-20">
              {/* Label row */}
              <div
                className="flex items-center gap-4 mb-10"
                style={fade(0)}
              >
                <span
                  className="text-xs font-bold tracking-[0.22em] uppercase flex items-center gap-2.5 shrink-0"
                  style={{ color: "#D7B94B" }}
                >
                  <span
                    className="inline-block rounded-full shrink-0"
                    style={{ width: 6, height: 6, backgroundColor: "#D7B94B" }}
                  />
                  בוגר קורס קופירייטינג ב״בצפר״ בהצטיינות
                </span>
                <div className="flex-1" style={{ height: "1px", background: "rgba(255,255,255,0.1)" }} />
              </div>

              {/* Headline */}
              <div style={fade(160)}>
                <h1
                  className="font-black leading-[1.1] tracking-tight"
                  style={{ fontSize: "clamp(2.6rem, 5vw, 4.6rem)", color: "#FFFFFF" }}
                >
                  כל רעיון טוב
                  <br />
                  <span style={{ color: "rgba(255,255,255,0.62)" }}>
                    מתחיל בתובנה.
                  </span>
                </h1>
              </div>

              {/* CTA */}
              <div className="mt-12" style={fade(360)}>
                <div className="mb-8" style={{ height: "1px", background: "rgba(255,255,255,0.09)" }} />
                <Button href="/works" variant="gold">לכל העבודות</Button>
              </div>
            </div>

            {/* LEFT — composition (second in DOM = visual left in RTL) */}
            <div
              className="relative flex items-center justify-center px-10"
              style={{
                opacity: on ? 1 : 0,
                transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 120ms",
              }}
            >
              {/* Paper fragment 1 — upper, larger */}
              <PaperFragment
                clipPath="polygon(6% 0%, 95% 3%, 100% 90%, 3% 100%, 0% 52%, 2% 18%)"
                style={{
                  width: "50%", height: "38%",
                  top: "15%", left: "4%",
                  transform: "rotate(-4deg)",
                  opacity: 0.7,
                }}
              />

              {/* Paper fragment 2 — lower, smaller */}
              <PaperFragment
                clipPath="polygon(4% 6%, 93% 0%, 100% 94%, 5% 100%, 0% 52%)"
                style={{
                  width: "34%", height: "22%",
                  bottom: "14%", left: "20%",
                  transform: "rotate(2.5deg)",
                  opacity: 0.6,
                  background: "linear-gradient(140deg, #b8b09a 0%, #a09888 100%)",
                }}
              />

              {/* Crosshair — upper right of composition */}
              <Crosshair
                style={{
                  top: "17%", right: "12%", zIndex: 8,
                  opacity: on ? 1 : 0,
                  transition: "opacity 1s ease 0.9s",
                }}
              />

              {/* Portrait — 25% smaller, integrated in composition */}
              <div style={{ position: "relative", zIndex: 10, marginTop: "5%" }}>
                {/* Gold corner bracket */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute", top: -11, right: -11, zIndex: 20,
                    width: 28, height: 28,
                    borderTop: "1.5px solid #D7B94B",
                    borderRight: "1.5px solid #D7B94B",
                    opacity: 0.8,
                  }}
                />
                {/* Portrait card */}
                <div
                  style={{
                    width: "clamp(175px, 16vw, 240px)",
                    aspectRatio: "3/4",
                    borderRadius: "16px",
                    backgroundColor: "#181818",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0 28px 70px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.055)",
                  }}
                >
                  <Image src="/images/portrait.jpg" alt="עמית אשתר" fill className="object-contain object-center" priority />
                  {/* Bottom fade */}
                  <div
                    className="absolute bottom-0 inset-x-0"
                    style={{ height: "35%", background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ── MOBILE: single column ── */}
          <div className="flex flex-col md:hidden px-6 py-16 gap-8">
            <div className="flex items-center gap-4" style={fade(0)}>
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2 shrink-0"
                style={{ color: "#D7B94B" }}
              >
                <span className="inline-block rounded-full" style={{ width: 5, height: 5, backgroundColor: "#D7B94B" }} />
                בוגר קורס קופירייטינג ב״בצפר״ בהצטיינות
              </span>
              <div className="flex-1" style={{ height: "1px", background: "rgba(255,255,255,0.1)" }} />
            </div>
            <div style={fade(120)}>
              <h1
                className="font-black leading-[1.15] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 8vw, 3.2rem)", color: "#FFFFFF" }}
              >
                כל רעיון טוב
                <br />
                <span style={{ color: "rgba(255,255,255,0.6)" }}>
                  מתחיל בתובנה.
                </span>
              </h1>
            </div>

            {/* Mobile portrait */}
            <div style={fade(240)}>
              <div className="relative mx-auto" style={{ maxWidth: 200 }}>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute", top: -9, right: -9, zIndex: 10,
                    width: 24, height: 24,
                    borderTop: "1.5px solid #D7B94B", borderRight: "1.5px solid #D7B94B",
                    opacity: 0.75,
                  }}
                />
                <div
                  style={{
                    aspectRatio: "3/4", borderRadius: 14,
                    backgroundColor: "#181818", overflow: "hidden",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.65)",
                    position: "relative",
                  }}
                >
                  <Image src="/images/portrait.jpg" alt="עמית אשתר" fill className="object-contain object-top" priority />
                  <div
                    className="absolute bottom-0 inset-x-0"
                    style={{ height: "35%", background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }}
                  />
                </div>
              </div>
            </div>

            <div style={fade(360)}>
              <div className="mb-6" style={{ height: "1px", background: "rgba(255,255,255,0.09)" }} />
              <Button href="/works" variant="gold">לכל העבודות</Button>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM STATUS BAR ── */}
      <div
        className="relative z-10"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          opacity: on ? 1 : 0,
          transition: "opacity 0.7s ease 580ms",
        }}
      >
        <div
          className="mx-auto px-6 md:px-12 py-4 flex justify-between items-center"
          style={{ maxWidth: "1280px" }}
        >
          <span
            className="uppercase"
            style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.65rem", letterSpacing: "0.18em" }}
          >
            קופירייטר ויוצר
          </span>
        </div>
      </div>
    </section>
  );
}
