import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import VideoPlayer from "@/components/VideoPlayer";

export default function Film2Page() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-16 pb-32">

      {/* ── BREADCRUMB ── */}
      <FadeIn>
        <nav
          className="pt-10 flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-semibold"
          style={{ color: "#D7B94B" }}
        >
          <Link href="/works" className="hover:opacity-70 transition-opacity">
            עבודות
          </Link>
          <span className="opacity-40">/</span>
          <Link href="/works/films" className="hover:opacity-70 transition-opacity">
            וידאו
          </Link>
          <span className="opacity-40">/</span>
          <span style={{ color: "rgba(26,26,26,0.4)" }}>המשביר לצרכן</span>
        </nav>
      </FadeIn>

      {/* ── HEADER ── */}
      <div className="pt-10 pb-14 border-b border-[#E6E6E4] mb-16">
        <FadeIn delay={80}>
          <h1
            className="font-black leading-[1.08] tracking-tight"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              color: "#1A1A1A",
              fontFamily: "var(--font-heebo)",
            }}
          >
            המשביר לצרכן
          </h1>
        </FadeIn>
        <FadeIn delay={160}>
          <p
            className="mt-6 text-base leading-relaxed max-w-xl"
            style={{ color: "rgba(26,26,26,0.55)", fontFamily: "var(--font-heebo)" }}
          >
            גיפט קארד שמאבד ערך בכל תחנה שמנסים לממש אותו.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-4 text-sm leading-relaxed max-w-xl" style={{ color: "rgba(26,26,26,0.4)", fontFamily: "var(--font-heebo)" }}>
            הסרט הוא חלק מ
            <Link href="/works/marketing/hamashbir" className="underline underline-offset-2 hover:text-[#D7B94B] transition-colors mx-1">
              הקמפיין המלא של המשביר לצרכן
            </Link>
            .
          </p>
        </FadeIn>
      </div>

      {/* ── VIDEO ── */}
      <FadeIn delay={120}>
        <div className="max-w-xl mx-auto">
          <VideoPlayer src="/videos/films/film-2.mp4" poster="/images/films/cover-2.jpg" />
        </div>
      </FadeIn>

      {/* ── BACK ── */}
      <div className="mt-16">
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#D7B94B]"
          style={{ color: "rgba(26,26,26,0.4)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3l-5 5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          חזרה לעבודות
        </Link>
      </div>

    </div>
  );
}
