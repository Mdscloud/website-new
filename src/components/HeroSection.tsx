import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Prominent blue gradient in bottom right - using brand blue #202755, more visible like the reference */}
      <div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-gradient-to-tl from-[#202755]/35 via-[#202755]/25 from-[#5a7aff]/30 to-transparent rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#5a7aff]/25 via-[#5a7aff]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <span className="italic font-normal"> A Nuvem de{" "}</span>
            Alta Performance <span className="italic font-normal">que seu Negócio Exige</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 group"
            >
              {t("hero.cta.primary")}
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border border-foreground/20 bg-background hover:bg-foreground/5 px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 group"
            >
              {t("hero.cta.secondary")}
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
