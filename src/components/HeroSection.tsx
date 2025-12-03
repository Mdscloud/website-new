import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Zap, text: "30.000+ IOPS" },
  { icon: Clock, text: "Suporte 24x7" },
  { icon: Shield, text: "Tier III" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero pt-20 lg:pt-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating Orbs */}
      <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-[100px] animate-pulse-slow" />
      <div className="absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[120px] animate-pulse-slow animation-delay-200" />

      <div className="container relative z-10 mx-auto px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              +15 anos de experiência em infraestrutura cloud
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
          >
            A Nuvem de{" "}
            <span className="text-gradient">Alta Performance</span>
            <br />
            que seu Negócio Exige
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Cloud Computing, Backup em Nuvem, DBA Remoto e ERP SaaS. 
            Infraestrutura 100% gerenciada com a estabilidade e performance 
            que empresas de alta demanda precisam.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="hero" size="xl">
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Teste Grátis 30 Dias
            </Button>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <badge.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="mb-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Parceiros e Certificações
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70">
            {["Oracle", "VMware", "ISO 27001", "Veeam", "Microsoft"].map((partner) => (
              <div
                key={partner}
                className="flex h-12 items-center justify-center rounded-lg border border-border/50 bg-card/50 px-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
              >
                <span className="font-display text-sm font-semibold text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
