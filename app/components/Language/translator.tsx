"use client";

import { createContext, useContext } from "react";
import {
  defaultLocale,
  dictionaries,
  type Locale,
} from "./i18n";

type Dictionary = (typeof dictionaries)[Locale];

const TranslationContext = createContext<{
  locale: Locale;
  dictionary: Dictionary;
}>({
  locale: defaultLocale,
  dictionary: dictionaries[defaultLocale],
});

export function TranslationProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const value = { locale, dictionary: dictionaries[locale] };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const { dictionary, locale } = useContext(TranslationContext);

  function t(path: string): string {
    const value = path.split(".").reduce<unknown>((current, key) => {
      if (typeof current !== "object" || current === null) return undefined;
      return (current as Record<string, unknown>)[key];
    }, dictionary);

    return typeof value === "string" ? value : path;
  }

  return { t, locale };
}
