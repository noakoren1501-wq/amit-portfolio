import Link from "next/link";
import FadeIn from "./FadeIn";
import Carousel from "./Carousel";

export interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectPageLayoutProps {
  breadcrumbCategory: string;
  breadcrumbHref: string;
  label: string;
  title: string;
  description: string;
  images: ProjectImage[];
}

export default function ProjectPageLayout({
  breadcrumbCategory,
  breadcrumbHref,
  label,
  title,
  description,
  images,
}: ProjectPageLayoutProps) {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-16 pb-32">

      {/* ── BREADCRUMB ── */}
      <FadeIn>
        <nav className="pt-10 pb-0 flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-semibold" style={{ color: "#D7B94B" }}>
          <Link href="/works" className="hover:opacity-70 transition-opacity">עבודות</Link>
          <span className="opacity-40">/</span>
          <Link href={breadcrumbHref} className="hover:opacity-70 transition-opacity">{breadcrumbCategory}</Link>
          <span className="opacity-40">/</span>
          <span style={{ color: "rgba(26,26,26,0.4)" }}>{label}</span>
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
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={160}>
          <p
            className="mt-6 text-base text-[#1A1A1A]/55 leading-relaxed max-w-xl whitespace-pre-line"
            style={{ fontFamily: "var(--font-heebo)" }}
          >
            {description}
          </p>
        </FadeIn>
      </div>

      {/* ── CAROUSEL ── */}
      {images.length > 0 && (
        <FadeIn delay={100}>
          <div className="max-w-xl mx-auto">
            <Carousel images={images} />
          </div>
        </FadeIn>
      )}

    </div>
  );
}
