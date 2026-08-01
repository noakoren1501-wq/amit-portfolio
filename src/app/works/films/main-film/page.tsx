import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import VideoPlayer from "@/components/VideoPlayer";
import BackButton from "@/components/BackButton";

export default function MainFilmPage() {
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
          <span style={{ color: "rgba(26,26,26,0.4)" }}>עגלה של קפה</span>
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
            עגלה של קפה
          </h1>
        </FadeIn>
        <FadeIn delay={160}>
          <p
            className="mt-6 text-base leading-relaxed max-w-xl"
            style={{ color: "rgba(26,26,26,0.55)", fontFamily: "var(--font-heebo)" }}
          >
            עגלת קפה בעמק חפר. המקום המושלם לזוגות – אבל לא רק.
          </p>
        </FadeIn>
      </div>

      {/* ── VIDEO ── */}
      <FadeIn delay={120}>
        <div className="max-w-xl mx-auto">
          <VideoPlayer src="/videos/films/main-film.mp4" poster="/images/films/cover.jpg" />
        </div>
      </FadeIn>

      {/* ── BACK ── */}
      <div className="mt-16">
        <BackButton href="/works/films" label="חזרה לוידאו" />
      </div>

    </div>
  );
}
