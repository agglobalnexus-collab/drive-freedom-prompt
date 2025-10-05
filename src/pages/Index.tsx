import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import TransformationSection from "@/components/TransformationSection";
import AuthoritySection from "@/components/AuthoritySection";
import MethodSection from "@/components/MethodSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemSection />
      <TransformationSection />
      <AuthoritySection />
      <MethodSection />
      <TestimonialsSection />
      <OfferSection />
      <Footer />
    </div>
  );
};

export default Index;
