import { useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS, COMPANY } from "../data/content";
import LegalModal from "./LegalModal";

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <footer
      data-section-theme="dark"
      className="border-t border-white/10 bg-navy-950"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              İşletmeler için web, mobil, veri tabanı ve kuruma özel yazılım
              çözümleri geliştiriyoruz.
            </p>

            {/* İŞKUR Özel İstihdam Bürosu belgesi */}
            <div className="mt-7 flex items-center gap-4">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg shadow-black/20">
                <img
                  src="/iskur-logo.png"
                  alt="İŞKUR Özel İstihdam Bürosu"
                  width={310}
                  height={309}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-xs leading-relaxed text-ink-400">
                <p className="font-semibold uppercase tracking-wider text-ink-300">
                  Özel İstihdam Bürosu
                </p>
                <p className="mt-1.5">
                  Tarih:{" "}
                  <span className="font-medium text-ink-300">19/08/2026</span>
                </p>
                <p>
                  Belge Numarası:{" "}
                  <span className="font-medium text-ink-300">2021</span>
                </p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="md:justify-self-center">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              Menü
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-300 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="md:justify-self-end">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              Adres
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300 md:text-right">
              {COMPANY.address}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} {COMPANY.shortLegal} Tüm hakları
            saklıdır.
          </p>
          <button
            type="button"
            onClick={() => setLegalOpen(true)}
            className="text-xs font-medium text-ink-300 underline-offset-4 transition-colors hover:text-accent-300 hover:underline"
          >
            Aydınlatma Metni (KVKK)
          </button>
        </div>
      </div>

      <LegalModal open={legalOpen} onClose={() => setLegalOpen(false)} />
    </footer>
  );
}
