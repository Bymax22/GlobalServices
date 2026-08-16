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
  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center animate-fade-up">
              <span className="mb-5 inline-flex w-fit items-center rounded-full bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                Trusted partner in the DRC
              </span>

              <h1 className="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Mining, industrial, and infrastructure solutions that move business forward.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Delivering high-quality chemical and industrial supplies, civil works, machinery services,
                and multi-sector solutions across the Democratic Republic of Congo with integrity, safety,
                and operational excellence.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3.5 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800"
                >
                  Explore services
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Speak to our team
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div>
                  <div className="text-3xl font-black text-blue-400">12+</div>
                  <p className="mt-2 text-sm text-slate-300">Core service lines</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-red-400">DRC</div>
                  <p className="mt-2 text-sm text-slate-300">Local market focus</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">24/7</div>
                  <p className="mt-2 text-sm text-slate-300">Operational support</p>
                </div>
              </div>
            </div>

            <div className="relative animate-float-soft">
              <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-blue-600/30 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-28 w-28 rounded-full bg-red-500/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-4xl bg-slate-900 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                  alt="Mining and industrial operations"
                  width={1200}
                  height={900}
                  className="h-145 w-full object-cover"
                  priority
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white p-5 text-slate-900 shadow-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Operations</p>
                      <p className="mt-2 text-xl font-black text-slate-900">Industrial reliability</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
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
            <div className="rounded-4xl bg-slate-100 p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Company profile</p>
                  <h2 className="mt-3 text-3xl font-black text-slate-900">Built around integrity, safety, and service.</h2>
                </div>
                <div className="md:col-span-2 grid gap-6 sm:grid-cols-3">
                  <div>
                    <div className="text-3xl font-black text-blue-700">ID.NAT</div>
                    <p className="mt-2 text-sm text-slate-600">6-490-N14709R</p>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-red-600">RCCM</div>
                    <p className="mt-2 text-sm text-slate-600">LSHI/RCCM/16-B-4265</p>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-slate-900">NIF</div>
                    <p className="mt-2 text-sm text-slate-600">A1809847Z</p>
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">About us</p>
              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">A reliable Congolese partner for multi-sector growth.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Global Services SARL was established to contribute to the economic development of the Democratic
                Republic of Congo by delivering reliable, ethical, and high-quality services across key sectors.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Our portfolio spans mining and industrial supplies, civil works, environmental services,
                agropastoral initiatives, and advisory support guided by transparency, safety, and respect for
                commitments.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Vision</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    To be a leading Congolese multi-sector services company recognized for excellence and impact.
                  </p>
                </div>
                <div className="rounded-2xl bg-red-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Mission</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    To deliver high-quality and compliant solutions that support sustainable development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Our sectors</p>
              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">Integrated solutions for demanding environments.</h2>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {sectors.map(({ title, text, image, icon: Icon }) => (
                <article key={title} className="overflow-hidden rounded-4xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-64 w-full">
                    <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                  </div>
                  <div className="p-7">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">{title}</h3>
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">Why choose us</p>
              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">A practical, values-driven partner for long-term growth.</h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {reasons.map(({ title, text, icon: Icon }) => (
                <div key={title} className="rounded-4xl bg-slate-100 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-slate-200">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{title}</h3>
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Our process</p>
                <h2 className="mt-4 text-3xl font-black md:text-5xl">How we support operational success.</h2>
              </div>
              <div className="space-y-4">
                {process.map((step, index) => (
                  <div key={step} className="flex items-start gap-4 rounded-2xl bg-white/5 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="text-lg text-slate-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-700 py-20 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Let’s build together</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Need a dependable partner for your next project?</h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              Contact our team
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
