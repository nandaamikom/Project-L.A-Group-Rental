"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/molecules/SectionHeader";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type Category = "all" | "asia" | "europe" | "america";

// /* ================= CONTENT ================= */
// const galleryContent = {
//   title: "Gallery Tourist",
//   description:
//     "Various kinds of experiences that we have served with many tourists",
// };

export default function Gallery() {
  const [filter, setFilter] = useState<Category>("all");

  const items = [
    {
      title: "Jogja Heritage & Candi Tour",
      image: "/images/company.png",
      country: "asia",
      from: "Tourist From Indonesia",
    },
    {
      title: "Borobudur Sunrise Tour",
      image: "/images/company.png",
      country: "europe",
      from: "Tourist From Germany",
    },
    {
      title: "Prambanan Temple Tour",
      image: "/images/company.png",
      country: "america",
      from: "Tourist From USA",
    },
    {
      title: "City Tour Jogja",
      image: "/images/company.png",
      country: "asia",
      from: "Tourist From Malaysia",
    },
    {
      title: "Beach Tour Gunung Kidul",
      image: "/images/company.png",
      country: "europe",
      from: "Tourist From France",
    },
    {
      title: "Cultural Tour",
      image: "/images/company.png",
      country: "america",
      from: "Tourist From Mexico",
    },
  ];

  const filteredItems =
    filter === "all"
      ? items
      : items.filter((item) => item.country === filter);

  return (
    <div className="relative max-w-7xl mx-auto px-8 md:px-0 py-10 md:py-20">
      {/* <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-4xl font-medium">
          {galleryContent.title}
        </h2>

        <p className="max-w-xl mx-auto text-gray-500 mt-4 text-base md:text-lg">
          {galleryContent.description}
        </p>
      </div> */}
      {/* HEADER */}
      <SectionHeader
        subtitle=""
        title="Gallery Tourist"
        description="Various kinds of experiences that we have served with many tourists."
        className="text-center mb-4"
      />

      {/* ===== FILTER (FIXED LIKE TAB EXAMPLE) ===== */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex justify-center gap-6 md:gap-10 mb-12 text-base md:text-lg font-medium"
      >
        {["all", "asia", "europe", "america"].map((item) => {
          const isActive = filter === item;

          const label =
            item === "all"
              ? "All"
              : item === "asia"
                ? "Asia"
                : item === "europe"
                  ? "Europe"
                  : "America";

          return (
            <button
              key={item}
              onClick={() => setFilter(item as Category)}
              className={`relative pb-2 transition-colors ${isActive
                ? "text-blue-600"
                : "text-gray-400 hover:text-black"
                }`}
            >
              {label}

              {isActive && (
                <motion.div
                  layoutId="activeGalleryTab"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-600"
                />
              )}
            </button>
          );
        })}
      </motion.div>

      {/* ===== GRID ===== */}
      <motion.div
        key={filter}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
      >
        {filteredItems.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-4">
                {item.title}
              </h3>

              <span className="block w-20 h-[3px] bg-yellow-400"></span>

              <p className="text-sm md:text-base text-gray-500 mt-2">
                {item.from}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}