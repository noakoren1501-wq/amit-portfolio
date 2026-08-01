import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  href: string;
  name: string;
  coverImage?: string;
}

export default function CategoryCard({ href, name, coverImage }: CategoryCardProps) {
  return (
    <Link href={href} className="group block">
      <div
        className="rounded-2xl border border-[#E6E6E4] overflow-hidden transition-all duration-400 ease-out group-hover:shadow-2xl group-hover:-translate-y-1.5 group-hover:border-transparent relative flex flex-col justify-end"
        style={{ aspectRatio: "4/3" }}
      >
        {/* Cover image (optional) */}
        {coverImage && (
          <>
            <Image
              src={coverImage}
              alt={name}
              fill
              className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            {/* Gradient overlay for legibility */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)" }}
            />
          </>
        )}

        {/* Text */}
        <div
          className={`relative px-7 py-6 flex flex-col justify-center${coverImage ? "" : " h-full bg-white"}`}
        >
          <h2
            className={`font-black leading-[1.08] tracking-tight transition-colors duration-200${coverImage ? " text-white" : " group-hover:text-[#D7B94B] text-[#1A1A1A]"}`}
            style={{
              fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)",
              fontFamily: "var(--font-heebo)",
            }}
          >
            {name}
          </h2>
        </div>
      </div>
    </Link>
  );
}
