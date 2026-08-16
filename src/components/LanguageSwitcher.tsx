"use client";

import { languages } from "@/lib/translations";
import { useLanguage } from "@/context/language";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 p-1">
      {languages.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLanguage(option.code)}
          className={[
            "rounded-full px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] transition",
            language === option.code ? "bg-blue-700 text-white" : "text-slate-600 hover:text-slate-900",
          ].join(" ")}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
