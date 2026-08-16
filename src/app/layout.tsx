import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MessageCircle } from "lucide-react";
import { LanguageProvider } from "@/context/language";
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
  icons: {
    icon: "/GS Sarl logo-01.png",
    shortcut: "/GS Sarl logo-01.png",
    apple: "/GS Sarl logo-01.png",
  },
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
  const whatsappUrl = "https://wa.me/243979000444?text=" + encodeURIComponent("Hello Global Services SARL, I would like to request more information.");

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-white text-slate-900">
        <LanguageProvider>
          {children}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Send inquiry on WhatsApp"
            className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-2.5 py-2 text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
              <MessageCircle size={14} strokeWidth={2.2} />
            </span>
            <span className="hidden text-[10px] font-semibold tracking-[0.16em] uppercase sm:inline">Inquiry?</span>
          </a>
        </LanguageProvider>
      </body>
    </html>
  );
}

