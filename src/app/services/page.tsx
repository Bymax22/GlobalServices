"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/language";

const services = [
  {
    titleKey: "services.miningTitle",
    textKey: "services.miningText",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titleKey: "services.petroleumTitle",
    textKey: "services.petroleumText",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titleKey: "services.constructionTitle",
    textKey: "services.constructionText",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titleKey: "services.engineeringTitle",
    textKey: "services.engineeringText",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titleKey: "services.agroTitle",
    textKey: "services.agroText",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    titleKey: "services.advisoryTitle",
    textKey: "services.advisoryText",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{t("services.heroLabel")}</p>
            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">{t("services.title")}</h1>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {services.map((service) => (
                <article key={service.titleKey} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
                  <div className="relative h-72 w-full">
                    <Image src={service.image} alt={t(service.titleKey)} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                  <div className="p-7">
                    <h2 className="text-xl font-extrabold text-slate-900">{t(service.titleKey)}</h2>
                    <p className="mt-4 text-base leading-7 text-slate-600">{t(service.textKey)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
