import ProjectPageLayout from "@/components/ProjectPageLayout";

export default function ShampooPage() {
  return (
    <ProjectPageLayout
      breadcrumbCategory="מודעות"
      breadcrumbHref="/works/print"
      label="שמפו"
      title="שמפו"
      description={`סדרת מודעות פרינט המשתמשת בשיער עצמו כחלק בלתי נפרד מהרעיון הקריאייטיבי.`}
      images={[
        { src: "/images/print/shampoo-1.jpg", alt: "שמפו – מודעה 1" },
        { src: "/images/print/shampoo-2.jpg", alt: "שמפו – מודעה 2" },
        { src: "/images/print/shampoo-3.jpg", alt: "שמפו – מודעה 3" },
      ]}
    />
  );
}
