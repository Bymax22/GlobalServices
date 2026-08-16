"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const details = [
  { label: "Phone", value: "+243 979 000 444", icon: Phone },
  { label: "Alternative phone", value: "+243 857 000 080", icon: Phone },
  { label: "Email", value: "info@globalservices.com", icon: Mail },
  { label: "Address", value: "Lubumbashi, Haut-Katanga Province, DRC", icon: MapPin },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Mining & industrial supplies",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Global Services Inquiry - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject details:\n${formData.message}`,
    );

    window.location.href = `mailto:info@globalservices.com?subject=${subject}&body=${body}`;
    setStatus("Your email app is opening with your inquiry details. Please send the message to complete the quote request.");
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Contact us</p>
            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">Tell us what you need. We’ll help you build the right solution.</h1>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="space-y-5">
              {details.map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-3xl bg-slate-100 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-4xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
              <h2 className="text-2xl font-extrabold text-slate-900">Request a quote</h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
                  <input
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Service</label>
                  <select
                    value={formData.service}
                    onChange={(event) => setFormData({ ...formData, service: event.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700"
                  >
                    <option>Mining & industrial supplies</option>
                    <option>Construction & civil works</option>
                    <option>Industrial installation</option>
                    <option>Agropastoral services</option>
                    <option>Advisory services</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700"
                    placeholder="Tell us about your project or requirement..."
                    required
                  />
                </div>

                {status && (
                  <p aria-live="polite" className="text-sm text-blue-700">
                    {status}
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
