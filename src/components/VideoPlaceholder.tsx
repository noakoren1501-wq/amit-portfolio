interface VideoPlaceholderProps {
  title?: string;
}

export default function VideoPlaceholder({ title }: VideoPlaceholderProps) {
  return (
    <div className="relative w-full aspect-video bg-[#E6E6E4] rounded-2xl flex flex-col items-center justify-center gap-3 border border-[#E6E6E4]">
      <svg
        className="w-12 h-12 text-[#1A1A1A]/20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
      {title && (
        <p className="text-sm text-[#1A1A1A]/40 font-[family-name:var(--font-heebo)]">{title}</p>
      )}
      <p className="text-xs text-[#1A1A1A]/25 font-[family-name:var(--font-heebo)]">
        סרטון יעלה בקרוב
      </p>
    </div>
  );
}
