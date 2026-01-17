import GrainOverlay from "@/components/GrainOverlay";
import HeroSection from "@/components/HeroSection";
import TickerDivider from "@/components/TickerDivider";
import AboutSection from "@/components/AboutSection";
import SeenOnXSection from "@/components/SeenOnXSection";
import MemesGallery from "@/components/MemesGallery";
import TokenomicsSection from "@/components/TokenomicsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <GrainOverlay />
      <HeroSection />
      <TickerDivider />
      <AboutSection />
      <SeenOnXSection />
      <TickerDivider />
      <MemesGallery />
      <TickerDivider />
      <TokenomicsSection />
      <Footer />
    </div>
  );
};

export default Index;
