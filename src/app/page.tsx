"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Factory,
  HardHat,
  MapPinned,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/language";

const sectors = [
  {
    title: "Mining & Industrial Supplies",
    text: "High-quality chemical, industrial, and process materials for safe and efficient operations.",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80",
    icon: Factory,
  },
  {
    title: "Construction & Civil Works",
    text: "Roads, drainage systems, infrastructure, and utility works built to specification.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    icon: Building2,
  },
  {
    title: "Industrial Installation",
    text: "Mechanical, water, piping, HVAC, and equipment installation services for demanding sites.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
    icon: HardHat,
  },
];

const reasons = [
  { title: "Local expertise", text: "Deep market knowledge and compliance understanding in the DRC.", icon: MapPinned },
  { title: "Reliable execution", text: "Committed delivery, accountability, and disciplined project management.", icon: BadgeCheck },
  { title: "Safety first", text: "Rigorous HSE standards and strong operational discipline across all activities.", icon: ShieldCheck },
  { title: "Integrated value", text: "Multi-sector capabilities that simplify contracts and supply chains.", icon: BriefcaseBusiness },
];

const process = [
  "Assess operational needs and site requirements",
  "Design practical, compliant solutions",
  "Mobilize qualified teams and resources",
  "Deliver and monitor with quality assurance",
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#eaf3ff] text-slate-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
              alt="Industrial background"
              fill
              className="object-cover opacity-12"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#eaf3ff] via-[#edf5ff]/90 to-[#dfeeff]/80" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
            <div className="flex flex-col justify-center animate-fade-up">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/85 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0d7bc8] shadow-sm ring-1 ring-slate-200">
                <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
                {t("home.badge")}
              </div>

              <h1 className="max-w-2xl text-3xl font-extrabold tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-[3.5rem]">
                {t("home.title")}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">{t("home.description")}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-[#0d7bc8] px-6 py-3.5 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a6db2]"
                >
                  {t("home.primaryCta")}
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 ring-1 ring-slate-200"
                >
                  {t("home.secondaryCta")}
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/90 p-3 shadow-sm ring-1 ring-slate-200">
                  <div className="text-2xl font-black text-[#0d7bc8]">12+</div>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-600">{t("home.statOne")}</p>
                </div>
                <div className="rounded-2xl bg-white/90 p-3 shadow-sm ring-1 ring-slate-200">
                  <div className="text-2xl font-black text-red-600">DRC</div>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-600">{t("home.statTwo")}</p>
                </div>
                <div className="rounded-2xl bg-white/90 p-3 shadow-sm ring-1 ring-slate-200">
                  <div className="text-2xl font-black text-slate-900">24/7</div>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-600">{t("home.statThree")}</p>
                </div>
              </div>
            </div>

            <div className="relative animate-float-soft">
              <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-blue-400/25 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-28 w-28 rounded-full bg-red-400/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-[0_32px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                  alt="Mining and industrial operations"
                  width={1200}
                  height={900}
                  className="h-[540px] w-full object-cover"
                  priority
                />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/96 p-5 text-slate-900 shadow-xl ring-1 ring-slate-200 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Operations</p>
                      <p className="mt-2 text-xl font-black text-slate-900">Industrial reliability built for every service line.</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf5ff] text-[#0d7bc8]">
                      <Truck size={22} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] bg-slate-100 p-6 sm:p-8 lg:p-10">
              <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{t("home.companyProfile")}</p>
                  <h2 className="mt-3 max-w-md text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                    {t("home.companyProfileTitle")}
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white p-4 shadow-sm shadow-slate-200/70">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0d7bc8]">{t("home.idNat")}</p>
                    <p className="mt-3 text-base font-bold text-slate-900">6-490-N14709R</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm shadow-slate-200/70">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-600">{t("home.rccm")}</p>
                    <p className="mt-3 text-base font-bold text-slate-900">LSHI/RCCM/16-B-4265</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm shadow-slate-200/70">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-700">{t("home.nif")}</p>
                    <p className="mt-3 text-base font-bold text-slate-900">A1809847Z</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="overflow-hidden rounded-4xl bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
                alt="About Global Services SARL"
                width={1000}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0d7bc8]">{t("home.aboutLabel")}</p>
              <h2 className="mt-4 text-2xl font-extrabold text-slate-900 md:text-4xl">{t("home.aboutTitle")}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">{t("home.aboutText1")}</p>
              <p className="mt-4 text-lg leading-8 text-slate-600">{t("home.aboutText2")}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0d7bc8]">{t("home.vision")}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{t("about.visionText")}</p>
                </div>
                <div className="rounded-2xl bg-red-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">{t("home.mission")}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{t("about.missionText")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0d7bc8]">{t("home.sectorsLabel")}</p>
              <h2 className="mt-4 text-2xl font-extrabold text-slate-900 md:text-4xl">{t("home.sectorsTitle")}</h2>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {sectors.map(({ title, text, image, icon: Icon }) => (
                <article key={title} className="overflow-hidden rounded-4xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-64 w-full">
                    <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                  </div>
                  <div className="p-7">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf5ff] text-[#0d7bc8]">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">{t("home.reasonsLabel")}</p>
              <h2 className="mt-4 text-2xl font-extrabold text-slate-900 md:text-4xl">{t("home.whyTitle")}</h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {reasons.map(({ title, text, icon: Icon }) => (
                <div key={title} className="rounded-4xl bg-slate-100 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-slate-200">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0d7bc8] text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{t("home.processLabel")}</p>
                <h2 className="mt-4 text-2xl font-extrabold md:text-4xl">{t("home.processTitle")}</h2>
              </div>
              <div className="space-y-4">
                {process.map((step, index) => (
                  <div key={step} className="flex items-start gap-4 rounded-2xl bg-white/5 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d7bc8] font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-lg text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0d7bc8] py-20 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Let’s build together</p>
              <h2 className="mt-3 text-2xl font-extrabold md:text-4xl">{t("home.buildTitle")}</h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#0d7bc8] transition hover:bg-slate-100"
            >
              {t("home.buildCta")}
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
