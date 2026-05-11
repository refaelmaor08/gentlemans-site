"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Parallax on the shop background */
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / (window.innerHeight + rect.height);
      bgRef.current.style.transform = `translateY(${progress * 80}px) scale(1.18)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-0 overflow-hidden"
      style={{ minHeight: "550px" }}
    >
      {/* Parallax background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgRef} className="absolute inset-0 parallax-bg" style={{ willChange: "transform" }}>
          <Image
            src="/images/shop.webp"
            alt="GENTLEMAN'S TLV — האווירה"
            fill
            loading="lazy"
            className="object-cover object-center"
            quality={85}
            sizes="100vw"
          />
        </div>
        {/* Cinematic multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806]/80 via-[#0A0806]/60 to-[#0A0806]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0806]/65 via-transparent to-[#0A0806]/65" />
        <div className="absolute inset-0 bg-[#8B5E3C]/8" />
        {/* Overhead light bloom */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-[#D4922A]/18 blur-[90px]" />
        {/* Edge vignette */}
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 200px rgba(10,8,6,0.65)" }} />
        {/* Subtle scan lines */}
        <div className="absolute inset-0 scan-lines opacity-30" />
      </div>

      {/* Gold beams */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="gold-beam beam-drift  absolute top-0 right-[22%] w-[140px] h-full -skew-x-5" />
        <div className="gold-beam beam-drift2 absolute top-0 left-[30%]  w-[100px] h-full -skew-x-3" />
      </div>

      {/* Top divider with glow */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/45 to-transparent" />
        <div className="h-8 bg-gradient-to-b from-[#C9A84C]/4 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 py-32 md:py-40 text-center">
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="gold-line" />
            <span className="text-[#C9A84C] tracking-[0.35em] text-[11px] uppercase font-medium">
              החוויה שלנו
            </span>
            <div className="gold-line" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-depth">
            <span className="block text-[#F0EDE6]">לא סתם תספורת —</span>
            <span className="block text-gold-gradient mt-1">חוויה שלמה</span>
          </h2>

          <p
            className={`text-[#C8BFB0] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 transition-all duration-900 delay-200 text-depth ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            מהרגע שאתה נכנס ועד שאתה יוצא, כל פרט נבנה כדי שתיראה חד,
            תרגיש בטוח ותצא עם נוכחות שפשוט לא עוברת לאף אחד בלתי מורגשת.
          </p>

          {/* Micro-stats with glass */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-0 mb-12 transition-all duration-900 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-0 glass-panel rounded-sm px-2">
              {[
                { label: "יחס אישי לכל לקוח" },
                { label: "ציוד ספרות פרמיום" },
                { label: "תוצאה שנשארת" },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center">
                  {i > 0 && <div className="w-px h-8 bg-[#C9A84C]/18 mx-1" />}
                  <div className="flex items-center gap-2 px-5 py-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0 shadow-[0_0_6px_rgba(201,148,50,0.6)]" />
                    <span className="text-[#F0EDE6] text-sm font-medium tracking-wide">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
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

      {/* Bottom divider with glow */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="h-8 bg-gradient-to-t from-[#C9A84C]/4 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/45 to-transparent" />
      </div>
    </section>
  );
}
