"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import cloudImage from "@/assets/services/solucoes-cloud.jpeg";
import databaseImage from "@/assets/services/banco-de-dados.jpeg";
import backupImage from "@/assets/services/backup.jpeg";
import securityImage from "@/assets/services/seguranca.jpeg";

const services = [
  {
    title: "Soluções em Cloud",
    description:
      "Infraestrutura de alta performance com 30.000+ IOPS, redundância total e escalabilidade sob demanda. Data centers Tier III certificados no Brasil. Oferecemos infraestrutura cloud completa e gerenciada com alta disponibilidade, escalabilidade automática e SLA 99.9%. Performance superior, segurança robusta e suporte humano especializado 24x7.",
    image: cloudImage,
    href: "/solucoes-cloud",
  },
  {
    title: "Banco de Dados (DBA)",
    description:
      "Gestão especializada de banco de dados 24x7. Monitoramento proativo, otimização de performance e suporte técnico dedicado. Nossa equipe de especialistas oferece gestão completa com tuning de performance, otimização de queries e suporte para Oracle, SQL Server, PostgreSQL e MySQL. Atuação preventiva e corretiva para garantir máxima disponibilidade.",
    image: databaseImage,
    href: "/banco-de-dados",
  },
  {
    title: "Backup em Nuvem",
    description:
      "Proteção completa de dados com backup automatizado, retenção flexível e recuperação rápida. Segurança enterprise para seus dados críticos. Soluções de backup em nuvem com criptografia AES-256, backup automatizado, múltiplas cópias e recuperação rápida garantida. Testes regulares de restauração e RTO/RPO otimizados para seu negócio.",
    image: backupImage,
    href: "/backup",
  },
  {
    title: "Segurança em Cloud",
    description:
      "A Segurança em Cloud da MDS Cloud é parte fundamental da nossa infraestrutura e dos serviços oferecidos aos clientes. Desde o datacenter até o banco de dados, o ambiente é projetado para proteger aplicações críticas como ERP, CRM, PMS e bancos de dados corporativos, garantindo a confidencialidade, integridade e disponibilidade das informações.",
    image: securityImage,
    href: "/seguranca",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function Services3DSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative pt-24 lg:pt-32 pb-20 overflow-hidden" style={{ backgroundColor: 'hsl(232, 70%, 8%)' }}>
      {/* Background azul escuro similar ao Níveis de Parceria */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(232,70%,8%)] via-[hsl(232,70%,12%)] to-[hsl(232,70%,8%)]" />
      
      {/* Background effects */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"></div>
      <div className="absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Cards dos serviços - quatro lado a lado; linha laranja contínua na base conectando visualmente */}
        <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3 items-stretch"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative flex flex-col min-h-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative flex-1 min-h-[420px] lg:min-h-[500px] rounded-xl overflow-hidden border border-white/5 bg-card/50 shadow-lg shadow-black/20">
                  {/* Imagem de fundo */}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay que sobe no hover com gradiente transparente */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  animate={{
                    height: hoveredIndex === index ? '100%' : 'auto',
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    background: hoveredIndex === index 
                      ? 'linear-gradient(to top, rgba(17, 24, 39, 0.98) 0%, rgba(17, 24, 39, 0.95) 20%, rgba(17, 24, 39, 0.85) 40%, rgba(17, 24, 39, 0.6) 60%, rgba(17, 24, 39, 0.3) 80%, transparent 100%)'
                      : 'linear-gradient(to top, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.9) 50%, transparent 100%)'
                  }}
                >
                  <div className="flex flex-col justify-end h-full">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    </div>
                    
                    {/* Descrição completa - aparece no hover */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="mt-4"
                        >
                          <p className="text-sm text-white/90 leading-relaxed mb-4">
                            {service.description}
                          </p>
                          <Button
                            asChild
                            size="sm"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 group/btn"
                          >
                            <a href={service.href}>
                              Saiba Mais
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

          {/* Linha laranja contínua na base - impressão de que as linhas dos cards se conectam */}
          <div
            className="h-1 -mt-1 rounded-full w-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, hsl(var(--primary)) 2%, hsl(var(--primary)) 98%, transparent 100%)',
              boxShadow: '0 0 16px hsl(var(--primary) / 0.5), 0 0 32px hsl(var(--primary) / 0.3)',
            }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
