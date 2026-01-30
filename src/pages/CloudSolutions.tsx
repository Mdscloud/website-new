import { motion } from "framer-motion";
import { memo } from "react";
import { Shield, Lock, Server, Cloud, HardDrive, CheckCircle2, Gift, ArrowRight, Phone, Calendar, Zap, Globe, Gauge, Award, Users, Rocket, BarChart3, Clock, Settings } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function CloudSolutions() {

  const mainFeatures = [
    {
      icon: Zap,
      title: 'Alta Performance',
      stat: '+50%',
      statLabel: 'de aceleração média',
      description: 'Infraestrutura otimizada com storages SSD de alta performance e processamento de última geração',
    },
    {
      icon: Shield,
      title: 'Alta Disponibilidade',
      stat: '99.8%',
      statLabel: 'de uptime garantido',
      description: 'Data centers Tier III, maior complexo da América Latina, com redundância total e failover automático',
    },
    {
      icon: Lock,
      title: 'Alta Segurança',
      stat: 'Multi',
      statLabel: 'camadas de proteção',
      description: 'Múltiplas camadas de proteção, controle de acessos, criptografia e monitoramento contínuo',
    }
  ];

  const benefits = [
    'Infraestrutura própria, no Brasil, Tier 3',
    'Atendimento humano, único, ultra rápido',
    'Sem lock-in ou multa rescisória',
    'Preços em reais (sem câmbio)',
    'Alta performance',
    'Baixa latência',
    'Alto poder de processamento',
    'Storages SSD de alta performance',
    'Escalabilidade sob demanda',
    'Controle total do ambiente'
  ];

  const useCases = [
    {
      icon: BarChart3,
      title: 'ERPs e CRMs',
      description: 'Ambientes otimizados para sistemas empresariais críticos',
    },
    {
      icon: Rocket,
      title: 'Aplicações Corporativas',
      description: 'Infraestrutura preparada para aplicações de alta demanda',
    },
    {
      icon: Shield,
      title: 'Sistemas Críticos',
      description: 'Performance e disponibilidade para sistemas que não podem parar',
    }
  ];

  const differentials = [
    { icon: Server, title: 'Infraestrutura Própria', description: 'Rede dedicada de alta capacidade, servidores Dell de última geração e storages SSD otimizados' },
    { icon: Shield, title: 'Alta Disponibilidade', description: 'Projetos com failover automático, replicação de dados e arquitetura resiliente' },
    { icon: Users, title: 'SLA Real 24×7', description: 'Equipe humana de plantão com conhecimento profundo dos ambientes dos clientes' },
    { icon: Zap, title: 'Migração Ágil', description: 'Projetos de migração realizados com planejamento técnico, muitas vezes concluídos em até 24 horas' },
    { icon: Clock, title: 'POC de 30 Dias', description: 'Ambiente de teste completo, gratuito e sem compromisso, para medir performance antes da contratação' },
    { icon: CheckCircle2, title: 'Sem Lock-in', description: 'Sem multas rescisórias, sem dependência de terceiros, sem camadas ocultas' }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        {/* Animated Background Grid */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        </div>

        <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
          <section className="relative pt-20 lg:pt-32 pb-6 lg:pb-10 overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroImage})`,
              }}
            />
            
            {/* Overlay claro para legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
            
            {/* Animated orbs */}
            <motion.div 
              layout={false}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"
            ></motion.div>
            <motion.div 
              layout={false}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0"
            ></motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
                  layout={false}
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeInUp}>
                    <Badge className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90 border-0 px-4 py-2">
                      <Cloud className="h-4 w-4 mr-2 inline" />
                      Soluções em Cloud
                    </Badge>
                  </motion.div>
                  
                  <motion.h1 
                    variants={fadeInUp}
                    className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground leading-tight"
                  >
                    Infraestrutura de Alta Performance
                  </motion.h1>
                  
                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                    Infraestrutura própria em Data Centers Ascenty Tier III, projetada para entregar alto desempenho, estabilidade e alta disponibilidade para sistemas críticos.
                  </motion.p>
                  
                  <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" asChild>
                      <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2 h-5 w-5" />
                        Falar com Especialista
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                      <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-5 w-5" />
                        Solicitar POC de 30 dias
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Tier III</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>99.8% Uptime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Data Center BR</span>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  layout={false}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="hidden lg:block relative"
                >
                  {/* 3D Server Stack Visualization */}
                  <div className="relative">
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((item, index) => (
                        <motion.div
                          key={item}
                          layout={false}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="relative"
                        >
                          <motion.div
                            layout={false}
                            animate={{
                              boxShadow: [
                                `0 0 20px hsl(var(--primary) / 0.2)`,
                                `0 0 40px hsl(var(--primary) / 0.4)`,
                                `0 0 20px hsl(var(--primary) / 0.2)`,
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            className="bg-card rounded-xl p-6 border border-border"
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-3">
                                  <span className="text-foreground text-sm font-semibold">Server {item}</span>
                                  <Badge className="bg-green-500/20 text-green-600 border-green-500/50 text-xs">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
                                    Active
                                  </Badge>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-xs">
                                    <span className="text-muted-foreground">CPU</span>
                                    <span className="text-foreground">{85 - index * 10}%</span>
                                  </div>
                                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${85 - index * 10}%` }}
                                      transition={{ duration: 1, delay: index * 0.2 }}
                                      className="h-full bg-gradient-to-r from-primary to-accent"
                                    ></motion.div>
                                  </div>
                                </div>
                              </div>
                              <Server className="h-8 w-8 text-primary" />
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Floating stats */}
                    <motion.div
                      layout={false}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-6 -right-6 bg-card p-4 rounded-xl border border-border shadow-xl"
                    >
                      <Zap className="h-6 w-6 text-accent mb-1" />
                      <p className="text-foreground text-sm font-semibold">+50%</p>
                      <p className="text-muted-foreground text-xs">Performance</p>
                    </motion.div>

                    <motion.div
                      layout={false}
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                      className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl border border-border shadow-xl"
                    >
                      <Shield className="h-6 w-6 text-green-500 mb-1" />
                      <p className="text-foreground text-sm font-semibold">99.8%</p>
                      <p className="text-muted-foreground text-xs">Uptime</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Partners Carousel logo abaixo do hero - bem próximo */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
              <PartnersCarousel isInHero={true} />
            </div>
          </section>

          {/* Main Features */}
          <section className="pt-16 pb-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Infraestrutura de Alta Performance</h2>
                <p className="text-lg text-muted-foreground">Trabalhamos com ambientes preparados para ERPs, CRMs e aplicações corporativas</p>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
              >
                {mainFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="relative bg-card/60 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden backdrop-blur-sm h-full group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                      
                      <CardHeader className="relative">
                        <div className="relative w-16 h-16 mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                          <div className="relative w-full h-full bg-muted rounded-2xl flex items-center justify-center border-2 border-border group-hover:border-primary/50">
                            <feature.icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                            {feature.stat}
                          </div>
                          <div className="text-sm text-muted-foreground">{feature.statLabel}</div>
                        </div>
                        
                        <CardTitle className="text-foreground mb-2">{feature.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>

          {/* Why Choose Section */}
          <section className="py-20 relative bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
                  initial="hidden"
                  whileInView="visible"
              viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                    Por que escolher nossa Infraestrutura Cloud?
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                    Infraestrutura própria, totalmente administrada, com foco em ERPs, CRMs e aplicações empresariais que exigem baixa latência, alta performance e escalabilidade sob demanda.
                  </motion.p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {benefits.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-3 group cursor-pointer"
                      >
                        <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">{item}</span>
                      </motion.div>
                    ))}
                  </div>
            </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative bg-card/80 rounded-3xl p-8 border border-border backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-foreground font-semibold text-xl">Data Center Infrastructure</h3>
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                          Tier III
                        </Badge>
                      </div>
                      
                      <div className="space-y-6">
                        {/* CPU Usage */}
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-muted-foreground text-sm">CPU Usage</span>
                            <span className="text-foreground text-sm">78%</span>
                          </div>
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '78%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5 }}
                              className="h-full bg-gradient-to-r from-primary to-accent relative"
                            >
                              <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Memory Usage */}
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-muted-foreground text-sm">Memory Usage</span>
                            <span className="text-foreground text-sm">62%</span>
                          </div>
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '62%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-primary to-accent relative"
                            >
                              <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Storage Usage */}
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-muted-foreground text-sm">Storage Usage</span>
                            <span className="text-foreground text-sm">45%</span>
                          </div>
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '45%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 0.4 }}
                              className="h-full bg-gradient-to-r from-accent to-accent/70 relative"
                            >
                              <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                          <div className="bg-muted/50 rounded-xl p-4 border border-border">
                            <Gauge className="h-5 w-5 text-primary mb-2" />
                            <p className="text-foreground text-lg font-semibold">156ms</p>
                            <p className="text-muted-foreground text-xs">Latência</p>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-4 border border-border">
                            <HardDrive className="h-5 w-5 text-primary mb-2" />
                            <p className="text-foreground text-lg font-semibold">5.2TB</p>
                            <p className="text-muted-foreground text-xs">SSD</p>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-4 border border-border">
                            <Award className="h-5 w-5 text-green-500 mb-2" />
                            <p className="text-foreground text-lg font-semibold">99.8%</p>
                            <p className="text-muted-foreground text-xs">Uptime</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Casos de Uso Ideal</h2>
                <p className="text-lg text-muted-foreground">Nossa infraestrutura é perfeita para sistemas que exigem máxima performance e disponibilidade</p>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
              >
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Card className="relative bg-card/60 border-border/50 hover:border-primary/50 transition-all overflow-hidden backdrop-blur-sm h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 group-hover:opacity-5 transition-opacity"></div>
                      
                      <CardHeader className="text-center relative">
                        <div className="relative w-20 h-20 mx-auto mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-full blur-2xl opacity-60"></div>
                          <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                            <useCase.icon className="h-10 w-10 text-primary-foreground" />
                          </div>
                        </div>
                        <CardTitle className="text-xl text-foreground mb-3">{useCase.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {useCase.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                </motion.div>
              ))}
              </motion.div>
            </div>
          </section>

          {/* Differentials */}
          <section className="py-20 relative bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Nossos Diferenciais</h2>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {differentials.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="relative p-6 rounded-xl bg-card/60 border border-border hover:border-accent transition-all duration-300 group backdrop-blur-sm"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-l-xl"></div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <item.icon className="h-6 w-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
          </div>
        </section>

          {/* CTA Section */}
          <section className="py-20 relative overflow-hidden bg-card/30">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none"
            ></motion.div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="text-center mb-12"
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full mb-8 shadow-lg">
                  <Gift className="h-5 w-5" />
                  <span className="font-semibold">Oferta Especial</span>
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Comece com a Nuvem de Alta Performance
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8">
                  Experimente por 30 dias sem custo. Veja na prática como a MDS Cloud pode transformar a infraestrutura da sua empresa.
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-card/80 rounded-3xl shadow-2xl p-8 md:p-12 border border-border backdrop-blur-xl"
              >
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {[
                    { title: 'Setup gratuito e migração assistida', description: 'Nossa equipe cuida de toda a configuração inicial' },
                    { title: '30 dias de teste sem compromisso', description: 'Teste todos os recursos sem limitações' },
                    { title: 'Suporte técnico 24x7 incluso', description: 'Equipe especializada sempre disponível' },
                    { title: 'Sem fidelidade ou multas', description: 'Cancele a qualquer momento sem custos' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 shadow-lg" asChild>
                    <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Começar Teste Grátis
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8" asChild>
                    <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-5 w-5" />
                      Agendar Demonstração
                    </a>
                  </Button>
                </motion.div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Sem cartão de crédito • Setup em até 24h • Suporte incluso
                  </p>
                </div>
                </motion.div>
            </div>
          </section>
          </div>
      </main>
      <div className="relative z-20">
      <Footer />
      </div>
      <FloatingContact />
    </div>
  );
}
