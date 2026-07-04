"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const worksCategories = [
  { label: "כל העבודות", href: "/works" },
  { label: "מודעות", href: "/works/print" },
  { label: "סרטים", href: "/works/films" },
  { label: "סושיאל", href: "/works/social" },
  { label: "שלטי חוצות", href: "/works/billboards" },
  { label: "גרילה", href: "/works/guerrilla" },
  { label: "מהלכי שיווק", href: "/works/marketing" },
];

export default function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F7F2]/85 backdrop-blur-md border-b border-[#E6E6E4] shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-18 flex items-center justify-between" style={{ height: "72px" }}>

        {/* Logo — right side in RTL */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-[#1A1A1A] hover:text-[#D7B94B] transition-colors duration-250"
        >
          עמית אשתר
        </Link>

        {/* Nav — left side in RTL */}
        <nav className="flex items-center gap-10 text-sm font-medium">
          <Link
            href="/"
            className={`relative py-1 transition-colors duration-200 hover:text-[#D7B94B] ${
              isActive("/") ? "text-[#D7B94B]" : "text-[#1A1A1A]"
            }`}
          >
            בית
          </Link>

          {/* Works dropdown */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <button
              className={`flex items-center gap-1.5 py-1 transition-colors duration-200 hover:text-[#D7B94B] ${
                isActive("/works") ? "text-[#D7B94B]" : "text-[#1A1A1A]"
              }`}
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
            >
              עבודות
              <svg
                className={`w-3 h-3 transition-transform duration-250 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Invisible bridge to prevent gap-triggered close */}
            <div className="absolute top-full left-0 w-full h-3" />

            <div
              className={`absolute top-[calc(100%+12px)] left-0 w-48 bg-[#F8F7F2] border border-[#E6E6E4] rounded-2xl shadow-lg overflow-hidden transition-all duration-200 origin-top ${
                dropdownOpen
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
              }`}
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
            >
              {worksCategories.map((cat, i) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`block px-5 py-3 text-sm transition-colors duration-150 hover:bg-[#EEEEE8] hover:text-[#D7B94B] ${
                    i === 0 ? "border-b border-[#E6E6E4] font-semibold" : ""
                  } ${
                    isActive(cat.href) && cat.href !== "/works"
                      ? "text-[#D7B94B]"
                      : pathname === cat.href
                      ? "text-[#D7B94B]"
                      : "text-[#1A1A1A]"
                  }`}
                  onClick={() => setDropdownOpen(false)}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className={`py-1 transition-colors duration-200 hover:text-[#D7B94B] ${
              isActive("/contact") ? "text-[#D7B94B]" : "text-[#1A1A1A]"
            }`}
          >
            צור קשר
          </Link>
        </nav>
      </div>
    </header>
  );
}
