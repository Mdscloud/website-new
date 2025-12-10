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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-20 bg-background">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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

        {/* Metrics Grid with stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/60 p-6 text-center backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-background/80 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <metric.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="mb-1 font-display text-2xl font-bold text-foreground transition-colors group-hover:text-primary lg:text-3xl">
                  {metric.value}
                </div>
                <div className="mb-1 text-sm font-semibold text-foreground">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
