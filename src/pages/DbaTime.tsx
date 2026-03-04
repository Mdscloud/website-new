import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { motion } from "framer-motion";
import {
  Database,
  ArrowRight,
  Check,
  Lightbulb,
  Shield,
  Activity,
  Target,
  Wrench,
  Zap,
  Cloud,
  BarChart3,
  FileSearch,
  RefreshCw,
  HardDrive,
  AlertTriangle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import cloudHeroImage from "@/assets/cloud-hero.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const DbaTime = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10">
        <main className="min-h-screen overflow-x-hidden">
          {/* Hero — background cloud-hero.png */}
          <section className="relative py-24 lg:py-32 overflow-hidden min-h-[85vh] flex flex-col">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${cloudHeroImage})` }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, hsla(232, 55%, 9%, 0.88) 0%, hsla(232, 60%, 7%, 0.92) 50%, hsla(232, 55%, 8%, 0.9) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-60" />
            <motion.div
              layout={false}
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
              layout={false}
              animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] pointer-events-none"
            />

            <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-3xl"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
                  <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 px-4 py-2 gap-2">
                    <Database className="h-4 w-4" />
                    DBA Time
                  </Badge>
                </motion.div>
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
                >
                  Tuning e administração de bancos de dados
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed"
                >
                  Serviços avançados de administração, performance, otimização e segurança de bancos de dados. Acompanhamos desde a arquitetura até o tuning contínuo, prevenindo falhas e maximizando eficiência.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href="https://wa.me/5511991664976"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Falar com Especialista
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 border-2 border-border bg-background/50 hover:bg-background/80"
                    asChild
                  >
                    <a
                      href="https://wa.me/5511991664976"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar Avaliação
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Seção Cloud + DBA — mesmo background do hero (cloud-hero.png) */}
          <section className="relative py-20 lg:py-28 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${cloudHeroImage})` }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, hsla(232, 55%, 9%, 0.88) 0%, hsla(232, 60%, 7%, 0.92) 50%, hsla(232, 55%, 8%, 0.9) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-60" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                {/* Coluna esquerda — texto completo */}
                <div className="space-y-6">
                  <motion.h2
                    variants={fadeInUp}
                    className="text-3xl lg:text-4xl font-display font-bold text-white"
                  >
                    CLOUD com DBA Time
                  </motion.h2>
                  <motion.div variants={fadeInUp}>
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/40 gap-2 px-3 py-1.5">
                      <Lightbulb className="h-4 w-4" />
                      Infraestrutura + Banco de Dados Integrados
                    </Badge>
                  </motion.div>
                  <motion.p
                    variants={fadeInUp}
                    className="text-gray-300 leading-relaxed"
                  >
                    Arquitetura pensada de ponta a ponta para ambientes críticos.
                  </motion.p>
                  <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed">
                    Cloud não resolve sozinho. Banco de dados também não. Na MDS Cloud, infraestrutura e banco de dados são projetados em conjunto desde o primeiro desenho do ambiente.
                  </motion.p>
                  <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed">
                    O Cloud Builder é estruturado considerando carga transacional, latência, IOPS, padrões de acesso e comportamento do banco de dados.
                  </motion.p>
                  <motion.p variants={fadeInUp} className="text-white font-semibold">
                    Isso significa:
                  </motion.p>
                  <motion.ul variants={fadeInUp} className="space-y-2 text-gray-300">
                    {[
                      "Storage dimensionado para o tipo de workload",
                      "Rede otimizada para baixa latência",
                      "Virtualização ajustada para o perfil da aplicação",
                      "Tuning contínuo alinhado à infraestrutura",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                  <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed">
                    Enquanto muitos provedores entregam apenas a máquina virtual, nós entregamos o ecossistema completo.
                  </motion.p>
                </div>

                {/* Coluna direita — diagrama Cloud Builder + DBA Time (estilo print 1: badges verticais + arcos) */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col items-center justify-center min-h-[320px] relative"
                >
                  {/* Arcos em forma de oval (laranja à esquerda, azul à direita) */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 240 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <filter id="glow-orange" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feFlood floodColor="rgb(249, 115, 22)" floodOpacity="0.8" result="color" />
                        <feComposite in="color" in2="blur" operator="in" result="glow" />
                        <feMerge>
                          <feMergeNode in="glow" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feFlood floodColor="rgb(59, 130, 246)" floodOpacity="0.8" result="color" />
                        <feComposite in="color" in2="blur" operator="in" result="glow" />
                        <feMerge>
                          <feMergeNode in="glow" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    {/* Metade esquerda do oval — laranja (curva contínua, não reta) */}
                    <path
                      d="M 118 42 C 50 42, 22 95, 32 140 C 22 185, 50 238, 118 238"
                      stroke="rgb(249, 115, 22)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.9"
                      filter="url(#glow-orange)"
                    />
                    {/* Metade direita do oval — azul (curva contínua, não reta) */}
                    <path
                      d="M 122 42 C 190 42, 218 95, 208 140 C 218 185, 190 238, 122 238"
                      stroke="rgb(59, 130, 246)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.9"
                      filter="url(#glow-blue)"
                    />
                  </svg>

                  <div className="relative z-10 flex flex-col items-center gap-3">
                    {/* Badge Cloud Builder (topo) */}
                    <div
                      className="flex items-center gap-3 rounded-xl border border-white/20 bg-slate-800/90 px-5 py-3 backdrop-blur-sm"
                      style={{
                        boxShadow: "0 0 30px rgba(249, 115, 22, 0.25), 0 0 60px rgba(249, 115, 22, 0.1)",
                      }}
                    >
                      <Cloud className="h-8 w-8 text-primary shrink-0" style={{ filter: "drop-shadow(0 0 6px rgba(249, 115, 22, 0.6))" }} />
                      <span className="text-white font-semibold text-lg">Cloud Builder</span>
                    </div>

                    {/* Círculo central com + */}
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/50 bg-slate-800/90 text-primary text-2xl font-bold"
                      style={{
                        boxShadow: "0 0 20px rgba(249, 115, 22, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)",
                      }}
                    >
                      +
                    </div>

                    {/* Badge DBA Time (base) */}
                    <div
                      className="flex items-center gap-3 rounded-xl border border-white/20 bg-slate-800/90 px-5 py-3 backdrop-blur-sm"
                      style={{
                        boxShadow: "0 0 30px rgba(59, 130, 246, 0.25), 0 0 60px rgba(59, 130, 246, 0.1)",
                      }}
                    >
                      <Database className="h-8 w-8 text-blue-400 shrink-0" style={{ filter: "drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))" }} />
                      <span className="text-blue-400 font-semibold text-lg">DBA Time</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Bloco Modelo de Atuação */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10"
                >
                  Modelo de Atuação
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Preventivo",
                      desc: "Monitoramento e otimização contínua para evitar problemas.",
                      Icon: Shield,
                    },
                    {
                      title: "Corretivo",
                      desc: "Resposta rápida e resolução de incidentes e degradação.",
                      Icon: Wrench,
                    },
                    {
                      title: "Evolutivo",
                      desc: "Evolução de esquemas, índices e arquitetura do banco.",
                      Icon: Activity,
                    },
                    {
                      title: "Projeto",
                      desc: "Migrações, alta disponibilidade e projetos sob demanda.",
                      Icon: Target,
                    },
                  ].map((item) => (
                    <motion.div key={item.title} variants={fadeInUp}>
                      <Card className="h-full border border-border hover:border-primary/30 transition-colors">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <item.Icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-foreground">{item.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Bloco Especialidades */}
          <section className="py-20 relative bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10"
                >
                  Especialidades
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Oracle", desc: "Suporte completo para Oracle Database com otimização avançada" },
                    { name: "SQL Server", desc: "Administração especializada em Microsoft SQL Server" },
                    { name: "PostgreSQL", desc: "Gestão e otimização de ambientes PostgreSQL" },
                    { name: "MySQL", desc: "Suporte completo para MySQL e MariaDB" },
                  ].map((item) => (
                    <motion.div
                      key={item.name}
                      variants={fadeInUp}
                      className="rounded-xl border border-border bg-card p-6 text-center hover:border-primary/30 transition-colors"
                    >
                      <Database className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h3 className="font-display font-bold text-foreground text-lg">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Bloco Tipos de Serviços */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10"
                >
                  Tipos de Serviços
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Tuning", Icon: Zap },
                    { title: "Análise de performance", Icon: BarChart3 },
                    { title: "Migração", Icon: RefreshCw },
                    { title: "Alta disponibilidade", Icon: Shield },
                    { title: "Disaster Recovery", Icon: HardDrive },
                    { title: "Auditoria", Icon: FileSearch },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      variants={fadeInUp}
                      className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground">{item.title}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Bloco Problemas que Resolvemos */}
          <section className="py-20 relative bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6"
                >
                  Problemas que Resolvemos
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 max-w-2xl">
                  Nossa equipe atua na raiz dos problemas de performance e estabilidade de banco de dados.
                </motion.p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Banco lento",
                    "Deadlocks",
                    "CPU alta",
                    "Queries mal indexadas",
                    "Plano de execução incorreto",
                  ].map((item) => (
                    <motion.span
                      key={item}
                      variants={fadeInUp}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                    >
                      <AlertTriangle className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA final */}
          <section className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="rounded-2xl border border-border bg-card/50 p-10 lg:p-14"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4"
                >
                  Infraestrutura e Banco de Dados trabalhando juntos
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Conte com o Cloud Builder e o DBA Time integrados para ambientes críticos. Fale com nossos especialistas.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Button
                    size="lg"
                    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href="https://wa.me/5511991664976"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Falar com Especialista
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default DbaTime;
