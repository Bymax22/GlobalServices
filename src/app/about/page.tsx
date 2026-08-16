import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const management = [
  {
    name: "Leadership & Strategy",
    role: "Executive oversight",
    text: "Guiding the company with a clear strategic vision, strong governance, and disciplined commercial decisions that prioritize long-term partnership value.",
  },
  {
    name: "Operations & Delivery",
    role: "Project execution",
    text: "Coordinating supply chains, field operations, and project delivery across mining, industrial, and infrastructure assignments with accountability and efficiency.",
  },
  {
    name: "Quality & Compliance",
    role: "Safety and standards",
    text: "Ensuring every engagement follows strong operational standards, procurement discipline, and performance controls that protect our clients and teams.",
  },
];

const values = [
  "Integrity and transparency in every engagement",
  "Quality delivery across all operations and sectors",
  "Professionalism supported by accountability and respect",
  "Partnerships grounded in trust and long-term value",
  "Sustainability and local development at the core of our work",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">About Global Services SARL</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Committed to trusted governance and sustainable growth.</h1>
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Our background</p>
              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">A Congolese company built for multi-sector impact.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Global Services SARL is a Congolese-owned, multi-sector company established to support the rapid
                development of key industries within the Democratic Republic of Congo. Since its foundation, the company
                has expanded its service portfolio and operational reach while maintaining a strong client-focused approach.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Through disciplined execution, strong local knowledge, and dependable partnerships, we continue to position
                ourselves as a trusted service provider for mining companies, contractors, traders, agribusiness operators,
                and institutional clients.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Company values & management</p>
              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">Strong leadership backed by practical values and responsible execution.</h2>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {management.map((item) => (
                <div key={item.name} className="rounded-4xl bg-white p-8 shadow-sm">
                  <div className="mb-5 h-12 w-12 rounded-full bg-blue-700 text-lg font-black text-white flex items-center justify-center">
                    {item.name.charAt(0)}
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{item.role}</p>
                  <h3 className="mt-3 text-2xl font-black text-slate-900">{item.name}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">Vision, mission & values</p>
              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">Purpose-driven execution, built for long-term value.</h2>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="rounded-4xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-black text-slate-900">Vision</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  To be a leading Congolese multi-sector services company recognized for excellence, integrity,
                  and meaningful contribution to the sustainable development of the Democratic Republic of Congo.
                </p>
              </div>
              <div className="rounded-4xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-black text-slate-900">Mission</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  To provide high-quality supplies, construction services, agropastoral solutions, and professional
                  facilitation by leveraging local expertise, strong partnerships, and a commitment to compliance.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {values.map((value) => (
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
