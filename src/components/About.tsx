import { CheckIcon } from "./icons";

const HIGHLIGHTS = [
  "Web yazılımları ve kurumsal uygulamalar",
  "Mobil uygulama geliştirme (iOS & Android)",
  "Veri tabanı ve altyapı sistemleri",
  "Network ve kuruma özel yazılım çözümleri",
];

export default function About() {
  return (
    <section
      id="about"
      data-section-theme="light"
      className="relative scroll-mt-24 bg-slate-50 py-20 text-navy-900 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="reveal">
          <SectionLabel onLight>Hakkımızda</SectionLabel>
          <h2 className="mt-4 font-sans text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Dijital dönüşümün güvenilir teknoloji ortağı
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              ATLAS İSTANBUL Teknoloji ve İnovasyon Hizmetleri A.Ş., yazılım
              geliştirme ve teknoloji çözümleri alanında faaliyet göstermektedir.
              Şirketimiz web yazılımları, mobil uygulamalar, veri tabanı
              sistemleri, network çözümleri ve kuruma özel yazılımlar
              geliştirmektedir.
            </p>
            <p>
              İşletmelerin dijital dönüşüm süreçlerine katkı sağlayan
              ölçeklenebilir ve sürdürülebilir yazılım çözümleri üretmeyi
              hedeflemektedir.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-navy-800">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-500">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative" style={{ transitionDelay: "120ms" }}>
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent-500/10 blur-2xl" />
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "Vizyon", v: "İnovasyon odaklı, sürdürülebilir teknoloji üretimi." },
              { k: "Misyon", v: "İşletmelere ölçeklenebilir yazılım çözümleri sunmak." },
              { k: "Yaklaşım", v: "Kullanıcı deneyimini önceleyen kurumsal mühendislik." },
              { k: "Değerler", v: "Güven, kalite, şeffaflık ve sürekli gelişim." },
            ].map((c, i) => (
              <div
                key={c.k}
                className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/50 hover:shadow-lg hover:shadow-navy-900/5 ${
                  i % 2 === 1 ? "sm:mt-6" : ""
                }`}
              >
                <p className="font-sans text-lg font-bold text-navy-900">{c.k}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.v}</p>
              </div>
            ))}
          </div>
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
