import type { Metadata, Viewport } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gentlemanstlv.com";

// The existing GENTLEMAN'S TLV wordmark logo, used exactly as it ships in the repo.
const ogImage = {
  url: "/images/logo.jpg",
  width: 1206,
  height: 2069,
  alt: "GENTLEMAN'S TLV",
  type: "image/jpeg",
};

export const viewport: Viewport = {
  themeColor: "#0A0806",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "GENTLEMAN'S TLV | מספרת פרימיום בדיזנגוף – תל אביב",
  description:
    "מספרת פרימיום עם אופי גברי בדיזנגוף 237, תל אביב. פיידים מדויקים, תספורות קלאסיות, עיצוב זקן וסטייל אישי ברמה הגבוהה ביותר. קבע תור עכשיו.",
  keywords: "מספרת תל אביב, barbershop tel aviv, פייד, תספורת, דיזנגוף, היי פייד, עיצוב זקן, סטייל אישי",
  applicationName: "GENTLEMAN'S TLV",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GENTLEMAN'S TLV – Barbershop",
    description: "מספרת פרימיום עם אופי גברי בדיזנגוף, תל אביב. קביעת תורים אונליין.",
    url: siteUrl,
    siteName: "GENTLEMAN'S TLV",
    locale: "he_IL",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary",
    title: "GENTLEMAN'S TLV – Barbershop",
    description: "מספרת פרימיום עם אופי גברי בדיזנגוף, תל אביב. קביעת תורים אונליין.",
    images: [ogImage.url],
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
