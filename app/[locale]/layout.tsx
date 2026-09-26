import { notFound } from "next/navigation";
import { locales, isLocale } from "../components/Language/i18n";
import { TranslationProvider } from "../components/Language/translator";
import WebsiteShell from "../components/Layout/WebsiteShell";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <TranslationProvider locale={locale}>
      <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
        <WebsiteShell>{children}</WebsiteShell>
      </div>
    </TranslationProvider>
  );
}
