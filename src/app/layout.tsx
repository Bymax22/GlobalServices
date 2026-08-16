import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.globalservices.com"),
  title: "Global Services SARL | Mining, Industrial & Infrastructure Solutions",
  description:
    "Global Services SARL delivers mining, industrial, civil works, agropastoral, and advisory solutions across the Democratic Republic of Congo.",
  keywords: [
    "Global Services SARL",
    "Mining supplies DRC",
    "Industrial solutions",
    "Construction services",
    "Infrastructure DRC",
  ],
  openGraph: {
    title: "Global Services SARL",
    description:
      "Trusted partner in mining, industrial, and infrastructure solutions in the DRC.",
    type: "website",
    url: "https://www.globalservices.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  );
}

