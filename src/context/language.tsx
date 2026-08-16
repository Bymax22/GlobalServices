"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type SupportedLanguage } from "@/lib/translations";

type LanguageContextValue = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  t: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const resolvePath = (obj: Record<string, any>, path: string) => {
  return path.split(".").reduce((value, key) => value?.[key], obj) ?? "";
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("gs-language") as SupportedLanguage | null;
    if (saved === "en" || saved === "fr" || saved === "sw") {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("gs-language", language);
  }, [language]);

  const setLanguage = (nextLanguage: SupportedLanguage) => setLanguageState(nextLanguage);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (path: string) => {
        const entry = resolvePath(translations[language], path) || resolvePath(translations.en, path);
        return typeof entry === "string" ? entry : path;
      },
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
