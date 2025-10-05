import Hero from "@/components/Hero";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProblemSection from "@/components/ProblemSection";
import TransformationSection from "@/components/TransformationSection";
import AuthoritySection from "@/components/AuthoritySection";
import MethodSection from "@/components/MethodSection";
import OfferSection from "@/components/OfferSection";
import UrgencySection from "@/components/UrgencySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <hr className="max-w-4xl mx-auto border-border" />
      <TestimonialsSection />
      <ProblemSection />
      <TransformationSection />
      <AuthoritySection />
      <MethodSection />
      <OfferSection />
      <UrgencySection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
