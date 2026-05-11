"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* Parallax — direct DOM to avoid React re-renders */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${y * 0.32}px) scale(1.18)`;
      }
      if (beamRef.current) {
        beamRef.current.style.transform = `translateY(${y * 0.12}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Background with parallax ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgRef} className="absolute inset-0 parallax-bg" style={{ willChange: "transform" }}>
          <Image
            src="/images/hero.webp"
            alt="GENTLEMAN'S TLV — מספרת גברים יוקרתית"
            fill
            className="object-cover object-center"
            priority
            quality={88}
            sizes="100vw"
          />
        </div>

        {/* Cinematic layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806]/82 via-[#0A0806]/38 to-[#0A0806]/94" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0806]/65 via-transparent to-[#0A0806]/65" />
        {/* Warm overhead Edison-bulb bloom */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] rounded-full bg-[#D4922A]/16 blur-[120px] pointer-events-none" />
        {/* Deep vignette edges */}
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 220px rgba(10,8,6,0.75)" }} />
        {/* Subtle scan lines for depth */}
        <div className="absolute inset-0 scan-lines opacity-40" />
      </div>

      {/* ── Gold light beams ── */}
      <div ref={beamRef} className="absolute inset-0 z-[1] pointer-events-none overflow-hidden" style={{ willChange: "transform" }}>
        <div className="gold-beam beam-drift  absolute top-0 right-[18%] w-[180px] h-full -skew-x-6" />
        <div className="gold-beam beam-drift2 absolute top-0 right-[42%] w-[90px]  h-full -skew-x-3" />
        <div className="gold-beam-wide       absolute top-0 left-[22%]  w-[320px] h-full -skew-x-8 opacity-70" />
        {/* Vertical thin rays */}
        <div className="absolute top-0 right-[28%] w-px h-[70%] bg-gradient-to-b from-[#C9A84C]/28 via-[#C9A84C]/10 to-transparent" />
        <div className="absolute top-0 left-[33%]  w-px h-[55%] bg-gradient-to-b from-[#C9A84C]/20 to-transparent" />
      </div>

      {/* ── Decorative gold corner frames ── */}
      <div className="absolute top-24 right-6 md:right-14 w-24 h-24 z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-[#C9A84C]/55" />
        <div className="absolute top-2 right-2 w-3/4 h-3/4 border-t border-r border-[#C9A84C]/20" />
      </div>
      <div className="absolute top-24 left-6 md:left-14 w-24 h-24 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-[#C9A84C]/55" />
        <div className="absolute top-2 left-2 w-3/4 h-3/4 border-t border-l border-[#C9A84C]/20" />
      </div>
      <div className="absolute bottom-20 right-6 md:right-14 w-24 h-24 z-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-[#C9A84C]/55" />
        <div className="absolute bottom-2 right-2 w-3/4 h-3/4 border-b border-r border-[#C9A84C]/20" />
      </div>
      <div className="absolute bottom-20 left-6 md:left-14 w-24 h-24 z-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-[#C9A84C]/55" />
        <div className="absolute bottom-2 left-2 w-3/4 h-3/4 border-b border-l border-[#C9A84C]/20" />
      </div>

      {/* ── Floating mirror / barbershop ornament ── */}
      <svg
        className="float-ornament absolute right-8 md:right-24 top-1/2 -translate-y-1/2 w-16 h-20 z-[2] hidden lg:block"
        viewBox="0 0 64 80" fill="none" stroke="rgba(201,168,76,0.28)" strokeWidth="1"
      >
        {/* Mirror frame outline */}
        <rect x="4" y="4" width="56" height="68" rx="3" />
        <rect x="10" y="10" width="44" height="52" rx="2" strokeOpacity="0.5" />
        <line x1="4" y1="68" x2="10" y2="75" />
        <line x1="60" y1="68" x2="54" y2="75" />
        <line x1="10" y1="75" x2="54" y2="75" />
        {/* Crown top */}
        <path d="M20 4 Q32 -4 44 4" strokeOpacity="0.4" />
        <circle cx="32" cy="2" r="2" fill="rgba(201,168,76,0.25)" stroke="none" />
      </svg>

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto w-full">

        {/* Top tagline */}
        <div className={`inline-flex items-center gap-3 mb-8 md:mb-10 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A84C]/80" />
          <span
            className="text-[#C9A84C] tracking-[0.5em] text-[10px] uppercase font-medium"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Tel Aviv · Since 2024
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A84C]/80" />
        </div>

        {/* Main headline */}
        <h1 className={`mb-7 transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="block text-[#F0EDE6] text-5xl md:text-7xl lg:text-[90px] font-black leading-[1.0] tracking-tight text-depth">
            התספורת שלך
          </span>
          <span className="block text-gold-gradient text-5xl md:text-7xl lg:text-[90px] font-black leading-[1.05] tracking-tight mt-1">
            היא הנוכחות שלך
          </span>
        </h1>

        {/* Sub */}
        <p className={`text-[#C8BFB0] text-base md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-[380ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} text-depth`}>
          <span className="text-[#C9A84C]/90 font-semibold">GENTLEMAN&apos;S TLV</span>
          {" "}— מספרת גברים יוקרתית בדיזנגוף, תל אביב
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-[520ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a
            href="https://calmark.io/p/NFouD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-12 py-4 text-base font-black rounded-sm tracking-[0.12em] animate-pulse-gold w-full sm:w-auto text-center"
          >
            קבע תור עכשיו
          </a>
          <a
            href="https://wa.me/972545655977"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold rounded-sm w-full sm:w-auto"
          >
            <WhatsAppIcon />
            דבר איתנו בוואטסאפ
          </a>
        </div>

        {/* Stats row — glass backed */}
        <div className={`transition-all duration-1000 delay-[680ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-0 glass-panel rounded-sm px-2 py-1">
            <StatItem number="2,000+" label="לקוחות מרוצים" />
            <div className="w-px h-12 bg-[#C9A84C]/18 flex-shrink-0 mx-2" />
            <StatItem number="100%" label="גברים בלבד" />
            <div className="w-px h-12 bg-[#C9A84C]/18 flex-shrink-0 mx-2" />
            <StatItem number="#1" label="בדיזנגוף" />
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C9A84C]/70 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60" />
      </div>

      {/* Bottom fog fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 fog-bottom z-10 pointer-events-none" />
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center px-6 py-3">
      <div
        className="text-2xl md:text-3xl font-black text-gold-gradient leading-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {number}
      </div>
      <div className="text-[#9A8E7A] text-[10px] mt-1.5 tracking-wider uppercase">{label}</div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
