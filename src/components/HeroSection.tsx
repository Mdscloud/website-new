import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import teamOffice from "@/assets/team-office-2.jpg";

export function HeroSection() {
  const { t } = useI18n();
  
  const trustBadges = [
    { icon: Zap, text: t("hero.badge.iops") },
    { icon: Clock, text: t("hero.badge.support") },
    { icon: Shield, text: t("hero.badge.tier") },
  ];

  return (
    <section className="relative min-h-[85vh] overflow-hidden pt-20 lg:pt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={teamOffice} 
          alt="MDS Cloud Team" 
          className="h-full w-full object-cover"
        />
        {/* Enhanced overlay with multiple gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-4 py-2 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
          >
            {t("hero.title.1")}{" "}
            <span className="text-gradient">{t("hero.title.highlight")}</span>
            <br />
            {t("hero.title.2")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="hero" size="xl">
              {t("hero.cta.primary")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              {t("hero.cta.secondary")}
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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card/80 backdrop-blur-sm border border-border/50">
                  <badge.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
