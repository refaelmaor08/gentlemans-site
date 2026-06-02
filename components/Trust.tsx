"use client";

import { useEffect, useRef, useState } from "react";

const trustItems = [
  {
    icon: <MenOnlyIcon />,
    title: "100% סטייל אישי",
    desc: "מומחים בתספורות קצרות, קלאסיות ומודרניות — לכל מי שמחפש/ת מראה חד, נקי ומדויק. המספרה מקבלת באהבה את כל הקהילה, כולל הקהילה הלהט״בית.",
  },
  {
    icon: <PrecisionIcon />,
    title: "דיוק ברמה גבוהה",
    desc: "כל קו, כל מעבר, כל פרט — מבוצעים בדקדקנות. כי גבר שנראה טוב לא מתפשר.",
  },
  {
    icon: <StyleIcon />,
    title: "פיידים, זקן וסטייל אישי",
    desc: "מהטייפר הקלאסי ועד ההיי פייד החד. עיצוב זקן מקצועי וסטייל שמותאם לך.",
  },
  {
    icon: <LocationIcon />,
    title: "חוויה מדויקת בלב דיזנגוף",
    desc: "ב־GENTLEMAN'S TLV כל פרט נבנה כדי שתיכנס רגיל ותצא עם נוכחות. אווירה חמה, שירות אישי, צוות חד ותוצאה שמרגישים מהרגע הראשון.",
  },
];

export default function Trust() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-4 overflow-hidden"
    >
      {/* Deep atmospheric background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0A0806 0%, #130F0B 55%, #0A0806 100%)" }} />
      <div className="absolute inset-0 wood-texture" />

      {/* Strong spotlight from above */}
      <div className="absolute top-0 left-0 right-0 h-[350px] gold-spotlight pointer-events-none" />

      {/* Side amber glows */}
      <div className="absolute top-0 right-0 w-[45%] h-full gold-spotlight-side-r pointer-events-none" />
      <div className="absolute top-0 left-0  w-[45%] h-full gold-spotlight-side-l pointer-events-none" />

      {/* Gold beam from top */}
      <div className="gold-beam beam-drift absolute top-0 right-[30%] w-[200px] h-full pointer-events-none -skew-x-6" />

      {/* Large plant decorations */}
      <svg className="plant-accent absolute -top-10 -right-10 w-72 h-72 text-[#3D6B45]" viewBox="0 0 220 220" fill="currentColor">
        <path d="M200,210 Q150,130 80,50 Q130,110 100,165 Q150,135 200,210Z" opacity="0.9"/>
        <path d="M215,190 Q170,110 100,40 Q145,100 120,155 Q165,125 215,190Z" opacity="0.55"/>
        <path d="M185,220 Q145,155 90,85 Q125,140 105,190 Q145,162 185,220Z" opacity="0.35"/>
      </svg>
      <svg className="plant-accent absolute -bottom-10 -left-10 w-64 h-64 text-[#4A7C59]" viewBox="0 0 200 200" fill="currentColor">
        <path d="M10,190 Q60,110 130,50 Q85,100 105,155 Q60,125 10,190Z" opacity="0.9"/>
        <path d="M5,170 Q45,90 115,30 Q75,80 90,135 Q50,108 5,170Z" opacity="0.5"/>
      </svg>

      <div className="relative max-w-7xl mx-auto">
        {/* Section label */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C9A84C] tracking-[0.35em] text-[11px] uppercase font-medium">
              למה לבחור בנו
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#F0EDE6] leading-tight">
            הסטנדרט שלנו,{" "}
            <span className="text-gold-gradient">הסטייל שלך</span>
          </h2>
        </div>

        {/* Glass cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className={`glass-panel card-3d p-8 rounded-sm relative overflow-hidden transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
              }`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              {/* Inner corner gold glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/6 rounded-full blur-[40px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#C9A84C]/3 rounded-full blur-[30px] pointer-events-none" />

              <div className="relative">
                <div className="text-[#C9A84C] mb-6 inline-flex p-4 border border-[#C9A84C]/25 rounded-sm bg-[#C9A84C]/8 shadow-[0_0_20px_rgba(201,148,50,0.1)]">
                  {item.icon}
                </div>
                <h3 className="text-[#F0EDE6] font-bold text-[17px] mb-3 leading-snug">{item.title}</h3>
                <p className="text-[#9A8E7A] text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-7 w-10 h-px bg-gradient-to-r from-[#C9A84C]/60 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fog */}
      <div className="absolute bottom-0 left-0 right-0 h-24 fog-bottom pointer-events-none" />
    </section>
  );
}

function MenOnlyIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
    </svg>
  );
}
function PrecisionIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  );
}
function StyleIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.25 48.25 0 01-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}
