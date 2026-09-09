import { ArrowRightIcon } from "./icons";
import { useI18n } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useI18n();
  const TITLE_TOKENS = t.hero.titleTokens;
  const CAPABILITIES = t.hero.capabilities;

  return (
    <section
      id="home"
      data-section-theme="dark"
      className="relative overflow-hidden pt-28 sm:pt-36"
    >
      {/* Layered background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-14%] h-[560px] w-[820px] -translate-x-1/2 rounded-[50%] bg-accent-500/20 blur-[140px]" />
        <div className="absolute left-[8%] top-[36%] h-64 w-64 rounded-full bg-accent-300/10 blur-[110px]" />
        <div className="absolute right-[6%] top-[10%] h-72 w-72 rounded-full bg-accent-600/20 blur-[120px]" />
        <div
          className="grid-fade absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.09) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-5 pb-16 text-center sm:px-8">
        <div className="flex flex-col items-center">
          <h1 className="max-w-4xl text-balance font-sans text-4xl font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.75rem]">
            {TITLE_TOKENS.map((tok, i) => (
              <span
                key={i}
                className="word-rise me-[0.28em]"
                style={{ animationDelay: `${0.12 + i * 0.09}s` }}
              >
                {tok.accent ? (
                  <span className="text-gradient-anim whitespace-nowrap">
                    {tok.t}
                  </span>
                ) : (
                  tok.t
                )}
              </span>
            ))}
          </h1>

          <p
            className="word-rise mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-300 sm:text-lg"
            style={{ animationDelay: "0.85s" }}
          >
            {t.hero.description}
          </p>

          <div
            className="word-rise mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="#services"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-b from-accent-400 to-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(43,108,176,0.7)] ring-1 ring-inset ring-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-white/40" />
              {t.hero.exploreServices}
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]"
            >
              {t.hero.getInTouch}
            </a>
          </div>
        </div>
      </div>

      {/* Capability marquee */}
      <div className="reveal relative border-y border-white/[0.07] bg-white/[0.02] py-4">
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-10 pr-10">
            {[...CAPABILITIES, ...CAPABILITIES].map((cap, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-ink-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400/70" />
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
