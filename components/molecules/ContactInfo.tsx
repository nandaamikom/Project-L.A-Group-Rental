import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactInfo() {
  const data = [
    {
      title: "Telephone",
      value: "+62 032 342 4567",
      icon: Phone,
    },
    {
      title: "WhatsApp",
      value: "+62 032 342 4567",
      icon: MessageCircle,
    },
    {
      title: "Email",
      value: "andikatrans@gmail.com",
      icon: Mail,
    },
    {
      title: "Office Address",
      value:
        "Jl. Arjuna No.2, Sidokerto, Purwomartani, Kalasan, Sleman, Yogyakarta",
      icon: MapPin,
    },
    {
      title: "Operational Hours",
      value:
        "Monday to Friday: 09.00 - 17.00\nSaturday: 10.00 - 16.00\nSunday: holiday",
      icon: Clock,
    },
  ];
  return (
    <div className="">
      <h2 className="text-2xl md:text-4xl font-medium mb-6 text-gray-800">
        Contact Information
        <span className="block w-20 h-1  bg-yellow-400 mt-3 rounded-full"></span>

      </h2>

      <div className="space-y-6">
        {data.map((item, i) => {
          const Icon = item.icon;

          return (
            <div key={i} className="flex gap-4 items-start">
              <div className="bg-blue-900 text-white p-3 md:p-4 rounded-lg">
                <Icon className="w-4 h-4 md:w-6 md:h-6" />
              </div>

              <div>
                <p className="text-base md:text-lg font-medium text-gray-800">
                  {item.title}
                </p>
                <p className="text-sm md:text-base text-gray-600 whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}