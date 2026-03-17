import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { MessageSquare, Building2, Users, Award, TrendingUp, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import backgroundTemporario from "@/assets/background-temporario.png";

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

const Depoimentos = () => {
  const depoimentos = [
    {
      name: "João Silva",
      company: "Empresa ABC",
      role: "CTO",
      text: "A MDS Cloud transformou nossa infraestrutura. A performance melhorou significativamente e o suporte é excepcional.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      company: "Tech Solutions",
      role: "Diretora de TI",
      text: "O suporte técnico 24x7 da MDS Cloud é realmente humano e eficiente. Resolvem nossos problemas em minutos.",
      rating: 5,
    },
    {
      name: "Carlos Oliveira",
      company: "Inovação Digital",
      role: "CEO",
      text: "A migração foi perfeita, sem interrupções. A equipe da MDS Cloud é extremamente profissional e conhecedora.",
      rating: 5,
    },
    {
      name: "Celso Lurk",
      company: "Sight Business Intelligence",
      role: "Diretor de Operações",
      text: "A MDS atendeu completamente nossos requisitos, oferecendo uma camada de proteção contra invasões ou vazamentos de dados, e garantindo nenhuma indisponibilidade de dados ao longo de cinco anos de parceria. A resposta imediata às necessidades de escalabilidade reforça a qualidade do suporte. Após cinco anos de parceria, podemos afirmar com total segurança que estamos muito satisfeitos com os serviços da MDS.",
      rating: 5,
    },
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
              style={{ backgroundImage: `url(${backgroundTemporario})` }}
            />
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
                    <MessageSquare className="h-4 w-4 mr-2 inline" />
                    Depoimentos
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground"
                >
                  O Que Nossos Clientes<br />Dizem Sobre Nós
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Conheça a experiência de empresas que confiam na MDS Cloud
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Depoimentos Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {depoimentos.map((depoimento, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="h-full border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                      <CardHeader>
                        <Quote className="h-8 w-8 text-primary/30 mb-4" />
                        <CardDescription className="text-base leading-relaxed mb-4">
                          "{depoimento.text}"
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{depoimento.name}</p>
                            <p className="text-sm text-muted-foreground">{depoimento.role} - {depoimento.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
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

export default Depoimentos;
