import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnerLogoSection from "@/components/PartnerSection";
import PriceSection from "@/components/PricingSection";
import TestmonialSection from "@/components/TesmonialSection";
import Image from "next/image";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="isolate">
        <HeroSection />
        <PartnerLogoSection />
        <FeatureSection />
        <TestmonialSection />
        <PriceSection />
        <Faq />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
