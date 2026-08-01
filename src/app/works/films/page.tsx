import CategoryPageLayout from "@/components/CategoryPageLayout";

export default function FilmsPage() {
  return (
    <CategoryPageLayout
      label="עבודות / וידאו"
      title="וידאו."
      projects={[
        {
          href: "/works/films/main-film",
          title: "עגלה של קפה",
          description: "עגלת קפה בעמק חפר. המקום המושלם לזוגות – אבל לא רק.",
          imageSrc: "/images/films/cover.jpg",
          imageAlt: "עגלה של קפה – תמונת כיסוי",
        },
        {
          href: "/works/films/film-2",
          title: "המשביר לצרכן",
          description: "גיפט קארד שמאבד ערך בכל תחנה שמנסים לממש אותו.",
          imageSrc: "/images/films/cover-2.jpg",
          imageAlt: "המשביר לצרכן – תמונת כיסוי",
        },
      ]}
    />
  );
}
