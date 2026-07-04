import ProjectPageLayout from "@/components/ProjectPageLayout";

export default function ShapewearPage() {
  return (
    <ProjectPageLayout
      breadcrumbCategory="שלטי חוצות"
      breadcrumbHref="/works/billboards"
      label="המחטב"
      title="המחטב"
      description="שלט חוצות המשתמש בפרופורציות של המבנה כדי להמחיש בצורה מיידית את אפקט המוצר, כך שהרעיון עובר עוד לפני שקוראים את הכותרת."
      images={[
        { src: "/images/billboards/shapewear.jpg", alt: "המחטב – Boebody שלט חוצות" },
      ]}
    />
  );
}
