import { CheckIcon } from "./icons";
import { PRINCIPLE_IMAGES } from "../data/content";
import { useI18n } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useI18n();
  const PRINCIPLES = t.about.principles.map((p, i) => ({
    ...p,
    img: PRINCIPLE_IMAGES[i],
  }));
  const HIGHLIGHTS = t.about.highlights;

  return (
    <section
      id="about"
      data-section-theme="light"
      className="relative scroll-mt-24 bg-slate-50 py-20 text-navy-900 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="reveal">
          <SectionLabel onLight>{t.about.label}</SectionLabel>
          <h2 className="mt-4 text-balance font-sans text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {t.about.heading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>

          <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-navy-800">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-500">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* İŞKUR credential strip */}
          <div className="mt-9 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white p-1.5">
              <img
                src="/iskur-logo.png"
                alt="İŞKUR Özel İstihdam Bürosu"
                width={64}
                height={64}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </span>
            <div>
              <p className="font-sans text-sm font-bold text-navy-900">
                {t.about.iskurTitle}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                {t.about.iskurMeta}
              </p>
            </div>
          </div>
        </div>

        {/* Principles — larger cards that fill the column height */}
        <div
          className="reveal grid gap-4 sm:grid-cols-2 lg:h-full lg:grid-rows-2"
          style={{ ["--i" as string]: 1 }}
        >
          {PRINCIPLES.map(({ k, v, img }) => (
            <div
              key={k}
              className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/50 hover:shadow-xl hover:shadow-navy-900/[0.06]"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src={img}
                alt={k}
                width={140}
                height={140}
                loading="lazy"
                className="h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-32 sm:w-32"
              />
              <p className="mt-4 font-sans text-lg font-bold text-navy-900">
                {k}
              </p>
              <p className="mt-1.5 max-w-[16rem] text-sm leading-relaxed text-slate-500">
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({
  children,
  onLight = false,
}: {
  children: React.ReactNode;
  onLight?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        onLight ? "text-accent-500" : "text-accent-300"
      }`}
    >
      <span
        className={`h-px w-8 ${onLight ? "bg-accent-500/50" : "bg-accent-400/60"}`}
      />
      {children}
    </span>
  );
}
