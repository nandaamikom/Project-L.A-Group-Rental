"use client";

import { useState } from "react";
import Image from "next/image";
import { Car, Gauge, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { WayangDivider } from "@/components/atoms/wayang-ornament";

type Vehicle = {
  id: string;
  name: string;
  type: string;
  status: string;
  price: string;
  transmission: string;
  fuel: string;
  seat: string;
  image: string;
  category: "car" | "motorcycle";
};

type Filter = "all" | "car" | "motorcycle";

/* =========================
   STATIC DATA
========================= */
const vehicles: Vehicle[] = [
  {
    id: "scoopy-1",
    name: "Honda Scoopy 110",
    type: "1k+ Rents",
    status: "Available",
    price: "100rb/Day",
    transmission: "Matic",
    fuel: "100km/L",
    seat: "2 Seat",
    image: "/images/vehicles/scoopy.png",
    category: "motorcycle",
  },
  {
    id: "brio-1",
    name: "Honda Brio",
    type: "1k+ Rents",
    status: "Booked",
    price: "200rb/Day",
    transmission: "Manual",
    fuel: "120km/L",
    seat: "5 Seat",
    image: "/images/vehicles/new-brio.png",
    category: "car",
  },
  {
    id: "brio-2",
    name: "Honda Brio",
    type: "1k+ Rents",
    status: "Booked",
    price: "200rb/Day",
    transmission: "Manual",
    fuel: "120km/L",
    seat: "5 Seat",
    image: "/images/vehicles/new-brio.png",
    category: "car",
  },
  {
    id: "scoopy-2",
    name: "Honda Scoopy 110",
    type: "1k+ Rents",
    status: "Available",
    price: "100rb/Day",
    transmission: "Matic",
    fuel: "100km/L",
    seat: "2 Seat",
    image: "/images/vehicles/scoopy.png",
    category: "motorcycle",
  },
];

/* =========================
   COMPONENT
========================= */
export default function BestVehicles() {
  const [filter, setFilter] = useState<Filter>("all");

  const categoryLabels = {
    all: "All",
    motorcycle: "Motorcycles",
    car: "Cars",
  };

  const statusLabel = {
    available: "Available",
    booked: "Booked",
  };

  const filteredVehicles =
    filter === "all"
      ? vehicles
      : vehicles.filter((item) => item.category === filter);

  return (
    <section className="px-8 md:px-0 py-10 md:py-20 overflow-hidden">
      <div className=" max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs md:text-sm font-semibold tracking-[0.3em] text-blue-500 mb-3"
          >
            OUR FLEET
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-semibold"
          >
            Best Vehicles <span className="text-yellow-500">Ride</span>
          </motion.h2>


          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center pt-4 origin-center"
          >
            <WayangDivider className="w-30" />
          </motion.div>
        </motion.div>

        {/* FILTER */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-6 md:mb-8 text-base md:text-xl font-medium"
        >
          {(["all", "motorcycle", "car"] as Filter[]).map((item) => {
            const isActive = filter === item;

            return (
              <motion.button
                key={item}
                onClick={() => setFilter(item)}
                whileTap={{ scale: 0.95 }}
                className={`relative capitalize pb-2 ${isActive
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-black"
                  }`}
              >
                {categoryLabels[item]}

                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500"
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* GRID */}
        <motion.div
          key={filter}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-4 gap-4 md:gap-6 "
        >
          {filteredVehicles.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative h-80 md:h-100 rounded-2xl overflow-hidden group hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-lg md:text-xl font-medium">
                    {item.name}
                  </h3>
                  <p className="text-base md:text-lg text-gray-300">
                    {item.type}
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={
                        item.status === "Available"
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      {item.status === "Available"
                        ? statusLabel.available
                        : statusLabel.booked}
                    </span>

                    <span>{item.price}</span>
                  </div>

                  <div className="h-px bg-white/30 mb-2" />

                  <div className="flex justify-between text-xs text-gray-300 mb-3">
                    <span className="flex gap-1 items-center">
                      <Car size={14} /> {item.transmission}
                    </span>
                    <span className="flex gap-1 items-center">
                      <Gauge size={14} /> {item.fuel}
                    </span>
                    <span className="flex gap-1 items-center">
                      <Users size={14} /> {item.seat}
                    </span>
                  </div>

                  <div className="text-center">
                    <button className="text-white border-b border-white text-sm">
                      Explore Now →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}