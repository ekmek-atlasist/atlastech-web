import { SERVICES } from "../data/content";
import { SectionLabel } from "./About";
import { ArrowRightIcon } from "./icons";

export default function Services() {
  return (
    <section
      id="services"
      data-section-theme="dark"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-8%] top-[12%] h-80 w-80 rounded-full bg-accent-600/15 blur-[130px]" />
        <div className="absolute left-[-6%] bottom-[10%] h-72 w-72 rounded-full bg-accent-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Hizmetlerimiz</SectionLabel>
            <h2 className="mt-4 text-balance font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Uçtan uca yazılım, teknoloji ve insan kaynakları çözümleri
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-400 md:text-right">
            İşletmenizin ihtiyaçlarına özel, modern ve ölçeklenebilir çözümler
            geliştiriyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description, Icon }, i) => (
            <article
              key={title}
              style={{ ["--i" as string]: i }}
              className="reveal sheen group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-navy-800/70 to-navy-900/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-400/30 hover:from-navy-800"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-accent-300 transition-all duration-300 group-hover:border-accent-400/40 group-hover:bg-accent-500/15 group-hover:text-accent-200">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="font-sans text-sm font-semibold tabular-nums text-white/20 transition-colors duration-300 group-hover:text-accent-300/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 font-sans text-lg font-bold text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                {description}
              </p>
            </article>
          ))}

          {/* CTA card — same size as the others */}
          <article
            style={{ ["--i" as string]: SERVICES.length }}
            className="reveal sheen group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-accent-400/25 bg-gradient-to-br from-accent-600/30 to-navy-900/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-400/50"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent-500/25 blur-3xl" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white">
                <ArrowRightIcon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-sans text-lg font-bold text-white">
                Projenizi birlikte konuşalım
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                İhtiyaçlarınızı değerlendirelim, size en uygun çözümü planlayalım.
              </p>
            </div>
            <a
              href="#contact"
              className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Teklif Al
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
