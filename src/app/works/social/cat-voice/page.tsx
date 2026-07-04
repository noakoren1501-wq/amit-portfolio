import ProjectPageLayout from "@/components/ProjectPageLayout";

export default function CatVoicePage() {
  return (
    <ProjectPageLayout
      breadcrumbCategory="סושיאל"
      breadcrumbHref="/works/social"
      label="קול החתולים"
      title="יש להם מה להגיד"
      description="פוסט סושיאל לעמותת קול החתולים, המציג את החתולים בצורה טבעית ומעודד אימוץ באמצעות מסר פשוט וברור."
      images={[
        {
          src: "/images/social/cat-voice-cover.jpg",
          alt: "קול החתולים – פוסט סושיאל",
        },
      ]}
    />
  );
}
