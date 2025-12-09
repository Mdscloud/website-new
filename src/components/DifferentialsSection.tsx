import { motion } from "framer-motion";
import { HeartHandshake, Clock, Shield, Users, Building2, Laptop, Factory, Phone } from "lucide-react";

const differentials = [
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    description: "Suporte rápido e personalizado. Você fala com pessoas reais que entendem seu negócio, não com robôs.",
  },
  {
    icon: Clock,
    title: "SLA Fora da Curva",
    description: "Tempo de resposta imbatível porque nosso compromisso é com sua satisfação, não com contratos longos.",
  },
  {
    icon: Shield,
    title: "Sem Cláusula de Rescisão",
    description: "Você pode encerrar a qualquer momento. Essa liberdade nos obriga a entregar excelência todos os dias.",
  },
];

const audiences = [
  {
    icon: Laptop,
    title: "Consultores de TI",
    description: "Indique leads e ganhe comissões. Seja nosso parceiro em projetos de cloud.",
  },
  {
    icon: Building2,
    title: "Software Houses",
    description: "Desenvolve sistemas? Temos a infraestrutura cloud ideal para seus clientes.",
  },
  {
    icon: Factory,
    title: "Integradores",
    description: "Automação industrial, câmeras, IoT. Nós cuidamos da nuvem para você.",
  },
  {
    icon: Phone,
    title: "Cliente Final",
    description: "Precisa de cloud? Fale direto conosco. Atendimento rápido e sem burocracia.",
  },
];

export function DifferentialsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow" />
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
            Compromisso que você <span className="text-gradient">sente na prática</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossa maior prova de qualidade é a liberdade que damos aos nossos clientes. 
            Se não entregarmos excelência, você simplesmente pode ir embora.
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
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card hover:shadow-xl"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Audiences Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">
            Trabalhamos com <span className="text-primary">parceiros</span> de diversos segmentos
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A maior parte dos nossos clientes vem de indicações de parceiros. 
            Junte-se a essa rede de sucesso.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary transition-colors duration-300 group-hover:bg-primary/10">
                <audience.icon className="h-6 w-6 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
              </div>
              <h4 className="mb-2 font-display font-semibold text-foreground">
                {audience.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
