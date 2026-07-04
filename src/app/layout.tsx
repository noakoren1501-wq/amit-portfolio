import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "עמית אשתר | קופירייטר",
  description:
    'קופירייטר בוגר "הבצפר" בהצטיינות. תיק עבודות הכולל קמפיינים, מהלכי שיווק, סרטים, מודעות, גרילה, סושיאל ושלטי חוצות.',
  openGraph: {
    title: "עמית אשתר | קופירייטר",
    description:
      'קופירייטר בוגר "הבצפר" בהצטיינות. תיק עבודות הכולל קמפיינים, מהלכי שיווק, סרטים, מודעות, גרילה, סושיאל ושלטי חוצות.',
    type: "website",
    locale: "he_IL",
  },
  twitter: {
    card: "summary_large_image",
    title: "עמית אשתר | קופירייטר",
    description:
      'קופירייטר בוגר "הבצפר" בהצטיינות. תיק עבודות הכולל קמפיינים, מהלכי שיווק, סרטים, מודעות, גרילה, סושיאל ושלטי חוצות.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="min-h-screen flex flex-col bg-[#F8F7F2] text-[#1A1A1A]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
