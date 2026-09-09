import { useEffect } from "react";

/**
 * Adds an IntersectionObserver that toggles `.is-visible` on every
 * element carrying the `.reveal` class once it scrolls into view.
 *
 * Pass a `dep` (e.g. the active language) so the observer re-scans when
 * content is re-rendered and new `.reveal` nodes appear in the DOM.
 */
export function useReveal(dep?: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dep]);
}
