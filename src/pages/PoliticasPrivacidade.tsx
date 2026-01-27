import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { Shield, Building2, Users, Award, TrendingUp, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/about/hero.jpg";

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

const PoliticasPrivacidade = () => {
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
                    <Shield className="h-4 w-4 mr-2 inline" />
                    Políticas de Privacidade
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground"
                >
                  Políticas de Privacidade<br />e Proteção de Dados
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Conheça nossas políticas de privacidade e como protegemos seus dados
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="space-y-8"
              >
                <Card className="border border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-3">
                      <FileText className="h-6 w-6 text-primary" />
                      Política de Privacidade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        A MDS Cloud está comprometida com a proteção da privacidade e dos dados pessoais de nossos clientes, visitantes e usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
                      </p>
                      <p>
                        <strong className="text-foreground">1. Informações que Coletamos</strong><br />
                        Coletamos informações que você nos fornece diretamente, como nome, e-mail, telefone e informações da empresa quando você se registra em nossos serviços ou entra em contato conosco.
                      </p>
                      <p>
                        <strong className="text-foreground">2. Como Usamos suas Informações</strong><br />
                        Utilizamos suas informações para fornecer, manter e melhorar nossos serviços, processar transações, comunicar com você e cumprir obrigações legais.
                      </p>
                      <p>
                        <strong className="text-foreground">3. Proteção de Dados</strong><br />
                        Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                      </p>
                      <p>
                        <strong className="text-foreground">4. Seus Direitos</strong><br />
                        Você tem o direito de acessar, corrigir, excluir ou solicitar a portabilidade de seus dados pessoais, conforme previsto na LGPD.
                      </p>
                      <p>
                        <strong className="text-foreground">5. Contato</strong><br />
                        Para questões sobre esta política ou para exercer seus direitos, entre em contato conosco através do e-mail: privacidade@mdscloud.com.br
                      </p>
                    </div>
                  </CardContent>
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

export default PoliticasPrivacidade;
