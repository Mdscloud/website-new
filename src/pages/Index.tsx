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
import tecnologiasBackground from "@/assets/tecnologias-background.jpg";

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
        <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${tecnologiasBackground})`,
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60" />
          
          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-4 max-w-2xl text-center"
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
