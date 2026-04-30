import { Users, Settings, Gauge, Fuel } from "lucide-react";
import { Vehicle } from "@/features/pricelist/services/vehicles";

type Props = {
  vehicle: Vehicle;
};

export default function DetailSpecSection({ vehicle }: Props) {
  const specs = [
    {
      icon: Users,
      title: "Passenger Capacity",
      value: vehicle.seat,
    },
    {
      icon: Settings,
      title: "Transmission",
      value: vehicle.drive,
    },
    {
      icon: Gauge,
      title: "Maximum Speed",
      value: "100 Km/H",
    },
    {
      icon: Fuel,
      title: "Fuel Consumption",
      value: vehicle.fuel,
    },
  ];

  return (
    <section className="px-8 md:px-0 py-10 md:py-20">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Vehicle Specifications
        </h2>
        <p className="text-gray-500 mt-2">
          Complete vehicle information
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {specs.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col items-center transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:bg-yellow-50"
              >
                <div
                  className={`shrink-0 p-2.5 rounded-xl bg-yellow-50 group-hover:scale-110 transition-transform duration-300 mb-3`}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-yellow-400 text-yellow-500">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs text-gray-500">{item.title}</p>
                <p className="text-sm font-semibold text-gray-800">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
