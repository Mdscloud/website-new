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
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10 group-hover:shadow-md">
                <audience.icon className="h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
              </div>
              <h4 className="relative z-10 mb-2 font-display font-semibold text-foreground transition-colors group-hover:text-primary">
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
