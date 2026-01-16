import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Certificações com as imagens reais
const certifications = [
  {
    id: "iso-27001",
    name: "ISO 27001",
    image: "/assets/certificacoes/framed-certificado-iso-27001-152x152px.png",
    description: "Gestão de Segurança da Informação",
  },
  {
    id: "iso-9001",
    name: "ISO 9001",
    image: "/assets/certificacoes/framed-certificado-iso-9001-152x152px.png",
    description: "Gestão da Qualidade",
  },
  {
    id: "iso-20000",
    name: "ISO 20000",
    image: "/assets/certificacoes/framed-certificado-iso-20000-152x152px.png",
    description: "Gestão de Serviços de TI",
  },
  {
    id: "iso-22301",
    name: "ISO 22301",
    image: "/assets/certificacoes/framed-certificado-iso-22301-152x152px.png",
    description: "Gestão de Continuidade de Negócios",
  },
  {
    id: "isae-3402",
    name: "ISAE 3402",
    image: "/assets/certificacoes/framed-certificado-isae-3402-152x152px.png",
    description: "Relatórios de Garantia de Serviços",
  },
  {
    id: "pci-compliant",
    name: "PCI Compliant",
    image: "/assets/certificacoes/framed-certificado-pci-compliant-152x152px.png",
    description: "Conformidade com PCI DSS",
  },
  {
    id: "ssae-16",
    name: "SSAE 16",
    image: "/assets/certificacoes/framed-certificado-ssae-16-152x152px.png",
    description: "Padrão de Auditoria de Serviços",
  },
  {
    id: "tier-3-design",
    name: "Tier III Design",
    image: "/assets/certificacoes/framed-certificado-tier-3-design-152x152px.png",
    description: "Data Center Tier III - Design",
  },
  {
    id: "tier-3-facility",
    name: "Tier III Facility",
    image: "/assets/certificacoes/framed-certificado-tier-3-facility-152x152px.png",
    description: "Data Center Tier III - Facility",
  },
];

export function CertificationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mostrar 4 certificações por vez
  const itemsPerView = 4;
  const maxIndex = Math.max(0, certifications.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Buttons */}
      <button
        onClick={prev}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full border border-border bg-background p-2 shadow-lg transition-all hover:bg-card hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Certificações anteriores"
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      <button
        onClick={next}
        disabled={currentIndex >= maxIndex}
        className="absolute right-0 top-1/2 z-10 translate-x-4 -translate-y-1/2 rounded-full border border-border bg-background p-2 shadow-lg transition-all hover:bg-card hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Próximas certificações"
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden px-12">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="min-w-[25%] flex-shrink-0 px-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 h-32 w-32 flex items-center justify-center bg-muted rounded-lg overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-full w-full object-contain p-2"
                    onError={(e) => {
                      // Fallback se a imagem não carregar
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="text-center">
                            <div class="text-lg font-bold text-muted-foreground mb-1">${cert.name}</div>
                            <div class="text-xs text-muted-foreground">${cert.description}</div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <h3 className="text-sm font-semibold text-foreground text-center mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-muted-foreground text-center">
                  {cert.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted hover:bg-muted-foreground/50"
            }`}
            aria-label={`Ir para página ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
