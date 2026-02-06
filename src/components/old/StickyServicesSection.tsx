"use client";
import { motion } from "framer-motion";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const servicesContent = [
  {
    title: "Soluções em Cloud",
    description:
      "Infraestrutura de alta performance com 30.000+ IOPS, redundância total e escalabilidade sob demanda. Data centers Tier III certificados no Brasil. Oferecemos infraestrutura cloud completa e gerenciada com alta disponibilidade, escalabilidade automática e SLA 99.9%. Performance superior, segurança robusta e suporte humano especializado 24x7.",
    image: "/assets/imagens/services/cloud.jpg",
  },
  {
    title: "Banco de Dados (DBA)",
    description:
      "Gestão especializada de banco de dados 24x7. Monitoramento proativo, otimização de performance e suporte técnico dedicado. Nossa equipe de especialistas oferece gestão completa com tuning de performance, otimização de queries e suporte para Oracle, SQL Server, PostgreSQL e MySQL. Atuação preventiva e corretiva para garantir máxima disponibilidade.",
    image: "/assets/imagens/services/banco-de-dados.jpg",
  },
  {
    title: "Backup em Nuvem",
    description:
      "Proteção completa de dados com backup automatizado, retenção flexível e recuperação rápida. Segurança enterprise para seus dados críticos. Soluções de backup em nuvem com criptografia AES-256, backup automatizado, múltiplas cópias e recuperação rápida garantida. Testes regulares de restauração e RTO/RPO otimizados para seu negócio.",
    image: "/assets/imagens/services/backup.jpg",
  },
];

export function StickyServicesSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const firstTextRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const cardLength = servicesContent.length;

  // Verificar se o primeiro texto "Soluções em Cloud" está visível
  useEffect(() => {
    const checkVisibility = () => {
      if (!firstTextRef.current) return;
      
      const rect = firstTextRef.current.getBoundingClientRect();
      // Mostra quando o primeiro texto está visível na viewport
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      setIsSectionVisible(isVisible);
    };

    window.addEventListener('scroll', checkVisibility, { passive: true });
    checkVisibility(); // Check inicial

    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = servicesContent.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <section ref={sectionRef} className="relative bg-background" style={{ overflow: 'visible' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/3 h-72 w-72 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-7xl py-16 lg:py-24" style={{ overflow: 'visible' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Nossas Soluções
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Infraestrutura Cloud <span className="text-gradient">Completa</span>
          </h2>
          <p className="text-muted-foreground">
            Soluções enterprise para empresas que não podem parar. Performance, segurança e suporte especializado 24x7.
          </p>
        </motion.div>

        {/* Container principal com altura suficiente */}
        <div
          ref={containerRef}
          className="relative w-full"
          style={{
            height: `${servicesContent.length * 100}vh`,
            minHeight: `${servicesContent.length * 100}vh`,
            overflow: 'visible',
          }}
        >
          <div 
            className="flex flex-col lg:flex-row w-full relative"
            style={{ height: '100%' }}
          >
            {/* Coluna esquerda - Textos */}
            <div className="flex-1 lg:w-1/2" style={{ position: 'relative' }}>
              {servicesContent.map((item, index) => (
                <div
                  key={item.title + index}
                  ref={index === 0 ? firstTextRef : undefined}
                  className="h-screen flex items-center justify-start px-8 lg:px-16"
                  style={{ 
                    height: "100vh",
                    minHeight: "100vh",
                  }}
                >
                  <div className="max-w-2xl">
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6"
                    >
                      {item.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      className="text-lg text-muted-foreground leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coluna direita - Espaçador para layout */}
            <div className="hidden lg:block lg:w-1/2 lg:flex-shrink-0" />
          </div>
          
          {/* Imagem FIXA fora do flexbox - não se move com scroll - só aparece quando a seção está visível */}
          {isSectionVisible && (
            <div
              className="hidden lg:block"
              style={{
                position: 'fixed',
                top: '6rem',
                right: '5%',
                width: '40%',
                maxWidth: '500px',
                height: '600px',
                zIndex: 10,
              }}
            >
            <div 
              style={{
                position: 'relative',
                height: '100%',
                width: '100%',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
            >
              <motion.img
                key={activeCard}
                src={servicesContent[activeCard].image}
                alt={servicesContent[activeCard].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.1), transparent)',
                }}
              />
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
