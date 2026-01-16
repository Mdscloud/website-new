<<<<<<< HEAD
import { useI18n } from "@/lib/i18n";
import { HeroFuturistic } from "@/components/ui/hero-futuristic";
=======
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { HeroFuturistic } from "@/components/ui/hero-futuristic";
import { useState, useEffect, Suspense } from "react";
>>>>>>> f304a7ebf87deb00537bfda1a682323e4ed708af

export function HeroSection() {
  const { t, language } = useI18n();
  
<<<<<<< HEAD
  // Build title from translations
  const buildTitle = () => {
    if (language === "en") {
      return "The High Performance Cloud";
    } else if (language === "es") {
      return "La Nube de Alto Rendimiento";
    }
    // Portuguese (default) - "A Nuvem de Alta Performance que seu Negócio Exige"
    const title1 = t("hero.title.1");
    const highlight = t("hero.title.highlight");
    const title2 = t("hero.title.2");
    return `${title1} ${highlight} ${title2}`.trim();
  };
=======
  const titleWords = [t("hero.title.1"), t("hero.title.highlight"), t("hero.title.2")];
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  
  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 400);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 300);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);
  
  const trustBadges = [
    { icon: Zap, text: t("hero.badge.iops") },
    { icon: Clock, text: t("hero.badge.support") },
    { icon: Shield, text: t("hero.badge.tier") },
  ];
>>>>>>> f304a7ebf87deb00537bfda1a682323e4ed708af

  const glitchAnimation = {
    initial: { 
      opacity: 0, 
      y: 30,
      filter: "blur(10px)"
    },
    animate: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
<<<<<<< HEAD
    <section id="hero" className="relative overflow-hidden pt-16 lg:pt-20">
      <HeroFuturistic
        title={buildTitle()}
        subtitle={t("hero.subtitle")}
      />
=======
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-[#0B123B]">
      {/* 3D Background - positioned on the right */}
      <div className="absolute right-0 top-0 w-full h-full lg:w-[60%]">
        <Suspense fallback={
          <div className="absolute inset-0 bg-gradient-to-l from-gray-100 to-transparent dark:from-[#141d4d]/20 dark:to-transparent" />
        }>
          <HeroFuturistic />
        </Suspense>
      </div>
      
      {/* Subtle gradient overlays for light theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-[#0B123B] dark:via-[#0B123B]/80 dark:to-transparent z-[1]" />
      
      {/* Animated grid pattern - subtle for light theme */}
      <div className="absolute inset-0 z-[2] opacity-10 dark:opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(32, 39, 85, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(32, 39, 85, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Glow effects - subtle for light theme */}
      <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[#5a7aff]/10 dark:bg-[#5a7aff]/20 blur-[150px] z-[1] animate-pulse-slow" />
      <div className="absolute right-1/3 bottom-1/4 h-72 w-72 rounded-full bg-[#FE8B36]/10 dark:bg-[#FE8B36]/15 blur-[120px] z-[1] animate-pulse-slow animation-delay-200" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-32 lg:pt-40">
        <div className="mx-auto max-w-4xl lg:max-w-3xl lg:mr-auto lg:ml-0">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#202755]/20 dark:border-[#5a7aff]/30 bg-[#202755]/5 dark:bg-[#202755]/50 px-5 py-2.5 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="text-sm font-medium text-[#202755] dark:text-white/90">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Animated Title */}
          <div className="mb-8 overflow-hidden">
            <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={glitchAnimation.initial}
                  animate={visibleWords > index ? glitchAnimation.animate : glitchAnimation.initial}
                  className={`inline-block mr-4 ${
                    index === 1 
                      ? 'bg-gradient-to-r from-[#FE8B36] to-[#ff6b00] bg-clip-text text-transparent' 
                      : 'text-[#0B123B] dark:text-white'
                  }`}
                  style={{
                    textShadow: index === 1 ? 'none' : undefined,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Subtitle with glitch effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: subtitleVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 overflow-hidden"
          >
            <p className="max-w-2xl text-lg text-[#202755]/70 dark:text-white/70 md:text-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: subtitleVisible ? 1 : 0, y: subtitleVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 flex flex-col items-start gap-4 sm:flex-row"
          >
            <Button 
              className="group relative overflow-hidden bg-gradient-to-r from-[#FE8B36] to-[#ff6b00] text-white border-0 px-8 py-6 text-lg font-semibold hover:shadow-[0_0_40px_rgba(254,139,54,0.5)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                {t("hero.cta.primary")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00] to-[#FE8B36] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button 
              variant="outline"
              className="border-[#202755]/30 dark:border-[#5a7aff]/50 bg-white/50 dark:bg-[#202755]/30 text-[#202755] dark:text-white backdrop-blur-md px-8 py-6 text-lg font-semibold hover:bg-[#202755]/10 dark:hover:bg-[#5a7aff]/20 hover:border-[#202755]/50 dark:hover:border-[#5a7aff] transition-all duration-300"
            >
              {t("hero.cta.secondary")}
            </Button>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: subtitleVisible ? 1 : 0, y: subtitleVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 md:gap-10"
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#202755]/5 dark:bg-[#202755]/80 backdrop-blur-md border border-[#202755]/20 dark:border-[#5a7aff]/30 transition-all duration-300 group-hover:border-[#FE8B36]/50 group-hover:shadow-[0_0_20px_rgba(254,139,54,0.2)]">
                  <badge.icon className="h-6 w-6 text-[#202755] dark:text-[#5a7aff] group-hover:text-[#FE8B36] transition-colors" />
                </div>
                <span className="text-sm font-semibold text-[#202755]/90 dark:text-white/90">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#202755]/50 dark:text-white/50 uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-[#202755]/50 dark:text-white/50" />
        </motion.div>
      </motion.div>
>>>>>>> f304a7ebf87deb00537bfda1a682323e4ed708af
    </section>
  );
}
