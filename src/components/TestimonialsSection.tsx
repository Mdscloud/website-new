import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A migração para a MDS Cloud foi o melhor investimento que fizemos. A performance do nosso ERP aumentou 300% e o suporte é excepcional.",
    author: "Carlos Silva",
    role: "CTO",
    company: "TechSolutions Brasil",
  },
  {
    quote: "Com o DBA Remoto, nosso banco de dados Oracle nunca esteve tão otimizado. Reduzimos custos e aumentamos a disponibilidade para 99.99%.",
    author: "Ana Rodrigues",
    role: "Gerente de TI",
    company: "Indústria Metalúrgica ABC",
  },
  {
    quote: "O backup em nuvem nos salvou de um ransomware. Em 4 horas recuperamos todos os dados. Isso não tem preço.",
    author: "Roberto Mendes",
    role: "Diretor de Operações",
    company: "Logística Express",
  },
];

const clients = [
  "TechSolutions",
  "MetalABC",
  "LogExpress",
  "BrasilFarma",
  "AutoParts",
  "FoodService",
  "ConstrutoraSul",
  "FinanceiroPlus",
];

export function TestimonialsSection() {
  return (
    <section id="cases" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Cases de Sucesso
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Empresas que <span className="text-gradient">confiam</span> em nós
          </h2>
          <p className="text-muted-foreground">
            Veja o que nossos clientes dizem sobre a transformação digital com a MDS Cloud.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card lg:p-8"
            >
              {/* Quote Icon */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Quote className="h-5 w-5 text-primary" />
              </div>

              {/* Quote */}
              <p className="mb-6 text-foreground">{testimonial.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-display text-lg font-bold text-secondary-foreground">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
            Mais de 500 empresas confiam na MDS Cloud
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {clients.map((client) => (
              <div
                key={client}
                className="flex h-12 items-center justify-center rounded-lg border border-border/30 bg-card/30 px-6 backdrop-blur-sm transition-all hover:border-border hover:bg-card"
              >
                <span className="font-display text-sm font-semibold text-muted-foreground">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
