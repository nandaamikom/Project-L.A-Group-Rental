"use client";

import { useState } from "react";
import { Car, MapPin, Phone, Mail } from "lucide-react";
import Separator from "@/components/atoms/separator";

export default function Footer() {
  const [lang, setLang] = useState<"EN" | "ID">("EN");

  return (
    <footer className="w-full bg-[var(--primary)]/95 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">

              <span className="font-bold text-2xl md:text-4xl text-yellow-400">
                L.A Group
              </span>
            </div>

            <p className="text-sm text-gray-300 mb-4">
              {lang === "EN"
                ? "Your trusted partner for premium vehicle rentals and unforgettable tour packages across Indonesia and beyond."
                : "Your trusted partner for premium vehicle rentals and unforgettable tour packages across Indonesia and beyond."}
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[Car, MapPin, Phone, Mail].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/10 hover:bg-gold-500/20 transition"
                >
                  <Icon className="w-4 h-4 text-gray-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400  text-lg">
              {lang === "EN" ? "Quick Links" : "Tautan Cepat"}
            </h4>

            <ul className="space-y-2 text-sm text-gray-300">
              {(lang === "EN"
                ? ["Home", "Catalog", "Tour Packages", "About Us", "Contact"]
                : ["Beranda", "Katalog", "Paket Tour", "Tentang Kami", "Kontak"]
              ).map((link) => (
                <li key={link}>
                  <a className="hover:text-gold-500 transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400 text-lg">
              {lang === "EN" ? "Contact Us" : "Hubungi Kami"}
            </h4>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-gold-500" />
                <span>Jl. Bypass Ngurah Rai No. 21, Bali</span>
              </li>

              <li className="flex gap-2">
                <Phone className="w-4 h-4 text-gold-500" />
                <span>+62 361 123 4567</span>
              </li>

              <li className="flex gap-2">
                <Mail className="w-4 h-4 text-gold-500" />
                <span>hello@drivenusa.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400  text-lg">
              {lang === "EN" ? "Find Us" : "Temukan Kami"}
            </h4>

            <div className="h-36 rounded-2xl flex items-center justify-center bg-white/10 border border-white/10">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-gold-500" />
                <p className="text-xs text-gray-400">Sleman, Yogyakarta</p>
                <a
                  href="https://maps.app.goo.gl/Xg51hUui8gCGMoAa6"
                  target="_blank"
                  className="text-xs text-gold-500 underline text-yellow-400"
                >
                  {lang === "EN" ? "Open in Maps" : "Buka di Maps"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <Separator></Separator>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-row justify-center md:text-lg text-sm text-yellow-300/80">
          <p>
            © 2026 L.A Group. All rights reserved.{" "}
            {lang === "EN" ? "All rights reserved." : "Hak cipta dilindungi."}
          </p>

        </div>
      </div>
    </footer>
  );
}
