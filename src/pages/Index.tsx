import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PipelineSection from "@/components/PipelineSection";
import VideoSection from "@/components/VideoSection";
import SamplesSection from "@/components/SamplesSection";
import PainSolutionSection from "@/components/PainSolutionSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <SamplesSection />
      <PipelineSection />
      <PainSolutionSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
