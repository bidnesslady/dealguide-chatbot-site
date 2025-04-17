import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { BrandsSection } from "@/components/brands-section";
import { FeaturesSection } from "@/components/features-section";
import { BenefitsSection } from "@/components/benefits-section";
import { AudienceSection } from "@/components/audience-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { HowItWorks } from "@/components/how-it-works";
import { PricingSection } from "@/components/pricing-section";
import { SignupSection } from "@/components/signup-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <FeaturesSection />
      <BenefitsSection />
      <AudienceSection />
      <TestimonialsSection />
      <HowItWorks />
      <PricingSection />
      <SignupSection />
      <Footer />
    </div>
  );
}
