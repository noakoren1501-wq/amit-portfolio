import ProjectPageLayout from "@/components/ProjectPageLayout";

export default function StainRemoverPage() {
  return (
    <ProjectPageLayout
      breadcrumbCategory="מודעות"
      breadcrumbHref="/works/print"
      label="מסיר כתמים"
      title="מסיר כתמים"
      description={`סדרת מודעות פרינט המציגה כיצד מסיר כתמים טוב לא רק מנקה את הכתם, אלא מחזיר את הרגע.`}
      images={[
        { src: "/images/print/stain-remover-1.jpg", alt: "אריאל – לא ידעתי שהסווטשירט שלך אוהב אבוקדו" },
        { src: "/images/print/stain-remover-2.jpg", alt: "אריאל – הסלק נדיר! בתאבון גם למכנסיים שלך" },
        { src: "/images/print/stain-remover-3.jpg", alt: "אריאל – המכנס שלך שומר בשר חלב?" },
        { src: "/images/print/stain-remover-4.jpg", alt: "אריאל – אם הייתי יודע שהחולצה שלך אוהבת קטשופ" },
      ]}
    />
  );
}
