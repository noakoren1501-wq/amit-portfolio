import ProjectPageLayout from "@/components/ProjectPageLayout";

export default function PangoPage() {
  return (
    <ProjectPageLayout
      breadcrumbCategory="גרילה"
      breadcrumbHref="/works/guerrilla"
      label="פנגו"
      title="Pango בחניות"
      description="מהלך גרילה יצירתי המשתמש בחניות, במסכי ניווט וברמזורים, ובנוי להגיע לנהגים בדיוק בנקודה שבה הם צריכים את המוצר."
      images={[
        { src: "/images/guerrilla/pango-floor.jpg", alt: "Pango - כתובת על רצפת החניה" },
        { src: "/images/guerrilla/pango-screen-1.jpg", alt: "Pango - מסך ניווט ברכב" },
        { src: "/images/guerrilla/pango-screen-2.jpg", alt: "Pango - מסך ניווט ברכב, גרסה שנייה" },
      ]}
    />
  );
}
