"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-0 overflow-hidden"
      style={{ minHeight: "500px" }}
    >
      {/* Full bleed shop image as background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/shop.webp"
          alt="GENTLEMAN'S TLV — האווירה"
          fill
          loading="lazy"
          className="object-cover object-center"
          quality={82}
          sizes="100vw"
        />
        {/* Heavy dark overlay + warm amber tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806]/70 via-[#0A0806]/65 to-[#0A0806]/80" />
        <div className="absolute inset-0 bg-[#8B5E3C]/10" />
        {/* Warm overhead-light glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#D4922A]/15 blur-[80px]" />
      </div>

      {/* Horizontal gold rule at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 py-28 md:py-36 text-center">
        <div
          className={`transition-all duration-900 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="gold-line" />
            <span className="text-[#C9A84C] tracking-[0.35em] text-[11px] uppercase font-medium">
              החוויה שלנו
            </span>
            <div className="gold-line" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block text-[#F0EDE6]">לא סתם תספורת —</span>
            <span className="block text-gold-gradient mt-1">חוויה שלמה</span>
          </h2>

          {/* Body text */}
          <p
            className={`text-[#C8BFB0] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 transition-all duration-900 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            מהרגע שאתה נכנס ועד שאתה יוצא, כל פרט נבנה כדי שתיראה חד,
            תרגיש בטוח ותצא עם נוכחות שפשוט לא עוברת לאף אחד בלתי מורגשת.
          </p>

          {/* 3 micro-stats */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12 transition-all duration-900 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {[
              { label: "יחס אישי לכל לקוח" },
              { label: "ציוד ספרות פרמיום" },
              { label: "תוצאה שנשארת" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                <span className="text-[#F0EDE6] text-sm font-medium tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>

          <a
            href="https://calmark.io/p/NFouD"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-gold inline-block px-12 py-4 text-base font-black rounded-sm tracking-[0.12em] transition-all duration-900 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            קבע תור עכשיו
          </a>
        </div>
      </div>

      {/* Bottom gold rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent z-10" />
    </section>
  );
}
