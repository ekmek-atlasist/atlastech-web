import { SERVICES } from "../data/content";
import { SectionLabel } from "./About";

export default function Services() {
  return (
    <section
      id="services"
      data-section-theme="dark"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <SectionLabel>Hizmetlerimiz</SectionLabel>
          <h2 className="mt-4 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Uçtan uca yazılım ve teknoloji hizmetleri
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            İşletmenizin ihtiyaçlarına özel, modern ve ölçeklenebilir çözümler
            geliştiriyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description, Icon }, i) => (
            <article
              key={title}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800/60 to-navy-900/40 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-400/40"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-300 transition-colors duration-300 group-hover:border-accent-400/40 group-hover:bg-accent-500/15 group-hover:text-accent-300">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 font-sans text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">{description}</p>
            </article>
          ))}

          {/* CTA card to keep the grid balanced */}
          <article className="reveal flex flex-col justify-between rounded-2xl border border-accent-400/30 bg-gradient-to-br from-accent-500/15 to-navy-900/40 p-7">
            <div>
              <h3 className="font-sans text-lg font-bold text-white">
                Projeniz mi var?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                İhtiyaçlarınızı birlikte değerlendirelim, size en uygun çözümü
                geliştirelim.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Teklif Al
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
