"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/language";

const management = [
  {
    nameKey: "about.leadership",
    roleKey: "about.leadershipRole",
    textKey: "about.leadershipText",
  },
  {
    nameKey: "about.operations",
    roleKey: "about.operationsRole",
    textKey: "about.operationsText",
  },
  {
    nameKey: "about.quality",
    roleKey: "about.qualityRole",
    textKey: "about.qualityText",
  },
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{t("about.heroLabel")}</p>
            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">{t("about.heroTitle")}</h1>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="overflow-hidden rounded-4xl bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Global Services team"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{t("about.backgroundLabel")}</p>
              <h2 className="mt-4 text-2xl font-extrabold text-slate-900 md:text-3xl">{t("about.backgroundTitle")}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">{t("about.intro")}</p>
              <p className="mt-4 text-lg leading-8 text-slate-600">{t("about.intro2")}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{t("about.valuesLabel")}</p>
              <h2 className="mt-4 text-2xl font-extrabold text-slate-900 md:text-4xl">{t("about.valueTitle")}</h2>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {management.map((item) => (
                <div key={item.nameKey} className="rounded-4xl bg-white p-8 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-lg font-black text-white">
                    {t(item.nameKey).charAt(0)}
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{t(item.roleKey)}</p>
                  <h3 className="mt-3 text-2xl font-black text-slate-900">{t(item.nameKey)}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{t(item.textKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">{t("about.visionLabel")}</p>
              <h2 className="mt-4 text-2xl font-extrabold text-slate-900 md:text-4xl">{t("about.purposeTitle")}</h2>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="rounded-4xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-black text-slate-900">{t("about.visionTitle")}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">{t("about.visionText")}</p>
              </div>
              <div className="rounded-4xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-black text-slate-900">{t("about.missionTitle")}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">{t("about.missionText")}</p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {t("about.valueItems").split("|").map((value) => (
                <div key={value} className="rounded-3xl bg-slate-100 p-5 shadow-sm">
                  <div className="mb-3 h-2.5 w-12 rounded-full bg-blue-700" />
                  <p className="text-base leading-7 text-slate-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
