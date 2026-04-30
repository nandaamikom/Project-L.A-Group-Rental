"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { tours } from "@/features/tourpackages/services/tours";
import { useState, useEffect } from "react";
import { ArrowLeft, Users, Car, MapPin, Clock, CheckCircle, XCircle, Bus, } from "lucide-react";
import Button from "@/components/atoms/button";
import { patternKawung } from "@/lib/pattern";

export default function TourDetailPage() {
    const { id } = useParams();
    const router = useRouter();

    const tour = tours.find((t) => t.id === id);

    const [participants, setParticipants] = useState(10);
    const [selectedVehicle, setSelectedVehicle] = useState(0);

    useEffect(() => {
        setParticipants(Math.min(participants, selected.capacity));
    }, [selectedVehicle]);

    if (!tour) return <div>Tour not found</div>;

    const vehicles =
        tour.type === "private"
            ? [
                {
                    name: "Avanza or Xenia",
                    price: tour.price,
                    capacity: 6,
                    features: ["AC", "Reclining Seat", "Audio System"],
                },
                {
                    name: "Innova",
                    price: tour.price + 500000,
                    capacity: 6,
                    features: ["AC", "Reclining Seat", "Audio System"],
                },
            ]
            : [
                {
                    name: "Mini Bus",
                    price: tour.price,
                    capacity: 6,
                    features: ["AC", "Reclining Seat", "Audio System"],
                },
                {
                    name: "Medium Bus",
                    price: tour.price + 100000,
                    capacity: 20,
                    features: ["AC", "Reclining Seat", "Audio System"],
                },
            ];

    const selected = vehicles[selectedVehicle];

    const total =
        tour.type === "group"
            ? selected.price * participants
            : selected.price;

    return (
        <div className="min-h-screen">
            {/* ================= HERO SECTION ================= */}
            <section className="relative overflow-hidden px-8 md:px-0 py-10 md:py-20 bg-gradient-to-b from-[#1b357e] via-[#1e3a7a] to-[#1e40af]">
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
                    {/* BACK LINK */}
                    <Link
                        href="/tourpackages"
                        className="text-sm text-white mb-6 inline-block transition-all duration-300 hover:text-blue-100 hover:translate-x-1 flex items-center gap-1"
                    >
                        ← Back to Tour Packages
                    </Link>

                    {/* HERO */}
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                        <Image src={tour.image} alt={tour.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/30" />

                        <div className="absolute bottom-6 left-6 text-white">
                            <h1 className="text-2xl md:text-4xl font-medium">
                                {tour.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* LEFT */}
                    <div className="md:col-span-2 space-y-8">
                        {/* DESC */}
                        <p className="text-gray-600 text-base md:text-lg">{tour.description}</p>

                        {/* INFO */}
                        <div className="flex flex-wrap gap-3 ">
                            <div className="bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2 text-sm md:text-base">
                                <Clock className="w-4 h-4 md:w-6 md:h-6" /> {tour.duration}
                            </div>
                            <div className="bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2 text-sm md:text-base">
                                <Car className="w-4 h-4 md:w-6 md:h-6" /> {tour.vehicle}
                            </div>
                            <div className="bg-white px-4 py-2 rounded-lg shadow flex items-center gap-2 text-sm md:text-base">
                                <MapPin className="w-4 h-4 md:w-6 md:h-6" /> {tour.location}
                            </div>
                        </div>

                        {/* DESTINATION */}
                        <div>
                            <h3 className="font-medium mb-4 text-xl md:text-2xl">Destination</h3>
                            <div className="flex flex-wrap gap-2">
                                {tour.destinations.map((d, i) => (
                                    <span
                                        key={i}
                                        className="bg-yellow-400 text-white text-xs md:text-sm px-3 py-1 rounded-full"
                                    >
                                        {d}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* COST INFO */}
                        <div>
                            <h3 className="font-medium mb-4 text-xl md:text-2xl">
                                Cost Information
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4">
                                {/* INCLUDED */}
                                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                                        <CheckCircle className="w-5 h-5" />
                                        Included in Package
                                    </h4>

                                    <ul className="text-sm text-gray-600 space-y-2">
                                        {["Transportation", "Tour guide", "Tickets"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* NOT INCLUDED */}
                                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-red-700">
                                        <XCircle className="w-5 h-5" />
                                        Not Included
                                    </h4>

                                    <ul className="text-sm text-gray-600 space-y-2">
                                        {["Meals", "Personal expenses"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <XCircle className="w-4 h-4 text-red-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* VEHICLES */}
                        <div>
                            <h3 className="font-medium mb-4 text-xl md:text-2xl">
                                Vehicle
                            </h3>

                            <div className="space-y-3">
                                {vehicles.map((v, i) => {
                                    const isActive = selectedVehicle === i;

                                    return (
                                        <div
                                            key={i}
                                            onClick={() => setSelectedVehicle(i)}
                                            className={`rounded-xl p-4 cursor-pointer border transition-all
                                                ${isActive
                                                    ? "border-blue-900 bg-blue-50"
                                                    : "border-gray-200 bg-white hover:shadow"
                                                }`}
                                        >
                                            {/* TOP */}
                                            <div className="flex justify-between items-start">
                                                <div className="flex gap-3">
                                                    {/* ICON */}
                                                    <div className="mt-1">
                                                        {tour.type === "group" ? (
                                                            <Bus className="w-5 h-5 text-blue-900" />
                                                        ) : (
                                                            <Car className="w-5 h-5 text-blue-900" />
                                                        )}
                                                    </div>

                                                    {/* TITLE */}
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <p className="font-medium text-gray-800 text-base md:text-lg">
                                                                {v.name}
                                                            </p>

                                                            {/* CHECK ICON (ACTIVE) */}
                                                            {isActive && (
                                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                                            )}
                                                        </div>

                                                        {/* CAPACITY */}
                                                        <p className="text-[10px] md:text-xs text-gray-500 flex items-center gap-1 mt-1">
                                                            <Users className="w-3 h-3 md:w-4 md:h-4" />
                                                            Max {v.capacity} people
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* PRICE */}
                                                <p className="text-base md:text-lg font-semibold text-blue-900">
                                                    Rp {v.price.toLocaleString()}
                                                    {tour.type === "group" && "/people"}
                                                </p>
                                            </div>

                                            {/* FEATURES */}
                                            <div className="flex gap-2 mt-3 flex-wrap">
                                                {v.features.map((f, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-xs md:text-sm px-2 py-1 rounded-full bg-gray-50 text-gray-500"
                                                    >
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* PARTICIPANTS */}
                        {tour.type === "group" && (
                            <div>
                                {/* TITLE */}
                                <h3 className="font-medium text-lg md:text-2xl mb-2">
                                    Number of participants
                                </h3>

                                {/* SUBTEXT */}
                                <p className="text-sm text-gray-500 mb-4">
                                    {selected.name} Capacity: Max {selected.capacity} people
                                </p>

                                {/* COUNTER */}
                                <div className="flex items-center gap-2">
                                    {/* MINUS */}
                                    <Button
                                        variant="outline"
                                        onClick={() =>
                                            setParticipants((p) => Math.max(1, p - 1))
                                        }
                                        className="!p-0 w-9 h-9 flex items-center justify-center rounded-lg"
                                    >
                                        −
                                    </Button>

                                    {/* VALUE */}
                                    <div className="w-14 h-9 border border-gray-300 rounded-lg flex items-center justify-center text-sm font-medium">
                                        {participants}
                                    </div>

                                    {/* PLUS */}
                                    <Button
                                        variant="outline"
                                        onClick={() =>
                                            setParticipants((p) =>
                                                Math.min(selected.capacity, p + 1)
                                            )
                                        }
                                        className="!p-0 w-9 h-9 flex items-center justify-center rounded-lg"
                                    >
                                        +
                                    </Button>

                                    {/* LABEL */}
                                    <span className="ml-2 text-sm text-gray-600">
                                        People
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* COST BREAKDOWN */}
                        <div>
                            <h3 className="font-medium mb-4 text-xl md:text-2xl">
                                Cost breakdown
                            </h3>

                            <div className="bg-white rounded-xl border overflow-hidden text-sm md:text-base">
                                {/* ===== GROUP TOUR ===== */}
                                {tour.type === "group" ? (
                                    <>
                                        <div className="flex justify-between px-4 py-3 border-b">
                                            <span className="text-gray-600">
                                                Price per person ({selected.name})
                                            </span>
                                            <span className="font-medium">
                                                Rp {selected.price.toLocaleString()}
                                            </span>
                                        </div>

                                        <div className="flex justify-between px-4 py-3 border-b">
                                            <span className="text-gray-600">
                                                Number of participants
                                            </span>
                                            <span className="font-medium">
                                                {participants} People
                                            </span>
                                        </div>

                                        <div className="flex justify-between px-4 py-3 border-b bg-gray-50">
                                            <span className="font-medium text-gray-700">
                                                Group Totals
                                            </span>
                                            <span className="font-semibold text-blue-900">
                                                Rp {(selected.price * participants).toLocaleString()}
                                            </span>
                                        </div>

                                        <div className="flex justify-between px-4 py-3">
                                            <span className="text-gray-600">
                                                Price per person
                                            </span>
                                            <span className="font-medium">
                                                Rp {selected.price.toLocaleString()}
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    /* ===== PRIVATE CAR ===== */
                                    <>
                                        <div className="flex justify-between px-4 py-3 border-b">
                                            <span className="text-gray-600">Vehicle</span>
                                            <span className="font-medium">{selected.name}</span>
                                        </div>

                                        <div className="flex justify-between px-4 py-3 border-b">
                                            <span className="text-gray-600">
                                                Maximum Capacity
                                            </span>
                                            <span className="font-medium">
                                                {selected.capacity} People
                                            </span>
                                        </div>

                                        <div className="flex justify-between px-4 py-3 bg-gray-50">
                                            <span className="font-medium text-gray-700">
                                                Price per car
                                            </span>
                                            <span className="font-semibold text-blue-900">
                                                Rp {selected.price.toLocaleString()}
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* NOTE */}
                            <p className="text-xs text-gray-400 mt-3">
                                ⚠ Meal costs during the trip are borne by the tour participants.
                            </p>
                        </div>
                        {/* ITINERARY */}
                        {/* ITINERARY */}
                        <div>
                            <h3 className="font-semibold mb-6 text-xl md:text-2xl">
                                Travel Itinerary
                            </h3>

                            <div className="space-y-8">
                                {[1, 2, 3, 4].map((day, idx) => (
                                    <div key={idx} className="flex gap-4">

                                        {/* NUMBER + LINE */}
                                        <div className="flex flex-col items-center">
                                            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-900 text-white text-sm">
                                                {day}
                                            </div>
                                            <div className="flex-1 w-[2px] bg-gray-300 mt-1"></div>
                                        </div>

                                        {/* CONTENT */}
                                        <div className="flex-1">
                                            <h4 className="font-medium text-gray-800 mb-3">
                                                Day {day} – Arrival & City Tour
                                            </h4>

                                            <div className="space-y-2 text-sm text-gray-600">

                                                {/* NORMAL ITEM */}
                                                <div className="flex justify-between items-start">
                                                    <span>08.00 – Pickup at Airport or Station</span>
                                                </div>

                                                <div className="flex justify-between items-start">
                                                    <span>10.00 – Check in Hotel</span>
                                                </div>

                                                {/* WITH GREEN BADGE */}
                                                <div className="flex justify-between items-start gap-4">
                                                    <span>13.00 – Kraton Yogyakarta & Taman Sari</span>

                                                    <span className="flex items-center gap-1 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full whitespace-nowrap">
                                                        ✔ Ticket Rp. 30.000 covered by the tour
                                                    </span>
                                                </div>

                                                <div className="flex justify-between items-start">
                                                    <span>16.00 – Take a walk in Malioboro</span>
                                                </div>

                                                {/* WITH RED BADGE */}
                                                <div className="flex justify-between items-start gap-4">
                                                    <span>19.00 – Jogja culinary evening</span>

                                                    <span className="flex items-center gap-1 text-xs bg-red-100 text-red-500 px-2 py-1 rounded-full whitespace-nowrap">
                                                        ⚠ Meal costs are borne by tourists
                                                    </span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="bg-white rounded-xl shadow p-6 h-fit">
                        {/* ===== GROUP TOUR ===== */}
                        {tour.type === "group" ? (
                            <>
                                <h3 className="text-base md:text-lg font-semibold text-gray-700">
                                    Estimated Price
                                </h3>

                                <p className="text-2xl md:text-3xl font-bold text-blue-900 mt-2">
                                    Rp {selected.price.toLocaleString()}
                                </p>

                                <p className="text-sm text-gray-500 mb-4">
                                    Per Person {selected.name}
                                </p>

                                <div className="border-t pt-4 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Vehicle</span>
                                        <span className="font-medium">{selected.name}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Participant</span>
                                        <span className="font-medium">
                                            {participants} People
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Total</span>
                                        <span className="font-semibold text-blue-900">
                                            Rp {(selected.price * participants).toLocaleString()}
                                        </span>
                                    </div>
                                </div>

                                <Button
                                    className="mt-6 w-full"
                                    variant="gradient"
                                    onClick={() =>
                                        window.open("https://wa.me/628123456789", "_blank")
                                    }
                                >
                                    Order Package Now
                                </Button>
                            </>
                        ) : (
                            /* ===== PRIVATE CAR ===== */
                            <>
                                <h3 className="text-base md:text-lg font-semibold text-gray-700">
                                    Package Price
                                </h3>

                                <p className="text-2xl md:text-3xl font-bold text-blue-900 mt-2">
                                    Rp {selected.price.toLocaleString()}
                                </p>

                                <p className="text-sm text-gray-500 mb-4">
                                    {selected.name} car
                                    <br />
                                    Max {selected.capacity} people in a car
                                </p>

                                <div className="border-t pt-4 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Vehicle</span>
                                        <span className="font-medium">{selected.name}</span>
                                    </div>
                                </div>

                                <Button
                                    className="mt-6 w-full"
                                    variant="gradient"

                                    onClick={() =>
                                        window.open("https://wa.me/628123456789", "_blank")
                                    }
                                >
                                    Order Package Now
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
