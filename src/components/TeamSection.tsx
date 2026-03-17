import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import teamOffice1 from "@/assets/team-office-1.jpg";

export function TeamSection() {
  const { t } = useI18n();

  return (
    <section id="sobre" className="relative py-16 lg:py-20 overflow-hidden bg-card/20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3]">
                <img
                  src={teamOffice1}
                  alt="Equipe MDS Cloud Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-xl border border-border/50 bg-card/90 backdrop-blur-md p-4">
                  <p className="text-sm font-medium text-foreground">
                    "{t("team.quote")}"
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Equipe MDS Cloud Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-2xl bg-primary/20 blur-xl" />
            <div className="absolute -left-4 -bottom-4 h-20 w-20 rounded-full bg-accent/20 blur-lg" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              {t("team.subtitle")}
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {t("team.title.1")} <span className="text-gradient">{t("team.title.2")}</span>
            </h2>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              {t("team.description.1")}
            </p>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              {t("team.description.2")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
