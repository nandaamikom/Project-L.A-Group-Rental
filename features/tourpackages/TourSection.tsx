"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Button from "@/components/atoms/button";
import EmptyState from "@/components/atoms/empty-state";
import TabSearch from "@/components/molecules/TabSearch";
import { Clock, Users, MapPin, Car, Bus } from "lucide-react";
import { tours } from "@/features/tourpackages/services/tours";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function TourSection() {
  const router = useRouter();

  const [activeType, setActiveType] = useState<"private" | "group">("group");
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    0,
    5000000,
  ]);

  const categories = ["Recommended", "Best", "New", "Trend"] as const;

  const tagStyles: Record<string, string> = {
    recommended: "bg-green-100 text-green-600",
    new: "bg-blue-100 text-blue-600",
    best: "bg-red-100 text-red-600",
    trend: "bg-yellow-100 text-yellow-600",
  };

  const normalize = (v: string) => v.toLowerCase();

  /* ================= FILTER (STABLE / NO JUMP) ================= */
  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const matchType = tour.type === activeType;

      const matchSearch = tour.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        selectedFilters.length === 0 ||
        selectedFilters.some((f) =>
          tour.tags.map(normalize).includes(normalize(f))
        );

      const matchPrice =
        tour.price >= priceRange[0] &&
        tour.price <= priceRange[1];

      return matchType && matchSearch && matchCategory && matchPrice;
    });
  }, [activeType, search, selectedFilters, priceRange]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

  const toggleFilter = (item: string) => {
    setSelectedFilters((prev) =>
      prev.includes(item)
        ? prev.filter((f) => f !== item)
        : [...prev, item]
    );
  };

  /* ================= RENDER ================= */
  return (
    <section className="w-full px-8 md:px-0 py-10 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* ================= TABS ================= */}
        <div className="flex justify-center gap-4 md:gap-6 mb-4 text-sm md:text-base">
          {["private", "group"].map((type) => {
            const isActive = activeType === type;

            return (
              <button
                key={type}
                onClick={() => setActiveType(type as any)}
                className={`flex items-center gap-2 p-1 font-medium transition ${isActive
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-400 hover:text-gray-700"
                  }`}
              >
                {type === "private" ? (
                  <Car className="w-4 h-4 md:w-5 md:h-5" />
                ) : (
                  <Bus className="w-4 h-4 md:w-5 md:h-5" />
                )}

                {type === "private"
                  ? "Private Tour (Per Car)"
                  : "Group Tour (Per Person)"}
              </button>
            );
          })}
        </div>
        <p className="text-center text-sm md:text-xl mb-4 font-medium">
          Price per person, mini bus, medium bus, long bus, suitable for large groups
        </p>


        {/* ================= TAB SEARCH ================= */}
        <TabSearch
          searchPlaceholder="Search tour packages..."
          search={search}
          onSearchChange={setSearch}
          categories={categories}
          selectedFilters={selectedFilters}
          onToggleFilter={toggleFilter}
          onClearFilters={() => setSelectedFilters([])}
          extraControls={
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="number"
                placeholder="Min"
                className="w-full md:w-20 border rounded-lg px-2 py-2 text-sm"
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full md:w-20 border rounded-lg px-2 py-2 text-sm"
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
              />
            </div>
          }
        />

        {/* ================= GRID ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: "-500px" }}

          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {filteredTours.length === 0 ? (
            <div className="col-span-full">
              <EmptyState
                title="No tours found"
                description="Try adjusting search or filters"
              />
            </div>
          ) : (
            filteredTours.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group bg-white rounded-2xl shadow overflow-hidden p-4 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-55 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-sm px-2 py-1 rounded-full capitalize ${tagStyles[tag.toLowerCase()] ||
                          "bg-gray-100 text-gray-600"
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-gray-800 mt-3">
                  {item.title}
                </h3>

                {/* META */}
                <div className="mt-3 text-sm text-gray-500 space-y-1">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {item.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="w-4 h-4" /> {item.capacity}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {item.location}
                  </p>
                </div>

                {/* PRICE */}
                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold">
                    {formatPrice(item.price)}
                  </p>

                  <Button
                    variant="gradient"
                    onClick={() =>
                      router.push(`/tourpackages/${item.id}`)
                    }
                  >
                    See Details
                  </Button>
                </div>

                <p className="text-xs text-gray-400 mt-1">
                  {item.type === "private"
                    ? "Price per car"
                    : "Price per person"}
                </p>
              </motion.div>
            ))
          )}
        </motion.div>

      </div>
    </section>
  );
}