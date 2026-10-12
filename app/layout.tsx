import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

import SiteChrome from "./components/Layout/SiteChrome";
import { TranslationProvider } from "./Language/translator";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Assayel | Import and Export",
  description:
    "From origin to the world. Connecting businesses across China, Egypt, and Saudi Arabia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={barlow.variable}>
      <body className="antialiased">
        <TranslationProvider>
          <SiteChrome>{children}</SiteChrome>
        </TranslationProvider>
      </body>
    </html>
  );
}