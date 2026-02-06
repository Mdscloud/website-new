import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Services3DSection } from "@/components/Services3DSection";
import { NewTestimonialsSection } from "@/components/NewTestimonialsSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { TeamSection } from "@/components/TeamSection";
import { TechnologiesCarousel } from "@/components/TechnologiesCarousel";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <Services3DSection />
        <NewTestimonialsSection />
        <DifferentialsSection />
        <TeamSection />
        
        {/* Tecnologias */}
        <section className="py-16 lg:py-20 relative bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-6 max-w-2xl text-center"
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Tecnologias
              </Badge>
              <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                Tecnologias que <span className="text-gradient">utilizamos</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Parceiros tecnológicos e plataformas que garantem a excelência da nossa infraestrutura
              </p>
            </motion.div>
            <TechnologiesCarousel />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
