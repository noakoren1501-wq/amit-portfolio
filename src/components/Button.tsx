import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "gold";
}

export default function Button({
  href,
  onClick,
  children,
  className = "",
  variant = "default",
}: ButtonProps) {
  const base =
    variant === "gold"
      ? "inline-block bg-[#1A1A1A] text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#D7B94B] hover:text-[#111111] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 tracking-wide"
      : "inline-block bg-[#1A1A1A] text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#172235] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 tracking-wide";

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  );
}
