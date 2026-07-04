import ProjectPageLayout from "@/components/ProjectPageLayout";

export default function TinderPage() {
  return (
    <ProjectPageLayout
      breadcrumbCategory="גרילה"
      breadcrumbHref="/works/guerrilla"
      label="טינדר"
      title="Tinder בסופר"
      description="מהלך גרילה שמכניס את עולם ההיכרויות למדף הביצים, וממחיש איך גם מוצר יומיומי יכול להפוך לרגע פרסומי מפתיע."
      images={[
        { src: "/images/guerrilla/tinder.jpg", alt: "Tinder - פרסומת על קרטון ביצים בסופרמרקט" },
      ]}
    />
  );
}
