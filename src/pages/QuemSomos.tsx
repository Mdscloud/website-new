import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Users, Award, Shield, Zap, Users2, Briefcase, TrendingUp, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";
import heroImage from "@/assets/about/hero.jpg";
import equipeImage from "@/assets/about/equipe.jpg";
// Importar todas as imagens da pasta equipe
import equipe1 from "@/assets/about/equipe/equipe1.jpg";
import equipe2 from "@/assets/about/equipe/equipe2.jpg";
import equipe3 from "@/assets/about/equipe/equipe3.jpg";
import equipe4 from "@/assets/about/equipe/equipe4.jpg";
import equipe5 from "@/assets/about/equipe/equipe5.jpg";
import equipe6 from "@/assets/about/equipe/equipe6.jpg";
import equipe7 from "@/assets/about/equipe/equipe7.jpg";
import equipe8 from "@/assets/about/equipe/equipe8.jpg";
import equipe9 from "@/assets/about/equipe/equipe9.jpg";
import equipe10 from "@/assets/about/equipe/equipe10.jpg";
import equipe11 from "@/assets/about/equipe/equipe11.jpg";
import equipe12 from "@/assets/about/equipe/equipe12.jpg";
import equipe13 from "@/assets/about/equipe/equipe13.jpg";
import equipe14 from "@/assets/about/equipe/equipe14.jpg";
import equipe15 from "@/assets/about/equipe/equipe15.jpg";
import equipe16 from "@/assets/about/equipe/equipe16.jpg";
import equipe17 from "@/assets/about/equipe/equipe17.jpg";
import equipe18 from "@/assets/about/equipe/equipe18.jpg";

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

const QuemSomos = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Array com todas as imagens da equipe
  const equipeImages = [
    equipe1, equipe2, equipe3, equipe4, equipe5, equipe6,
    equipe7, equipe8, equipe9, equipe10, equipe11, equipe12,
    equipe13, equipe14, equipe15, equipe16, equipe17, equipe18
  ];

  const socios = [
    {
      name: "Sócio 1",
      title: "Co-Founder & CEO",
      bio: "Em breve adicionaremos informações sobre nossos sócios.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
    },
    {
      name: "Sócio 2",
      title: "Co-Founder & CTO",
      bio: "Em breve adicionaremos informações sobre nossos sócios.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop"
    },
    {
      name: "Sócio 3",
      title: "Co-Founder & COO",
      bio: "Em breve adicionaremos informações sobre nossos sócios.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop"
    }
  ];

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
            {[Building2, Award, Users].map((Icon, index) => (
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
                    <Award className="h-4 w-4 mr-2 inline" />
                    Quem Somos
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground"
                >
                  Mais do que um provedor<br />de infraestrutura
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Especialistas em nuvem corporativa brasileira com foco absoluto em sistemas empresariais críticos
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Institucional Section */}
          <section id="institucional" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Texto à esquerda */}
                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                      Institucional
                    </h2>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      A MDS Cloud é mais do que um provedor de infraestrutura — somos especialistas em nuvem corporativa brasileira com foco absoluto em sistemas empresariais críticos, como ERPs e CRMs, e na gestão de bancos de dados de alta complexidade. Atuamos como parceiros estratégicos de empresas que não toleram falhas, interrupções ou lentidão, porque entendemos que seus sistemas são o coração operacional dos seus negócios.
                    </p>
                    <p>
                      Fundada há mais de 16 anos, a MDS Cloud vem construindo, do zero, sua própria infraestrutura em nuvem sob controle total, diferente dos modelos que simplesmente revendem capacidade de grandes nuvens públicas. Essa escolha estratégica nos permite oferecer performance superior, segurança robusta, previsibilidade de custos e suporte humano especializado — tudo com excelência local.
                    </p>
                    <p>
                      Nossa presença física está consolidada no maior complexo de data centers da América Latina em Vinhedo (SP), com plataforma certificada e equipamentos de alta confiabilidade — o que nos permite garantir resultados que vão além das promessas genéricas de "uptime".
                    </p>
                    <p className="font-semibold text-foreground">
                      Somos a nuvem que foi feita para resolver problemas reais de negócios com expertise técnica, proximidade e foco absoluto no cliente.
                    </p>
                  </div>
                </motion.div>

                {/* Imagens à direita */}
                <motion.div 
                  variants={fadeInUp}
                  className="relative lg:pl-8"
                >
                  {/* Imagem grande - base */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src={equipeImage} 
                      alt="Equipe MDS Cloud" 
                      className="w-full h-auto object-cover"
                      style={{ transform: 'scaleX(-1)' }}
                    />
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"></div>
                  </motion.div>

                  {/* Imagem miniatura - sobreposta com efeito flutuante */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, y: 50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      opacity: { duration: 0.8, delay: 0.3 },
                      x: { duration: 0.8, delay: 0.3 },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -bottom-8 -left-8 lg:-left-12 w-64 h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-background z-10"
                  >
                    <img 
                      src={heroImage} 
                      alt="Hero MDS Cloud" 
                      className="w-full h-full object-cover"
                    />
                    {/* Decorative border glow */}
                    <div className="absolute inset-0 ring-4 ring-primary/20 rounded-xl pointer-events-none"></div>
                  </motion.div>

                  {/* Decorative element */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Sócios Section */}
          <section id="socios" className="py-20 relative overflow-hidden">
            {/* Background azul escuro similar ao Níveis de Parceria */}
            <div className="absolute inset-0" style={{ backgroundColor: 'hsl(232, 70%, 8%)' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(232,70%,8%)] via-[hsl(232,70%,12%)] to-[hsl(232,70%,8%)]" />
            
            {/* Background effects */}
            <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"></div>
            <div className="absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid lg:grid-cols-4 gap-6"
              >
                {/* Painel de título à esquerda */}
                <motion.div variants={fadeInUp} className="flex flex-col justify-center">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                    Nossos<br />Sócios
                  </h2>
                  <ArrowRight className="h-8 w-8 text-white/50" />
                </motion.div>

                {/* Cards dos sócios */}
                {socios.map((socio, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative h-[500px] rounded-xl overflow-hidden">
                      {/* Imagem de fundo */}
                      <img 
                        src={socio.image} 
                        alt={socio.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Overlay que sobe no hover com gradiente transparente */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-6"
                        animate={{
                          height: hoveredIndex === index ? '100%' : 'auto',
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{
                          background: hoveredIndex === index 
                            ? 'linear-gradient(to top, rgba(17, 24, 39, 0.98) 0%, rgba(17, 24, 39, 0.95) 20%, rgba(17, 24, 39, 0.85) 40%, rgba(17, 24, 39, 0.6) 60%, rgba(17, 24, 39, 0.3) 80%, transparent 100%)'
                            : 'linear-gradient(to top, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.9) 50%, transparent 100%)'
                        }}
                      >
                        <div className="flex flex-col justify-end h-full">
                          <div className="mb-2">
                            <h3 className="text-xl font-bold text-white mb-1">{socio.name}</h3>
                            <p className="text-sm text-white/80">{socio.title}</p>
                          </div>
                          
                          {/* Biografia - aparece no hover */}
                          <AnimatePresence>
                            {hoveredIndex === index && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="mt-4"
                              >
                                <p className="text-sm text-white/90 leading-relaxed">
                                  {socio.bio}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Equipe Section */}
          <section id="equipe" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Users2 className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                    Nossa Equipe
                  </h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl mb-12">
                  <p>
                    Nossa equipe é formada por especialistas experientes em infraestrutura e DBA, com anos de experiência em sistemas críticos. Trabalhamos com profissionais que entendem a importância de manter seus sistemas sempre disponíveis e performáticos.
                  </p>
                  <p>
                    Nossos especialistas estão disponíveis 24x7 para garantir que seus sistemas críticos nunca parem, oferecendo suporte humano especializado, sem chatbots ou respostas automatizadas.
                  </p>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  <motion.div variants={fadeInUp}>
                    <Card className="h-full border border-border hover:border-primary/50 transition-all">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-foreground">Especialistas em Infraestrutura</CardTitle>
                        <CardDescription>
                          Profissionais com expertise em cloud computing, virtualização e arquitetura de sistemas
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Card className="h-full border border-border hover:border-primary/50 transition-all">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-foreground">DBAs Especializados</CardTitle>
                        <CardDescription>
                          Time de administradores de banco de dados com conhecimento profundo em Oracle, SQL Server, PostgreSQL e MySQL
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Card className="h-full border border-border hover:border-primary/50 transition-all">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-foreground">Suporte 24x7</CardTitle>
                        <CardDescription>
                          Equipe de plantão sempre disponível para garantir continuidade dos seus sistemas críticos
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Álbum de Fotos da Equipe */}
          <section className="py-4 relative bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ParallaxScrollSecond images={equipeImages} />
            </div>
          </section>
        </main>
      </div>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default QuemSomos;
