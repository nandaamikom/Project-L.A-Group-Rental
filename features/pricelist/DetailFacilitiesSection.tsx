import { CheckCircle2 } from "lucide-react";

const facilities = [
  "Air Conditioning (AC)",
  "Comfortable Seats",
  "Audio System",
  "Safety Features",
];

export default function DetailFacilitiesSection() {
  return (
    <section className="bg-gray-50 px-8 md:px-0 py-10 md:py-20">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Facilities Provided
        </h2>
        <p className="text-gray-500 mt-2">
          Complete your needs with our facilities
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {facilities.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 border border-gray-200 bg-white rounded-lg px-4 py-3 transition-all duration-300 cursor-pointer hover:border-green-400 hover:shadow-md hover:translate-x-1 hover:bg-green-50"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
