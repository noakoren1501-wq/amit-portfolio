import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import FadeIn from "@/components/FadeIn";
import VideoPlayer from "@/components/VideoPlayer";

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span
        className="text-[11px] tracking-[0.25em] uppercase font-semibold"
        style={{ color: "#D7B94B" }}
      >
        {number}
      </span>
      <h2
        className="text-2xl md:text-3xl font-black text-[#1A1A1A] whitespace-pre-line"
        style={{ fontFamily: "var(--font-heebo)" }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function WoltPage() {
  return (
    <CaseStudyLayout
      breadcrumbCategory="קמפיינים"
      breadcrumbHref="/works/marketing"
      backHref="/works/marketing"
      backLabel="חזרה לקמפיינים"
      label="Wolt"
      campaignTitle="Wolt"
      client="Wolt"
      type="360° Campaign"
      message="בואו ניתן לנשים את הקרדיט שמגיע להן."
      concept="תנו קרדיט לנשים, קבלו קרדיט לחשבון."
      story="המהלך התחיל בסרטון טיזר שעורר סקרנות לקראת יום האישה. לאחר מכן, המשתמשים השתתפו במשחק אינטראקטיבי באפליקציה, ענו על שאלות בנושא נשים מעוררות השראה, קיבלו קרדיטים ל־Wolt ושיתפו את התוצאה ברשתות החברתיות. כך נוצר מהלך שחיבר בין תוכן, חוויה דיגיטלית, שיתוף חברתי וערך אמיתי למשתמש."
    >

      {/* ── 01 · PREP VIDEO ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="01" title="סרטון הכנה למהלך" />
          <div className="flex justify-center">
            <div className="w-full max-w-[280px]">
              <VideoPlayer src="/videos/wolt/prep.mp4" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 02 · GAME VIDEO ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="02" title="אז איך זה ייראה..." />
          <div className="flex justify-center">
            <div className="w-full max-w-[280px]">
              <VideoPlayer src="/videos/wolt/game.mp4" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 03 · SHARE SCREENS ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel
            number="03"
            title={`לאחר ההזמנה תופיע השאלה.\nלאחר שיענו יוכלו לשתף:`}
          />
          <div className="grid grid-cols-2 gap-6 md:gap-10 max-w-xl mx-auto">
            <div className="rounded-2xl overflow-hidden bg-[#F0EFE9]">
              <Image
                src="/images/wolt/app-mockup-1.png"
                alt="מסך שיתוף – Wolt"
                width={600}
                height={1100}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 50vw, 340px"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#F0EFE9]">
              <Image
                src="/images/wolt/app-mockup-2.png"
                alt="מסך שיתוף 2 – Wolt"
                width={600}
                height={1100}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 50vw, 340px"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 04 · INSTAGRAM STORIES ── */}
      <FadeIn>
        <section className="pt-20">
          <SectionLabel number="04" title="שני סטוריז ביום עם עובדה וקישור להזמנה." />
          <div className="grid grid-cols-2 gap-6 md:gap-10 max-w-xl mx-auto">
            <div className="rounded-2xl overflow-hidden bg-[#F0EFE9]">
              <Image
                src="/images/wolt/story-1.png"
                alt="Instagram Story 1 – Wolt"
                width={540}
                height={960}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 50vw, 340px"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#F0EFE9]">
              <Image
                src="/images/wolt/story-2.png"
                alt="Instagram Story 2 – Wolt"
                width={540}
                height={960}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 50vw, 340px"
              />
            </div>
          </div>
        </section>
      </FadeIn>

    </CaseStudyLayout>
  );
}
