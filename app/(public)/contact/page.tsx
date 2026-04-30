
import Hero from "@/components/organisms/Hero";
import ContactInfo from "@/components/molecules/ContactInfo";
import ContactForm from "@/components/molecules/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Your Trusted Travel Companion"
        align="center"
        layout="center"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-20 grid md:grid-cols-2 gap-8 md:gap-10">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
}
