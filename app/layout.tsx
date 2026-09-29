import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans, Cairo, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { TranslationProvider } from "./Language/translator";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Website",
  description: "Your website description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jakarta.variable} ${cairo.variable} ${inter.variable}`}>
      <body className="font-manrope antialiased">
        <TranslationProvider>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </TranslationProvider>
      </body>
    </html>
  );
}