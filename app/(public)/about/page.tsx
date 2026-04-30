
import CompanyProfile from "@/features/about-us/CompanyProfile";
import CompanyHistory from "@/features/about-us/CompanyHistory";
import Gallery from "@/features/about-us/Gallery";
import Collaboration from "@/features/about-us/Collaboration";
import Hero from "@/components/organisms/Hero";

export default function AboutUsPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <Hero
        title="About L.A Group"
        subtitle="Your Trusted Travel Companion"
        align="center"
        layout="center"
      />
      <CompanyProfile />
      <CompanyHistory />
      <Gallery />
      <Collaboration />
    </>
  );
}
