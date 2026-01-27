import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useI18n } from "@/lib/i18n";
import { MegaMenu } from "@/components/MegaMenu";
import mdsLogo from "@/assets/mds-logo.png";

export function Header() {
  const { t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"solucoes" | "sobre" | "conteudo" | "parceiros" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrolledRef = useRef(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const shouldBeScrolled = scrollPosition > 50;
          
          // Só atualiza o estado se realmente mudou
          if (isScrolledRef.current !== shouldBeScrolled) {
            isScrolledRef.current = shouldBeScrolled;
            setIsScrolled(shouldBeScrolled);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Verifica o estado inicial
    isScrolledRef.current = window.scrollY > 50;
    setIsScrolled(isScrolledRef.current);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMegaMenuHover = (variant: "solucoes" | "sobre" | "conteudo" | "parceiros" | null) => {
    // Cancela qualquer timeout pendente
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMegaMenu(variant);
  };

  const handleMegaMenuLeave = (variant: "solucoes" | "sobre" | "conteudo" | "parceiros") => {
    // Delay para permitir movimento do mouse para o menu
    closeTimeoutRef.current = setTimeout(() => {
      if (activeMegaMenu === variant) {
        setActiveMegaMenu(null);
      }
    }, 150);
  };

  const keepMenuOpen = () => {
    // Cancela o timeout quando o mouse entra no menu
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "border-b border-border/40 bg-background/95 backdrop-blur-xl" 
        : "border-b border-transparent bg-transparent backdrop-blur-none"
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between lg:h-16">
          {/* Logo */}
          <a href="/" className="flex items-center" onClick={() => setActiveMegaMenu(null)}>
            <img 
              src={mdsLogo} 
              alt="MDS Cloud Solutions" 
              className="h-8 w-auto md:h-10"
            />
          </a>

          {/* Desktop Navigation - MegaMenu Style */}
          <div className="hidden items-center gap-6 lg:flex">
            {/* Soluções */}
            <div 
              className="relative"
              onMouseEnter={() => handleMegaMenuHover("solucoes")}
              onMouseLeave={() => handleMegaMenuLeave("solucoes")}
            >
              <div className="relative pb-2">
                <button className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                  activeMegaMenu === "solucoes" 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                }`}>
                  Soluções
                  {activeMegaMenu === "solucoes" ? (
                    <ChevronUp className="h-3 w-3" />
                  ) : (
                    <ChevronDown className="h-3 w-3" />
                  )}
                </button>
                {activeMegaMenu === "solucoes" && (
                  <div className="absolute left-0 top-full h-0.5 w-full bg-primary" />
                )}
              </div>
            </div>

            {/* Sobre */}
            <div 
              className="relative"
              onMouseEnter={() => handleMegaMenuHover("sobre")}
              onMouseLeave={() => handleMegaMenuLeave("sobre")}
            >
              <div className="relative pb-2">
                <button className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                  activeMegaMenu === "sobre" 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                }`}>
                  Sobre
                  {activeMegaMenu === "sobre" ? (
                    <ChevronUp className="h-3 w-3" />
                  ) : (
                    <ChevronDown className="h-3 w-3" />
                  )}
                </button>
                {activeMegaMenu === "sobre" && (
                  <div className="absolute left-0 top-full h-0.5 w-full bg-primary" />
                )}
              </div>
            </div>

            {/* Conteúdo */}
            <div 
              className="relative"
              onMouseEnter={() => handleMegaMenuHover("conteudo")}
              onMouseLeave={() => handleMegaMenuLeave("conteudo")}
            >
              <div className="relative pb-2">
                <button className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                  activeMegaMenu === "conteudo" 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                }`}>
                  Conteúdo
                  {activeMegaMenu === "conteudo" ? (
                    <ChevronUp className="h-3 w-3" />
                  ) : (
                    <ChevronDown className="h-3 w-3" />
                  )}
                </button>
                {activeMegaMenu === "conteudo" && (
                  <div className="absolute left-0 top-full h-0.5 w-full bg-primary" />
                )}
              </div>
            </div>

            {/* Parceiros */}
            <div 
              className="relative"
              onMouseEnter={() => handleMegaMenuHover("parceiros")}
              onMouseLeave={() => handleMegaMenuLeave("parceiros")}
            >
              <div className="relative pb-2">
                <button className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                  activeMegaMenu === "parceiros" 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                }`}>
                  Parceiros
                  {activeMegaMenu === "parceiros" ? (
                    <ChevronUp className="h-3 w-3" />
                  ) : (
                    <ChevronDown className="h-3 w-3" />
                  )}
                </button>
                {activeMegaMenu === "parceiros" && (
                  <div className="absolute left-0 top-full h-0.5 w-full bg-primary" />
                )}
              </div>
            </div>

            {/* Contato */}
            <div className="relative">
              <div className="relative pb-2">
                <a
                  href="/contato"
                  className="flex items-center gap-1 text-xs font-medium text-foreground transition-colors hover:text-primary"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>

          {/* Theme Toggle, Language & CTA Button */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSelector />
            <ThemeToggle />
            <Button variant="outline" size="sm" className="text-xs">
              Avaliação gratuita
            </Button>
            <Button variant="default" size="sm" className="text-xs">
              Fale com a equipe de vendas
            </Button>
          </div>

          {/* Mobile Theme Toggle, Language & Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSelector />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setActiveMegaMenu(activeMegaMenu === "solucoes" ? null : "solucoes")}
                  className="flex items-center justify-between text-sm font-medium text-foreground"
                >
                  Soluções
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeMegaMenu === "solucoes" ? "rotate-180" : ""}`} />
                </button>
                {activeMegaMenu === "solucoes" && (
                  <div className="space-y-2 pl-4">
                    <a href="#hotelaria" className="block text-xs text-foreground">Hotelaria</a>
                    <a href="#automotivo" className="block text-xs text-foreground">Automotivo</a>
                    <a href="#agro" className="block text-xs text-foreground">Agronegócio</a>
                    <a href="#industrial" className="block text-xs text-foreground">Industrial</a>
                  </div>
                )}

                <a href="/sobre" className="text-sm font-medium text-foreground">Sobre</a>
                <a href="#conteudo" className="text-sm font-medium text-foreground">Conteúdo</a>
                <button
                  onClick={() => setActiveMegaMenu(activeMegaMenu === "parceiros" ? null : "parceiros")}
                  className="flex items-center justify-between text-sm font-medium text-foreground"
                >
                  Parceiros
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeMegaMenu === "parceiros" ? "rotate-180" : ""}`} />
                </button>
                {activeMegaMenu === "parceiros" && (
                  <div className="space-y-2 pl-4">
                    <a href="/parceiros#levels" className="block text-xs text-foreground">Níveis de Parceria</a>
                    <a href="/parceiros#benefits" className="block text-xs text-foreground">Benefícios</a>
                    <a href="/parceiros#process" className="block text-xs text-foreground">Processo</a>
                    <a href="/parceiros#policy" className="block text-xs text-foreground">Política</a>
                  </div>
                )}
                <a href="/contato" className="text-sm font-medium text-foreground">Contato</a>
                <Button variant="default" className="mt-2 w-full text-xs">
                  Fale com a equipe de vendas
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MegaMenu */}
      <MegaMenu
        isOpen={activeMegaMenu !== null}
        onClose={() => {
          if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
          }
          setActiveMegaMenu(null);
        }}
        onMouseEnter={keepMenuOpen}
        variant={activeMegaMenu}
      />
    </header>
  );
}
