"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionHeader from "@/components/molecules/SectionHeader";

export default function Collaboration() {
  const partners = [
    {
      id: 1,
      name: "Andika Trans",
      logo: "/images/company.png",
      desc: "LA Group provides professional services designed to support your travel needs with reliability, comfort, and premium experience.",
    },
    {
      id: 2,
      name: "Andika Trans",
      logo: "/images/company.png",
      desc: "Trusted partner with years of experience delivering high-quality transportation services.",
    },
    {
      id: 3,
      name: "Andika Trans",
      logo: "/images/company.png",
      desc: "Committed to customer satisfaction with modern fleet and professional drivers.",
    },
  ];

  return (
    <section className="relative px-8 md:px-0 py-10 md:py-20 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          subtitle="COLLABORATION"
          title="Our Partners"
          description="Partner with leading companies to provide the best customer service."
          className="text-center mb-12"
        />
        {/* PARTNERS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-amber-100 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-500 overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative w-full h-56 bg-gradient-to-br from-amber-100 to-yellow-50 overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {partner.desc}
                    </p>
                  </div>

                  {/* Accent Line */}
                  <div className="mt-6 pt-6 border-t border-amber-100">
                    <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}