import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-black tracking-tight">
              <span className="text-blue-400">Global</span>
              <span className="text-red-400">Services</span>
            </div>
            <p className="text-sm leading-7 text-slate-300">
              Reliable solutions for sustainable growth across mining, industrial, and infrastructure sectors.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Company</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Mining supplies</li>
              <li>Civil works</li>
              <li>Industrial construction</li>
              <li>Advisory services</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-blue-400" /> Lubumbashi, DRC</li>
              <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-red-400" /> +243 979 000 444</li>
              <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-blue-400" /> info@globalservices.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 text-sm text-slate-400">
          <p>© {currentYear} Global Services SARL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
