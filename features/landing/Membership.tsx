"use client";

import React from "react";
import { Check, Trophy, Car } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { scaleUp } from "@/lib/animations";
import Button from "@/components/atoms/button";

export default function MembershipSection() {
  const section = {
    tagline: "EXCLUSIVE MEMBERSHIP",
    stats: [
      { value: "10x", label: "Rental" },
      { value: "1x", label: "Free Reward" },
    ],
    trust: "Reward Guaranteed",
    support: "Track Your Progress",
    includesTitle: "Vehicles Included",
    button: "Ask Admin",
    desc:
      "Get 1 free rental after completing 10 rentals in the small car category.",
  };

  const vehicles = [
    "Toyota Avanza",
    "Honda Brio",
    "Daihatsu Xenia",
    "Suzuki Ertiga",
    "Suzuki Ertiga",
    "Suzuki Ertiga",
  ];

  return (
    <section className="py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-linear-to-br from-yellow-400 via-yellow-500 to-amber-600" />

          {/* PATTERN */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <defs>
                <pattern
                  id="grid"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="15" cy="15" r="2" fill="white" />
                </pattern>
              </defs>
              <rect width="400" height="200" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-6 md:gap-10 p-10 lg:p-14 items-center">
            {/* LEFT */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 text-white text-xs font-semibold rounded-full mb-6 uppercase tracking-wider">
                <Trophy size={14} />
                {section.tagline}
              </span>

              {/* STATS */}
              <div className="flex items-center gap-6 mb-6">
                {section.stats.map((stat, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <span className="text-3xl md:text-5xl text-white/70">
                        →
                      </span>
                    )}
                    <div>
                      <p className="text-5xl lg:text-6xl font-extrabold text-white">
                        {stat.value}
                      </p>
                      <p className="text-white text-sm mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* DESC */}
              <p className="text-white text-sm mb-6 max-w-md">
                {section.desc}
              </p>

              {/* IMAGES */}
              <div className="grid md:grid-cols-2 gap-4">

                {/* ITEM 1 */}
                <div className="flex flex-col items-center hidden md:block ">

                  {/* image hidden di mobile */}
                  <div className="w-full h-52 relative rounded-xl overflow-hidden bg-white/20">
                    <Image
                      src="/images/reward-guaranteed.png"
                      alt="reward"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <span className="mt-2 text-sm text-white font-semibold text-center">
                    {section.trust}
                  </span>
                </div>

                {/* ITEM 2 */}
                <div className="flex flex-col items-center hidden md:block ">

                  {/* image hidden di mobile */}
                  <div className="w-full h-52 relative rounded-xl overflow-hidden bg-white/20">
                    <Image
                      src="/images/tracking-your-progress.png"
                      alt="tracking"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <span className="mt-2 text-sm text-white font-semibold text-center">
                    {section.support}
                  </span>
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Car size={20} className="text-yellow-500" />
                {section.includesTitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {vehicles.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-yellow-200 bg-yellow-50"
                  >
                    <Check className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="gold" type="button" className="w-full">{section.button}</Button>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Promotion applies to small car categories. Terms apply.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}