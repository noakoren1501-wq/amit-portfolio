import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import FadeIn from "@/components/FadeIn";
import VideoPlayer from "@/components/VideoPlayer";

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-6">
      <span
        className="text-[11px] tracking-[0.25em] uppercase font-semibold shrink-0"
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

function SectionText({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-base text-[#1A1A1A]/55 leading-[1.9] max-w-2xl mb-12 whitespace-pre-line"
      style={{ fontFamily: "var(--font-heebo)" }}
    >
      {children}
    </p>
  );
}

function EmptyMedia({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`w-full rounded-2xl bg-[#F0EFE9] ${className ?? ""}`}
      style={style}
    />
  );
}

export default function PlanetPage() {
  return (
    <CaseStudyLayout
      breadcrumbCategory="קמפיינים"
      breadcrumbHref="/works/marketing"
      backHref="/works/marketing"
      backLabel="חזרה לקמפיינים"
      label="PLANET"
      campaignTitle="אירועי PLANET"
      client="PLANET"
      type="360° Campaign"
      message={`לצפות בסרט באולם מיוחד זה לא רק ללכת לקולנוע.\nזה אירוע.`}
      concept="אירועי PLANET"
    >

      {/* ── 01 · איך הכל מתחיל ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="01" title="איך הכל מתחיל" />
          <SectionText>
            {`יומיים לפני האירוע המשפיענים מעלים רק תאריך לסטורי.\n\nבהמשך, עמודי הבידור משתפים את התופעה ויוצרים סקרנות סביב אותו תאריך.`}
          </SectionText>
          <div className="flex justify-center">
            <div className="w-full max-w-[320px]">
              <Image
                src="/images/planet/date.jpg"
                alt="Save The Date – PLANET"
                width={320}
                height={569}
                className="w-full h-auto object-contain rounded-2xl"
                sizes="320px"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 02 · בדרך לאירוע ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="02" title="סטורי טיזר לאירוע" />
          <SectionText>
            {`ביום האירוע המשפיענים מעלים סטורי שבו הם מספרים על האירוע שייערך בערב וכמה הם מחכים להגיע אליו.`}
          </SectionText>
          <div className="flex justify-center">
            <div className="w-full max-w-[340px]">
              <VideoPlayer src="/videos/planet/event-day.mp4" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 03 · יש לי PLANET היום ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="03" title={`יש לי PLANET היום`} />
          <SectionText>
            {`לקראת הערב המשפיענים מעלים סרטונים שבהם הם נשאלים לאן הם יוצאים.\n\nהתשובה תמיד זהה:\n"יש לי PLANET היום."\n\nבערב עמודי הבידור מעלים צילומי פפראצי שלהם בדרך לאולמות.`}
          </SectionText>
          <div className="flex justify-center">
            <div className="w-full max-w-[340px]">
              <VideoPlayer src="/videos/planet/tonight.mp4" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 04 · הזמנות דיגיטליות ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="04" title="הזמנות דיגיטליות" />
          <SectionText>כרטיס הסרט הופך להזמנה לאירוע.</SectionText>
          <div className="flex justify-center">
            <Image
              src="/images/planet/tickets.jpg"
              alt="הזמנות דיגיטליות – PLANET"
              width={1000}
              height={700}
              className="w-full max-w-xl h-auto object-contain rounded-2xl"
              sizes="(max-width: 768px) 100vw, 576px"
            />
          </div>
        </section>
      </FadeIn>

      {/* ── 05 · אירוע = הזמנה (QR) ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="05" title="אירוע = הזמנה" />
          <SectionText>מהלך דיגיטלי המשתמש ב-QR כחלק בלתי נפרד מההזמנה.</SectionText>
          <div className="flex justify-center">
            <Image
              src="/images/planet/qr.jpg"
              alt="QR הזמנה – PLANET"
              width={420}
              height={420}
              className="w-64 h-auto object-contain rounded-2xl"
              sizes="256px"
            />
          </div>
        </section>
      </FadeIn>

      {/* ── 06 · Save The Date ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="06" title="Save The Date" />
          <SectionText>סדרת פוסטים לרשתות החברתיות שממשיכה את שפת האירוע.</SectionText>
          <Image
            src="/images/planet/save-the-date-posts.jpg"
            alt="Save The Date – Instagram Posts"
            width={1400}
            height={560}
            className="w-full h-auto object-contain rounded-2xl"
            sizes="(max-width: 768px) 100vw, 1280px"
          />
        </section>
      </FadeIn>

      {/* ── 07 · סטוריז ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="07" title="סטוריז" />
          <SectionText>
            {`במהלך השבוע עולים סטוריז אינטראקטיביים שמעודדים את הקהל להשתתף ולהרגיש חלק מהאירוע.`}
          </SectionText>
          <div className="flex justify-center">
            <div className="w-full max-w-lg rounded-2xl overflow-hidden bg-[#F0EFE9]">
              <Image
                src="/images/planet/story-1.jpg"
                alt="PLANET – סטורי אינטראקטיבי"
                width={400}
                height={711}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 512px"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 08 · צלם מגנטים ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="08" title="צלם מגנטים" />
          <SectionText>כמו בכל אירוע אמיתי, גם כאן יש צלם מגנטים שמנציח את הרגע.</SectionText>
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden bg-[#F0EFE9]">
            <Image
              src="/images/planet/photobooth-1.jpg"
              alt="צלם מגנטים – PLANET"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </section>
      </FadeIn>

      {/* ── 09 · קבלת פנים ── */}
      <FadeIn>
        <section className="pt-20">
          <SectionLabel number="09" title="קבלת פנים" />
          <SectionText>הכניסה לאולם הופכת לחלק מהחוויה.</SectionText>
          <div className="max-w-xl mx-auto">
            <Image
              src="/images/planet/welcome.jpg"
              alt="קבלת פנים – PLANET"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-2xl"
              sizes="(max-width: 768px) 100vw, 576px"
            />
          </div>
        </section>
      </FadeIn>

    </CaseStudyLayout>
  );
}
