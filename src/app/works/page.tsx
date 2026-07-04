import PageHeader from "@/components/PageHeader";
import CategoryCard from "@/components/CategoryCard";
import FadeIn from "@/components/FadeIn";

const categories = [
  { name: "מודעות.", count: "3 פרויקטים", href: "/works/print" },
  { name: "סרטים.", count: "2 פרויקטים", href: "/works/films" },
  { name: "סושיאל.", count: "2 פרויקטים", href: "/works/social" },
  { name: "שלטי חוצות.", count: "2 פרויקטים", href: "/works/billboards" },
  { name: "גרילה.", count: "3 פרויקטים", href: "/works/guerrilla" },
  { name: "מהלכי שיווק.", count: "3 קמפיינים", href: "/works/marketing" },
];

export default function WorksPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-12 pb-24">
      <PageHeader
        label=""
        headline="העבודות שלי."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <FadeIn key={cat.href} delay={i * 80}>
            <CategoryCard
              href={cat.href}
              name={cat.name}
              count={cat.count}
              coverImage={(cat as { coverImage?: string }).coverImage}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
