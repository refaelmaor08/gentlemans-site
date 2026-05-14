"use client";

import { useEffect, useRef, useState } from "react";

interface A11ySettings {
  fontSize: number;
  highContrast: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
  noAnimations: boolean;
  dyslexiaFont: boolean;
}

const DEFAULTS: A11ySettings = {
  fontSize: 100,
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
  noAnimations: false,
  dyslexiaFont: false,
};

export default function Accessibility() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULTS);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  /* Load persisted settings */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("a11y-v1");
      if (saved) setSettings({ ...DEFAULTS, ...JSON.parse(saved) });
    } catch {}
  }, []);

  /* Apply every setting change to <html> */
  useEffect(() => {
    const html = document.documentElement;

    /* Font size — empty string reverts to browser default */
    html.style.fontSize = settings.fontSize !== 100 ? `${settings.fontSize}%` : "";

    /* Composited visual filters */
    const filters: string[] = [];
    if (settings.grayscale) filters.push("grayscale(1)");
    if (settings.highContrast) filters.push("contrast(1.4) brightness(1.08)");
    html.style.filter = filters.join(" ");

    /* CSS-class-based modes */
    html.classList.toggle("a11y-highlight-links", settings.highlightLinks);
    html.classList.toggle("a11y-no-animations", settings.noAnimations);
    html.classList.toggle("a11y-dyslexia", settings.dyslexiaFont);

    try { localStorage.setItem("a11y-v1", JSON.stringify(settings)); } catch {}
  }, [settings]);

  /* Keyboard: Escape closes panel */
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  /* Focus first element when panel opens */
  useEffect(() => {
    if (open) closeButtonRef.current?.focus();
  }, [open]);

  /* Return focus to trigger when panel closes */
  const close = () => {
    setOpen(false);
    setTimeout(() => triggerRef.current?.focus(), 50);
  };

  const update = <K extends keyof A11ySettings>(key: K, value: A11ySettings[K]) =>
    setSettings(prev => ({ ...prev, [key]: value }));

  const reset = () => {
    setSettings(DEFAULTS);
    const html = document.documentElement;
    html.style.fontSize = "";
    html.style.filter = "";
    html.classList.remove("a11y-highlight-links", "a11y-no-animations", "a11y-dyslexia");
  };

  const panelId = "a11y-panel";

  return (
    <>
      {/* ── Floating trigger button ── */}
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        aria-label="פתח תפריט נגישות"
        aria-controls={panelId}
        aria-expanded={open}
        className="a11y-fab fixed bottom-28 left-6 md:bottom-6 z-[90] w-12 h-12 rounded-full flex items-center justify-center"
      >
        <PersonIcon />
      </button>

      {/* ── Backdrop ── */}
      <div
        aria-hidden="true"
        onClick={close}
        className={`fixed inset-0 z-[91] bg-[#0A0806]/55 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backdropFilter: open ? "blur(2px)" : "none" }}
      />

      {/* ── Accessibility panel ── */}
      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="הגדרות נגישות"
        className={`fixed z-[92] transition-all duration-350 ease-out ${
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-3 scale-[0.97] pointer-events-none"
        }`}
        style={{
          bottom: "5.5rem",
          left: "1.5rem",
          width: "min(21rem, calc(100vw - 2rem))",
          background: "rgba(8, 6, 4, 0.94)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1px solid rgba(201,168,76,0.22)",
          borderRadius: "4px",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,168,76,0.06), inset 0 1px 0 rgba(201,168,76,0.14)",
        }}
      >
        {/* Gold top accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/70 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <PersonIcon className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
            <h2 className="text-[#F0EDE6] font-bold text-sm tracking-widest uppercase">
              נגישות
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            onClick={close}
            aria-label="סגור תפריט נגישות"
            className="text-[#9A8E7A] hover:text-[#C9A84C] p-1.5 rounded transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="h-px bg-[#C9A84C]/10 mx-5" />

        {/* Font size control */}
        <div className="px-5 py-4">
          <p className="text-[#9A8E7A] text-[10px] uppercase tracking-widest mb-3">
            גודל טקסט
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => update("fontSize", Math.max(80, settings.fontSize - 10))}
              aria-label="הקטן גופן"
              disabled={settings.fontSize <= 80}
              className="a11y-ctrl-btn"
            >
              <span className="text-sm font-bold">א−</span>
            </button>
            <div className="flex-1 text-center">
              <span className="text-[#C9A84C] font-bold text-sm tabular-nums">
                {settings.fontSize}%
              </span>
            </div>
            <button
              onClick={() => update("fontSize", Math.min(130, settings.fontSize + 10))}
              aria-label="הגדל גופן"
              disabled={settings.fontSize >= 130}
              className="a11y-ctrl-btn"
            >
              <span className="text-base font-bold">א+</span>
            </button>
          </div>
        </div>

        <div className="h-px bg-[#C9A84C]/8 mx-5" />

        {/* Toggle options */}
        <div className="px-5 py-2">
          {(
            [
              { key: "highContrast",   label: "ניגודיות גבוהה",   icon: "◑" },
              { key: "grayscale",      label: "גווני אפור",        icon: "◌" },
              { key: "highlightLinks", label: "הדגש קישורים",     icon: "⎁" },
              { key: "noAnimations",   label: "בטל אנימציות",     icon: "⏸" },
              { key: "dyslexiaFont",   label: "גופן דיסלקציה",    icon: "Aa" },
            ] as const
          ).map(({ key, label, icon }) => (
            <ToggleRow
              key={key}
              label={label}
              icon={icon}
              checked={settings[key]}
              onChange={(v) => update(key, v)}
            />
          ))}
        </div>

        <div className="h-px bg-[#C9A84C]/8 mx-5" />

        {/* Reset */}
        <div className="px-5 py-4">
          <button
            onClick={reset}
            className="w-full py-2.5 text-[#9A8E7A] hover:text-[#C9A84C] text-[10px] uppercase font-bold tracking-widest border border-[#C9A84C]/18 hover:border-[#C9A84C]/45 rounded-sm transition-all duration-300 hover:bg-[#C9A84C]/6"
          >
            איפוס הגדרות
          </button>
        </div>

        {/* Bottom gold line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
      </div>
    </>
  );
}

/* ── Toggle row ── */
function ToggleRow({
  label,
  icon,
  checked,
  onChange,
}: {
  label: string;
  icon: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <div className="flex items-center gap-2.5">
        <span
          className="text-[#C9A84C]/60 text-xs w-5 text-center flex-shrink-0 font-mono"
          aria-hidden="true"
        >
          {icon}
        </span>
        <span className="text-[#C8BFB0] text-sm">{label}</span>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className="a11y-toggle flex-shrink-0"
        style={{
          width: "40px",
          height: "22px",
          borderRadius: "11px",
          background: checked
            ? "linear-gradient(90deg, #B8922A, #C9A84C)"
            : "rgba(30, 22, 14, 0.95)",
          border: checked
            ? "1px solid rgba(201,168,76,0.8)"
            : "1px solid rgba(201,168,76,0.18)",
          position: "relative",
          cursor: "pointer",
          transition: "background 0.25s ease, border-color 0.25s ease",
          flexShrink: 0,
        }}
      >
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "3px",
            left: checked ? "20px" : "3px",
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "#FFFFFF",
            transition: "left 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.6)",
          }}
        />
      </button>
    </div>
  );
}

/* ── Accessibility person icon ── */
function PersonIcon({ className = "w-5 h-5 text-[#C9A84C]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="5" r="2" />
      {/* Arms spread */}
      <path d="M5 9.5h14" />
      {/* Body */}
      <path d="M12 7.5V13" />
      {/* Legs */}
      <path d="M9 22l3-6 3 6" />
    </svg>
  );
}
