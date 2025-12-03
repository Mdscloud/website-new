import { motion } from "framer-motion";
import { Cloud, Database, Server, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Infraestrutura de alta performance com 30.000+ IOPS, redundância total e escalabilidade sob demanda. Data centers Tier III certificados.",
    features: ["Alta disponibilidade", "Escalabilidade automática", "SLA 99.9%"],
    href: "#cloud",
  },
  {
    icon: Database,
    title: "Backup em Nuvem",
    description: "Proteção completa de dados com backup automatizado, retenção flexível e recuperação rápida. Segurança enterprise para seus dados críticos.",
    features: ["Backup automatizado", "Criptografia AES-256", "Recovery garantido"],
    href: "#backup",
  },
  {
    icon: Server,
    title: "DBA Remoto",
    description: "Gestão especializada de banco de dados 24x7. Monitoramento proativo, otimização de performance e suporte técnico dedicado.",
    features: ["Monitoramento 24x7", "Tuning de performance", "Suporte Oracle/SQL"],
    href: "#dba",
  },
  {
    icon: BarChart3,
    title: "ERP SaaS",
    description: "Sistemas empresariais completos em nuvem. ERP, CRM e BI integrados com infraestrutura gerenciada e atualizações automáticas.",
    features: ["Acesso de qualquer lugar", "Integrações nativas", "Updates automáticos"],
    href: "#erp",
  },
];

export function ServicesSection() {
  return (
    <section id="solucoes" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Nossas Soluções
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Infraestrutura Cloud
            <br />
            <span className="text-gradient">Completa e Gerenciada</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções enterprise para empresas que não podem parar. 
            Performance, segurança e suporte especializado 24x7.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={service.href}
                className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card lg:p-8"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground lg:text-2xl">
                  {service.title}
                </h3>
                <p className="mb-6 flex-1 text-muted-foreground">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  Saiba mais
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
