import { motion } from "framer-motion";
import { Shield, Lock, Server, Network, Eye, CheckCircle2, ArrowRight, Zap, Database, Clock, Settings, AlertTriangle, Users, BarChart3, Gift, Phone, Calendar, Globe, HardDrive } from "lucide-react";
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
      icon: Shield,
      title: 'Segurança de Rede',
      description: 'Firewall e proteção avançada contra ameaças',
      detail: 'Firewall de última geração, monitoramento de tráfego e prevenção de intrusões em tempo real',
    },
    {
      icon: Lock,
      title: 'Controle de Acessos',
      description: 'Gestão rigorosa de permissões e autenticação',
      detail: 'Controle de acesso baseado em roles, autenticação multifator e auditoria completa',
    },
    {
      icon: Eye,
      title: 'Monitoramento 24×7',
      description: 'Vigilância contínua dos ambientes',
      detail: 'Monitoramento proativo, detecção de anomalias e resposta rápida a incidentes',
    },
    {
      icon: AlertTriangle,
      title: 'Prevenção de Ataques',
      description: 'Proteção contra ameaças cibernéticas',
      detail: 'Sistemas de detecção e prevenção de intrusões, proteção DDoS e análise comportamental',
    }
  ];

  const benefits = [
    'Infraestrutura própria em datacenters Ascenty',
    'Servidores Dell de alta tecnologia',
    'Storages SSD de alta performance',
    'Monitoramento contínuo 24×7',
    'Firewall e segurança de rede',
    'Hardening de sistemas',
    'Backups automatizados',
    'Suporte especializado',
    'Conformidade com LGPD'
  ];

  const securityLayers = [
    {
      icon: Network,
      title: 'Segurança de Rede',
      description: 'Firewall avançado, segmentação de rede e proteção contra ameaças',
      badge: 'Primeira linha de defesa',
    },
    {
      icon: Server,
      title: 'Hardening de Sistemas',
      description: 'Configuração segura de servidores e aplicações seguindo boas práticas',
      badge: 'Configuração otimizada',
    },
    {
      icon: Database,
      title: 'Proteção de Dados',
      description: 'Criptografia, controle de acesso e backup automatizado',
      badge: 'Dados protegidos',
    }
  ];

  const complianceFeatures = [
    { icon: Shield, title: 'Conformidade LGPD', description: 'Alinhamento com a Lei Geral de Proteção de Dados' },
    { icon: CheckCircle2, title: 'Governança de Dados', description: 'Políticas e procedimentos de segurança documentados' },
    { icon: Users, title: 'Treinamento de Equipe', description: 'Equipe especializada em segurança e privacidade' },
    { icon: BarChart3, title: 'Auditoria e Relatórios', description: 'Relatórios de segurança e auditoria regular' }
  ];

  const differentials = [
    { icon: Shield, title: 'Segurança Multilayer', description: 'Múltiplas camadas de proteção desde o datacenter até o banco de dados' },
    { icon: Eye, title: 'Monitoramento 24×7', description: 'Equipe técnica monitora os ambientes continuamente, atuando de forma preventiva' },
    { icon: Lock, title: 'Hardening de Sistemas', description: 'Configuração segura seguindo boas práticas de mercado' },
    { icon: Network, title: 'Firewall e Segurança de Rede', description: 'Proteção avançada contra ameaças e controle de tráfego' },
    { icon: AlertTriangle, title: 'Prevenção de Ataques', description: 'Sistemas de detecção e prevenção de intrusões em tempo real' },
    { icon: CheckCircle2, title: 'Conformidade LGPD', description: 'Boas práticas de governança e proteção de dados alinhadas à LGPD' }
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
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-4xl mx-auto text-center"
              >
                <motion.div variants={fadeInUp}>
                  <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
                    Segurança em Cloud
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl leading-tight"
                >
                  Segurança que <span className="text-gradient">protege</span> seu negócio
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp}
                  className="mb-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                >
                  A Segurança em Cloud da MDS Cloud é parte fundamental da nossa infraestrutura e dos serviços oferecidos aos clientes. Desde o datacenter até o banco de dados, o ambiente é projetado para proteger aplicações críticas como ERP, CRM, PMS e bancos de dados corporativos, garantindo a confidencialidade, integridade e disponibilidade das informações.
                </motion.p>

                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                      Falar com Especialista
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                      Solicitar Orçamento
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
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
                    Proteção completa desde a infraestrutura até os dados
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
                    Infraestrutura <span className="text-gradient">Segura</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Com infraestrutura própria em datacenters Ascenty no Brasil, servidores Dell, storages SSD e monitoramento contínuo, a MDS Cloud combina segurança de rede, Firewall, monitoramento, prevenção de ataques, controle de acessos, backups automatizados, hardening de sistemas e suporte especializado.
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
                    Por que escolher nossa <span className="text-gradient">Segurança</span>?
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
                    Governança e <span className="text-gradient">LGPD</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Nossa equipe técnica monitora os ambientes 24×7, atuando de forma preventiva e rápida em qualquer incidente, além de seguir boas práticas de governança e proteção de dados alinhadas à LGPD.
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
                    O que nos torna <span className="text-gradient">únicos</span>
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
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full mb-8 shadow-lg">
                  <Gift className="h-5 w-5" />
                  <span className="font-semibold">Oferta Especial</span>
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Comece com a Segurança de Alta Performance
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
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                      Começar Teste Grátis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                      Agendar Demonstração
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-center text-sm text-muted-foreground"
              >
                Setup em até 24h • Suporte incluso
              </motion.p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
