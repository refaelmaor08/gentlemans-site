"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const galleryImages = [
  { src: "/images/fade1.webp", alt: "עבודה של GENTLEMAN'S TLV" },
  { src: "/images/fade2.webp", alt: "עבודה של GENTLEMAN'S TLV" },
  { src: "/images/fade3.webp", alt: "עבודה של GENTLEMAN'S TLV" },
  { src: "/images/fade4.webp", alt: "עבודה של GENTLEMAN'S TLV" },
  { src: "/images/fade5.webp", alt: "עבודה של GENTLEMAN'S TLV" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-28 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0A0806 0%, #0E0B08 50%, #0A0806 100%)" }} />
      <div className="absolute inset-0 wood-texture" />

      {/* Strong overhead spotlight */}
      <div className="absolute top-0 left-0 right-0 h-[500px] gold-spotlight pointer-events-none" />

      {/* Warm center ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#C9A84C]/5 blur-[140px] pointer-events-none" />

      {/* Gold beam */}
      <div className="gold-beam beam-drift absolute top-0 left-[25%] w-[250px] h-full -skew-x-8 pointer-events-none" />

      {/* Plant decorations */}
      <svg className="plant-accent absolute -bottom-6 -right-6 w-72 h-72 text-[#3D5A3E]" viewBox="0 0 220 220" fill="currentColor">
        <path d="M210,210 Q160,140 90,70 Q140,120 110,170 Q155,145 210,210Z" opacity="0.9"/>
        <path d="M220,185 Q175,115 105,50 Q150,100 125,155 Q165,128 220,185Z" opacity="0.5"/>
      </svg>
      <svg className="plant-accent absolute -top-6 -left-6 w-56 h-56 text-[#4A7C59]" viewBox="0 0 180 180" fill="currentColor">
        <path d="M10,170 Q55,95 120,30 Q80,85 95,135 Q55,110 10,170Z" opacity="0.8"/>
        <path d="M5,145 Q40,75 100,20 Q65,70 78,118 Q45,96 5,145Z" opacity="0.4"/>
      </svg>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C9A84C] tracking-[0.35em] text-[11px] uppercase font-medium">
              העבודות שלנו
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#F0EDE6]">
            <span className="text-gold-gradient">העבודות שלנו</span>
          </h2>
          <p className="text-[#9A8E7A] mt-4 text-sm max-w-md mx-auto">
            תוצאות אמיתיות מהכיסאות של GENTLEMAN&apos;S TLV
          </p>
        </div>

        {/* Premium gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Large featured — 2 rows */}
          <div
            className={`relative overflow-hidden rounded-sm cursor-pointer group row-span-2 col-span-1
              gallery-frame tilt-hover gold-shimmer-border
              transition-all duration-800 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.93]"}`}
            style={{ minHeight: "480px" }}
            onClick={() => setLightbox(galleryImages[0].src)}
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              quality={85}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <GalleryOverlay />
            <GoldCorner />
            {/* Deep bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0806]/70 to-transparent pointer-events-none" />
          </div>

          {/* Middle two stacked */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm cursor-pointer group col-span-1
                gallery-frame
                transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.94]"}`}
              style={{ height: "230px", transitionDelay: `${i * 100}ms` }}
              onClick={() => setLightbox(galleryImages[i].src)}
            >
              <Image
                src={galleryImages[i].src}
                alt={galleryImages[i].alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.1]"
                quality={85}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <GalleryOverlay />
              <GoldCorner />
            </div>
          ))}

          {/* Bottom row */}
          {[3, 4].map((i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm cursor-pointer group col-span-1
                gallery-frame
                transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.94]"}`}
              style={{ height: "238px", transitionDelay: `${i * 80}ms` }}
              onClick={() => setLightbox(galleryImages[i].src)}
            >
              <Image
                src={galleryImages[i].src}
                alt={galleryImages[i].alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.1]"
                quality={85}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <GalleryOverlay />
              <GoldCorner />
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#9A8E7A] text-sm mb-6">הגיע הזמן שגם התספורת שלך תיראה ככה</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calmark.io/p/NFouD"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block px-12 py-4 text-base font-black rounded-sm tracking-[0.12em]"
            >
              קבע תור עכשיו
            </a>
            <a
              href="https://www.instagram.com/gentlemanstlv?igsh=MWhvYzZ3OTlydDl2eQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-[#C9A84C]/35 text-[#C9A84C] text-sm font-bold rounded-sm tracking-wide hover:bg-[#C9A84C]/8 hover:border-[#C9A84C]/70 transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
              הצצה לעבודות שלנו באינסטגרם
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-[#0A0806]/97 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-2xl"
            style={{ aspectRatio: "3/4", maxHeight: "88vh" }}
          >
            <Image
              src={lightbox}
              alt="Gallery"
              fill
              className="object-contain"
              quality={95}
            />
          </div>
          <button
            className="absolute top-5 left-5 text-[#C9A84C] border border-[#C9A84C]/40 p-3 rounded-sm hover:bg-[#C9A84C]/10 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}

function GalleryOverlay() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 scale-90 group-hover:scale-100">
        <div className="bg-[#C9A84C] text-[#0A0806] p-3.5 rounded-sm shadow-[0_0_30px_rgba(201,168,76,0.5)]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
          </svg>
        </div>
      </div>
    </>
  );
}

function GoldCorner() {
  return (
    <>
      <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#C9A84C]/60 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#C9A84C]/60 pointer-events-none" />
    </>
  );
}
