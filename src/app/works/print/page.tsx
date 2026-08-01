import FadeIn from "@/components/FadeIn";
import Carousel from "@/components/Carousel";

const projects = [
  {
    title: "שוקו בשקית",
    description: "אי אפשר להניח את השקית כי היא תישפך.",
    images: [
      { src: "/images/print/lemon-waffle-1.jpg", alt: "שוקו בשקית – מודעה 1" },
    ],
  },
  {
    title: "מסיר כתמים",
    description: "סדרת מודעות פרינט טיפוגרפית על הרגע שהבגד אוכל איתך.",
    images: [
      { src: "/images/print/stain-remover-1.jpg", alt: "מסיר כתמים – מודעה 1" },
      { src: "/images/print/stain-remover-2.jpg", alt: "מסיר כתמים – מודעה 2" },
      { src: "/images/print/stain-remover-3.jpg", alt: "מסיר כתמים – מודעה 3" },
      { src: "/images/print/stain-remover-4.jpg", alt: "מסיר כתמים – מודעה 4" },
    ],
  },
  {
    title: "שמפו 2 ב־1",
    description: "לגברים קשה לבצע שתי פעולות במקביל. מזל שיש שמפו 2 ב־1.",
    images: [
      { src: "/images/print/shampoo-1.jpg", alt: "שמפו – מודעה 1" },
      { src: "/images/print/shampoo-2.jpg", alt: "שמפו – מודעה 2" },
      { src: "/images/print/shampoo-3.jpg", alt: "שמפו – מודעה 3" },
    ],
  },
];

export default function PrintPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-16 pb-32">

      {/* ── HEADER ── */}
      <div className="pt-20 pb-16 border-b border-[#E6E6E4]">
        <FadeIn>
          <span
            className="text-xs tracking-[0.22em] uppercase font-semibold"
            style={{ color: "#D7B94B" }}
          >
            עבודות / מודעות
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
            מודעות.
          </h1>
        </FadeIn>
      </div>

      {/* ── PROJECTS ── */}
      {projects.map((project, i) => (
        <FadeIn key={project.title} delay={i * 80}>
          <div className={`py-20 ${i < projects.length - 1 ? "border-b border-[#E6E6E4]" : ""}`}>
            <div className="mb-8">
              <h2
                className="text-2xl md:text-3xl font-black text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-heebo)" }}
              >
                {project.title}
              </h2>
              <p
                className="mt-3 text-base text-[#1A1A1A]/55 leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-heebo)" }}
              >
                {project.description}
              </p>
            </div>
            <div className="max-w-xl mx-auto">
              <Carousel images={project.images} />
            </div>
          </div>
        </FadeIn>
      ))}

    </div>
  );
}
