"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";

const services = [
  {
    title: "Soluções em Cloud",
    description:
      "Infraestrutura de alta performance com 30.000+ IOPS, redundância total e escalabilidade sob demanda. Data centers Tier III certificados no Brasil. Oferecemos infraestrutura cloud completa e gerenciada com alta disponibilidade, escalabilidade automática e SLA 99.9%. Performance superior, segurança robusta e suporte humano especializado 24x7.",
    image: "/assets/imagens/services/cloud.jpg",
    icon: "☁️",
    href: "/solucoes-cloud",
  },
  {
    title: "Banco de Dados (DBA)",
    description:
      "Gestão especializada de banco de dados 24x7. Monitoramento proativo, otimização de performance e suporte técnico dedicado. Nossa equipe de especialistas oferece gestão completa com tuning de performance, otimização de queries e suporte para Oracle, SQL Server, PostgreSQL e MySQL. Atuação preventiva e corretiva para garantir máxima disponibilidade.",
    image: "/assets/imagens/services/banco-de-dados.jpg",
    icon: "🗄️",
    href: "/banco-de-dados",
  },
  {
    title: "Backup em Nuvem",
    description:
      "Proteção completa de dados com backup automatizado, retenção flexível e recuperação rápida. Segurança enterprise para seus dados críticos. Soluções de backup em nuvem com criptografia AES-256, backup automatizado, múltiplas cópias e recuperação rápida garantida. Testes regulares de restauração e RTO/RPO otimizados para seu negócio.",
    image: "/assets/imagens/services/backup.jpg",
    icon: "💾",
    href: "/backup",
  },
];

export function Services3DSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Detectar se está no tema claro
  const isLight = theme === "light" || theme === undefined;

  return (
    <section ref={containerRef} className="relative pt-24 lg:pt-32 pb-0 overflow-hidden" style={{ perspective: "1000px" }}>
      {/* Background ESCURO fixo - mesma configuração do tema escuro, aplicado também no tema claro */}
      <div className="absolute inset-0" style={{ backgroundColor: 'hsl(232, 70%, 8%)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(232,70%,8%)] via-[hsl(232,70%,12%)] to-[hsl(232,70%,8%)]" />
      {/* Efeitos azuis do hero - mesma configuração */}
      <div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-gradient-to-tl from-[#202755]/35 via-[#202755]/25 from-[#5a7aff]/30 to-transparent rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#5a7aff]/25 via-[#5a7aff]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-[#5a7aff]">
            Nossas Soluções
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
            Infraestrutura Cloud <span style={{ color: 'white' }}>Completa</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Soluções enterprise para empresas que não podem parar. Performance, segurança e suporte especializado 24x7.
          </p>
        </motion.div>

        {/* Container com altura para scroll - Cada card precisa de espaço suficiente */}
        <div
          className="relative"
          style={{
            height: `${services.length * 100}vh`,
          }}
        >
          {services.map((service, index) => {
            // Cada card ocupa espaço suficiente no scroll, com sobreposição controlada
            // Card 0: 0.0 - 0.33 (aparece e fica visível)
            // Card 1: 0.28 - 0.66 (aparece e fica visível)
            // Card 2: 0.58 - 1.0 (aparece e fica visível até o final)
            
            const totalCards = services.length;
            const cardWidth = 1.0 / totalCards; // ~0.33 para 3 cards
            const overlap = 0.05; // Sobreposição entre cards
            
            const cardStart = index === 0 
              ? 0 
              : (index * cardWidth - overlap);
            const cardPeakStart = cardStart + 0.10;
            const cardPeakEnd = index === services.length - 1 
              ? 0.98  // Último card fica estável até quase o final
              : cardStart + cardWidth - 0.05;
            const cardEnd = index === services.length - 1 
              ? 1.0  // Último card vai até o final
              : cardStart + cardWidth;

            // Rotação 3D - suave nas bordas, estável no centro
            const rotateX = useTransform(
              scrollYProgress,
              [cardStart, cardPeakStart, cardPeakEnd, cardEnd],
              [45, 0, 0, -45]
            );

            const rotateY = useTransform(
              scrollYProgress,
              [cardStart, cardPeakStart, cardPeakEnd, cardEnd],
              [-20, 0, 0, 20]
            );

            const z = useTransform(
              scrollYProgress,
              [cardStart, cardPeakStart, cardPeakEnd, cardEnd],
              [-200, 0, 0, -200]
            );

            // Opacidade - aparece cedo e fica visível por mais tempo
            // Para o último card, mantém opacidade 1 até o final
            const opacityEnd = index === services.length - 1 ? cardEnd : cardEnd + 0.02;
            const opacity = useTransform(
              scrollYProgress,
              [cardStart - 0.02, cardPeakStart, cardPeakEnd, opacityEnd],
              [0, 1, 1, index === services.length - 1 ? 1 : 0]
            );

            // Scale - suave nas bordas, estável no centro
            const scale = useTransform(
              scrollYProgress,
              [cardStart, cardPeakStart, cardPeakEnd, cardEnd],
              [0.8, 1, 1, 0.8]
            );

            return (
              <div
                key={index}
                className="sticky top-24"
                style={{
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  style={{
                    rotateX,
                    rotateY,
                    z,
                    opacity,
                    scale,
                    transformStyle: "preserve-3d",
                  }}
                  className="w-full max-w-5xl"
                >
                  <div className="grid lg:grid-cols-2 gap-8 bg-card border border-border rounded-2xl p-8 shadow-2xl">
                    {/* Imagem com profundidade 3D */}
                    <motion.div
                      style={{
                        transform: "translateZ(50px)",
                      }}
                      className="relative h-[400px] rounded-xl overflow-hidden"
                    >
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>

                    {/* Conteúdo com profundidade 3D */}
                    <motion.div
                      style={{
                        transform: "translateZ(50px)",
                      }}
                      className="space-y-4 flex flex-col justify-center"
                    >
                      <div className="text-5xl mb-2">{service.icon}</div>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="pt-2">
                        <Button
                          asChild
                          size="default"
                          className="group w-fit"
                        >
                          <a href={service.href}>
                            Saiba Mais
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
