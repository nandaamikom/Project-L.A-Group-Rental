"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const companyContent = {
  title: "Company Profile",
  description:
    "A Group is a leading premium tourism service provider in Indonesia. With over six years of experience, we are committed to providing the best experiences for every client.",
  services: [
    "Tour Packages - exotic destinations",
    "Vehicle Rental - premium fleet",
    "Private Trip - with guide",
    "Group Tour - affordable prices",
  ],
};

export default function CompanyProfile() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-20 grid md:grid-cols-2 gap-8 md:gap-10 items-center">

      {/* IMAGE */}
      <div className="relative w-full h-64 md:h-87.5 order-1 md:order-2">
        <Image
          src="/images/company.png"
          alt="company"
          fill
          className="rounded-2xl object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="order-2 md:order-1 text-justify md:text-left">
        <h2 className="text-2xl md:text-4xl font-medium text-gray-800 mb-4 text-center md:text-left">
          {companyContent.title}
        </h2>

        <p className="text-sm md:text-lg text-gray-600 mb-4">
          {companyContent.description}
        </p>

        <ul className="text-sm md:text-lg space-y-3 text-gray-600">
          <li className="font-semibold text-gray-800">Our Services :</li>

          {companyContent.services.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <div className="p-2 bg-green-50 rounded-full">
              <Check className="w-4 h-4 mt-0 md:mt-1 text-green-500 shrink-0" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}