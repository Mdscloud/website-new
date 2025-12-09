import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { MetricsSection } from "@/components/MetricsSection";
import { TeamSection } from "@/components/TeamSection";
import { VideoTestimonialsSection } from "@/components/VideoTestimonialsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <DifferentialsSection />
        <MetricsSection />
        <TeamSection />
        <VideoTestimonialsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
