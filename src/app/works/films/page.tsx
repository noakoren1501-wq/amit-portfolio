import CategoryPageLayout from "@/components/CategoryPageLayout";

export default function FilmsPage() {
  return (
    <CategoryPageLayout
      label="עבודות / סרטים"
      title="סרטים."
      projects={[
        {
          href: "/works/films/main-film",
          title: "עגלה של קפה",
          description: "עגלת קפה הממוקמת בעמק חפר, סמוך לכביש מרכזי. בחרנו להציג אותה כמקום המושלם לזוגות, אבל... לא רק.",
          imageSrc: "/images/films/cover.jpg",
          imageAlt: "עגלה של קפה – תמונת כיסוי",
        },
        {
          href: "/works/films/film-2",
          title: "המשביר לצרכן",
          description: "גיפט קארד אמנם נראה כמו פתרון נוח, אבל בדרך למימוש הוא הופך לרצף של פשרות, הוצאות ועיכובים. הסרט עוקב אחר אדם שמנסה להספיק לנצל גיפט קארד לפני שתוקפו פג. בכל תחנה בדרך הערך שלו נשחק, עד שלבסוף הוא מגיע לחנות ומגלה שכמעט לא נשאר ממנו דבר.",
          imageSrc: "/images/films/cover-2.jpg",
          imageAlt: "המשביר לצרכן – תמונת כיסוי",
        },
      ]}
    />
  );
}
