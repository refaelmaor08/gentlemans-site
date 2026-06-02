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
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "var(--black)" }} />
      <div className="absolute inset-0 wood-texture" />

      {/* Spotlight and right-side glow */}
      <div className="absolute top-0 left-0 right-0 h-[300px] gold-spotlight pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/7 blur-[150px] pointer-events-none" />

      {/* Gold beam */}
      <div className="gold-beam beam-drift absolute top-0 right-[20%] w-[140px] h-full -skew-x-5 pointer-events-none" />

      {/* Plant / vine decorations */}
      <svg className="plant-accent absolute -top-10 -left-10 w-80 h-80 text-[#4A7C59]" viewBox="0 0 240 240" fill="currentColor">
        <path d="M20,220 Q70,135 140,55 Q95,115 118,170 Q70,138 20,220Z" opacity="0.85"/>
        <path d="M8,195 Q50,110 120,40 Q80,98 100,152 Q58,124 8,195Z" opacity="0.5"/>
        <path d="M35,235 Q100,160 165,80 Q120,138 140,192 Q95,162 35,235Z" opacity="0.35"/>
      </svg>

      {/* Floating scissors ornament */}
      <svg
        className="float-ornament-slow plant-accent absolute bottom-24 right-8 md:right-20 w-12 h-12 text-[#C9A84C]"
        viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
        style={{ opacity: 0.2 }}
      >
        <circle cx="14" cy="10" r="5" />
        <circle cx="14" cy="38" r="5" />
        <line x1="19" y1="12" x2="40" y2="35" />
        <line x1="19" y1="36" x2="40" y2="13" />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Image column — right side in RTL */}
          <div
            className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
          >
            {/* Layered gold frame system */}
            <div className="absolute -top-7 -right-7 w-full h-full border border-[#C9A84C]/20 rounded-sm z-0 pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#C9A84C]/12 rounded-sm z-0 pointer-events-none" />
            <div className="absolute -top-1 -right-1 w-full h-full border border-[#C9A84C]/6  rounded-sm z-0 pointer-events-none" />

            {/* Gold corner brackets on outer frame */}
            <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#C9A84C]/65 z-10 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#C9A84C]/65 z-10 pointer-events-none" />
            <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C]/30 z-10 pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C]/30 z-10 pointer-events-none" />

            {/* Image */}
            <div className="relative z-10 overflow-hidden rounded-sm shadow-[0_30px_80px_rgba(0,0,0,0.65),0_0_50px_rgba(201,148,50,0.06)]" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/shop.webp"
                alt="GENTLEMAN'S TLV — הצוות"
                fill
                loading="lazy"
                className="object-cover hover:scale-[1.05] transition-transform duration-1000"
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Cinematic overlays on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/70 via-transparent to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#D4922A]/12 to-transparent" />
              {/* Side edge vignette */}
              <div className="absolute inset-0" style={{ boxShadow: "inset 8px 0 30px rgba(10,8,6,0.4), inset -8px 0 30px rgba(10,8,6,0.4)" }} />
            </div>

            {/* TLV badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-gradient-to-br from-[#C9A84C] to-[#8B6914] text-[#0A0806] px-6 py-5 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(201,148,50,0.4)]">
              <div className="text-3xl font-black leading-none tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                TLV
              </div>
              <div className="text-[10px] font-black mt-1 tracking-[0.25em] uppercase">Barbershop</div>
            </div>
          </div>

          {/* Text column */}
          <div
            className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}
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
              בדיזנגוף 237, יצרנו מקום שבו אפשר להרגיש בנוח,
              לקבל ייעוץ אמיתי, ולצאת עם תספורת שמשדרת בדיוק מי אתה.
            </p>

            {/* Highlights — glass style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {teamHighlights.map((h) => (
                <div
                  key={h.text}
                  className="glass-panel flex items-center gap-3 px-4 py-3.5 rounded-sm hover:border-[#C9A84C]/30 transition-all duration-300"
                >
                  <span className="text-[#C9A84C] text-sm flex-shrink-0 shadow-[0_0_8px_rgba(201,148,50,0.4)]">{h.icon}</span>
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
