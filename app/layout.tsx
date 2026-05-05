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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gentlemans-tlv.com";

export const metadata: Metadata = {
  themeColor: "#0A0806",
  metadataBase: new URL(siteUrl),
  title: "GENTLEMAN'S TLV | מספרת גברים יוקרתית – דיזנגוף תל אביב",
  description:
    "מספרת גברים יוקרתית בדיזנגוף 237, תל אביב. תספורות גברים, פיידים, עיצוב זקן וסטייל אישי ברמה הגבוהה ביותר. קבע תור עכשיו.",
  keywords: "מספרת גברים תל אביב, barbershop tel aviv, פייד, תספורת גברים, דיזנגוף, היי פייד, עיצוב זקן",
  openGraph: {
    title: "Gentlemans TLV – Barbershop",
    description: "מספרת גברים יוקרתית בתל אביב. קביעת תורים אונליין.",
    url: siteUrl,
    siteName: "Gentlemans TLV",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        alt: "Gentlemans TLV – Barbershop",
      },
    ],
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
