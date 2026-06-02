"use client";

import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "יובל אהרוני",
    role: "מנהל שיווק, 34",
    text: "הגעתי בפעם הראשונה לפני חצי שנה ומאז אני לא הולך לשום מקום אחר. הפייד שהם עושים הוא פשוט ברמה אחרת — חד, נקי, ומדויק עד הקצה. האווירה במקום מדהימה.",
    stars: 5,
    initial: "י",
  },
  {
    name: "עומר כהן",
    role: "יזם, 28",
    text: "אחרי שניסיתי הרבה מספרות בתל אביב, סוף סוף מצאתי את המקום שלי. הם לא רק חותכים — הם מבינים מה אתה רוצה ומביאים את זה למציאות. שווה כל שקל.",
    stars: 5,
    initial: "ע",
  },
  {
    name: "רועי לוי",
    role: "עורך דין, 31",
    text: "מספרה ברמה הכי גבוהה שראיתי. המספרים מקצועיים, הציוד מהמתקדמים ביותר, והשירות אישי לגמרי. היי פייד שעשיתי כאן שינה את הדרך שאנשים מסתכלים עלי.",
    stars: 5,
    initial: "ר",
  },
  {
    name: "נדב שפירא",
    role: "ספורטאי, 26",
    text: "כנס ותראה בעצמך. האנשים פה באמת אוהבים מה שהם עושים — זה מרגישים. זקן שעיצבו לי יצא מושלם, ממש מותאם לצורת הפנים שלי. אין לאן לחזור.",
    stars: 5,
    initial: "נ",
  },
  {
    name: "תום ברנשטיין",
    role: "מאפיין, 30",
    text: "אווירה יוקרתית, מספרים שיודעים מה הם עושים, ותספורת שנשארת טובה שבועיים. Gentleman's TLV הוא מעל ומעבר לכל מספרה שהלכתי אליה.",
    stars: 5,
    initial: "ת",
  },
  {
    name: "אלון מזרחי",
    role: "מהנדס, 33",
    text: "הם לא ממהרים — יושבים איתך, מבינים מה אתה מחפש, ומביאים תוצאה שמדויקת לך. הטייפר שעשיתי פה הוא הטוב ביותר שיצא לי לקבל בחיים.",
    stars: 5,
    initial: "א",
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.07 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative py-28 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0A0806 0%, #130F0B 50%, #0A0806 100%)" }} />
      <div className="absolute inset-0 wood-texture" />

      {/* Center warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full bg-[#C9A84C]/5 blur-[160px] pointer-events-none" />

      {/* Spotlight from top */}
      <div className="absolute top-0 left-0 right-0 h-[300px] gold-spotlight pointer-events-none" />

      {/* Gold beam */}
      <div className="gold-beam beam-drift absolute top-0 left-[40%] w-[180px] h-full pointer-events-none -skew-x-4" />

      {/* Plant decoration */}
      <svg className="plant-accent absolute -top-8 -left-8 w-64 h-64 text-[#4A7C59]" viewBox="0 0 200 200" fill="currentColor">
        <path d="M20,185 Q65,110 130,45 Q85,100 105,155 Q60,125 20,185Z" opacity="0.9"/>
        <path d="M8,162 Q45,85 110,25 Q70,78 88,130 Q50,105 8,162Z" opacity="0.5"/>
      </svg>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C9A84C] tracking-[0.35em] text-[11px] uppercase font-medium">
              מה אומרים עלינו
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#F0EDE6]">
            הלקוחות שלנו{" "}
            <span className="text-gold-gradient">מספרים</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <div className="flex items-center gap-3 text-sm text-[#9A8E7A]">
              <span className="font-black text-[#C9A84C] text-lg">5.0</span>
              <span className="text-[#231D17]">|</span>
              <span>700+ ביקורות והמלצות</span>
              <span className="text-[#231D17]">|</span>
              <span className="text-[#C9A84C] font-semibold">8,500+ לקוחות מרוצים</span>
            </div>
          </div>
        </div>

        {/* Glass review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`glass-panel p-7 rounded-sm relative overflow-hidden
                transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Inner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A84C]/5 rounded-full blur-[25px] pointer-events-none" />

              <div className="relative">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(review.stars)].map((_, j) => <StarIcon key={j} />)}
                </div>

                {/* Large quote mark */}
                <div className="absolute top-0 left-0 text-7xl leading-none text-[#C9A84C]/10 font-serif select-none" aria-hidden>
                  &ldquo;
                </div>

                <p className="text-[#C8BFB0] text-sm leading-[1.95] mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="gold-line-full mb-5" />

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#7A5810] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(201,168,76,0.35)]">
                    <span className="text-[#0A0806] font-black text-sm">{review.initial}</span>
                  </div>
                  <div>
                    <div className="text-[#F0EDE6] font-bold text-[15px]">{review.name}</div>
                    <div className="text-[#9A8E7A] text-xs mt-0.5">{review.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="#C9A84C">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
