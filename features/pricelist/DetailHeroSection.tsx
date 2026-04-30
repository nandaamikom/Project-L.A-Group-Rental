import Link from "next/link";
import Image from "next/image";
import Button from "@/components/atoms/button";
import { Vehicle } from "@/features/pricelist/services/vehicles";

type Props = {
  vehicle: Vehicle;
};

export default function DetailHeroSection({ vehicle }: Props) {
  return (
    <section className="relative overflow-hidden px-8 md:px-0 py-20 md:py-20 bg-gradient-to-b from-[#1b357e] via-[#1e3a7a] to-[#1e40af]">

      {/* ===== SPOTLIGHT FROM TOP ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* TOP SPOTLIGHT - Like Street Lamp */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 1800px 1400px at 50% -300px, rgba(255, 255, 255, 0.8) 0%, rgba(191, 219, 254, 0.6) 15%, rgba(147, 197, 253, 0.4) 30%, rgba(96, 165, 250, 0.2) 50%, rgba(59, 130, 246, 0.1) 70%, transparent 100%)"
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* BACK */}
        <Link 
          href="/pricelist" 
          className="text-sm text-white mb-6 inline-block transition-all duration-300 hover:text-blue-100 hover:translate-x-1 flex items-center gap-1"
        >
          ← Back to Pricelist
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-[280px] md:h-[400px] rounded-2xl overflow-hidden shadow">
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h1 className="text-2xl text-white md:text-4xl font-semibold  mb-3">
              {vehicle.name}
            </h1>

            <p className="text-gray-200 text-sm md:text-base mb-6 max-w-md">
              {vehicle.description}
            </p>

            <p className="text-yellow-500 text-sm mb-1">Start From</p>

            <h2 className="text-2xl text-white md:text-3xl font-semibold  mb-6">
              {vehicle.price}
            </h2>

            <Button variant="blue" className="px-6 py-3 rounded-lg">
              <a
                href={`https://wa.me/6281234567890?text=Saya ingin booking ${vehicle.name}`}
                target="_blank"
              >
                Book Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
