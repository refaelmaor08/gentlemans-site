import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GENTLEMAN'S TLV",
    short_name: "GENTLEMAN'S TLV",
    description:
      "מספרת פרימיום עם אופי גברי בדיזנגוף 237, תל אביב. פיידים מדויקים, תספורות קלאסיות ועיצוב זקן.",
    start_url: "/",
    display: "standalone",
    lang: "he",
    dir: "rtl",
    background_color: "#0A0806",
    theme_color: "#0A0806",
    icons: [
      { src: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
