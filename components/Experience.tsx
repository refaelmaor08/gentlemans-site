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
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      className="relative overflow-hidden"
      style={{ minHeight: "760px" }}
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806]/94 via-[#0A0806]/58 to-[#0A0806]/94" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0806]/82 via-transparent to-[#0A0806]/82" />
        {/* Edge vignette */}
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 300px rgba(10,8,6,0.82)" }} />
        {/* Scan lines atmosphere */}
        <div className="absolute inset-0 scan-lines opacity-20" />
      </div>

      {/* Gold light beams */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="gold-beam beam-drift absolute top-0 right-[18%] w-[160px] h-full -skew-x-6" />
        <div className="gold-beam beam-drift2 absolute top-0 left-[26%] w-[110px] h-full -skew-x-4" />
      </div>

      {/* Cinematic fog particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="exp-fog-orb exp-fog-1" />
        <div className="exp-fog-orb exp-fog-2" />
        <div className="exp-fog-orb exp-fog-3" />
      </div>

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
        <div className="h-16 bg-gradient-to-b from-[#C9A84C]/5 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center px-5 py-28 md:py-36" style={{ minHeight: "760px" }}>
        <div className={`w-full max-w-3xl text-center transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}>

          {/* Section label */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="gold-line" />
            <span className="text-[#C9A84C] tracking-[0.4em] text-[10px] uppercase font-semibold">
              החוויה שלנו
            </span>
            <div className="gold-line" />
          </div>

          {/* Headline + animated glow orb */}
          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[560px] h-[220px] rounded-full bg-[#C9A84C]/11 blur-[75px] exp-glow-pulse" />
            </div>
            <h2 className="relative text-[2.5rem] md:text-[4.2rem] lg:text-[5.2rem] font-black leading-[1.12] text-depth tracking-tight">
              <span className="block text-[#F0EDE6] mb-2">לא סתם תספורת —</span>
              <span className="block text-gold-gradient">חוויה שמשנה נוכחות</span>
            </h2>
          </div>

          {/* Glassmorphism description panel */}
          <div
            className={`relative mx-auto max-w-xl mb-10 px-8 py-7 rounded-sm transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{
              background: "rgba(10, 8, 6, 0.62)",
              backdropFilter: "blur(22px)",
              WebkitBackdropFilter: "blur(22px)",
              border: "1px solid rgba(201, 168, 76, 0.16)",
              boxShadow: "0 10px 50px rgba(0,0,0,0.65), inset 0 1px 0 rgba(201,168,76,0.12), inset 0 -1px 0 rgba(0,0,0,0.3)",
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/55 to-transparent" />
            <p className="text-[#C8BFB0] text-lg md:text-xl leading-relaxed">
              מהרגע שאתה נכנס ועד שאתה יוצא, כל פרט נבנה כדי שתיראה חד,
              תרגיש בטוח ותצא עם נוכחות שפשוט לא עוברת לאף אחד בלתי מורגשת.
            </p>
          </div>

          {/* Micro-stats glass row */}
          <div
            className={`flex items-center justify-center mb-12 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div
              className="inline-flex flex-col sm:flex-row items-stretch rounded-sm overflow-hidden"
              style={{
                background: "rgba(10, 8, 6, 0.52)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(201, 168, 76, 0.14)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.45)",
              }}
            >
              {[
                "יחס אישי לכל לקוח",
                "ציוד ספרות פרמיום",
                "תוצאה שנשארת",
              ].map((label, i) => (
                <div key={label} className="flex items-center">
                  {i > 0 && (
                    <div className="hidden sm:block w-px self-stretch bg-[#C9A84C]/14" />
                  )}
                  <div className="flex items-center gap-2.5 px-6 py-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0 shadow-[0_0_8px_rgba(201,148,50,0.7)]" />
                    <span className="text-[#F0EDE6] text-sm font-medium tracking-wide whitespace-nowrap">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className={`transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <a
              href="https://calmark.io/p/NFouD"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block px-14 py-5 text-base font-black rounded-sm tracking-[0.15em]"
            >
              קבע תור עכשיו
            </a>
          </div>

        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <div className="h-16 bg-gradient-to-t from-[#C9A84C]/5 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
      </div>
    </section>
  );
}
