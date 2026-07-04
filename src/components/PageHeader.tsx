import FadeIn from "./FadeIn";

interface PageHeaderProps {
  label: string;
  headline: string;
  intro?: string;
}

export default function PageHeader({ label, headline, intro }: PageHeaderProps) {
  return (
    <section className="pt-20 pb-16 max-w-[1280px] mx-auto px-6 md:px-12">
      <FadeIn>
        <span className="text-xs tracking-widest uppercase text-[#1A1A1A]/50 font-[family-name:var(--font-heebo)]">
          {label}
        </span>
      </FadeIn>
      <FadeIn delay={100}>
        <h1 className="font-[family-name:var(--font-heebo)] text-5xl md:text-7xl font-bold mt-4 leading-tight text-[#1A1A1A]">
          {headline}
        </h1>
      </FadeIn>
      {intro && (
        <FadeIn delay={200}>
          <p className="mt-6 text-lg text-[#1A1A1A]/60 leading-relaxed max-w-xl font-[family-name:var(--font-heebo)] whitespace-pre-line">
            {intro}
          </p>
        </FadeIn>
      )}
    </section>
  );
}
