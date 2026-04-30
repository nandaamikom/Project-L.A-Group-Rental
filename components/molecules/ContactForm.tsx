import Button from "@/components/atoms/button";
import { Send } from "lucide-react";

export default function ContactForm() {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
                Send Message
            </h2>

            <form className="space-y-5">
                <div>
                    <label className="text-sm md:text-base font-medium text-gray-700 block">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm md:text-base transition"
                    />
                </div>

                <div>
                    <label className="text-sm md:text-base font-medium text-gray-700 block">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm md:text-base transition"
                    />
                </div>

                <div>
                    <label className="text-sm md:text-base font-medium text-gray-700 block">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your telephone number"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm md:text-base transition"
                    />
                </div>

                <div>
                    <label className="text-sm md:text-base font-medium text-gray-700 block">Subject</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm md:text-base transition">
                        <option>Select a subject</option>
                        <option>Booking</option>
                        <option>Information</option>
                        <option>Complaint</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm md:text-base font-medium text-gray-700 block">Message</label>
                    <textarea
                        rows={5}
                        placeholder="Write your message here..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm md:text-base transition resize-none"
                    />
                </div>

                <Button type="submit" variant="blue" icon={<Send size={16} />} className="w-full">


                    Send Message
                </Button>

                <p className="text-xs md:text-sm text-gray-500 text-center pt-2">
                    We respect your privacy. Your data will only be used to respond to your inquiries.
                </p>
            </form>
        </div>
    );
}