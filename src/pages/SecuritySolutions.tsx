import { motion } from "framer-motion";
import { Shield, Lock, Server, Network, Eye, CheckCircle2, ArrowRight, Zap, Database, Clock, Settings, AlertTriangle, Users, BarChart3, Gift, Phone, Calendar, Globe, HardDrive } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import securityImage from "@/assets/services/seguranca.jpeg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.6, 1] } }
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

export default function SecuritySolutions() {
  const features = [
    {
      icon: Settings,
      title: 'Governança',
      description: 'Políticas, controles e gestão de riscos',
      detail: 'Políticas de segurança documentadas, definição de responsabilidades e alinhamento aos objetivos do negócio',
    },
    {
      icon: Eye,
      title: 'Operação',
      description: 'Monitoramento 24×7 e resposta a incidentes',
      detail: 'Vigilância contínua, rotinas de resposta e gestão proativa de eventos de segurança',
    },
    {
      icon: Server,
      title: 'Infraestrutura Física',
      description: 'Datacenter e hardware de ponta',
      detail: 'Ambiente certificado e equipamentos enterprise; detalhes na seção abaixo',
    },
    {
      icon: BarChart3,
      title: 'Compliance',
      description: 'LGPD, auditoria e documentação',
      detail: 'Conformidade regulatória, trilhas de auditoria e suporte a certificações',
    }
  ];

  const benefits = [
    'Redução de riscos operacionais',
    'Continuidade do ERP e Banco de Dados',
    'Mitigação contra ransomware',
    'Resposta rápida a incidentes',
    'Governança alinhada à LGPD'
  ];

  const securityLayers = [
    {
      icon: Globe,
      title: 'Datacenter Tier III (Ascenty)',
      description: 'Infraestrutura em datacenters certificados Ascenty no Brasil, com alta disponibilidade, segurança física e resiliência',
      badge: 'Certificação Tier III',
    },
    {
      icon: HardDrive,
      title: 'Hardware Enterprise (Dell + SSD)',
      description: 'Servidores Dell e storages SSD de alta performance para cargas críticas, com desempenho e confiabilidade enterprise',
      badge: 'Equipamentos de ponta',
    },
    {
      icon: Network,
      title: 'Segmentação e isolamento de ambientes',
      description: 'Rede segmentada e isolamento lógico entre ambientes, reduzindo a superfície de ataque e contendo incidentes',
      badge: 'Isolamento lógico',
    }
  ];

  const complianceFeatures = [
    { icon: BarChart3, title: 'Logs e auditoria rastreáveis', description: 'Registro completo de eventos e trilhas de auditoria para conformidade e análise forense' },
    { icon: Lock, title: 'Controle de acesso baseado em privilégio mínimo', description: 'Acessos restritos ao necessário, reduzindo riscos e alinhado a boas práticas' },
    { icon: Shield, title: 'Políticas documentadas', description: 'Políticas de segurança e procedimentos formalizados e disponíveis para auditoria' },
    { icon: CheckCircle2, title: 'Suporte a auditorias', description: 'Estrutura e evidências para suportar auditorias internas e externas' }
  ];

  const differentials = [
    { icon: Server, title: 'Infraestrutura própria (não revenda)', description: 'Operamos nossa própria infraestrutura em datacenters Ascenty, sem revenda de terceiros' },
    { icon: Users, title: 'Equipe técnica interna', description: 'Time próprio de especialistas em segurança e operação, sem terceirização crítica' },
    { icon: Database, title: 'Ambiente desenhado para ERP e Banco', description: 'Infraestrutura pensada para cargas de ERP, banco de dados e sistemas críticos' },
    { icon: Shield, title: 'Suporte humano especializado', description: 'Atendimento por pessoas especializadas, com conhecimento do seu ambiente' },
    { icon: Clock, title: 'SLA real com atendimento em minutos', description: 'Compromissos formais de tempo de resposta e resolução, com atendimento em minutos' }
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
                backgroundImage: `url(${securityImage})`,
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
              className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none"
            ></motion.div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeInUp}>
                    <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
                      Segurança em Cloud
                    </Badge>
                  </motion.div>
                  
                  <motion.h1 
                    variants={fadeInUp}
                    className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl leading-tight text-left"
                  >
                    Segurança Corporativa para Ambientes Críticos em Cloud
                  </motion.h1>
                  
                  <motion.p 
                    variants={fadeInUp}
                    className="mb-8 text-lg md:text-xl text-muted-foreground leading-relaxed text-left"
                  >
                    Proteção multicamadas, monitoramento 24x7 e conformidade com LGPD para garantir a continuidade e a integridade dos seus sistemas críticos.
                  </motion.p>

                  <motion.div 
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row items-start gap-4 mb-8"
                  >
                    <Button variant="heroShiny" size="lg" className="px-8 py-6 text-base gap-2" asChild>
                      <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                        <Zap className="h-5 w-5" />
                        Solicitar POC de até 30 dias
                      </a>
                    </Button>
                  </motion.div>
                  <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mb-8">
                    Sem fidelidade • Ativação rápida • Especialistas 24x7
                  </motion.p>
                  
                  <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>Tier III</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>Monitoramento 24×7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>Conformidade LGPD</span>
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
                    {/* Floating cards */}
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-10 -left-10 bg-card p-6 rounded-2xl border border-border shadow-xl backdrop-blur-sm"
                    >
                      <Shield className="h-8 w-8 text-primary mb-2" />
                      <p className="text-foreground text-sm font-semibold">Firewall Ativo</p>
                      <p className="text-muted-foreground text-xs">Proteção em tempo real</p>
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

                    {/* Main status card */}
                    <div className="relative bg-card rounded-3xl p-8 border border-border shadow-2xl backdrop-blur-sm">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-sm">Status da Segurança</span>
                          <Badge className="bg-green-500/20 text-green-600 border-green-500/50">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                            Ativo
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Proteção</span>
                            <span className="text-foreground">100%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 2, delay: 0.5 }}
                              className="h-full bg-gradient-to-r from-primary to-accent"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="bg-muted/50 rounded-xl p-4 border border-border">
                            <Lock className="h-6 w-6 text-primary mb-2" />
                            <p className="text-foreground text-lg font-semibold">AES-256</p>
                            <p className="text-muted-foreground text-xs">Criptografia</p>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-4 border border-border">
                            <Eye className="h-6 w-6 text-accent mb-2" />
                            <p className="text-foreground text-lg font-semibold">24×7</p>
                            <p className="text-muted-foreground text-xs">Monitoramento</p>
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
          <section className="py-20 lg:py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="max-w-6xl mx-auto"
              >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    Nossas Soluções
                  </Badge>
                  <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                    Camadas de <span className="text-gradient">Segurança</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Quatro eixos com propósitos distintos: governança, operação, infraestrutura física e compliance
                  </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      variants={fadeInUp}
                      className="group"
                    >
                      <Card className="h-full border-border/50 bg-card/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                        <CardHeader>
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <feature.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription className="text-base">{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{feature.detail}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Infrastructure Section */}
          <section className="py-20 lg:py-24 relative bg-card/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="max-w-6xl mx-auto"
              >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                  <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                    Segurança na Infraestrutura Física e <span className="text-gradient">Lógica</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Três pilares que sustentam a segurança dos seus sistemas: datacenter certificado, hardware enterprise e segmentação de ambientes.
                  </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                  {securityLayers.map((layer, index) => (
                    <motion.div
                      key={layer.title}
                      variants={fadeInUp}
                    >
                      <Card className="h-full border-border/50 bg-card/50 hover:border-primary/50 transition-all duration-300">
                        <CardHeader>
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                            <layer.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-xl">{layer.title}</CardTitle>
                            <Badge variant="secondary" className="text-xs">{layer.badge}</Badge>
                          </div>
                          <CardDescription className="text-base">{layer.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 lg:py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="max-w-6xl mx-auto"
              >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                  <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                    Resultados que sua <span className="text-gradient">empresa ganha</span>
                  </h2>
                </motion.div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      variants={fadeInUp}
                      className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/50 p-4 hover:border-primary/50 transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Compliance Section */}
          <section className="py-20 lg:py-24 relative bg-card/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="max-w-6xl mx-auto"
              >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    Conformidade
                  </Badge>
                  <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                    Segurança alinhada à LGPD e boas práticas de <span className="text-gradient">governança</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Governança clara, controles rastreáveis e estrutura preparada para auditorias e conformidade regulatória.
                  </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {complianceFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      variants={fadeInUp}
                    >
                      <Card className="h-full border-border/50 bg-card/50 hover:border-primary/50 transition-all duration-300 text-center">
                        <CardHeader>
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto">
                            <feature.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                          <CardDescription>{feature.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Differentials Section */}
          <section className="py-20 lg:py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="max-w-6xl mx-auto"
              >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    Diferenciais
                  </Badge>
                  <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                    O que diferencia a <span className="text-gradient">MDS Cloud</span>
                  </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {differentials.map((differential, index) => (
                    <motion.div
                      key={differential.title}
                      variants={fadeInUp}
                      className="group"
                    >
                      <Card className="h-full border-border/50 bg-card/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                        <CardHeader>
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <differential.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{differential.title}</CardTitle>
                          <CardDescription className="text-base">{differential.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Cross-links Section */}
          <section className="py-20 lg:py-24 relative bg-card/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="max-w-6xl mx-auto"
              >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                  <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                    Segurança integrada às suas <span className="text-gradient">soluções</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Veja como a segurança se conecta ao Cloud, Banco de Dados e Backup.
                  </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                  <motion.div variants={fadeInUp}>
                    <Link to="/solucoes-cloud" className="block h-full group">
                      <Card className="h-full border-border/50 bg-card/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                        <CardHeader>
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Server className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl flex items-center justify-between">
                            Segurança para ERP
                            <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </CardTitle>
                          <CardDescription className="text-base">
                            Infraestrutura cloud segura para ERP e sistemas corporativos
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Link to="/banco-de-dados" className="block h-full group">
                      <Card className="h-full border-border/50 bg-card/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                        <CardHeader>
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Database className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl flex items-center justify-between">
                            Segurança para Banco de Dados
                            <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </CardTitle>
                          <CardDescription className="text-base">
                            Proteção e alta disponibilidade para seus dados críticos
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <Link to="/backup" className="block h-full group">
                      <Card className="h-full border-border/50 bg-card/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                        <CardHeader>
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Shield className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl flex items-center justify-between">
                            Backup Imutável contra Ransomware
                            <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </CardTitle>
                          <CardDescription className="text-base">
                            Proteção contra exclusão ou criptografia maliciosa dos dados
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  </motion.div>
                </div>
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
                opacity: [0.1, 0.2, 0.1]
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
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Proteja seus sistemas críticos hoje
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                  Experimente por 30 dias sem custo. Veja na prática como a MDS Cloud pode proteger a infraestrutura da sua empresa.
                </motion.p>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.div variants={fadeInUp}>
                  <Button variant="heroShiny" size="lg" className="px-8 py-6 text-base gap-2" asChild>
                    <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                      <Zap className="h-5 w-5" />
                      Solicitar POC de até 30 dias
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
