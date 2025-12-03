import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Setup gratuito e migração assistida",
  "30 dias de teste sem compromisso",
  "Suporte técnico 24x7 incluso",
  "Sem fidelidade ou multas",
];

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow Effect */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
            <span className="text-sm font-medium text-foreground">
              🎁 Oferta Especial
            </span>
          </div>

          {/* Headline */}
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Comece com a Nuvem de
            <br />
            <span className="text-gradient">Alta Performance</span>
          </h2>
          
          <p className="mb-8 text-lg text-muted-foreground">
            Experimente por 30 dias sem custo. Veja na prática como a MDS Cloud pode 
            transformar a infraestrutura da sua empresa.
          </p>

          {/* Benefits */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl">
              Começar Teste Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Agendar Demonstração
            </Button>
          </div>

          {/* Trust Note */}
          <p className="mt-6 text-sm text-muted-foreground">
            Sem cartão de crédito • Setup em até 24h • Suporte incluso
          </p>
        </motion.div>
      </div>
    </section>
  );
}
