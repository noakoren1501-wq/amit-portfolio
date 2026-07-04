import Link from "next/link";
import Image from "next/image";

export interface ProjectItem {
  href: string;
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function ProjectCard({ href, title, description, imageSrc, imageAlt }: ProjectItem) {
  return (
    <Link href={href} className="group block">
      {/* Cover image */}
      <div className="relative overflow-hidden rounded-2xl bg-[#EEEEE8] mb-5">
        {imageSrc ? (
          <div className="w-full">
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              width={1200}
              height={800}
              className="w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          /* Placeholder when no image yet */
          <div
            className="w-full aspect-[4/3] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            style={{ backgroundColor: "#EAEAE4" }}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
              style={{ color: "rgba(26,26,26,0.15)" }}
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}

        {/* Hover shadow overlay */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ boxShadow: "inset 0 0 0 1px rgba(26,26,26,0.06)" }}
        />
      </div>

      {/* Text */}
      <div className="px-1">
        <h3
          className="text-xl font-bold text-[#1A1A1A] leading-snug mb-2 transition-colors duration-200 group-hover:text-[#D7B94B]"
          style={{ fontFamily: "var(--font-heebo)" }}
        >
          {title}
        </h3>
        {description && (
          <p
            className="text-sm text-[#1A1A1A]/50 leading-relaxed"
            style={{ fontFamily: "var(--font-heebo)" }}
          >
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
