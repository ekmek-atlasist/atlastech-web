import { ArrowRightIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="home"
      data-section-theme="dark"
      className="relative overflow-hidden pt-28 sm:pt-36"
    >
      {/* Background glows + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[130px]" />
        <div className="absolute right-[2%] top-[30%] h-72 w-72 rounded-full bg-accent-300/10 blur-[100px]" />
        <div
          className="grid-fade absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-5 pb-20 text-center sm:px-8 lg:pb-28">
        <div className="reveal flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-ink-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse-glow" />
            Yazılım & Teknoloji Çözümleri
          </span>

          <h1 className="mt-7 font-sans text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            İşletmeler İçin{" "}
            <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 bg-clip-text text-transparent">
              Yazılım ve Teknoloji
            </span>{" "}
            Çözümleri
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            ATLAS İSTANBUL Teknoloji ve İnovasyon Hizmetleri A.Ş. olarak web
            uygulamaları, mobil uygulamalar, veri tabanı sistemleri ve kuruma
            özel yazılım çözümleri geliştiriyoruz.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-accent-400 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent-500/40"
            >
              Hizmetlerimiz
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              İletişime Geçin
            </a>
          </div>

          <dl className="mt-14 grid w-full max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { k: "5+", v: "Hizmet Alanı" },
              { k: "Web & Mobil", v: "Platformlar" },
              { k: "7/24", v: "Destek Vizyonu" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-sans text-2xl font-bold text-white">{s.k}</dt>
                <dd className="mt-1 text-xs text-ink-400">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
