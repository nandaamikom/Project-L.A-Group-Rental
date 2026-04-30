import Button from "../atoms/button";

export default function CTA() {
  return (
    <div className="bg-blue-900/90 text-center text-white px-6 md:px-8 py-12 md:py-20">
      {/* TEXT */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
        Still Have Questions?
      </h2>

      <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
        Our support team is ready to help you understand our terms and conditions.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 max-w-2xl mx-auto">
        <Button type="button" variant="gold" className="w-full sm:w-auto rounded-lg py-3 px-6 text-blue-900 text-base md:text-lg font-semibold transition-all">Contact via WhatsApp</Button>
        <Button type="button" variant="outline" className="w-full sm:w-auto rounded-lg py-3 px-6 border-2 border-white text-white hover:bg-white/10 text-base md:text-lg font-semibold transition-all">Send message</Button>
      </div>
    </div>
  );
}