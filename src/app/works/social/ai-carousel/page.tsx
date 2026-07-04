import ProjectPageLayout from "@/components/ProjectPageLayout";

export default function AiCarouselPage() {
  return (
    <ProjectPageLayout
      breadcrumbCategory="סושיאל"
      breadcrumbHref="/works/social"
      label="AI קרוסלה"
      title="לפעמים גם AI מפספס"
      description="קרוסלת סושיאל שממחישה בהומור שגם בינה מלאכותית לא תמיד מבינה למה באמת התכוונו."
      images={[
        { src: "/images/social/ai-carousel-1.png", alt: "לפעמים גם AI מפספס – שקופית 1" },
        { src: "/images/social/ai-carousel-2.png", alt: "לפעמים גם AI מפספס – שקופית 2" },
        { src: "/images/social/ai-carousel-3.png", alt: "לפעמים גם AI מפספס – שקופית 3" },
        { src: "/images/social/ai-carousel-4.png", alt: "לפעמים גם AI מפספס – שקופית 4" },
        { src: "/images/social/ai-carousel-5.png", alt: "לפעמים גם AI מפספס – שקופית 5" },
        { src: "/images/social/ai-carousel-6.png", alt: "לפעמים גם AI מפספס – שקופית 6" },
        { src: "/images/social/ai-carousel-7.png", alt: "לפעמים גם AI מפספס – שקופית 7" },
        { src: "/images/social/ai-carousel-8.png", alt: "לפעמים גם AI מפספס – שקופית 8" },
      ]}
    />
  );
}
