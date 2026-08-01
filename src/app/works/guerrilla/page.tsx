"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Carousel from "@/components/Carousel";
import Lightbox from "@/components/Lightbox";

export default function GuerrillaPage() {
  const [halperinOpen, setHalperinOpen] = useState(false);

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-16 pb-32">

      {/* ── HEADER ── */}
      <div className="pt-20 pb-16 border-b border-[#E6E6E4]">
        <FadeIn>
          <span
            className="text-xs tracking-[0.22em] uppercase font-semibold"
            style={{ color: "#D7B94B" }}
          >
            עבודות / גרילה
          </span>
        </FadeIn>
        <FadeIn delay={100}>
          <h1
            className="font-black leading-[1.08] tracking-tight mt-4"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "#1A1A1A",
              fontFamily: "var(--font-heebo)",
            }}
          >
            גרילה.
          </h1>
        </FadeIn>
      </div>

      {/* ── PROJECT 1: Pango ── */}
      <FadeIn>
        <div className="py-20 border-b border-[#E6E6E4]">
          <div className="mb-8">
            <h2
              className="text-2xl md:text-3xl font-black text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              פנגו
            </h2>
            <p
              className="mt-3 text-base text-[#1A1A1A]/55 leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              ברגע שמסיימים לחנות, אנשים שוכחים להפעיל פנגו. המהלך מזכיר להם — ברגע האחרון.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <Carousel
              images={[
                { src: "/images/guerrilla/pango-floor.jpg", alt: "Pango – כתובת על רצפת החניה" },
                { src: "/images/guerrilla/pango-screen-1.jpg", alt: "Pango – מסך ניווט ברכב" },
                { src: "/images/guerrilla/pango-screen-2.jpg", alt: "Pango – מסך ניווט ברכב, גרסה שנייה" },
              ]}
            />
          </div>
        </div>
      </FadeIn>

      {/* ── PROJECT 2: הלפרין ── */}
      <FadeIn>
        <div className="py-20 border-b border-[#E6E6E4]">
          <div className="mb-8">
            <h2
              className="text-2xl md:text-3xl font-black text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              הלפרין
            </h2>
            <p
              className="mt-3 text-base text-[#1A1A1A]/55 leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              מתישהו כולנו נצטרך משקפיים. הזמן מתקתק — ושעוני התחנה נראים כמו עדשות.
            </p>
          </div>
          <div
            className="max-w-xl mx-auto rounded-2xl overflow-hidden bg-[#EEEEE8] cursor-zoom-in"
            onClick={() => setHalperinOpen(true)}
          >
            <Image
              src="/images/guerrilla/halperin.jpg"
              alt="הלפרין – משקפיים ענק בתחנת רכבת"
              width={900}
              height={1200}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </div>
      </FadeIn>

      {/* ── PROJECT 3: Tinder ── */}
      <FadeIn>
        <div className="py-20">
          <div className="mb-8">
            <h2
              className="text-2xl md:text-3xl font-black text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              Tinder
            </h2>
            <p
              className="mt-3 text-base text-[#1A1A1A]/55 leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              כולם פותחים קרטון ביצים לפני שקונים. מתוך ההומור הרווקי של am:pm — Tinder על אריזות הביצים.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <Carousel
              images={[
                { src: "/images/guerrilla/tinder.jpg", alt: "Tinder – פרסומת על קרטון ביצים בסופרמרקט" },
                { src: "/images/guerrilla/tinder-2.jpg", alt: "Tinder – עיצוב קרטון הביצים" },
              ]}
            />
          </div>
        </div>
      </FadeIn>

      {halperinOpen && (
        <Lightbox
          images={[{ src: "/images/guerrilla/halperin.jpg", alt: "הלפרין – משקפיים ענק בתחנת רכבת" }]}
          index={0}
          onClose={() => setHalperinOpen(false)}
          onPrev={() => {}}
          onNext={() => {}}
        />
      )}

    </div>
  );
}
