"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/language";

const navItems = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/services", key: "nav.services" },
  { href: "/contact", key: "nav.contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const quoteMailto =
    "mailto:info@globalservices.com?subject=" +
    encodeURIComponent("Request for quotation") +
    "&body=" +
    encodeURIComponent(
      "Hello Global Services SARL,\n\nI would like to request a quotation for our project.\n\nCompany / contact name:\nProject scope:\nTimeline:\n\nThank you.",
    );

  return (
    <header className="sticky top-0 z-50 bg-[#0d7bc8] shadow-[0_10px_30px_rgba(13,123,200,0.18)] backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-full bg-white/96 px-4 py-2 shadow-lg shadow-slate-950/10 sm:px-6 sm:py-2.5">
          <Link href="/" className="flex items-center gap-3" aria-label="Global Services homepage">
            <div className="relative h-11 w-11 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200 sm:h-12 sm:w-12">
              <Image
                src="/GS Sarl logo-01.png"
                alt="Global Services SARL logo"
                fill
                className="object-contain p-0.5 sm:p-1"
              />
            </div>
            <div className="flex items-center gap-2 text-lg font-black tracking-tight sm:text-xl">
              <span className="text-[#0d7bc8]">Global</span>
              <span className="text-red-600">Services</span>
            </div>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500 sm:block">SARL</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-semibold text-slate-700 transition hover:text-[#0d7bc8]"
              >
                {t(item.key)}
                <span className="absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#0d7bc8] transition-transform duration-300 hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <a href="tel:+243979000444" className="text-sm font-medium text-slate-600 transition hover:text-[#0d7bc8]">
              {t("nav.phone")}
            </a>
            <a
              href={quoteMailto}
              className="inline-flex items-center justify-center rounded-full bg-[#0d7bc8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a6db2]"
            >
              {t("nav.quote")}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2 text-slate-900 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
            <a
              href={quoteMailto}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white"
            >
              {t("nav.quote")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
