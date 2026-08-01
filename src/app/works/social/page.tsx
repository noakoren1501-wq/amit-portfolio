"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Carousel from "@/components/Carousel";
import Lightbox from "@/components/Lightbox";

export default function SocialPage() {
  const [catOpen, setCatOpen] = useState(false);

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-16 pb-32">

      {/* ── HEADER ── */}
      <div className="pt-20 pb-16 border-b border-[#E6E6E4]">
        <FadeIn>
          <span
            className="text-xs tracking-[0.22em] uppercase font-semibold"
            style={{ color: "#D7B94B" }}
          >
            עבודות / סושיאל
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
            סושיאל.
          </h1>
        </FadeIn>
      </div>

      {/* ── PROJECT 1: קול החתולים ── */}
      <FadeIn>
        <div className="py-20 border-b border-[#E6E6E4]">
          <div className="mb-8">
            <h2
              className="text-2xl md:text-3xl font-black text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              פוסט לעמותת &quot;קול החתולים&quot;
            </h2>
            <p
              className="mt-3 text-base text-[#1A1A1A]/55 leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              פוסט שמעודד לסרס ולעקר חתולים עד גיל חמישה חודשים — כדי &quot;להאריך להם את התוקף&quot;.
            </p>
          </div>
          <div
            className="max-w-xl mx-auto rounded-2xl overflow-hidden bg-[#EEEEE8] cursor-zoom-in"
            onClick={() => setCatOpen(true)}
          >
            <Image
              src="/images/social/cat-voice-cover.jpg"
              alt="יש להם מה להגיד – קול החתולים"
              width={900}
              height={1200}
              className="w-full h-auto object-contain max-h-[80vh]"
              sizes="(max-width: 768px) 100vw, 576px"
            />
          </div>
        </div>
      </FadeIn>

      {/* ── PROJECT 2: לפעמים גם AI מפספס ── */}
      <FadeIn>
        <div className="py-20">
          <div className="mb-8">
            <h2
              className="text-2xl md:text-3xl font-black text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              לפעמים גם AI מפספס
            </h2>
            <p
              className="mt-3 text-base text-[#1A1A1A]/55 leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              קרוסלת סושיאל שממחישה בהומור שגם בינה מלאכותית לא תמיד מבינה למה באמת התכוונו.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <Carousel
              title="לפעמים גם AI מפספס"
              images={[
                { src: "/images/social/ai-carousel-1.png", alt: "לפעמים גם AI מפספס – שקופית 1" },
                { src: "/images/social/ai-carousel-2.png", alt: "לפעמים גם AI מפספס – שקופית 2" },
                { src: "/images/social/ai-carousel-3.png", alt: "לפעמים גם AI מפספס – שקופית 3" },
                { src: "/images/social/ai-carousel-4.png", alt: "לפעמים גם AI מפפפס – שקופית 4" },
                { src: "/images/social/ai-carousel-5.png", alt: "לפעמים גם AI מפספס – שקופית 5" },
                { src: "/images/social/ai-carousel-6.png", alt: "לפעמים גם AI מפספס – שקופית 6" },
                { src: "/images/social/ai-carousel-7.png", alt: "לפעמים גם AI מפספס – שקופית 7" },
                { src: "/images/social/ai-carousel-8.png", alt: "לפעמים גם AI מפספס – שקופית 8" },
              ]}
            />
          </div>
        </div>
      </FadeIn>

      {catOpen && (
        <Lightbox
          images={[{ src: "/images/social/cat-voice-cover.jpg", alt: "יש להם מה להגיד – קול החתולים" }]}
          index={0}
          title='פוסט לעמותת "קול החתולים"'
          onClose={() => setCatOpen(false)}
          onPrev={() => {}}
          onNext={() => {}}
        />
      )}

    </div>
  );
}
