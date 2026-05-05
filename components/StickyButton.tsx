"use client";

import { useEffect, useState } from "react";

export default function StickyButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Gradient fade */}
      <div className="h-10 bg-gradient-to-t from-[#0A0806] to-transparent" />
      <div style={{ background: "#0A0806" }} className="px-4 pb-6 pt-2 border-t border-[#C9A84C]/15">
        <a
          href="https://calmark.io/p/NFouD"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold block w-full py-4 text-center text-base font-black rounded-sm tracking-[0.12em] animate-pulse-gold"
        >
          קבע תור עכשיו
        </a>
      </div>
    </div>
  );
}
