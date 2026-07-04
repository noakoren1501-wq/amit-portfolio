import ProjectPageLayout from "@/components/ProjectPageLayout";

export default function LemonWafflePage() {
  return (
    <ProjectPageLayout
      breadcrumbCategory="מודעות"
      breadcrumbHref="/works/print"
      label="שוקו בשקית"
      title="שוקו בשקית"
      description={`סדרת מודעות פרינט הבנויה סביב תובנה אחת:\nלא כל אחד נועד לאהוב שוקו בשקית. וטוב שכך.`}
      images={[
        { src: "/images/print/lemon-waffle-1.jpg", alt: "שוקו בשקית – מודעה 1" },
      ]}
    />
  );
}
