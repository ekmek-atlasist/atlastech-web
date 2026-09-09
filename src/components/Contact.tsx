import { useState } from "react";
import {
  COMPANY,
  MAPS_EMBED_URL,
  MAPS_LINK_URL,
  FORMSPREE_ENDPOINT,
} from "../data/content";
import { SectionLabel } from "./About";
import { MapPinIcon, MailIcon, CheckIcon, ExternalIcon } from "./icons";
import LegalModal from "./LegalModal";
import { useI18n } from "../i18n/LanguageContext";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [legalOpen, setLegalOpen] = useState(false);
  const [botField, setBotField] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: gerçek kullanıcılar bu gizli alanı görmez/doldurmaz.
    // Botlar doldurursa gönderimi sessizce yok say.
    if (botField) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _gotcha: botField,
          _subject: `İletişim formu — ${form.name}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      data-section-theme="light"
      className="relative scroll-mt-24 bg-slate-50 py-20 text-navy-900 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionLabel onLight>{t.contact.label}</SectionLabel>
          <h2 className="mt-4 text-balance font-sans text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {t.contact.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {t.contact.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Info + map */}
          <div className="reveal flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-500">
                {t.contact.companyTitle}
              </p>
              <p className="mt-2 font-sans text-sm font-semibold leading-relaxed text-navy-900">
                {COMPANY.legalName}
              </p>

              <div className="mt-6 flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-500">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {t.contact.addressLabel}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-navy-800">
                    {COMPANY.address}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-500">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {t.contact.emailLabel}
                  </p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="mt-1 block text-sm text-navy-800 transition-colors hover:text-accent-500"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="group relative flex-1 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                title={t.contact.mapTitle}
                src={MAPS_EMBED_URL}
                className="h-full min-h-56 w-full"
                style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={MAPS_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-navy-950/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur transition-colors hover:border-accent-400/40 hover:text-accent-300"
              >
                {t.contact.openMaps}
                <ExternalIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal lg:col-span-3" style={{ transitionDelay: "100ms" }}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
            >
              {/* Honeypot — spam koruması, kullanıcıya görünmez */}
              <div
                aria-hidden="true"
                className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
              >
                <label>
                  Bu alanı boş bırakın
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={t.contact.nameLabel}>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="input"
                  />
                </Field>
                <Field label={t.contact.emailLabel}>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="input"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label={t.contact.messageLabel}>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    className="input resize-none"
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-accent-400 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent-500/40 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" && t.contact.sending}
                {status === "success" && (
                  <>
                    <CheckIcon className="h-4 w-4" /> {t.contact.sent}
                  </>
                )}
                {(status === "idle" || status === "error") && t.contact.send}
              </button>

              {status === "success" && (
                <p className="mt-4 text-sm font-medium text-green-600">
                  {t.contact.successMsg}
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm font-medium text-red-600">
                  {t.contact.errorPre}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="underline hover:text-red-700"
                  >
                    {COMPANY.email}
                  </a>
                  {t.contact.errorPost}
                </p>
              )}

              <p className="mt-5 text-xs leading-relaxed text-slate-400">
                {t.contact.kvkkPre}
                <button
                  type="button"
                  onClick={() => setLegalOpen(true)}
                  className="font-medium text-accent-500 underline underline-offset-2 transition-colors hover:text-accent-600"
                >
                  {t.contact.kvkkLink}
                </button>
                {t.contact.kvkkPost}
              </p>
            </form>
          </div>
        </div>
      </div>

      <LegalModal open={legalOpen} onClose={() => setLegalOpen(false)} />
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </span>
      {children}
    </label>
  );
}
