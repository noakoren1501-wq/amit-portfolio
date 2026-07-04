import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Carousel from "@/components/Carousel";

export default function SocialPage() {
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

      {/* ── PROJECT 1: יש להם מה להגיד ── */}
      <FadeIn>
        <div className="py-20 border-b border-[#E6E6E4]">
          <div className="mb-8">
            <h2
              className="text-2xl md:text-3xl font-black text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              פוסט לעמותת "קול החתולים"
            </h2>
            <p
              className="mt-3 text-base text-[#1A1A1A]/55 leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              פוסט סושיאל שמטרתו לעודד בעלי חתולים לסרס ולעקר אותם עד גיל חמישה חודשים, במטרה "להאריך להם את התוקף".
            </p>
            <Link
              href="/works/social/cat-voice"
              className="inline-block mt-4 text-xs tracking-[0.2em] uppercase font-semibold transition-opacity hover:opacity-60"
              style={{ color: "#D7B94B" }}
            >
              לפרויקט ↗
            </Link>
          </div>
          <div className="max-w-xl mx-auto rounded-2xl overflow-hidden bg-[#EEEEE8]">
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
            <Link
              href="/works/social/ai-carousel"
              className="inline-block mt-4 text-xs tracking-[0.2em] uppercase font-semibold transition-opacity hover:opacity-60"
              style={{ color: "#D7B94B" }}
            >
              לפרויקט ↗
            </Link>
          </div>
          <div className="max-w-xl mx-auto">
            <Carousel
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

    </div>
  );
}
