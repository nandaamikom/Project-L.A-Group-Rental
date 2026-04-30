"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/banner-1.png",
    objectPosition: "center",
  },
  {
    src: "/images/banner-2.png",
    objectPosition: "center",
  },
  {
    src: "/images/banner-3.png",
    objectPosition: "center", 
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[40vh] md:h-[70vh] overflow-hidden">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={slide.src}
            alt={`slide-${index}`}
            fill
            priority={index === 0}
            className="object-cover w-full h-full"
            style={{ objectPosition: slide.objectPosition }}
          />
        </div>
      ))}

      {/* OVERLAY */}
      {/* <div className="absolute inset-0 bg-black/10" /> */}

      {/* PREV BUTTON */}
      <button
        onClick={prevSlide}
        className="
    absolute left-4 top-1/2 -translate-y-1/2
    p-3 rounded-full
    bg-white/10 backdrop-blur-md
    border border-white/20
    hover:bg-white/20 hover:scale-105
    active:scale-95
    transition-all duration-300
    shadow-lg
    flex items-center justify-center
  "
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 " />
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={nextSlide}
        className="
    absolute right-4 top-1/2 -translate-y-1/2
    p-3 rounded-full
    bg-white/10 backdrop-blur-md
    border border-white/20
    hover:bg-white/20 hover:scale-105
    active:scale-95
    transition-all duration-300
    shadow-lg
    flex items-center justify-center
  "
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 " />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition ${i === current ? "bg-yellow-400" : "bg-white/60"
              }`}
          />
        ))}
      </div>

    </div>
  );
}