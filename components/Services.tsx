"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: <CutIcon />,
    title: "תספורת גברים",
    desc: "תספורת קלאסית מקצועית, מותאמת לצורת הפנים ולסגנון האישי שלך. כל חתך הוא עבודת אמנות שנשארת חדה שבוע שלם.",
    tag: null,
  },
  {
    icon: <FadeIcon />,
    title: "פיידים מדויקים",
    desc: "היי פייד, מיד פייד, טייפר — כל מעבר מבוצע עם דיוק מוחלט. הניגוד הנכון, הקו הנכון, הסגנון שלך.",
    tag: "הכי מבוקש",
  },
  {
    icon: <BeardIcon />,
    title: "עיצוב זקן",
    desc: "עיצוב זקן מקצועי עם תשבורת, שמן ספרות ועבודת קו. הזקן שלך ישלים לוק שמשדר אופי אמיתי.",
    tag: null,
  },
  {
    icon: <StyleConsultIcon />,
    title: "התאמת סטייל אישי",
    desc: "ייעוץ מעמיק לפני כל תספורת — ניתוח פנים, המלצת סגנון, ובניית הלוק שמותאם בדיוק לך. כלול בכל ביקור.",
    tag: "כלול בכל ביקור",
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="relative py-28 px-4 overflow-hidden"
    >
      {/* Atmospheric bg */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #110D0A 0%, #0A0806 100%)" }} />
      <div className="absolute inset-0 wood-texture" />
      {/* Left warm glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/5 blur-[110px] pointer-events-none" />
      {/* Plant accent right */}
      <svg
        className="plant-accent absolute bottom-0 right-0 w-56 h-56 text-[#3D5A3E]"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M180,190 Q140,120 80,60 Q120,110 100,160 Q140,130 180,190Z" opacity="0.9"/>
        <path d="M190,170 Q160,100 100,40 Q130,90 115,140 Q150,115 190,170Z" opacity="0.5"/>
      </svg>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C9A84C] tracking-[0.35em] text-[11px] uppercase font-medium">
              מה אנחנו עושים
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#F0EDE6] leading-tight">
            כל שירות —{" "}
            <span className="text-gold-gradient">חוויה בפני עצמה</span>
          </h2>
          <p className="text-[#9A8E7A] mt-5 text-base max-w-xl mx-auto">
            לא רשימת שירותים. לא מחירון. אנחנו מבינים מה אתה צריך ומביאים את זה למציאות.
          </p>
        </div>

        {/* 2×2 premium cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} visible={visible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
    </section>
  );
}

function ServiceCard({
  service,
  index,
  visible,
}: {
  service: (typeof services)[0];
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative p-8 md:p-10 rounded-sm border overflow-hidden cursor-default
        transition-all duration-500
        ${hovered ? "border-[#C9A84C]/40 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(201,148,50,0.07)]" : "border-[#231D17] bg-[#161210]"}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${index * 120}ms`, background: hovered ? "#181410" : undefined }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Warm corner glow on hover */}
      <div
        className={`absolute top-0 right-0 w-40 h-40 rounded-full bg-[#C9A84C]/8 blur-[50px] transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
      />

      <div className="relative">
        {/* Icon + tag row */}
        <div className="flex items-start justify-between mb-6">
          <div className={`text-[#C9A84C] p-3.5 border rounded-sm transition-all duration-400 ${hovered ? "border-[#C9A84C]/40 bg-[#C9A84C]/10" : "border-[#C9A84C]/20 bg-[#C9A84C]/5"}`}>
            {service.icon}
          </div>
          {service.tag && (
            <span className="text-[11px] px-3 py-1.5 bg-[#C9A84C]/12 text-[#C9A84C] border border-[#C9A84C]/25 rounded-sm font-bold tracking-wide">
              {service.tag}
            </span>
          )}
        </div>

        <h3 className="text-[#F0EDE6] text-2xl font-black mb-4">{service.title}</h3>
        <p className="text-[#9A8E7A] text-[15px] leading-relaxed">{service.desc}</p>

        {/* Bottom accent line */}
        <div className={`mt-8 h-px transition-all duration-500 ${hovered ? "bg-gradient-to-r from-[#C9A84C]/60 via-[#C9A84C]/30 to-transparent w-full" : "bg-[#231D17] w-16"}`} />
      </div>
    </div>
  );
}

function CutIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
    </svg>
  );
}

function FadeIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function BeardIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function StyleConsultIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}
