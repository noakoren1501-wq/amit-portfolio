import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import BackButton from "@/components/BackButton";

const projects = [
  {
    href: "/works/marketing/wolt",
    title: "Wolt",
    description: `במסגרת לימודי ב"הבצפר" הצגנו קמפיין לוולט לרגל יום האישה למשרד הפרסום McCANN.\n\nהקמפיין הוצג על ידם ללקוח ונבחר לעלות לאוויר.\n\nלצערנו, בעקבות מלחמת "שאגת הארי" בוטלו אירועי יום האישה, ואיתם גם הקמפיין שלנו.`,
    logo: "/images/marketing/wolt-logo.png",
  },
  {
    href: "/works/marketing/planet",
    title: "PLANET",
    description: "פרויקט דיגיטל שמטרתו להעלות מודעות לאולמות המיוחדים של PLANET.",
    logo: "/images/marketing/planet-logo.png",
  },
  {
    href: "/works/marketing/hamashbir",
    title: "המשביר",
    description: "פרויקט גמר שמטרתו להחזיר אנשים לבחור מתנות אמיתיות לקרובים שלהם, במקום להסתפק בגיפט קארדים ובשוברי מתנה.",
    logo: "/images/marketing/hamashbir-logo.png",
  },
];

export default function MarketingPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-16 pb-32">

      {/* ── HEADER ── */}
      <div className="pt-20 pb-16 border-b border-[#E6E6E4] mb-16">
        <FadeIn>
          <span
            className="text-xs tracking-[0.22em] uppercase font-semibold"
            style={{ color: "#D7B94B" }}
          >
            עבודות / מהלכי שיווק
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
            מהלכי שיווק.
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p
            className="mt-6 text-base text-[#1A1A1A]/55 leading-relaxed max-w-lg whitespace-pre-line"
            style={{ fontFamily: "var(--font-heebo)" }}
          >
            {`רעיונות שצריכים קמפיין 360°.\n\nיש רעיונות שלא נגמרים במודעה אחת.\n\nלפעמים צריך לחבר בין סושיאל, דיגיטל, וידאו, משפיענים וחוויה כדי שהרעיון יעבוד באמת.\n\nשלושה מהלכים שונים.\nשלוש אסטרטגיות שונות.\nכולם מתחילים מרעיון אחד.`}
          </p>
        </FadeIn>
      </div>

      {/* ── PROJECT CARDS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <FadeIn key={project.href} delay={i * 80}>
            <Link href={project.href} className="group block">
              {/* Logo card — fixed aspect ratio, identical for all three */}
              <div
                className="relative rounded-2xl overflow-hidden bg-[#F8F7F2] border border-[#E6E6E4] transition-all duration-400 ease-out group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border-transparent mb-5"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={project.logo}
                  alt={`${project.title} לוגו`}
                  fill
                  className="object-contain p-10 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              {/* Text */}
              <div className="px-1">
                <h3
                  className="text-xl font-bold text-[#1A1A1A] leading-snug mb-2 transition-colors duration-200 group-hover:text-[#D7B94B]"
                  style={{ fontFamily: "var(--font-heebo)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm text-[#1A1A1A]/50 leading-relaxed whitespace-pre-line"
                  style={{ fontFamily: "var(--font-heebo)" }}
                >
                  {project.description}
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      {/* ── BACK ── */}
      <div className="mt-16">
        <BackButton href="/works" label="חזרה לעבודות" />
      </div>

    </div>
  );
}
