import { motion } from "framer-motion";
import { Zap, Clock, Shield, Users, Server, Award } from "lucide-react";

const metrics = [
  {
    icon: Zap,
    value: "30.000+",
    label: "IOPS",
    description: "Performance de disco",
  },
  {
    icon: Clock,
    value: "24x7",
    label: "Suporte",
    description: "Equipe dedicada",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime",
    description: "Disponibilidade garantida",
  },
  {
    icon: Server,
    value: "Tier III",
    label: "Data Centers",
    description: "Infraestrutura certificada",
  },
  {
    icon: Users,
    value: "500+",
    label: "Clientes",
    description: "Empresas confiam em nós",
  },
  {
    icon: Award,
    value: "15+",
    label: "Anos",
    description: "De experiência",
  },
];

export function MetricsSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
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
            Por que escolher a MDS Cloud
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Performance que você pode
            <span className="text-gradient"> medir</span>
          </h2>
          <p className="text-muted-foreground">
            Números reais de uma infraestrutura projetada para empresas de alta demanda.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-2xl border border-border/50 bg-background/50 p-6 text-center backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-background"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-1 font-display text-2xl font-bold text-foreground lg:text-3xl">
                {metric.value}
              </div>
              <div className="mb-1 text-sm font-semibold text-foreground">
                {metric.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
