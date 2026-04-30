"use client";

import Image from "next/image";

export default function CompanyHistory() {
  const items = Array(6).fill({
    year: "2018",
    title: "the company was founded",
    desc: "LA Group was founded with the vision of providing premium quality travel services in Indonesia.",
  });

  return (
    <div className="relative bg-gray-50 px-6 md:px-8 py-10 md:py-20 overflow-hidden">
      
      {/* ===== BATIK ORNAMENT ===== */}
      <Image
        src="/images/background.png"
        alt="ornament"
        width={300}
        height={300}
        className="absolute left-0 top-20 opacity-70"
      />
      <Image
        src="/images/background-2.png"
        alt="ornament"
        width={300}
        height={300}
        className="absolute right-0 bottom-20 opacity-70"
      />

      {/* ===== HEADER ===== */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-medium text-gray-800">
          Company History
        </h2>
        <p className="text-sm md:text-lg text-gray-500 mt-4">
          LA Group's journey from a small startup to a leading travel company in Indonesia
        </p>
      </div>

      {/* ===== TIMELINE ===== */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* LINE */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 -translate-x-1/2" />

        <div className="space-y-12">
          {items.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* ===== NUMBER DOT ===== */}
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 border-yellow-400 bg-white text-sm font-medium text-gray-700 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {i + 1}
                </div>

                {/* ===== LEFT CARD ===== */}
                <div
                  className={`w-full md:w-1/2 ${
                    isLeft
                      ? "md:pr-10 md:text-right"
                      : "md:order-2 md:pl-10"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow p-5 mt-4 md:mt-0">
                    <p className="text-sm md:text-base font-semibold mb-1">
                      {item.year}
                    </p>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 capitalize">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* ===== EMPTY SIDE (DESKTOP) ===== */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}