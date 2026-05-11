"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "אודות", href: "#about" },
    { label: "שירותים", href: "#services" },
    { label: "גלריה", href: "#gallery" },
    { label: "המלצות", href: "#reviews" },
    { label: "יצירת קשר", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0806]/96 backdrop-blur-lg border-b border-[#C9A84C]/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-4 group flex-shrink-0">
          {/* Logo image — fixed aspect, no distortion */}
          <div className="relative flex-shrink-0" style={{ width: 48, height: 48 }}>
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C9A84C]/30 group-hover:border-[#C9A84C]/70 transition-all duration-400 shadow-[0_0_15px_rgba(201,168,76,0.15)]">
              <Image
                src="/images/logo.webp"
                alt="GENTLEMAN'S TLV"
                width={48}
                height={48}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Brand name — two lines, clean */}
          <div className="hidden sm:block leading-tight">
            <div
              className="text-[#C9A84C] text-sm font-light tracking-[0.28em] uppercase"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Gentleman&apos;s TLV
            </div>
            <div className="text-[#9A8E7A] text-[9px] tracking-[0.35em] uppercase mt-0.5">
              Barbershop · Tel Aviv
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[#9A8E7A] hover:text-[#C9A84C] text-[13px] font-medium tracking-wide transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 right-0 w-0 h-px bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://www.instagram.com/gentlemanstlv?igsh=MWhvYzZ3OTlydDl2eQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="אינסטגרם"
            className="text-[#9A8E7A] hover:text-[#C9A84C] transition-colors duration-300"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://calmark.io/p/NFouD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-6 py-2.5 text-[13px] font-black rounded-sm tracking-widest"
          >
            קבע תור
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-[5px] p-2"
          aria-label="תפריט"
        >
          <span className={`block w-[22px] h-[1.5px] bg-[#C9A84C] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#C9A84C] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#C9A84C] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#0A0806]/98 backdrop-blur-xl border-t border-[#C9A84C]/10 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#F0EDE6] hover:text-[#C9A84C] text-xl font-medium transition-colors duration-300 tracking-wide border-b border-[#231D17] pb-5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/gentlemanstlv?igsh=MWhvYzZ3OTlydDl2eQ=="
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-[#9A8E7A] hover:text-[#C9A84C] transition-colors duration-300 border-b border-[#231D17] pb-5"
          >
            <InstagramIcon />
            <span className="text-xl font-medium">אינסטגרם</span>
          </a>
          <a
            href="https://calmark.io/p/NFouD"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-gold px-6 py-4 text-base font-black rounded-sm text-center mt-1 tracking-widest"
          >
            קבע תור עכשיו
          </a>
        </div>
      </div>
    </nav>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
