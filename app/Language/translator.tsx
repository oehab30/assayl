"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  defaultLocale,
  dictionaries,
  type Locale,
} from "./i18n";

type Dictionary = (typeof dictionaries)[Locale];

const TranslationContext = createContext<{
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
}>({
  locale: defaultLocale,
  dictionary: dictionaries[defaultLocale],
  setLocale: () => {},
});

export function TranslationProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale?: Locale;
}) {
  const [activeLocale, setActiveLocale] = useState(locale ?? defaultLocale);

  useEffect(() => {
    document.documentElement.lang = activeLocale;
    document.documentElement.dir = activeLocale === "ar" ? "rtl" : "ltr";
  }, [activeLocale]);

  const value = {
    locale: activeLocale,
    dictionary: dictionaries[activeLocale],
    setLocale: setActiveLocale,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const { dictionary, locale, setLocale } = useContext(TranslationContext);

  function t(path: string): string {
    const value = path.split(".").reduce<unknown>((current, key) => {
      if (typeof current !== "object" || current === null) return undefined;
      return (current as Record<string, unknown>)[key];
    }, dictionary);

    return typeof value === "string" ? value : path;
  }

  return { t, locale, setLocale };
}
