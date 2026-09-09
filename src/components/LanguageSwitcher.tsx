import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/translations";
import { TurkishFlag, UKFlag, ChevronDownIcon, CheckIcon } from "./icons";

type FlagProps = { className?: string };

const LANGS: { code: Lang; name: string; Flag: (p: FlagProps) => React.ReactElement }[] = [
  { code: "tr", name: "Türkçe", Flag: TurkishFlag },
  { code: "en", name: "English", Flag: UKFlag },
];

type Props = {
  variant?: "onLight" | "onDark";
  /** dropdown (default) or inline pills (used inside the mobile menu) */
  mode?: "dropdown" | "inline";
  className?: string;
};

export default function LanguageSwitcher({
  variant = "onDark",
  mode = "dropdown",
  className = "",
}: Props) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const onLight = variant === "onLight";
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const flagChip =
    "h-3.5 w-[21px] shrink-0 rounded-[3px] object-cover shadow-sm ring-1 ring-black/10";

  // ---------- Inline (mobile) ----------
  if (mode === "inline") {
    const active = onLight
      ? "border-accent-400/50 bg-white text-navy-900 shadow-sm"
      : "border-accent-400/40 bg-white/10 text-white";
    const idle = onLight
      ? "border-slate-200 bg-slate-50 text-slate-500 hover:text-navy-900"
      : "border-white/10 bg-white/[0.03] text-ink-300 hover:text-white";
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {LANGS.map(({ code, name, Flag }) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
              lang === code ? active : idle
            }`}
          >
            <Flag className={flagChip} />
            {name}
          </button>
        ))}
      </div>
    );
  }

  // ---------- Dropdown (desktop) ----------
  const btnClass = onLight
    ? "border-slate-200 bg-white text-navy-900 hover:border-slate-300 hover:bg-slate-50"
    : "border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]";
  const menuClass = onLight
    ? "border-slate-200 bg-white/95 shadow-xl shadow-navy-900/10"
    : "border-white/10 bg-navy-900/95 shadow-xl shadow-black/40";
  const itemIdle = onLight
    ? "text-slate-600 hover:bg-slate-100"
    : "text-ink-300 hover:bg-white/5";
  const itemActive = onLight ? "text-navy-900" : "text-white";

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-2 rounded-xl border px-3 py-2 transition-colors ${btnClass}`}
      >
        <current.Flag className={flagChip} />
        <span className="text-sm font-semibold">{current.name}</span>
        <ChevronDownIcon
          className={`h-3.5 w-3.5 opacity-70 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        role="listbox"
        className={`absolute right-0 z-50 mt-2 w-44 origin-top-right overflow-hidden rounded-xl border p-1 backdrop-blur-xl transition-all duration-200 ${menuClass} ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0"
        }`}
      >
        {LANGS.map(({ code, name, Flag }) => (
          <button
            key={code}
            type="button"
            role="option"
            aria-selected={lang === code}
            onClick={() => {
              setLang(code);
              setOpen(false);
            }}
            className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${itemIdle} ${
              lang === code ? itemActive : ""
            }`}
          >
            <Flag className={flagChip} />
            <span className="flex-1 text-left">{name}</span>
            {lang === code && (
              <CheckIcon className="h-4 w-4 text-accent-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
