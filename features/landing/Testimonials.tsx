"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Star, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { patternKawung } from "@/lib/pattern";
import SectionHeader from "@/components/molecules/SectionHeader";

const testimonials = [
  { name: "Viezh Robert", location: "Warsaw, Poland", rating: 4.5, text: "Alhamdulillah, I am satisfied with the service and the motorbikes are all well maintained, the facilities are also ok, 2 helmets & raincoats at affordable prices.", image: "/images/background-tugu-yogyakarta.png" },
  { name: "Siti Amelia", location: "Jakarta, Indonesia", rating: 5, text: "Pelayanan sangat memuaskan...", image: "/images/background-tugu-yogyakarta.png" },
  { name: "Budi Santoso", location: "Yogyakarta, Indonesia", rating: 4.8, text: "Proses cepat dan tidak ribet...", image: "/images/background-tugu-yogyakarta.png" },
  { name: "Daniel Smith", location: "London, UK", rating: 4.7, text: "Great experience...", image: "/images/background-tugu-yogyakarta.png" },
  { name: "Maria Lopez", location: "Madrid, Spain", rating: 4.9, text: "Customer service sangat responsif...", image: "/images/background-tugu-yogyakarta.png" },
  { name: "Ahmad Fauzi", location: "Surabaya, Indonesia", rating: 5, text: "Harga murah, kualitas premium...", image: "/images/background-tugu-yogyakarta.png" },
];

const ITEMS_PER_VIEW = 3;

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(
    0,
    Math.ceil(testimonials.length / ITEMS_PER_VIEW) - 1
  );

  // ✅ FIX prev/next (no glitch)
  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // ✅ memo biar efisien
  const visibleItems = useMemo(() => {
    const start = index * ITEMS_PER_VIEW;
    return testimonials.slice(start, start + ITEMS_PER_VIEW);
  }, [index]);

  return (
    <section className="relative px-8 md:px-0 py-10 md:py-20 overflow-hidden">

      {/* ===== BACKGROUND ===== */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: patternKawung,
          backgroundRepeat: "repeat",
          WebkitMaskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 90%, transparent 100%)",
          maskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 90%, transparent 100%)",
        }}
        
      />

      {/* GLOW */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15)_0%,rgba(234,179,8,0.06)_35%,rgba(234,179,8,0.02)_60%,transparent_80%)] pointer-events-none" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <SectionHeader
          subtitle="TESTIMONIALS"
          title="What Our Customers Say"
          description="Real stories from real travelers around the world"
          highlightWord="last"
          className="text-center mb-12"
        />

        {/* ===== CAROUSEL ===== */}
        <div className="relative">

          {/* BUTTONS */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20"
          >
            <ChevronRight />
          </button>

          {/* CARDS */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {visibleItems.map((item) => (
              <motion.div
                key={item.name}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm">
                    {item.rating}
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6">{item.text}</p>

                <div className="relative w-full h-28 rounded-xl overflow-hidden">
                  <Image src={item.image} alt="testimonial" fill className="object-cover" />

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-sm">
                    <Play className="w-5 h-5 mr-2" />
                    Watch review
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all ${i === index ? "w-6 h-2 bg-blue-900" : "w-2 h-2 bg-gray-400"
                } rounded-full`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}