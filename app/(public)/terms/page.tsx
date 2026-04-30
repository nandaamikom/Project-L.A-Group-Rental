import Hero from "@/components/organisms/Hero";
import HeroCards from "@/components/molecules/HeroCards";
import Policies from "@/features/terms/Policies";
import CTA from "@/components/organisms/CTA";
import {
  ShieldCheck,
  Eye,
  Headphones,
  BadgeCheck,
} from "lucide-react";


export default function TermsPage() {
  const policies = [
    {
      title: "User Consent",
      subtitle: "Our service acceptance policy",
      content:
        "By using LA Group services, You agree to comply with all terms...",
    },
    {
      title: "Service Description",
      subtitle: "The services we provide",
      content: "Details about services...",
    },
    {
      title: "Ordering and payment",
      subtitle: "Ordering and payment procedures",
      content: "Payment details...",
    },
    {
      title: "Customer Responsibilities",
      subtitle: "Your obligations as a customer",
      content: "Customer responsibilities...",
    },
    {
      title: "L.A Group Responsibilities",
      subtitle: "Our commitment to you",
      content: "Company responsibilities...",
    },
  ];


  const heroCards = [
    {
      title: "Protection",
      description: "Your rights and warranties are protected",
      icon: ShieldCheck,
    },
    {
      title: "Transparency",
      description: "All requirements are explained clearly",
      icon: Eye,
    },
    {
      title: "Support",
      description: "The team is ready to answer your questions",
      icon: Headphones,
    },
    {
      title: "Guarantee",
      description: "Our commitment to your safety",
      icon: BadgeCheck,
    },
  ];


  return (
    <>
      {/* HERO */}
      <Hero
        title={
          <div className="flex flex-row md:flex-col items-center md:items-start gap-1.5 md:gap-0 mb-0 md:mb-4">
            <span className="text-yellow-400 block">Terms and</span>
            <span className="text-white block">Conditions</span>
          </div>
        }
        subtitle="We are committed to providing the best travel services with full transparency. Understand your rights and obligations as an LA Group customer."
        layout="split"
        align="left"
      >
        <HeroCards items={heroCards} />
      </Hero>

      {/* POLICIES */}
      <Policies policies={policies} />

      {/* CTA */}
      <CTA />
    </>
  );
}