import { useEffect } from "react";
import { CloseIcon } from "./icons";
import { KVKK_TITLE, KVKK_SUBTITLE, KVKK_BLOCKS } from "../data/legal";

type LegalModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function LegalModal({ open, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={KVKK_TITLE}
    >
      <div
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 bg-slate-50 px-6 py-5">
          <div>
            <h2 className="font-sans text-lg font-bold text-navy-900 sm:text-xl">
              {KVKK_TITLE}
            </h2>
            <p className="mt-1 text-xs text-slate-500">{KVKK_SUBTITLE}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Kapat"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 hover:text-navy-900"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 sm:px-8">
          <article className="space-y-4 text-sm leading-relaxed text-slate-600">
            {KVKK_BLOCKS.map((block, i) => {
              switch (block.type) {
                case "h":
                  return (
                    <h3
                      key={i}
                      className="pt-3 font-sans text-base font-bold text-navy-900"
                    >
                      {block.text}
                    </h3>
                  );
                case "p":
                  return <p key={i}>{block.text}</p>;
                case "def":
                  return (
                    <p key={i}>
                      <span className="font-semibold text-navy-800">
                        {block.term}:
                      </span>{" "}
                      {block.text}
                    </p>
                  );
                case "list":
                  return (
                    <ul key={i} className="ml-1 space-y-2">
                      {block.items.map((it, j) => (
                        <li key={j} className="flex gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  );
              }
            })}
          </article>
        </div>

        <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 text-right">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-gradient-to-r from-accent-500 to-accent-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
