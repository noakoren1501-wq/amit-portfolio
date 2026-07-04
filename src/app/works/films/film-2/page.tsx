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
            סרטים
          </Link>
          <span className="opacity-40">/</span>
          <span style={{ color: "rgba(26,26,26,0.4)" }}>סרט פרסום 2</span>
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
            className="mt-6 text-base leading-relaxed max-w-xl whitespace-pre-line"
            style={{ color: "rgba(26,26,26,0.55)", fontFamily: "var(--font-heebo)" }}
          >
            {`גיפט קארד אמנם נראה כמו פתרון נוח, אבל בדרך למימוש הוא הופך לרצף של פשרות, הוצאות ועיכובים.\n\nהסרט עוקב אחר אדם שמנסה להספיק לנצל גיפט קארד לפני שתוקפו פג. בכל תחנה בדרך הערך שלו נשחק, עד שלבסוף הוא מגיע לחנות ומגלה שכמעט לא נשאר ממנו דבר.`}
          </p>
        </FadeIn>
      </div>

      {/* ── VIDEO ── */}
      <FadeIn delay={120}>
        <div className="max-w-xl mx-auto">
          <VideoPlayer src="/videos/films/film-2.mp4" />
        </div>
      </FadeIn>

    </div>
  );
}
