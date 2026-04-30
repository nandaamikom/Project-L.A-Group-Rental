export type TourType = "private" | "group";
export type TourTag = "recommended" | "best" | "new" | "trend";

export type Tour = {
  id: string;
  title: string;
  price: number;
  image: string;

  type: TourType; // private = per car | group = per person
  tags: TourTag[];

  duration: string; // selalu ada
  capacity: number; // FIX: number (biar gampang hitung)
  location: string;

  vehicle: string;
  destinations: string[];

  description: string; // buat halaman detail
};

export const tours: Tour[] = [
  {
    id: "1",
    title: "Jogja Complete Package",
    type: "group",
    price: 650000,
    image: "/images/tour-labuan.jpg",
    tags: ["recommended"],

    duration: "1 Day 1 Night",
    capacity: 10,
    location: "Yogyakarta",

    vehicle: "Mini Bus",
    destinations: [
      "Candi Borobudur",
      "Candi Prambanan",
      "Hutan Pinus Mangunan",
      "Pantai Parangtritis",
    ],

    description:
      "A complete package to enjoy all the beauty of Yogyakarta. Historic temples, exotic beaches, nature, culture, and culinary delights all in one trip.",
  },

  {
    id: "2",
    title: "Jogja Private Trip",
    type: "private",
    price: 2000000,
    image: "/images/tour-yogyakarta.jpg",
    tags: ["best"],

    duration: "1 Day",
    capacity: 6,
    location: "Yogyakarta",

    vehicle: "Avanza / Xenia",
    destinations: ["Borobudur", "Prambanan"],

    description:
      "Enjoy a private and flexible trip with your own vehicle and driver. Perfect for families or small groups.",
  },

  {
    id: "3",
    title: "Private City Tour",
    type: "private",
    price: 2500000,
    image: "/images/tour-bali.jpg",
    tags: ["trend"],

    duration: "1 Day",
    capacity: 4,
    location: "Yogyakarta City",

    vehicle: "City Car",
    destinations: ["Malioboro", "Keraton", "Taman Sari"],

    description:
      "Explore the heart of Yogyakarta with a private city tour experience.",
  },

  {
    id: "4",
    title: "Private Heritage Tour",
    type: "private",
    price: 2700000,
    image: "/images/tour-bromo.jpg",
    tags: ["trend"],

    duration: "1 Day",
    capacity: 4,
    location: "Yogyakarta",

    vehicle: "City Car",
    destinations: ["Borobudur", "Prambanan"],

    description:
      "Discover Yogyakarta’s rich heritage with a comfortable private trip.",
  },

  {
    id: "5",
    title: "Sunrise Merapi Tour",
    type: "group",
    price: 1500000,
    image: "/images/tour-yogyakarta.jpg",
    tags: ["new"],

    duration: "Half Day",
    capacity: 10,
    location: "Mount Merapi",

    vehicle: "Jeep",
    destinations: ["Merapi Lava Tour"],

    description:
      "Experience the stunning sunrise at Mount Merapi with an adventurous jeep tour.",
  },

  {
    id: "6",
    title: "Sunset Beach Tour",
    type: "group",
    price: 1200000,
    image: "/images/tour-yogyakarta.jpg",
    tags: ["new"],

    duration: "Half Day",
    capacity: 10,
    location: "Gunungkidul",

    vehicle: "Mini Bus",
    destinations: ["Pantai Indrayanti", "Pantai Timang"],

    description:
      "Relax and enjoy beautiful sunset views at the best beaches in Yogyakarta.",
  },
];