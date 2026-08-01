import FadeIn from "@/components/FadeIn";
import Carousel from "@/components/Carousel";
import ClickableImage from "@/components/ClickableImage";

export default function BillboardsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-16 pb-32">

      {/* ── HEADER ── */}
      <div className="pt-20 pb-16 border-b border-[#E6E6E4]">
        <FadeIn>
          <span
            className="text-xs tracking-[0.22em] uppercase font-semibold"
            style={{ color: "#D7B94B" }}
          >
            עבודות / שלטי חוצות
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
            שלטי חוצות.
          </h1>
        </FadeIn>
      </div>

      {/* ── PROJECT 1: אסם קטשופ ── */}
      <FadeIn>
        <div className="py-20 border-b border-[#E6E6E4]">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A]" style={{ fontFamily: "var(--font-heebo)" }}>
              קטשופ &quot;אסם&quot;
            </h2>
            <p className="mt-3 text-base text-[#1A1A1A]/55 leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-heebo)" }}>
              יש אנשים שלא מתחילים ארוחה בלי קטשופ. אחרים בוחרים מאכלים רק כדי לשים עליהם קטשופ.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <Carousel
              images={[
                { src: "/images/billboards/ketchup-1.jpg", alt: "אסם קטשופ – שלט חוצות 1" },
                { src: "/images/billboards/ketchup-2.jpg", alt: "אסם קטשופ – שלט חוצות 2" },
                { src: "/images/billboards/ketchup-3.jpg", alt: "אסם קטשופ – שלט חוצות 3" },
              ]}
            />
          </div>
        </div>
      </FadeIn>

      {/* ── PROJECT 2: המחטב ── */}
      <FadeIn>
        <div className="py-20">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A]" style={{ fontFamily: "var(--font-heebo)" }}>
              תחתונים מחטבים
            </h2>
            <p className="mt-3 text-base text-[#1A1A1A]/55 leading-relaxed max-w-xl" style={{ fontFamily: "var(--font-heebo)" }}>
              המחטב &quot;מוריד מידה&quot; — אז האות XL הופכת ל־L.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <ClickableImage
              src="/images/billboards/shapewear.jpg"
              alt="המחטב – שלט חוצות"
              width={900}
              height={1200}
              sizes="(max-width: 768px) 100vw, 576px"
              className="w-full h-auto object-contain max-h-[80vh]"
            />
          </div>
        </div>
      </FadeIn>

    </div>
  );
}
