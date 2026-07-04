import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Carousel from "@/components/Carousel";

export default function GuerrillaPage() {
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
              מהלך גרילה המתבסס על העובדה שברגע שמסיימים לחנות, אנשים רבים שוכחים להפעיל פנגו. המהלך מזכיר להם ברגע האחרון להפעיל את החניה. בנוסף, המשפטים נכתבו בהשראת הדרך שבה אנשים "מתבכיינים" אחרי שקיבלו דוח, ולכן הם מנוסחים כאילו הם מיועדים לילדים.
            </p>
            <Link
              href="/works/guerrilla/pango"
              className="inline-block mt-4 text-xs tracking-[0.2em] uppercase font-semibold transition-opacity hover:opacity-60"
              style={{ color: "#D7B94B" }}
            >
              לפרויקט ↗
            </Link>
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
              מהלך גרילה לרשת "הלפרין" המבוסס על התובנה שמתישהו כולנו נצטרך משקפיים, ולכן זה רק עניין של זמן. מכאן נבחרו השעונים בתחנות הרכבת, שנראים כמו עדשות משקפיים וממחישים שהזמן מתקתק עד לרגע שבו נזדקק להן.
            </p>
            <Link
              href="/works/guerrilla/halperin"
              className="inline-block mt-4 text-xs tracking-[0.2em] uppercase font-semibold transition-opacity hover:opacity-60"
              style={{ color: "#D7B94B" }}
            >
              לפרויקט ↗
            </Link>
          </div>
          <div className="max-w-xl mx-auto rounded-2xl overflow-hidden bg-[#EEEEE8]">
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
              מהלך גרילה שמכניס את עולם ההיכרויות למדף הביצים. התובנה היא שכל מי שקונה ביצים פותח קודם את הקרטון כדי לבדוק שאין ביצים שבורות. מתוך ההומור המאפיין את הרווקים התל־אביביים שמסתובבים ב־am:pm, נוצר מהלך שמציג את Tinder בצורה משעשעת ובלתי צפויה על גבי אריזות הביצים.
            </p>
            <Link
              href="/works/guerrilla/tinder"
              className="inline-block mt-4 text-xs tracking-[0.2em] uppercase font-semibold transition-opacity hover:opacity-60"
              style={{ color: "#D7B94B" }}
            >
              לפרויקט ↗
            </Link>
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

    </div>
  );
}
