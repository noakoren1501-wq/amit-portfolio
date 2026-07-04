import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Carousel from "@/components/Carousel";

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
            <h2
              className="text-2xl md:text-3xl font-black text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              קטשופ "אסם"
            </h2>
            <p
              className="mt-3 text-base text-[#1A1A1A]/55 leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              סדרת שלטי חוצות המתבססת על התובנה שיש אנשים שלא מתחילים ארוחה בלי קטשופ, ואף בוחרים מאכלים מסוימים רק כדי להוסיף להם קטשופ.
            </p>
            <Link
              href="/works/billboards/ketchup"
              className="inline-block mt-4 text-xs tracking-[0.2em] uppercase font-semibold transition-opacity hover:opacity-60"
              style={{ color: "#D7B94B" }}
            >
              לפרויקט ↗
            </Link>
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
            <h2
              className="text-2xl md:text-3xl font-black text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              תחתונים מחטבים
            </h2>
            <p
              className="mt-3 text-base text-[#1A1A1A]/55 leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              שלט חוצות המתבסס על העובדה שתחתונים מחטבים נועדו להקטין נשים פיזית. המהלך יוצר פרובוקציה פיקטיבית כדי למשוך תשומת לב, כאשר ברמה העיצובית המחטב "מוריד מידה" ולכן האות XL הופכת ל־L.
            </p>
            <Link
              href="/works/billboards/shapewear"
              className="inline-block mt-4 text-xs tracking-[0.2em] uppercase font-semibold transition-opacity hover:opacity-60"
              style={{ color: "#D7B94B" }}
            >
              לפרויקט ↗
            </Link>
          </div>
          <div className="max-w-xl mx-auto rounded-2xl overflow-hidden bg-[#EEEEE8]">
            <Image
              src="/images/billboards/shapewear.jpg"
              alt="המחטב – שלט חוצות"
              width={900}
              height={1200}
              className="w-full h-auto object-contain max-h-[80vh]"
              sizes="(max-width: 768px) 100vw, 576px"
            />
          </div>
        </div>
      </FadeIn>

    </div>
  );
}
