"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const teamHighlights = [
  { icon: "✦", text: "ספרים מקצועיים ומנוסים" },
  { icon: "✦", text: "התאמה אישית לכל לקוח" },
  { icon: "✦", text: "ציוד פרמיום ישראלי ואירופאי" },
  { icon: "✦", text: "יחס חם, ישיר ומכבד" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-4 overflow-hidden"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0" style={{ background: "var(--black)" }} />
      <div className="absolute inset-0 wood-texture" />
      {/* Warm right-side glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/6 blur-[130px] pointer-events-none" />
      {/* Plant/leaf decorative SVG (top-left corner) */}
      <svg
        className="plant-accent absolute -top-8 -left-8 w-64 h-64 text-[#4A7C59]"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M20,180 Q60,100 120,40 Q80,90 100,140 Q60,110 20,180Z" opacity="0.8"/>
        <path d="M10,160 Q40,80 100,20 Q70,70 85,120 Q50,95 10,160Z" opacity="0.5"/>
        <path d="M30,190 Q90,130 150,60 Q110,110 120,160 Q80,130 30,190Z" opacity="0.4"/>
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Image — right side (RTL first) */}
          <div
            className={`relative transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            {/* Gold outer frame offset */}
            <div className="absolute -top-5 -right-5 w-full h-full border border-[#C9A84C]/18 rounded-sm z-0 pointer-events-none" />
            <div className="absolute -top-2 -right-2 w-full h-full border border-[#C9A84C]/10 rounded-sm z-0 pointer-events-none" />

            {/* Image */}
            <div className="relative z-10 overflow-hidden rounded-sm" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/shop.webp"
                alt="GENTLEMAN'S TLV — הצוות"
                fill
                loading="lazy"
                className="object-cover hover:scale-[1.04] transition-transform duration-800"
                quality={82}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Warm overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/60 via-transparent to-transparent" />
              {/* Warm ambient light at top */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#D4922A]/12 to-transparent" />
            </div>

            {/* TLV badge — bottom-left */}
            <div className="absolute -bottom-5 -left-5 z-20 bg-gradient-to-br from-[#C9A84C] to-[#8B6914] text-[#0A0806] px-6 py-5 rounded-sm shadow-2xl">
              <div
                className="text-3xl font-black leading-none tracking-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                TLV
              </div>
              <div className="text-[10px] font-black mt-1 tracking-[0.25em] uppercase">Barbershop</div>
            </div>
          </div>

          {/* Text — left side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-line" />
              <span className="text-[#C9A84C] tracking-[0.35em] text-[11px] uppercase font-medium">
                הצוות שלנו
              </span>
            </div>

            <h2 className="text-4xl md:text-[52px] font-black text-[#F0EDE6] leading-[1.05] mb-8">
              GENTLEMAN&apos;S TLV{" "}
              <span className="block text-gold-gradient mt-1">
                הצוות שמאחורי הסטייל שלך
              </span>
            </h2>

            <p className="text-[#9A8E7A] text-base leading-[1.9] mb-8 max-w-lg">
              צוות ספרים מקצועי, מדויק ומנוסה שמבין שכל לקוח צריך התאמה אישית,
              יחס אישי ותוצאה חדה. אנחנו לא ממהרים — אנחנו עושים את זה נכון.
            </p>

            <p className="text-[#9A8E7A] text-base leading-[1.9] mb-10 max-w-lg">
              בדיזנגוף 237, יצרנו מקום שבו גבר יכול להרגיש בנוח,
              לקבל ייעוץ אמיתי, ולצאת עם תספורת שמשדרת בדיוק מי הוא.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {teamHighlights.map((h) => (
                <div
                  key={h.text}
                  className="flex items-center gap-3 bg-[#161210] border border-[#231D17] px-4 py-3 rounded-sm"
                >
                  <span className="text-[#C9A84C] text-sm flex-shrink-0">{h.icon}</span>
                  <span className="text-[#F0EDE6] text-sm font-medium">{h.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://calmark.io/p/NFouD"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block px-10 py-4 text-base font-black rounded-sm tracking-[0.1em]"
            >
              קבע תור עכשיו
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
