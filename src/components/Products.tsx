import { PRODUCTS } from "../data/content";
import { SectionLabel } from "./About";
import { ExternalIcon } from "./icons";

export default function Products() {
  return (
    <section
      id="products"
      data-section-theme="light"
      className="relative scroll-mt-24 bg-white py-20 text-navy-900 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <SectionLabel onLight>Ürünlerimiz</SectionLabel>
          <h2 className="mt-4 font-sans text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Geliştirdiğimiz dijital ürünler
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Kullanıcı deneyimini ön planda tutan, kendi geliştirdiğimiz
            platformları keşfedin.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="reveal group relative overflow-hidden rounded-3xl border border-navy-700/50 bg-gradient-to-br from-navy-800 to-navy-950 p-8 shadow-xl shadow-navy-900/20 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-400/40 sm:p-10"
            >
              {/* Looping background video */}
              <video
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
                src="/vid.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-900/55 via-navy-900/25 to-navy-900/55" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-500/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/30">
                    <img
                      src="/ekmek-logo.png"
                      alt={`${product.name} uygulama logosu`}
                      width={80}
                      height={80}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-ink-300">
                    {product.status}
                  </span>
                </div>

                <h3 className="mt-6 font-sans text-2xl font-extrabold tracking-tight text-white">
                  {product.name}
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-accent-300">
                  “{product.slogan}”
                </p>

                <p className="mt-4 text-sm leading-relaxed text-ink-300">
                  {product.description}
                </p>

                <a
                  href={product.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-accent-400/40 hover:bg-accent-500/15"
                >
                  {product.website}
                  <ExternalIcon className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}

          {/* EKMEK promo / ad */}
          <a
            href="https://ekmekisbul.com"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group relative block overflow-hidden rounded-3xl border border-slate-200 bg-[#1f3fb5] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-400/60 hover:shadow-xl hover:shadow-navy-900/10"
          >
            <img
              src="/ekmek-promo.png"
              alt="Ekmek — İşe giden yolun en kısası. ekmekisbul.com uygulamasını indirin."
              loading="lazy"
              className="h-full min-h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/25 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition-colors group-hover:bg-black/40">
              Ziyaret Et
              <ExternalIcon className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
