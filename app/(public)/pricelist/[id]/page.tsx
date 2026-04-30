import { notFound } from "next/navigation";
import { vehicles } from "@/features/pricelist/services/vehicles";
import DetailHeroSection from "@/features/pricelist/DetailHeroSection";
import DetailSpecSection from "@/features/pricelist/DetailSpecSection";
import DetailFacilitiesSection from "@/features/pricelist/DetailFacilitiesSection";
import DetailInfoSection from "@/features/pricelist/DetailInfoSection";

type Props = {
  params: { id: string };
};

export default async function DetailPricelist({ params }: Props) {
  const { id } = params;
  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) return notFound();

  return (
    <div className="min-h-screen w-full">
      <DetailHeroSection vehicle={vehicle} />
      <DetailSpecSection vehicle={vehicle} />
      <DetailFacilitiesSection />
      <DetailInfoSection />
    </div>
  );
}