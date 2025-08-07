import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BetaFormSection from "@/components/BetaFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PartnersSection />
      <HowItWorksSection />
      <BetaFormSection />
      <Footer />
    </div>
  );
};

export default Index;
