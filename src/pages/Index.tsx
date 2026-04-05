import HeroSection from "@/components/HeroSection";
import HealthCards from "@/components/HealthCards";
import ImpactSection from "@/components/ImpactSection";
import TimelineSection from "@/components/TimelineSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <HeroSection />
    <HealthCards />
    <ImpactSection />
    <TimelineSection />
    <FooterSection />
  </div>
);

export default Index;
