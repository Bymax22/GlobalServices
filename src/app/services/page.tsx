import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Mining, Industrial & Chemical Supplies",
    text: "Reliable supply of sulfuric acid, sulfur, grinding balls, industrial pumps, cement, quicklime, bitumen, and mineral processing inputs.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Petroleum, Safety & Medical Supplies",
    text: "Diesel, lubricants, PPE, heavy machinery spare parts, and medical equipment for safe and continuous operations.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Construction, Installation & Civil Works",
    text: "Road construction, drainage and bridge works, industrial installations, machinery repair, and electrical services.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industrial Engineering & Specialized Services",
    text: "Air conditioning systems, HDPE piping, water reticulation, metal construction, transport, and borehole drilling.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Agropastoral & Agricultural Services",
    text: "Agricultural inputs, agropastoral products, and development projects designed to support food security and rural growth.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mining Facilitation & Advisory",
    text: "Legal, strategic, and regulatory support for mineral transactions, purchase, sale, processing, and market facilitation.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Our services</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Practical solutions across the sectors that drive the DRC.</h1>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
                  <div className="relative h-72 w-full">
                    <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                  <div className="p-7">
                    <h2 className="text-2xl font-black text-slate-900">{service.title}</h2>
                    <p className="mt-4 text-base leading-7 text-slate-600">{service.text}</p>
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
