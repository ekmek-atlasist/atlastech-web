import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "../data/content";
import { MenuIcon, CloseIcon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Theme of the section currently behind the header.
  const [behindTheme, setBehindTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const probe = () => {
      setScrolled(window.scrollY > 8);
      const probeY = 44;
      const nodes = document.querySelectorAll<HTMLElement>(
        "[data-section-theme]"
      );
      let theme: "light" | "dark" = "dark";
      for (const el of nodes) {
        const r = el.getBoundingClientRect();
        if (r.top <= probeY && r.bottom > probeY) {
          theme = (el.dataset.sectionTheme as "light" | "dark") ?? "dark";
          break;
        }
      }
      setBehindTheme(theme);
    };

    probe();
    window.addEventListener("scroll", probe, { passive: true });
    window.addEventListener("resize", probe);
    return () => {
      window.removeEventListener("scroll", probe);
      window.removeEventListener("resize", probe);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Header always contrasts with the section behind it.
  const headerLight = behindTheme === "dark"; // light header over dark content
  const variant = headerLight ? "onLight" : "onDark";

  const shellClass = headerLight
    ? `${scrolled ? "bg-white/95 shadow-lg shadow-navy-900/5" : "bg-white"} border-slate-200/70`
    : `${scrolled ? "bg-navy-950/85" : "bg-navy-950/60"} border-white/10`;

  const linkClass = headerLight
    ? "text-slate-600 hover:text-navy-900"
    : "text-ink-300 hover:text-white";

  const menuBtnClass = headerLight
    ? "border-slate-200 text-navy-900 hover:bg-slate-100"
    : "border-white/10 text-white hover:bg-white/5";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500 ${shellClass}`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#home" aria-label="Ana sayfaya dön">
          <Logo variant={variant} />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${linkClass}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-xl bg-gradient-to-r from-accent-500 to-accent-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent-500/40 sm:inline-flex"
          >
            Teklif Al
          </a>

          <button
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors lg:hidden ${menuBtnClass}`}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden backdrop-blur-xl transition-all duration-300 lg:hidden ${
          headerLight ? "bg-white/95" : "bg-navy-950/95"
        } ${open ? "max-h-96 border-b " + (headerLight ? "border-slate-200" : "border-white/10") : "max-h-0"}`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                headerLight
                  ? "text-slate-600 hover:bg-slate-100 hover:text-navy-900"
                  : "text-ink-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-gradient-to-r from-accent-500 to-accent-400 px-4 py-3 text-center text-base font-semibold text-white"
          >
            Teklif Al
          </a>
        </nav>
      </div>
    </header>
  );
}
