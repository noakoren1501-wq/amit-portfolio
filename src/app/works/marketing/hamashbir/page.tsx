import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import FadeIn from "@/components/FadeIn";
import VideoPlayer from "@/components/VideoPlayer";
import Carousel from "@/components/Carousel";
import AudioPlayer from "@/components/AudioPlayer";

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

export default function HamashbirPage() {
  return (
    <CaseStudyLayout
      breadcrumbCategory="קמפיינים"
      breadcrumbHref="/works/marketing"
      label="המשביר"
      campaignTitle="המשביר"
      client="המשביר לצרכן"
      type="360° Campaign"
      message="מחזירים את המתנות לעטיפה"
      concept="גיפט קארד זו לא באמת מתנה."
      story={`מי שמקבל גיפט קארד צריך למצוא זמן ללכת ולקנות לעצמו מתנה, לחשוב בכלל מה הוא רוצה לקנות, לבזבז זמן וכסף בדרך, עלול לשכוח מהגיפט קארד ולא ליהנות ממנו כלל, ובמקרים רבים גם נשאר עם יתרה קטנה שאין לו מה לעשות איתה. בסופו של דבר הוא מבין שלא באמת קנו לו מתנה, ואין לו אפילו משהו חדש להתגאות בו.\n\nכל ביצוע בקמפיין מבליט סיבה אחרת לכך שגיפט קארד הוא לא באמת מתנה – ויחד הם מחזקים רעיון אחד: הגיע הזמן להחזיר את המתנות לעטיפה.`}
    >

      {/* ── 01 · סרט הקמפיין ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="01" title="סרט הקמפיין" />
          <SectionText>
            {`כדי לפתוח את המהלך בחרנו להמחיש את הבעיה בדרך יומיומית ומוכרת.\n\nגיפט קארד אמנם נראה כמו פתרון נוח, אבל בדרך למימוש הוא הופך לרצף של פשרות, הוצאות ועיכובים.\n\nהסרט עוקב אחר אדם שמנסה להספיק לנצל גיפט קארד לפני שתוקפו פג. בכל תחנה בדרך הערך שלו נשחק, עד שלבסוף הוא מגיע לחנות ומגלה שכמעט לא נשאר ממנו דבר.\n\nכך המסר נחשף בצורה פשוטה והומוריסטית:\n\n"גיפט קארד זו לא באמת מתנה."`}
          </SectionText>
          <div className="max-w-xl mx-auto">
            <VideoPlayer src="/videos/hamashbir/campaign.mp4" />
          </div>
        </section>
      </FadeIn>

      {/* ── 02 · שלטי חוצות ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="02" title="שלטי חוצות" />
          <SectionText>
            כל שלט מבליט חסרון אחר של גיפט קארד, ומחזק את הרעיון שמתנה אמיתית מתחילה בבחירה ולא בכרטיס.
          </SectionText>
          <div className="max-w-xl mx-auto">
            <Carousel
              images={[
                { src: "/images/hamashbir/billboard-1.jpg", alt: "המשביר – שלט חוצות – גיפט קארד עם עובש" },
                { src: "/images/hamashbir/billboard-2.jpg", alt: "המשביר – שלט חוצות – משקפי גיפט קארד" },
                { src: "/images/hamashbir/billboard-3.jpg", alt: "המשביר – שלט חוצות – גיפט קארד עטוף" },
              ]}
            />
          </div>
        </section>
      </FadeIn>

      {/* ── 03 · פוסטים ── */}
      <FadeIn>
        <section className="py-20">
          <SectionLabel number="03" title="פוסטים" />
          <SectionText>
            כל פוסט מציג מערכת יחסים אחרת שבה קבלת גיפט קארד מאכזבת במיוחד, ומחזק את התובנה המרכזית של הקמפיין.
          </SectionText>
          <div className="max-w-xl mx-auto">
            <Carousel
              images={[
                { src: "/images/hamashbir/post-1.jpg", alt: "המשביר – פוסט – מילא מהבוס אבל מאחותי" },
                { src: "/images/hamashbir/post-2.jpg", alt: "המשביר – פוסט – מילא מהשכן אבל מהבן שלי" },
                { src: "/images/hamashbir/post-3.jpg", alt: "המשביר – פוסט – מילא מהחבר מהצבא אבל מאשתי" },
              ]}
            />
          </div>
        </section>
      </FadeIn>

      {/* ── 04 · סטוריז אינטראקטיביים ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="04" title="סטוריז אינטראקטיביים" />
          <SectionText>
            הסטוריז מזמינים את המשתמשים להשתתף בסקר אינטראקטיבי ולבחור ממי הכי פחות מקובל לקבל גיפט קארד – ולבסוף חושפים את התובנה המרכזית של הקמפיין.
          </SectionText>

          {/* Row 1 — three interactive stories (combined image) */}
          <div className="max-w-xl mx-auto mb-16">
            <Image
              src="/images/hamashbir/stories-row.jpg"
              alt="המשביר – שלושה סטוריז אינטראקטיביים"
              width={1400}
              height={560}
              className="w-full h-auto object-contain rounded-2xl"
              sizes="(max-width: 768px) 100vw, 576px"
            />
          </div>

          {/* Row 2 — reveal story, centered at phone width */}
          <div className="flex justify-center">
            <div className="w-full max-w-[280px]">
              <Image
                src="/images/hamashbir/story-reveal.jpg"
                alt="המשביר – סטורי חשיפת התשובה"
                width={560}
                height={994}
                className="w-full h-auto object-contain rounded-2xl"
                sizes="280px"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 05 · מהלך משפיענים ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="05" title="מהלך משפיענים" />
          <SectionText>
            {`כדי לקחת את המסר אל חיי היומיום, שיתפנו פעולה עם שני משפיענים מוכרים – קובי אדרי ודנה זרמון.\n\nכל אחד מהם הציג סיטואציה מוכרת מהחיים, שבה גיפט קארד מרגיש כמו פתרון קל, אבל לא כמו מתנה שבאמת הושקעה בה מחשבה.\n\nבאמצעות השפה האישית והאותנטית של כל אחד מהם, אותו רעיון קיבל חיים בצורה טבעית והתחבר לקהל דרך תוכן שנראה כמו חלק מהפיד, ולא כמו פרסומת.`}
          </SectionText>

          <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* קובי אדרי */}
            <div className="flex flex-col gap-3">
              <span
                className="text-sm font-semibold text-[#1A1A1A]/40 tracking-wide"
                style={{ fontFamily: "var(--font-heebo)" }}
              >
                קובי אדרי
              </span>
              <VideoPlayer src="/videos/hamashbir/influencer-kobi.mp4" />
            </div>

            {/* דנה זרמון */}
            <div className="flex flex-col gap-3">
              <span
                className="text-sm font-semibold text-[#1A1A1A]/40 tracking-wide"
                style={{ fontFamily: "var(--font-heebo)" }}
              >
                דנה זרמון
              </span>
              <VideoPlayer src="/videos/hamashbir/influencer-dana.mp4" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 06 · מהלך דיגיטל בשיתוף Gett ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="06" title="מהלך דיגיטל בשיתוף Gett" />
          <SectionText>
            {`באפליקציית Gett מופיעים התחביבים של הנהג, אבל האם מישהו באמת יודע איזו מתנה הנהג שלו היה רוצה לקבל?\n\nהמהלך יוצר שיתוף פעולה בין Gett למשביר, מגביר את החשיפה למותג ומעודד אנשים להגיע למשביר באמצעות הטבת הנחה לאחר ההשתתפות בפעילות.`}
          </SectionText>

          {/* 1 */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-[300px]">
              <Image
                src="/images/hamashbir/digital-1.png"
                alt="Gett – שלב 1"
                width={600}
                height={1067}
                className="w-full h-auto object-contain rounded-2xl"
                sizes="300px"
              />
            </div>
          </div>

          {/* 2 */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-[300px]">
              <Image
                src="/images/hamashbir/digital-2.png"
                alt="Gett – שלב 2"
                width={600}
                height={1067}
                className="w-full h-auto object-contain rounded-2xl"
                sizes="300px"
              />
            </div>
          </div>

          {/* 3 & 4 — side by side */}
          <div className="grid grid-cols-2 gap-6 md:gap-10 max-w-xl mx-auto">
            <div className="rounded-2xl overflow-hidden bg-[#F0EFE9]">
              <Image
                src="/images/hamashbir/digital-3.png"
                alt="Gett – שלב 3"
                width={600}
                height={1067}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 50vw, 320px"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#F0EFE9]">
              <Image
                src="/images/hamashbir/digital-4.png"
                alt="Gett – שלב 4"
                width={600}
                height={1067}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 50vw, 320px"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── 07 · ספוטים לרדיו ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="07" title="תשדירי רדיו" />
          <SectionText>
            כל תשדיר פותח ברגע מוכר של מתן מתנה, עד שהשיחה מופסקת ומתגלה האמת הלא נוחה שמסתתרת מאחורי גיפט קארד.
          </SectionText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <AudioPlayer
              src="/audio/hamashbir/radio-hag.mp4"
              title="חג"
            />
            <AudioPlayer
              src="/audio/hamashbir/radio-dira.mp4"
              title="מעבר דירה"
            />
            <AudioPlayer
              src="/audio/hamashbir/radio-lida.mp4"
              title="לידה"
            />
          </div>
        </section>
      </FadeIn>

      {/* ── 08 · גרילה ── */}
      <FadeIn>
        <section className="py-20 border-b border-[#E6E6E4]">
          <SectionLabel number="08" title="גרילה" />
          <SectionText>
            {`מה עושים עם גיפט קארד שנשארו בו שקל או שניים?\n\nבדרך כלל... שום דבר.\n\nכדי להמחיש עד כמה גיפט קארדים נשכחים ולא ממומשים, יצרנו מיצב אינטראקטיבי בכיכר הבימה.\n\nהמבקרים יכלו להעביר את הגיפט קארד הפיזי שלהם או להזין את מספר השובר ולבדוק כמה כסף עדיין נשאר בו.\n\nלאחר שהיתרה הוצגה, הם יכלו לבחור:\n\nלתרום את היתרה לעמותה,\nאו לקחת את הכרטיס בחזרה.\n\nמי שבחר לתרום, הכניס את הגיפט קארד אל תוך גיליוטינה מוגנת בזכוכית.\n\nהכרטיס נחתך לשניים לעיני המשתתפים, והחצאים הצטברו בתוך המיצב – תזכורת מוחשית לכמות הגיפט קארדים שנשארים ללא שימוש, ולכסף שיכול להפוך לתרומה אמיתית.`}
          </SectionText>
          <div className="max-w-xl mx-auto">
            <Carousel
              images={[
                { src: "/images/hamashbir/guerrilla-3.jpg", alt: "מיצב הבימה – הגיפט קארד נחתך ומצטרף לערמה" },
                { src: "/images/hamashbir/guerrilla-2.jpg", alt: "מיצב הבימה – בדיקת יתרה ובחירה לתרום" },
                { src: "/images/hamashbir/guerrilla-1.jpg", alt: "מיצב הבימה – הצגת המיצב" },
              ]}
            />
          </div>
        </section>
      </FadeIn>

      {/* ── 09 · שילוט חנויות ── */}
      <FadeIn>
        <section className="pt-20">
          <SectionLabel number="09" title="שילוט חנויות" />
          <SectionText>
            {`כדי להחזיר את המתנות לעטיפה גם בנקודת המכירה עצמה, יצרנו שילוט ייעודי לכל מחלקה במשביר.\n\nבכל מחלקה השלטים מזכירים שלפעמים גיפט קארד הוא הפתרון הקל, אבל המתנה האמיתית היא זו שמתאימה לאדם שמקבל אותה.\n\nכל שלט מותאם למוצרים שנמצאים סביבו ומחליף את הגיפט קארד במתנה אמיתית.`}
          </SectionText>
          <div className="max-w-xl mx-auto">
            <Carousel
              images={[
                { src: "/images/hamashbir/store-sign-1.jpg", alt: "שילוט חנות – תיק יד" },
                { src: "/images/hamashbir/store-sign-2.jpg", alt: "שילוט חנות – סל מתנות" },
                { src: "/images/hamashbir/store-sign-3.jpg", alt: "שילוט חנות – מוצרי אמבטיה" },
                { src: "/images/hamashbir/store-sign-4.jpg", alt: "שילוט חנות – תיק גב" },
                { src: "/images/hamashbir/store-sign-5.jpg", alt: "שילוט חנות – גרביים" },
                { src: "/images/hamashbir/store-sign-6.jpg", alt: "שילוט חנות – מייבש שיער" },
                { src: "/images/hamashbir/store-sign-7.jpg", alt: "שילוט חנות – מכונת קפה" },
              ]}
            />
          </div>
        </section>
      </FadeIn>

    </CaseStudyLayout>
  );
}
