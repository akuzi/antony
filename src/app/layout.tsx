import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antony Kuzmicich",
  description: "Traveler. Photographer. Technologist.",
  metadataBase: new URL("https://antony.akuzi.org"),
  openGraph: {
    title: "Antony Kuzmicich",
    description: "Traveler. Photographer. Technologist.",
    url: "https://antony.akuzi.org",
    siteName: "Antony Kuzmicich",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
