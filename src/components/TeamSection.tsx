import { motion } from "framer-motion";
import { Users, Award, Heart, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import teamGroup from "@/assets/team-group.jpg";
import teamOffice1 from "@/assets/team-office-1.jpg";

export function TeamSection() {
  const { t } = useI18n();
  
  const stats = [
    { icon: Users, value: "15+", label: t("team.stat.specialists") },
    { icon: Award, value: "15", label: t("team.stat.experience") },
    { icon: Heart, value: "500+", label: t("team.stat.clients") },
    { icon: Sparkles, value: "99.9%", label: t("team.stat.uptime") },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

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
                  src={teamGroup}
                  alt="Equipe MDS Cloud Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Badge - adjusted to avoid overlap with secondary image */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-24 md:right-32 lg:right-40">
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

            {/* Secondary image - floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -right-4 -bottom-8 w-40 h-28 md:w-56 md:h-40 rounded-xl overflow-hidden shadow-xl border-4 border-background hidden sm:block"
            >
              <img
                src={teamOffice1}
                alt="Escritório MDS Cloud"
                className="w-full h-full object-cover"
              />
            </motion.div>

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

            {/* Stats Grid with stagger */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative z-10">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-md">
                      <stat.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="font-display text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
