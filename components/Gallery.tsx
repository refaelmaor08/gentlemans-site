"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const galleryImages = [
  { src: "/images/vip-client.jpg", alt: "לקוח VIP — פייד מדויק של GENTLEMAN'S TLV", priority: true },
  { src: "/images/fade1.webp", alt: "עבודה של GENTLEMAN'S TLV", priority: false },
  { src: "/images/fade2.webp", alt: "עבודה של GENTLEMAN'S TLV", priority: false },
  { src: "/images/fade3.webp", alt: "עבודה של GENTLEMAN'S TLV", priority: false },
  { src: "/images/fade4.webp", alt: "עבודה של GENTLEMAN'S TLV", priority: false },
  { src: "/images/fade5.webp", alt: "עבודה של GENTLEMAN'S TLV", priority: false },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.04 }
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
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0A0806 0%, #0E0B08 55%, #0A0806 100%)" }} />
      <div className="absolute inset-0 wood-texture" />

      {/* Overhead spotlight */}
      <div className="absolute top-0 left-0 right-0 h-[600px] gold-spotlight pointer-events-none" />

      {/* Warm ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[#C9A84C]/4 blur-[160px] pointer-events-none" />

      {/* Gold beam */}
      <div className="gold-beam beam-drift absolute top-0 left-[28%] w-[200px] h-full -skew-x-8 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C9A84C] tracking-[0.4em] text-[10px] uppercase font-semibold">
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

        {/* ── DESKTOP: uniform 6-column editorial grid ── */}
        <div
          className={`hidden lg:grid grid-cols-6 gap-4 transition-all duration-700 delay-150 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="aspect-[3/4] relative overflow-hidden rounded-sm cursor-pointer group gallery-card-premium"
              style={{ transitionDelay: `${i * 65}ms` }}
              onClick={() => setLightbox(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={img.priority}
                loading={img.priority ? "eager" : "lazy"}
                className="object-cover gallery-img"
                quality={85}
                sizes="17vw"
              />
              {/* Dark gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/85 via-[#0A0806]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Expand icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none">
                <div className="bg-[#C9A84C] text-[#0A0806] p-3.5 rounded-sm shadow-[0_0_40px_rgba(201,168,76,0.65)] scale-75 group-hover:scale-100 transition-transform duration-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
              <GoldCorner />
            </div>
          ))}
        </div>

        {/* ── MOBILE/TABLET: swipeable snap scroll ── */}
        <div className="lg:hidden">
          <div
            className="flex gap-4 overflow-x-auto pb-5 snap-x snap-mandatory scrollbar-none"
            style={{ WebkitOverflowScrolling: "touch", scrollPaddingInline: "1rem" }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`flex-shrink-0 relative overflow-hidden rounded-sm cursor-pointer snap-start gallery-card-premium transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  width: "70vw",
                  aspectRatio: "3/4",
                  transitionDelay: `${i * 65}ms`,
                }}
                onClick={() => setLightbox(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={img.priority}
                  loading={img.priority ? "eager" : "lazy"}
                  className="object-cover"
                  quality={80}
                  sizes="70vw"
                />
                <GoldCorner />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: i === 0 ? "rgba(201,168,76,0.8)" : "rgba(201,168,76,0.25)" }}
              />
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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

function GoldCorner() {
  return (
    <>
      <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#C9A84C]/65 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#C9A84C]/65 pointer-events-none" />
    </>
  );
}
