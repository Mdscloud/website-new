import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { Cloud, Database, Headphones, HardDrive, Server, Zap, Shield, Clock, CheckCircle2, TrendingUp, Users, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SpatialProductShowcase from "@/components/ui/spatial-product-showcase";
import HolographicCard from "@/components/ui/holographic-card";
import heroImage from "@/assets/about/sobre-o-que-fazemos.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const OQueFazemos = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      <div className="relative z-10">
        <main className="min-h-screen overflow-x-hidden">
          {/* Hero Section */}
          <section className="relative py-24 lg:py-40 overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroImage})`,
              }}
            />
            
            {/* Overlay para transparência e legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
            
            {/* Animated orbs */}
            <motion.div 
              layout={false}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>
            <motion.div 
              layout={false}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>

            {/* Floating particles */}
            {[Cloud, Database, Server].map((Icon, index) => (
              <motion.div
                key={index}
                layout={false}
                className="absolute pointer-events-none"
                style={{
                  left: `${15 + index * 30}%`,
                  top: `${20 + index * 25}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: [0.4, 0, 0.6, 1]
                }}
              >
                <Icon className="h-8 w-8 text-primary/20" />
              </motion.div>
            ))}

            {/* Floating stats badges */}
            <motion.div
              layout={false}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
              className="absolute top-32 right-10 bg-card/90 backdrop-blur-md p-4 rounded-xl border border-border shadow-xl hidden lg:block z-10"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-bold text-foreground">+1200</p>
                  <p className="text-xs text-muted-foreground">Clientes</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              layout={false}
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.6, 1], delay: 0.5 }}
              className="absolute bottom-32 left-10 bg-card/90 backdrop-blur-md p-4 rounded-xl border border-border shadow-xl hidden lg:block z-10"
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-bold text-foreground">+5000</p>
                  <p className="text-xs text-muted-foreground">Servidores</p>
                </div>
              </div>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-center"
              >
                <motion.div variants={fadeInUp}>
                  <Badge className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90 border-0 px-4 py-2">
                    <Zap className="h-4 w-4 mr-2 inline" />
                    O Que Fazemos
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground"
                >
                  Soluções Completas<br />de Tecnologia
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Entregamos soluções completas de tecnologia voltadas para o operacional crítico das empresas
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Cloud Builder Section */}
          <section id="cloud-builder" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Spatial Product Showcase */}
              <SpatialProductShowcase />
            </div>
          </section>

          {/* DBA Time Section */}
          <section id="dba-time" className="py-20 relative overflow-hidden">
            {/* Dark Blue Background with Gradient */}
            <div className="absolute inset-0" style={{ backgroundColor: 'hsl(232, 70%, 8%)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                {/* Left Column - Title and Description */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <Database className="h-8 w-8 text-white" />
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
                      DBA Time
                    </h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Serviços avançados de administração, performance, otimização e segurança de bancos de dados. Acompanhamos desde a arquitetura até o tuning contínuo, prevenindo falhas e maximizando eficiência. Planejamos e executamos migrações complexas com impacto mínimo nas operações, além de ambientes com redundância e failover que garantem continuidade real.
                    </p>
                  </div>
                </div>

                {/* Right Column - Holographic Card */}
                <div>
                  <HolographicCard className="p-6 bg-gradient-to-br from-[hsl(232,70%,8%)] via-[hsl(232,70%,6%)] to-black border-white/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center border border-white/30">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white drop-shadow-lg">Tunning de banco de dados</h3>
                    </div>
                    <p className="text-base text-gray-200 leading-relaxed drop-shadow-md">
                      Oferecemos um serviço especializado de administração, suporte e otimização de bancos de dados, garantindo performance consistente, alta disponibilidade, segurança dos dados e confiabilidade operacional. Nosso time de DBAs atua de forma preventiva e corretiva, acompanhando toda a rotina operacional, tuning, manutenção e evolução dos ambientes.
                    </p>
                  </HolographicCard>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Suporte Técnico Section */}
          <section id="suporte-tecnico" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-8">
                  <Headphones className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                    Suporte Técnico
                  </h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl mb-8">
                  <p>
                    Equipe humana em tempo integral, com especialistas que conhecem seu ambiente técnico e estão prontos para resolver qualquer necessidade rapidamente — sem intermediários, sem chatbots automáticos. Essa combinação única torna a MDS Cloud uma plataforma com serviços genuinamente tailor-made para demandas empresariais críticas, sem dependência de estruturas padronizadas e rígidas.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <HolographicCard className="p-6 bg-gradient-to-br from-[hsl(232,70%,8%)] via-[hsl(232,70%,6%)] to-black border-white/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center border border-white/30">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white drop-shadow-lg">Ultra rápido</h3>
                    </div>
                    <p className="text-base text-gray-200 leading-relaxed drop-shadow-md">
                      Resposta imediata com SLA medido em minutos, não em promessas. Nossa equipe está sempre pronta para resolver qualquer necessidade rapidamente.
                    </p>
                  </HolographicCard>

                  <HolographicCard className="p-6 bg-gradient-to-br from-[hsl(232,70%,8%)] via-[hsl(232,70%,6%)] to-black border-white/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center border border-white/30">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white drop-shadow-lg">Humano</h3>
                    </div>
                    <p className="text-base text-gray-200 leading-relaxed drop-shadow-md">
                      Sem chatbots, sem scripts automatizados. Você fala diretamente com especialistas que conhecem seu ambiente técnico e estão prontos para ajudar.
                    </p>
                  </HolographicCard>

                  <HolographicCard className="p-6 bg-gradient-to-br from-[hsl(232,70%,8%)] via-[hsl(232,70%,6%)] to-black border-white/30">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center border border-white/30">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white drop-shadow-lg">100% disponível</h3>
                    </div>
                    <p className="text-base text-gray-200 leading-relaxed drop-shadow-md">
                      Suporte técnico especializado 24×7, com equipe de plantão sempre disponível para garantir continuidade dos seus sistemas críticos.
                    </p>
                  </HolographicCard>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Backup Section */}
          <section id="backup" className="py-20 relative overflow-hidden">
            {/* Dark Blue Background with Gradient */}
            <div className="absolute inset-0" style={{ backgroundColor: 'hsl(232, 70%, 8%)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-8">
                  <HardDrive className="h-8 w-8 text-white" />
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
                    Backup
                  </h2>
                </div>
                
                <Card className="border border-white/30 bg-white/10 backdrop-blur-xl hover:bg-white/15 transition-all shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center border border-white/30">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-white">Proteção completa de dados</CardTitle>
                    </div>
                    <CardDescription className="text-base text-white/90">
                      Segurança enterprise para seus dados críticos. Backup automatizado, retenção flexível e recuperação rápida garantidos. Soluções de backup em nuvem com criptografia AES-256, backup automatizado, múltiplas cópias e recuperação rápida garantida. Testes regulares de restauração e RTO/RPO otimizados para seu negócio.
                    </CardDescription>
                  </CardHeader>
                </Card>
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

export default OQueFazemos;
