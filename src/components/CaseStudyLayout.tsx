import Link from "next/link";
import FadeIn from "./FadeIn";

export interface CaseStudyMeta {
  campaignTitle: string;
  client: string;
  type?: string;
  year?: string;
  message: string;
  concept: string;
  story?: string;
}

interface CaseStudyLayoutProps extends CaseStudyMeta {
  breadcrumbCategory: string;
  breadcrumbHref: string;
  label: string;
  children: React.ReactNode;
}

export default function CaseStudyLayout({
  breadcrumbCategory,
  breadcrumbHref,
  label,
  campaignTitle,
  client,
  type,
  year,
  message,
  concept,
  story,
  children,
}: CaseStudyLayoutProps) {
  return (
    <div>

      {/* ── STICKY BREADCRUMB ── */}
      <div
        className="sticky z-30 border-b border-[#E6E6E4] bg-[#F8F7F2]/90 backdrop-blur-sm"
        style={{ top: 72 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-3 flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-semibold"
          style={{ color: "#D7B94B" }}>
          <Link href="/works" className="hover:opacity-70 transition-opacity">עבודות</Link>
          <span className="opacity-40">/</span>
          <Link href={breadcrumbHref} className="hover:opacity-70 transition-opacity">{breadcrumbCategory}</Link>
          <span className="opacity-40">/</span>
          <span style={{ color: "rgba(26,26,26,0.4)" }}>{label}</span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-16 pb-40">

        {/* ── HERO HEADER ── */}
        <div className="pt-20 pb-16 border-b border-[#E6E6E4]">
          <FadeIn>
            <span
              className="text-xs tracking-[0.22em] uppercase font-semibold"
              style={{ color: "#D7B94B" }}
            >
              {breadcrumbCategory}
            </span>
          </FadeIn>

          <FadeIn delay={80}>
            <h1
              className="font-black leading-[1.04] tracking-tight mt-4"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                color: "#1A1A1A",
                fontFamily: "var(--font-heebo)",
              }}
            >
              {campaignTitle}
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm font-medium text-[#1A1A1A]/40 tracking-wide">
              <span>
                <span className="text-[10px] tracking-[0.2em] uppercase block mb-0.5 text-[#1A1A1A]/25">לקוח</span>
                {client}
              </span>
              {type && (
                <span>
                  <span className="text-[10px] tracking-[0.2em] uppercase block mb-0.5 text-[#1A1A1A]/25">קטגוריה</span>
                  {type}
                </span>
              )}
              {year && (
                <span>
                  <span className="text-[10px] tracking-[0.2em] uppercase block mb-0.5 text-[#1A1A1A]/25">שנה</span>
                  {year}
                </span>
              )}
            </div>
          </FadeIn>
        </div>

        {/* ── MESSAGE + CONCEPT ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 py-16 border-b border-[#E6E6E4]">
          <FadeIn>
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#D7B94B] block mb-4">
                מסר
              </span>
              <p
                className="text-xl md:text-2xl font-medium leading-relaxed text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-heebo)" }}
              >
                {message}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#D7B94B] block mb-4">
                קונספט
              </span>
              <p
                className="text-xl md:text-2xl font-medium leading-relaxed text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-heebo)" }}
              >
                {concept}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* ── CAMPAIGN STORY ── */}
        {story && (
          <div className="py-20 border-b border-[#E6E6E4]">
            <FadeIn>
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#D7B94B] block mb-8">
                הסיפור
              </span>
            </FadeIn>
            <FadeIn delay={80}>
              <p
                className="text-lg md:text-xl leading-[1.9] text-[#1A1A1A]/70 max-w-3xl"
                style={{ fontFamily: "var(--font-heebo)" }}
              >
                {story}
              </p>
            </FadeIn>
          </div>
        )}

        {/* ── MEDIA SECTIONS (injected per campaign) ── */}
        <div className="pt-4">
          {children}
        </div>

      </div>
    </div>
  );
}
