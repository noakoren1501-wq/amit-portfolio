import FadeIn from "./FadeIn";
import ProjectCard, { ProjectItem } from "./ProjectCard";

interface CategoryPageLayoutProps {
  label: string;
  title: string;
  intro?: string;
  projects: ProjectItem[];
}

export default function CategoryPageLayout({
  label,
  title,
  intro,
  projects,
}: CategoryPageLayoutProps) {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-16 pb-32">

      {/* ── TOP SECTION ── */}
      <div className="pt-20 pb-16 border-b border-[#E6E6E4] mb-16">
        <FadeIn>
          <span
            className="text-xs tracking-[0.22em] uppercase font-semibold"
            style={{ color: "#D7B94B" }}
          >
            {label}
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
            {title}
          </h1>
        </FadeIn>

        {intro && (
          <FadeIn delay={200}>
            <p
              className="mt-6 text-base text-[#1A1A1A]/55 leading-relaxed max-w-lg whitespace-pre-line"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              {intro}
            </p>
          </FadeIn>
        )}
      </div>

      {/* ── PROJECT GRID ── */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-20">
          {projects.map((project, i) => (
            <FadeIn key={project.href} delay={i * 100}>
              <div className="transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]" style={{ borderRadius: "20px" }}>
                <ProjectCard {...project} />
              </div>
            </FadeIn>
          ))}
        </div>
      ) : (
        /* Empty state — content coming soon */
        <FadeIn delay={100}>
          <div
            className="flex flex-col items-center justify-center py-32 rounded-2xl border border-dashed border-[#E6E6E4] text-center gap-3"
          >
            <div
              className="w-10 h-10 rounded-full border border-[#E6E6E4] flex items-center justify-center"
            >
              <svg className="w-4 h-4 text-[#1A1A1A]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-sm text-[#1A1A1A]/30" style={{ fontFamily: "var(--font-heebo)" }}>
              פרויקטים יתווספו בקרוב
            </p>
          </div>
        </FadeIn>
      )}

    </div>
  );
}
