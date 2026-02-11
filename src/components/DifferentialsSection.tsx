import { motion } from "framer-motion";
import { HeartHandshake, Clock, Shield } from "lucide-react";

const differentials = [
  {
    icon: HeartHandshake,
    title: "Atendimento humano, técnico e direto",
    description: "Você fala com especialistas que conhecem sua infraestrutura, seu banco de dados e o impacto real de cada decisão no seu negócio. Nada de robôs, filas infinitas ou respostas genéricas.",
  },
  {
    icon: Clock,
    title: "SLA real, com resposta em minutos",
    description: "Plantão 24×7 com equipe própria, tempo de resposta rápido e atuação direta na causa do problema, não apenas no sintoma. Aqui, SLA não é marketing. É operação.",
  },
  {
    icon: Shield,
    title: "Liberdade Contratual",
    description: "Sem cláusula de rescisão porque acreditamos na qualidade do que entregamos. Se não performar como prometido, você é livre para encerrar a qualquer momento.",
  },
];

export function DifferentialsSection() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-secondary/10">
      {/* Background with radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-accent/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Por que a MDS Cloud?
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Nuvem especializada de <span className="text-gradient">alta performance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Equipe de especialistas focada em prover a melhor infraestrutura para seu ERP ou sistema corporativo.
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-8 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Glow effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 opacity-0 blur transition-opacity duration-500 group-hover:opacity-20" />
              
              <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <item.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Numbers Section */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "+1500", label: "clientes" },
            { value: "+ 200k", label: "IOPS" },
            { value: "+ 25 Gbps", label: "largura de banda" },
            { value: "DataCenter", label: "TIER III" },
          ].map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-8 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 text-center"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Glow effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 opacity-0 blur transition-opacity duration-500 group-hover:opacity-20" />
              
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2 transition-colors group-hover:text-primary/90">
                  {stat.value}
                </div>
                {stat.label && (
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
