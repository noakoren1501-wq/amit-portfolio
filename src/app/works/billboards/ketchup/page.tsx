import ProjectPageLayout from "@/components/ProjectPageLayout";

export default function KetchupPage() {
  return (
    <ProjectPageLayout
      breadcrumbCategory="שלטי חוצות"
      breadcrumbHref="/works/billboards"
      label="אסם קטשופ"
      title="אסם קטשופ"
      description="סדרת שלטי חוצות המשתמשת במיקום הפיזי של השלט כחלק בלתי נפרד מהרעיון, וממחישה כיצד גם הדרך יכולה להפוך לחלק מהפרסום."
      images={[
        { src: "/images/billboards/ketchup-1.jpg", alt: "אסם קטשופ – פיצה" },
        { src: "/images/billboards/ketchup-2.jpg", alt: "אסם קטשופ – עוף" },
        { src: "/images/billboards/ketchup-3.jpg", alt: "אסם קטשופ – ספגטי" },
      ]}
    />
  );
}
