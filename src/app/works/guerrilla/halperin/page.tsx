import ProjectPageLayout from "@/components/ProjectPageLayout";

export default function HalperinPage() {
  return (
    <ProjectPageLayout
      breadcrumbCategory="גרילה"
      breadcrumbHref="/works/guerrilla"
      label="הלפרין"
      title="משקפיים זה רק עניין של זמן"
      description="מהלך גרילה לרשת הלפרין המשתמש בעמוד תחנה קיים והופך אותו לזוג משקפיים ענק. הסביבה עצמה הופכת לחלק מהמסר וממחישה כיצד רעיון טוב יכול להשתמש במה שכבר קיים."
      images={[
        { src: "/images/guerrilla/halperin.jpg", alt: "הלפרין - משקפיים ענק בתחנת רכבת" },
      ]}
    />
  );
}
