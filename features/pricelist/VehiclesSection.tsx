"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Settings, Fuel, Users } from "lucide-react";

import { vehicles } from "@/features/pricelist/services/vehicles";
import Button from "@/components/atoms/button";
import EmptyState from "@/components/atoms/empty-state";
import TabSearch from "@/components/molecules/TabSearch";

import {
  WayangCornerTopLeft,
  WayangCornerTopRight,
  WayangCornerBottomLeft,
  WayangCornerBottomRight,
} from "@/components/atoms/wayang-ornament";

import { fadeInUp, staggerContainer } from "@/lib/animations";

/* =========================
  DATA
========================= */
const categories = [
  "Self Drive",
  "With Driver",
  "100km/L",
  "15km/L",
  "10km/L",
  "2 Seat",
  "5 Seat",
  "12 Seat",
] as const;

/* =========================
  COMPONENT
========================= */
export default function VehicleCard() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  /* FILTER (STABLE) */
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v) => {
      const matchTab = activeTab === "all" || v.type === activeTab;

      const matchSearch = v.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        selectedFilters.length === 0 ||
        selectedFilters.includes(v.drive) ||
        selectedFilters.includes(v.fuel) ||
        selectedFilters.includes(v.seat);

      return matchTab && matchSearch && matchCategory;
    });
  }, [activeTab, search, selectedFilters]);

  /* TOGGLE FILTER */
  const toggleFilter = (item: string) => {
    setSelectedFilters((prev) =>
      prev.includes(item)
        ? prev.filter((f) => f !== item)
        : [...prev, item]
    );
  };

  /* =========================
    RENDER
  ========================= */
  return (
    <section className="w-full bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 md:px-0 py-10 md:py-20">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-10 relative">

          <h2 className="text-2xl md:text-4xl font-medium">
            Find Your Perfect Ride
          </h2>
          <p className="text-sm md:text-lg text-gray-500 mt-4">
            Collection of premium vehicles at transparent prices.
          </p>

          {/* ================= TAB ================= */}
          <motion.div
            className="flex justify-center gap-6 mt-6 text-base md:text-xl font-medium"
          >
            {["all", "motorcycle", "car", "minibus"].map((tab) => {
              const isActive = activeTab === tab;

              const label =
                tab === "all"
                  ? "All"
                  : tab === "motorcycle"
                    ? "Motorcycles"
                    : tab === "car"
                      ? "Cars"
                      : "Minibus";

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-2 transition-colors ${isActive
                    ? "text-blue-500"
                    : "text-gray-400 hover:text-black"
                    }`}
                >
                  {label}

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* ================= Tab Search ================= */}
          <div className="mt-6">
            <TabSearch
              searchPlaceholder="Search vehicle..."
              search={search}
              onSearchChange={setSearch}
              categories={categories}
              selectedFilters={selectedFilters}
              onToggleFilter={toggleFilter}
              onClearFilters={() => setSelectedFilters([])}
            />
          </div>

        </div>

        {/* ================= GRID ================= */}
        {filteredVehicles.length === 0 ? (
          <EmptyState
            title="No vehicles found"
            description="Try adjusting search or filters"
          />
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: "-500px" }}
            className="
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      gap-6
      auto-rows-fr
      items-stretch
    "
          >
            {filteredVehicles.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="
          group
          relative
          bg-white rounded-3xl
          shadow-sm hover:shadow-xl
          transition-all duration-300
          p-4
          flex flex-col
          min-h-85
          w-full
          overflow-hidden
        "
              >

                {/* ================= WAYANG ORNAMENT ================= */}
                <WayangCornerTopLeft className="absolute -top-1 -left-1 w-16 md:w-20 opacity-25 transition-opacity duration-300 group-hover:opacity-80 pointer-events-none z-0" />
                <WayangCornerTopRight className="absolute -top-1 -right-1 w-16 md:w-20 opacity-25 transition-opacity duration-300 group-hover:opacity-80 pointer-events-none z-0" />
                <WayangCornerBottomLeft className="absolute -bottom-1 -left-1 w-16 md:w-20 opacity-25 transition-opacity duration-300 group-hover:opacity-80 pointer-events-none z-0" />
                <WayangCornerBottomRight className="absolute -bottom-1 -right-1 w-16 md:w-20 opacity-25 transition-opacity duration-300 group-hover:opacity-80 pointer-events-none z-0" />
              

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* IMAGE */}
                  <div className="relative w-full h-40 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* NAME */}
                  <h3 className="font-medium text-gray-800 text-lg md:text-xl mt-2">
                    {item.name}
                  </h3>

                  {/* PRICE + STATUS */}
                  <div className="flex justify-between items-center mt-2 md:mt-4">
                    <span className="text-xs md:text-sm px-2 py-1 rounded-full bg-green-100 text-green-600">
                      {item.status}
                    </span>

                    <span className="text-blue-900 font-semibold">
                      {item.price}
                    </span>
                  </div>

                  {/* ================= SPECS (HOVER FIX ONLY) ================= */}
                  <div className="flex justify-between gap-4 text-xs text-gray-500 mt-4 border-t pt-2 transition-colors duration-300 group-hover:text-yellow-500 group-hover:border-yellow-400">

                    <div className="flex items-center gap-1 transition-colors duration-300 group-hover:text-yellow-500">
                      <Settings className="w-4 h-4" />
                      {item.drive}
                    </div>

                    <div className="flex items-center gap-1 transition-colors duration-300 group-hover:text-yellow-500">
                      <Fuel className="w-4 h-4" />
                      {item.fuel}
                    </div>

                    <div className="flex items-center gap-1 transition-colors duration-300 group-hover:text-yellow-500">
                      <Users className="w-4 h-4" />
                      {item.seat}
                    </div>

                  </div>

                  {/* BUTTON */}
                  <Link href={`/pricelist/${item.id}`}>
                    <Button variant="gradient" className="w-full mt-4">
                      Rent Now
                    </Button>
                  </Link>

                </div>

              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}