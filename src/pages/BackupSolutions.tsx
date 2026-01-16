import { motion } from "framer-motion";
import { HardDrive, Shield, Clock, RotateCcw, Lock, CheckCircle2, ArrowRight, Zap, Database, Server, Calendar, Phone, Globe, Network, Layers, BarChart3, Gift, AlertCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
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

export default function BackupSolutions() {
  const features = [
    {
      icon: RotateCcw,
      title: 'Backup Automatizado',
      description: 'Rotinas de backup configuradas e executadas automaticamente',
      detail: 'Agendamento flexível, múltiplos pontos de restauração e verificação automática de integridade',
    },
    {
      icon: Lock,
      title: 'Criptografia AES-256',
      description: 'Segurança enterprise para seus dados críticos',
      detail: 'Dados criptografados em trânsito e em repouso, garantindo máxima proteção',
    },
    {
      icon: Shield,
      title: 'Recovery Garantido',
      description: 'Recuperação rápida e confiável quando você mais precisa',
      detail: 'Testes regulares de restauração e RTO/RPO otimizados para seu negócio',
    },
    {
      icon: Database,
      title: 'Retenção Flexível',
      description: 'Políticas de retenção adaptadas às suas necessidades',
      detail: 'Múltiplas cópias, retenção de longo prazo e versionamento completo',
    }
  ];

  const benefits = [
    'Suporte total ao ciclo/rotina de backup',
    'Backup automatizado',
    'Criptografia AES-256',
    'Recovery garantido',
    'Retenção flexível',
    'Monitoramento contínuo',
    'Armazenamento em múltiplas localizações'
  ];

  const backupTypes = [
    {
      icon: Layers,
      title: 'Backup Incremental',
      description: 'Backups eficientes que capturam apenas alterações desde o último backup',
      badge: 'Otimizado para velocidade',
    },
    {
      icon: HardDrive,
      title: 'Backup Completo',
      description: 'Cópias completas periódicas para garantir recuperação total',
      badge: 'Máxima segurança',
    },
    {
      icon: BarChart3,
      title: 'Backup Diferencial',
      description: 'Balanceamento entre eficiência e rapidez de restauração',
      badge: 'Equilíbrio ideal',
    }
  ];

  const securityFeatures = [
    { icon: Lock, title: 'Criptografia End-to-End', description: 'Dados protegidos desde a origem até o armazenamento' },
    { icon: Shield, title: 'Controle de Acessos', description: 'Políticas rigorosas de acesso e auditoria completa' },
    { icon: Server, title: 'Armazenamento Redundante', description: 'Múltiplas cópias em diferentes localizações geográficas' },
    { icon: Clock, title: 'Recuperação Rápida', description: 'RTO otimizado para minimizar tempo de indisponibilidade' }
  ];

  const differentials = [
    { icon: RotateCcw, title: 'Suporte Total ao Ciclo', description: 'Acompanhamento completo da rotina de backup, desde configuração até recuperação' },
    { icon: Lock, title: 'Criptografia AES-256', description: 'Segurança enterprise com criptografia de nível militar' },
    { icon: Shield, title: 'Recovery Garantido', description: 'Testes regulares de restauração garantem que seus dados podem ser recuperados' },
    { icon: Database, title: 'Retenção Flexível', description: 'Políticas de retenção adaptadas às necessidades regulatórias do seu negócio' },
    { icon: AlertCircle, title: 'Monitoramento Contínuo', description: 'Acompanhamento 24×7 com alertas proativos e relatórios detalhados' },
    { icon: Server, title: 'Armazenamento Redundante', description: 'Múltiplas cópias em diferentes localizações geográficas' }
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
          <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/assets/imagens/services/backup.jpg)',
              }}
            />
            
            {/* Overlay para transparência e legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
            
            {/* Animated orbs */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeInUp}>
                    <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90 border-0 px-4 py-2">
                      <Zap className="h-4 w-4 mr-2 inline" />
                      Backup em Nuvem
                    </Badge>
                  </motion.div>
                  
                  <motion.h1 
                    variants={fadeInUp}
                    className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground"
                  >
                    Proteção completa de dados com backup automatizado
                  </motion.h1>
                  
                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                    Segurança enterprise para seus dados críticos. Backup automatizado, retenção flexível e recuperação rápida garantidos.
                  </motion.p>
                  
                  <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Falar com Especialista
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Calendar className="mr-2 h-5 w-5" />
                      Solicitar POC de 30 dias
                    </Button>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Setup em 24h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Suporte 24x7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Sem fidelidade</span>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="hidden lg:block relative"
                >
                  <div className="relative">
                    {/* Floating cards animation */}
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-10 -left-10 bg-card p-6 rounded-2xl border border-border shadow-xl backdrop-blur-sm"
                    >
                      <Lock className="h-8 w-8 text-primary mb-2" />
                      <p className="text-foreground text-sm font-semibold">AES-256</p>
                      <p className="text-muted-foreground text-xs">Criptografado</p>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 20, 0] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                      className="absolute bottom-10 -right-10 bg-card p-6 rounded-2xl border border-border shadow-xl backdrop-blur-sm"
                    >
                      <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
                      <p className="text-foreground text-sm font-semibold">99.9% Uptime</p>
                      <p className="text-muted-foreground text-xs">Garantido</p>
                    </motion.div>

                    <div className="relative bg-card rounded-3xl p-8 border border-border shadow-2xl backdrop-blur-sm">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-sm">Status do Backup</span>
                          <Badge className="bg-green-500/20 text-green-600 border-green-500/50">Ativo</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progresso</span>
                            <span className="text-foreground">87%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '87%' }}
                              transition={{ duration: 2, delay: 0.5 }}
                              className="h-full bg-gradient-to-r from-primary to-accent"
                            ></motion.div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="bg-muted/50 rounded-xl p-4 border border-border">
                            <Database className="h-6 w-6 text-primary mb-2" />
                            <p className="text-foreground text-lg font-semibold">2.4 TB</p>
                            <p className="text-muted-foreground text-xs">Armazenado</p>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-4 border border-border">
                            <Clock className="h-6 w-6 text-accent mb-2" />
                            <p className="text-foreground text-lg font-semibold">12 min</p>
                            <p className="text-muted-foreground text-xs">Último backup</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Proteção Completa</h2>
                <p className="text-lg text-muted-foreground">Soluções de backup em nuvem com segurança enterprise e recuperação garantida</p>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="group relative bg-card/60 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden h-full backdrop-blur-sm">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-accent/5 transition-all duration-500"></div>
                      
                      <CardHeader className="relative">
                        <div className="relative w-14 h-14 mb-4">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-lg"></div>
                          <div className="relative w-full h-full bg-muted rounded-xl flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                            <feature.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-500" />
                          </div>
                        </div>
                        <CardTitle className="text-foreground group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative">
                        <p className="text-sm text-muted-foreground">
                          {feature.detail}
                        </p>
                      </CardContent>
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
                    Por que escolher nosso Serviço de Backup?
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                    Nossa infraestrutura incorpora políticas de backup, criptografia, monitoramento e testes contínuos, com equipe dedicada à proteção e à conformidade regulatória.
                  </motion.p>
                  
                  <div className="space-y-4">
                    {benefits.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-3 group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="text-foreground group-hover:text-primary transition-colors">{item}</span>
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
                  <div className="relative bg-card/80 rounded-3xl p-8 border border-border backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl"></div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-foreground font-semibold">Backup Infrastructure</h3>
                        <Badge className="bg-green-500/20 text-green-600 border-green-500/50">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          Online
                        </Badge>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                          <Server className="h-8 w-8 text-primary" />
                          <div className="flex-1">
                            <p className="text-foreground text-sm font-semibold">Servidor Principal</p>
                            <p className="text-muted-foreground text-xs">São Paulo, Brasil</p>
                          </div>
                          <div className="text-green-600 text-xs">Active</div>
                        </div>
                        
                        <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                          <Globe className="h-8 w-8 text-accent" />
                          <div className="flex-1">
                            <p className="text-foreground text-sm font-semibold">Backup Secundário</p>
                            <p className="text-muted-foreground text-xs">Virginia, USA</p>
                          </div>
                          <div className="text-green-600 text-xs">Active</div>
                        </div>
                        
                        <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                          <Network className="h-8 w-8 text-primary" />
                          <div className="flex-1">
                            <p className="text-foreground text-sm font-semibold">Backup Terciário</p>
                            <p className="text-muted-foreground text-xs">Frankfurt, Alemanha</p>
                          </div>
                          <div className="text-green-600 text-xs">Active</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Backup Types Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Tipos de Backup</h2>
                <p className="text-lg text-muted-foreground">Estratégias flexíveis adaptadas às necessidades do seu negócio</p>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
              >
                {backupTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="relative bg-card/60 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden backdrop-blur-sm h-full group">
                      {/* Animated gradient border on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                      
                      <CardHeader className="text-center relative">
                        <div className="relative w-20 h-20 mx-auto mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                          <div className="relative w-full h-full bg-muted rounded-2xl flex items-center justify-center border-2 border-border group-hover:border-primary/50 transition-colors">
                            <type.icon className="h-10 w-10 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="text-xl text-foreground">{type.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center relative">
                        <p className="text-muted-foreground mb-6">
                          {type.description}
                        </p>
                        <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
                          {type.badge}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Security Section */}
          <section className="py-20 relative bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Segurança Enterprise</h2>
                <p className="text-lg text-muted-foreground">Múltiplas camadas de proteção para garantir a integridade dos seus dados</p>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {securityFeatures.map((item, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="bg-card/60 border-border/50 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm h-full group">
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <item.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-foreground">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Differentials Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Nossos Diferenciais</h2>
                <p className="text-lg text-muted-foreground">O que torna nosso serviço único no mercado</p>
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
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent/80 rounded-l-xl"></div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <item.icon className="h-6 w-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
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
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 shadow-lg">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Começar Teste Grátis
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8">
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Demonstração
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
