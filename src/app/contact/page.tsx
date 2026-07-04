import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-12 pb-24">
      <PageHeader
        label="צור קשר"
        headline="בואו נדבר."
        intro=""
      />
      <FadeIn delay={100}>
        <div className="flex flex-col sm:flex-row gap-4">

          {/* WhatsApp */}
          <a
            href="https://wa.me/9720534301557"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 flex-1 px-8 py-6 rounded-2xl border border-[#E6E6E4] bg-[#F8F7F2] hover:bg-[#F0EFE9] transition-colors"
          >
            <span className="text-2xl">💬</span>
            <div>
              <p
                className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: "#D7B94B", fontFamily: "var(--font-heebo)" }}
              >
                WhatsApp
              </p>
              <p
                className="text-base font-medium text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-heebo)" }}
              >
                053-430-1557
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:amitashtar283@gmail.com"
            className="flex items-center gap-4 flex-1 px-8 py-6 rounded-2xl border border-[#E6E6E4] bg-[#F8F7F2] hover:bg-[#F0EFE9] transition-colors"
          >
            <span className="text-2xl">✉️</span>
            <div>
              <p
                className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-1"
                style={{ color: "#D7B94B", fontFamily: "var(--font-heebo)" }}
              >
                Email
              </p>
              <p
                className="text-base font-medium text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-heebo)" }}
              >
                amitashtar283@gmail.com
              </p>
            </div>
          </a>

        </div>
      </FadeIn>
    </div>
  );
}
