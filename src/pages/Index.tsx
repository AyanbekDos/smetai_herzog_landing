import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainSolutionSection from "@/components/PainSolutionSection";
import PipelineSection from "@/components/PipelineSection";
import VideoSection from "@/components/VideoSection";
import SamplesSection from "@/components/SamplesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PainSolutionSection />
      <PipelineSection />
      <VideoSection />
      <SamplesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
