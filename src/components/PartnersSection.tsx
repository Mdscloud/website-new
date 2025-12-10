import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const partners = ["Oracle", "VMware", "ISO 27001", "Veeam", "Microsoft"];

export function PartnersSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden py-16 lg:py-20 bg-card/30">
      {/* Background - Subtle for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-card/20 to-background" />
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-accent/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            {t("hero.partners")}
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Parceiros e <span className="text-gradient">Certificações</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tecnologias e certificações que garantem a excelência da nossa infraestrutura.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative"
            >
              <div className="relative flex h-16 items-center justify-center rounded-xl border border-border/50 bg-card/80 px-8 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/10">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-primary/0 transition-all duration-300 group-hover:bg-primary/5" />
                
                <span className="relative z-10 font-display text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {partner}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

