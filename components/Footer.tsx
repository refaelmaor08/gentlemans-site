import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 overflow-hidden" style={{ background: "#050402" }}>
      {/* Warm subtle texture */}
      <div className="absolute inset-0 wood-texture" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent" />
      {/* Gold ambient top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#C9A84C]/5 blur-[60px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#C9A84C]/30 flex-shrink-0">
                <Image
                  src="/images/logo.webp"
                  alt="GENTLEMAN'S TLV"
                  width={44}
                  height={44}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div>
                <div
                  className="text-[#C9A84C] text-[13px] tracking-[0.2em] font-light uppercase"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Gentleman&apos;s TLV
                </div>
                <div className="text-[#9A8E7A] text-[10px] tracking-[0.3em] uppercase mt-0.5">Barbershop</div>
              </div>
            </div>
            <p className="text-[#9A8E7A] text-sm leading-relaxed max-w-xs">
              מספרת גברים יוקרתית בלב תל אביב. כי המראה שלך הוא הנוכחות שלך.
            </p>
            <p
              className="text-[#C9A84C]/35 text-xs mt-4 tracking-widest"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              &ldquo;Your style is your presence.&rdquo;
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#F0EDE6] font-bold text-[13px] mb-6 tracking-[0.2em] uppercase">ניווט</h4>
            <div className="space-y-3.5">
              {[
                { label: "אודות", href: "#about" },
                { label: "שירותים", href: "#services" },
                { label: "גלריה", href: "#gallery" },
                { label: "המלצות", href: "#reviews" },
                { label: "יצירת קשר", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-[#9A8E7A] hover:text-[#C9A84C] text-sm transition-colors duration-300 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-[#C9A84C] transition-all duration-300 flex-shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact + Hours */}
          <div>
            <h4 className="text-[#F0EDE6] font-bold text-[13px] mb-6 tracking-[0.2em] uppercase">פרטי קשר</h4>
            <div className="space-y-4 text-sm text-[#9A8E7A]">
              <p className="flex items-start gap-2">
                <span className="text-[#C9A84C] mt-0.5 flex-shrink-0">✦</span>
                דיזנגוף 237, תל אביב
              </p>
              <a href="tel:0545655977" className="flex items-start gap-2 hover:text-[#C9A84C] transition-colors">
                <span className="text-[#C9A84C] mt-0.5 flex-shrink-0">✦</span>
                054-565-5977
              </a>
              <a
                href="https://wa.me/972545655977"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#C9A84C] transition-colors"
              >
                <span className="text-[#C9A84C] mt-0.5 flex-shrink-0">✦</span>
                וואטסאפ
              </a>
              <a
                href="https://www.instagram.com/gentlemanstlv?igsh=MWhvYzZ3OTlydDl2eQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors"
              >
                <span className="text-[#C9A84C] mt-0.5 flex-shrink-0">✦</span>
                עקבו אחרינו באינסטגרם
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-[#F0EDE6] font-bold text-[13px] mb-3 tracking-[0.2em] uppercase">שעות פעילות</h4>
              <div className="space-y-1.5 text-xs">
                {[
                  { days: "ראשון – שני", hours: "10:00 – 19:00" },
                  { days: "שלישי", hours: "סגור" },
                  { days: "רביעי", hours: "10:00 – 19:30" },
                  { days: "חמישי", hours: "10:00 – 20:00" },
                  { days: "שישי", hours: "09:00 – 13:00" },
                ].map((row) => (
                  <div key={row.days} className="flex justify-between border-b border-[#1A1410] pb-1.5 last:border-0 last:pb-0">
                    <span className="text-[#9A8E7A]">{row.days}</span>
                    <span className={`font-semibold ${row.hours === "סגור" ? "text-[#9A8E7A] line-through decoration-[#9A8E7A]/40" : "text-[#C9A84C]"}`}>{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://calmark.io/p/NFouD"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block mt-7 px-7 py-3 text-sm font-black rounded-sm tracking-widest"
            >
              קבע תור
            </a>
          </div>
        </div>

        <div className="gold-line-full mb-8" />

        {/* Accessibility note */}
        <p className="text-[#9A8E7A]/60 text-xs text-center max-w-2xl mx-auto mb-6 leading-relaxed">
          <span className="text-[#C9A84C]/70 font-semibold">נגישות:</span>{" "}
          אנחנו עושים מאמץ להעניק שירות נוח ונגיש לכל לקוח. אם יש צורך בהתאמה מיוחדת, ניתן ליצור איתנו קשר לפני ההגעה ונשמח לסייע ככל האפשר.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[#9A8E7A] text-xs">
          <p>© 2024 GENTLEMAN&apos;S TLV · כל הזכויות שמורות</p>
          <a
            href="https://www.instagram.com/gentlemanstlv?igsh=MWhvYzZ3OTlydDl2eQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A84C]/50 hover:text-[#C9A84C] transition-colors duration-300"
          >
            @gentlemanstlv
          </a>
          <p className="text-[#C9A84C]/30">דיזנגוף 237, תל אביב</p>
        </div>
      </div>
    </footer>
  );
}
