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
      { threshold: 0.08 }
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
      <div className="absolute inset-0" style={{ background: "var(--black)" }} />
      <div className="absolute inset-0 wood-texture" />
      {/* Warm center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#C9A84C]/4 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C9A84C] tracking-[0.35em] text-[11px] uppercase font-medium">
              גלריית עבודות
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#F0EDE6]">
            עבודות של{" "}
            <span className="text-gold-gradient">GENTLEMAN&apos;S</span>
          </h2>
          <p className="text-[#9A8E7A] mt-4 text-sm max-w-md mx-auto">
            כל תמונה כאן היא עבודה אמיתית מהמספרה שלנו.
          </p>
        </div>

        {/* Gallery grid — premium layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Large featured — spans 2 rows on left (RTL: first in DOM) */}
          <div
            className={`relative overflow-hidden rounded-sm cursor-pointer group row-span-2 col-span-1
              transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{ minHeight: "460px" }}
            onClick={() => setLightbox(galleryImages[0].src)}
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
              quality={80}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <GalleryOverlay />
            <GoldCorner />
          </div>

          {/* Middle two stacked */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm cursor-pointer group col-span-1
                transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ height: "222px", transitionDelay: `${i * 100}ms` }}
              onClick={() => setLightbox(galleryImages[i].src)}
            >
              <Image
                src={galleryImages[i].src}
                alt={galleryImages[i].alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                quality={80}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <GalleryOverlay />
              <GoldCorner />
            </div>
          ))}

          {/* Bottom row: two more filling remaining 2 cols */}
          {[3, 4].map((i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm cursor-pointer group col-span-1
                transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ height: "230px", transitionDelay: `${i * 80}ms` }}
              onClick={() => setLightbox(galleryImages[i].src)}
            >
              <Image
                src={galleryImages[i].src}
                alt={galleryImages[i].alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                quality={80}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <GalleryOverlay />
              <GoldCorner />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-14 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[#9A8E7A] text-sm mb-5">הגיע הזמן שגם התספורת שלך תיראה ככה</p>
          <a
            href="https://calmark.io/p/NFouD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block px-12 py-4 text-base font-black rounded-sm tracking-[0.12em]"
          >
            קבע תור עכשיו
          </a>
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-[#C9A84C] text-[#0A0806] p-3 rounded-sm shadow-xl">
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
      <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-[#C9A84C]/55 pointer-events-none" />
      <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-[#C9A84C]/55 pointer-events-none" />
    </>
  );
}
