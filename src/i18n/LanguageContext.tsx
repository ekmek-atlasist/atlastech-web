import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translation } from "./translations";

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
};

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "atlas-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "tr";
  // İsteğe bağlı paylaşılabilir dil bağlantısı: ?lang=en
  const param = new URLSearchParams(window.location.search).get("lang");
  if (param === "tr" || param === "en") return param;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "tr" || saved === "en") return saved;
  return "tr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang: setLangState,
      t: translations[lang],
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within a LanguageProvider");
  return ctx;
}
