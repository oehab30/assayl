import ar from "./ar.json";
import en from "./en.json";

export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const dictionaries = { en, ar } as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}