import type { Metadata } from "next";
import { Heebo, Playfair_Display } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
  weight: ["300", "400", "500", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "GENTLEMAN'S TLV | מספרת גברים יוקרתית – דיזנגוף תל אביב",
  description:
    "מספרת גברים יוקרתית בדיזנגוף 237, תל אביב. תספורות גברים, פיידים, עיצוב זקן וסטייל אישי ברמה הגבוהה ביותר. קבע תור עכשיו.",
  keywords: "מספרת גברים תל אביב, barbershop tel aviv, פייד, תספורת גברים, דיזנגוף, היי פייד, עיצוב זקן",
  openGraph: {
    title: "GENTLEMAN'S TLV | מספרת גברים יוקרתית",
    description: "מספרת גברים יוקרתית בדיזנגוף, תל אביב. קבע תור עכשיו.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
