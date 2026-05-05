"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 px-4 overflow-hidden"
    >
      <div className="absolute inset-0" style={{ background: "var(--black)" }} />
      <div className="absolute inset-0 wood-texture" />
      {/* Bottom warm glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-60 bg-[#C9A84C]/6 blur-[90px] pointer-events-none" />
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent" />

      {/* Decorative plant bottom-right */}
      <svg
        className="plant-accent absolute bottom-0 left-0 w-40 h-40 text-[#4A7C59]"
        viewBox="0 0 160 160"
        fill="currentColor"
      >
        <path d="M10,150 Q50,90 110,30 Q75,80 85,130 Q50,105 10,150Z" opacity="0.9"/>
        <path d="M5,140 Q35,70 95,20 Q65,70 75,115 Q45,90 5,140Z" opacity="0.5"/>
      </svg>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C9A84C] tracking-[0.35em] text-[11px] uppercase font-medium">
              בואו לבקר
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#F0EDE6]">
            מחכים לך{" "}
            <span className="text-gold-gradient">בדיזנגוף</span>
          </h2>
          <p className="text-[#9A8E7A] mt-4 text-base max-w-lg mx-auto">
            קל להגיע, קל לקבוע. קבע תור עכשיו ותגיע לחוויה שתשנה את הדרך שאתה רואה את עצמך.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info side */}
          <div className={`space-y-4 transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>

            <ContactCard
              icon={<MapIcon />}
              title="כתובת"
              main="דיזנגוף 237, תל אביב"
              link={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("דיזנגוף 237 תל אביב")}`}
              linkLabel="פתח במפות"
            />

            <ContactCard
              icon={<PhoneIcon />}
              title="טלפון"
              main="054-565-5977"
              link="tel:0545655977"
              linkLabel="התקשר עכשיו"
            />

            <ContactCard
              icon={<WhatsAppIcon />}
              title="וואטסאפ"
              main="זמין לשאלות ותיאומים"
              link="https://wa.me/972545655977"
              linkLabel="שלח הודעה"
              green
            />

            {/* Hours */}
            <div className="card-luxury p-6 rounded-sm">
              <div className="flex gap-4 items-start">
                <div className="text-[#C9A84C] p-2.5 border border-[#C9A84C]/20 bg-[#C9A84C]/5 rounded-sm flex-shrink-0">
                  <ClockIcon />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#F0EDE6] font-bold mb-4 text-base">שעות פעילות</h3>
                  <div className="space-y-2.5 text-sm">
                    {[
                      { days: "ראשון – שני", hours: "10:00 – 19:00" },
                      { days: "שלישי", hours: "סגור" },
                      { days: "רביעי", hours: "10:00 – 19:30" },
                      { days: "חמישי", hours: "10:00 – 20:00" },
                      { days: "שישי", hours: "09:00 – 13:00" },
                    ].map((row) => (
                      <div key={row.days} className="flex justify-between border-b border-[#231D17] pb-2 last:border-0 last:pb-0">
                        <span className="text-[#9A8E7A]">{row.days}</span>
                        <span className={`font-semibold ${row.hours === "סגור" ? "text-[#9A8E7A] line-through decoration-[#9A8E7A]/40" : "text-[#C9A84C]"}`}>{row.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://calmark.io/p/NFouD"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold block w-full py-5 text-center text-lg font-black rounded-sm tracking-[0.12em] mt-2"
            >
              קבע תור עכשיו
            </a>
          </div>

          {/* Map */}
          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative overflow-hidden rounded-sm border border-[#231D17] hover:border-[#C9A84C]/25 transition-colors duration-400 h-[460px] md:h-[520px]">
              <iframe
                src="https://maps.google.com/maps?q=דיזנגוף+237+תל+אביב&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                style={{ filter: "grayscale(100%) contrast(1.15) brightness(0.75)" }}
                loading="lazy"
                title="מיקום GENTLEMAN'S TLV"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Map overlay badge */}
              <div className="absolute bottom-4 right-4 bg-[#0A0806]/92 backdrop-blur-md border border-[#C9A84C]/30 px-5 py-4 rounded-sm shadow-2xl">
                <div
                  className="text-[#C9A84C] font-bold text-sm tracking-wide"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  GENTLEMAN&apos;S TLV
                </div>
                <div className="text-[#9A8E7A] text-xs mt-1">דיזנגוף 237, תל אביב</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  main,
  link,
  linkLabel,
  green = false,
}: {
  icon: React.ReactNode;
  title: string;
  main: string;
  link: string;
  linkLabel: string;
  green?: boolean;
}) {
  return (
    <div className="card-luxury flex items-center gap-4 p-5 rounded-sm">
      <div className="text-[#C9A84C] p-2.5 border border-[#C9A84C]/20 bg-[#C9A84C]/5 rounded-sm flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[#9A8E7A] text-xs mb-0.5">{title}</div>
        <div className="text-[#F0EDE6] font-semibold text-[15px] truncate">{main}</div>
      </div>
      <a
        href={link}
        target={link.startsWith("http") ? "_blank" : undefined}
        rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`flex-shrink-0 text-xs font-bold px-4 py-2 rounded-sm border transition-all duration-300 ${
          green
            ? "border-green-500/35 text-green-400 hover:bg-green-500/10 hover:border-green-400"
            : "border-[#C9A84C]/35 text-[#C9A84C] hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]"
        }`}
      >
        {linkLabel}
      </a>
    </div>
  );
}

function MapIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
