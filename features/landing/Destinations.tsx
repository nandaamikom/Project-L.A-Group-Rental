"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/atoms/button";
import SectionHeader from "@/components/molecules/SectionHeader";

export default function Destinations() {
  const router = useRouter();

  const section = {
    subtitle: "EXPLORE",
    title: "Recommended Destinations",
    desc: "Handpicked destinations for the ultimate Indonesian travel experience.",
    exploreMore: "Explore More",
  };

  const destinations = [
    {
      title: "Ancient Wonders & Lava Trails",
      description:
        "Uncover the majestic Borobudur and Prambanan, combined with the thrilling Merapi Jeep Tour and Breksi Cliff.",
      image: "/images/destination-borobudur.png",
      location: "Yogyakarta",
    },
    {
      title: "Tropical Paradise Escape",
      description:
        "Experience tropical vibes with beaches, culture, and unforgettable island adventures.",
      image: "/images/tour-bali.jpg",
      location: "Bali",
    },
    {
      title: "Hidden Nature Adventure",
      description:
        "Explore untouched nature, waterfalls, and hidden gems across Indonesia.",
      image: "/images/destinations.png",
      location: "Lombok",
    },
  ];

  return (
    <section className="relative px-8 md:px-0 py-10 md:py-20 overflow-hidden bg-gradient-to-r from-yellow-100/30 via-white to-yellow-100/30">

      {/* ORNAMENT LEFT */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-105 opacity-70 pointer-events-none">
        <Image
          src="/images/background-4.png"
          alt="ornament"
          fill
          className="object-cover object-left"
        />
      </div>

      {/* ORNAMENT RIGHT */}
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-105 opacity-70 pointer-events-none">
        <Image
          src="/images/background-3.png"
          alt="ornament"
          fill
          className="object-cover object-right"
        />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <SectionHeader
          subtitle="EXPLORE"
          title="Recommended Destinations"
          description="Handpicked destinations for the ultimate Indonesian travel experience."
          highlightWord="last"
          className = "text-center mb-12"
        />

        {/* CARDS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* hover tint */}
              <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* location */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                <MapPin size={12} className="text-white" />
                <span className="text-white text-xs font-medium">
                  {dest.location}
                </span>
              </div>

              {/* content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-lg mb-2">
                  {dest.title}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {dest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="text"
            type="button"
            onClick={() => router.push("/tourpackages")}
            icon={<ArrowRight size={16} />}
            className="inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            {section.exploreMore}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}