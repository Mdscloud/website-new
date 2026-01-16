import { useI18n } from "@/lib/i18n";
import { HeroFuturistic } from "@/components/ui/hero-futuristic";

export function HeroSection() {
  const { t, language } = useI18n();
  
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

  return (
    <section id="hero" className="relative overflow-hidden pt-16 lg:pt-20">
      <HeroFuturistic
        title={buildTitle()}
        subtitle={t("hero.subtitle")}
      />
    </section>
  );
}
