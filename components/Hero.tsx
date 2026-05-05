"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Background: real shop image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="GENTLEMAN'S TLV — מספרת גברים יוקרתית"
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Rich layered overlay: dark base + warm light from above */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806]/75 via-[#0A0806]/40 to-[#0A0806]/92" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0806]/55 via-transparent to-[#0A0806]/55" />
        {/* Warm amber light from top center — like barbershop overhead lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#D4922A]/12 blur-[120px] pointer-events-none" />
      </div>

      {/* ── Decorative gold corner frames ── */}
      <div className="absolute top-24 right-6 md:right-16 w-20 h-20 border-t-2 border-r-2 border-[#C9A84C]/50 z-10" />
      <div className="absolute top-24 left-6 md:left-16 w-20 h-20 border-t-2 border-l-2 border-[#C9A84C]/50 z-10" />
      <div className="absolute bottom-20 right-6 md:right-16 w-20 h-20 border-b-2 border-r-2 border-[#C9A84C]/50 z-10" />
      <div className="absolute bottom-20 left-6 md:left-16 w-20 h-20 border-b-2 border-l-2 border-[#C9A84C]/50 z-10" />

      {/* ── Vertical gold lines ── */}
      <div className="absolute top-0 right-32 w-px h-40 bg-gradient-to-b from-[#C9A84C]/30 to-transparent hidden md:block" />
      <div className="absolute top-0 left-32 w-px h-40 bg-gradient-to-b from-[#C9A84C]/30 to-transparent hidden md:block" />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto w-full">

        {/* Top tagline */}
        <div className={`inline-flex items-center gap-3 mb-8 md:mb-10 transition-all duration-900 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="h-px w-10 bg-[#C9A84C]/70" />
          <span
            className="text-[#C9A84C] tracking-[0.45em] text-[11px] uppercase font-medium"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Tel Aviv · Since 2024
          </span>
          <span className="h-px w-10 bg-[#C9A84C]/70" />
        </div>

        {/* Main headline */}
        <h1 className={`mb-7 transition-all duration-900 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="block text-[#F0EDE6] text-5xl md:text-7xl lg:text-[88px] font-black leading-[1.0] tracking-tight">
            התספורת שלך
          </span>
          <span
            className="block text-gold-gradient text-5xl md:text-7xl lg:text-[88px] font-black leading-[1.05] tracking-tight mt-1"
          >
            היא הנוכחות שלך
          </span>
        </h1>

        {/* Sub */}
        <p className={`text-[#9A8E7A] text-base md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed transition-all duration-900 delay-[400ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-[#C9A84C]/80 font-medium">GENTLEMAN&apos;S TLV</span>
          {" "}— מספרת גברים יוקרתית בדיזנגוף, תל אביב
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-900 delay-[550ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a
            href="https://calmark.io/p/NFouD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-10 py-4 text-base font-black rounded-sm tracking-[0.12em] animate-pulse-gold w-full sm:w-auto text-center"
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

        {/* Stats row */}
        <div className={`flex items-center justify-center gap-6 md:gap-14 transition-all duration-900 delay-[700ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <StatItem number="2,000+" label="לקוחות מרוצים" />
          <div className="w-px h-10 bg-[#C9A84C]/20 flex-shrink-0" />
          <StatItem number="100%" label="גברים בלבד" />
          <div className="w-px h-10 bg-[#C9A84C]/20 flex-shrink-0" />
          <StatItem number="#1" label="בדיזנגוף" />
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float">
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#C9A84C]/60 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/50" />
      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div
        className="text-2xl md:text-3xl font-black text-gold-gradient leading-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {number}
      </div>
      <div className="text-[#9A8E7A] text-[11px] mt-1.5 tracking-wider uppercase">{label}</div>
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
