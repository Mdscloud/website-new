import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Services3DSection } from "@/components/Services3DSection";
import { AnimatedTestimonialsSection } from "@/components/AnimatedTestimonialsSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { TeamSection } from "@/components/TeamSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <Services3DSection />
        <AnimatedTestimonialsSection />
        <DifferentialsSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
