import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
    consentimentoFinalidade: false,
    consentimentoMarketing: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação: consentimento para finalidade é obrigatório
    if (!formData.consentimentoFinalidade) {
      alert("Por favor, aceite o consentimento para tratamento de dados para as finalidades informadas.");
      return;
    }
    
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-primary/10 via-transparent to-background">
          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Entre em Contato
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Descubra o suporte especializado em bancos de dados da MDS Cloud.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="mb-6 font-display text-2xl font-bold text-foreground md:text-3xl">
                    Nos diga como podemos ajudar a sua empresa!
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="nome">
                          Nome <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="nome"
                          name="nome"
                          type="text"
                          required
                          placeholder="Nome"
                          value={formData.nome}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          E-mail <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="E-mail"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="telefone">
                          Telefone <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          required
                          placeholder="(11) 90000-0000"
                          value={formData.telefone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="empresa">Empresa</Label>
                        <Input
                          id="empresa"
                          name="empresa"
                          type="text"
                          placeholder="Empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        placeholder="Mensagem"
                        rows={6}
                        value={formData.mensagem}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Consentimentos LGPD */}
                    <div className="space-y-4 rounded-lg border border-border bg-card/50 p-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="consentimentoFinalidade"
                          checked={formData.consentimentoFinalidade}
                          onCheckedChange={(checked) => handleCheckboxChange("consentimentoFinalidade", checked as boolean)}
                          className="mt-1"
                        />
                        <Label htmlFor="consentimentoFinalidade" className="text-sm leading-relaxed cursor-pointer">
                          <span className="text-destructive">*</span> Compreendo e autorizo o tratamento dos dados para as finalidades informadas, pois tenho conhecimento de que a coleta é necessária para realização dos esclarecimentos solicitados relacionados aos serviços oferecidos.
                        </Label>
                      </div>
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="consentimentoMarketing"
                          checked={formData.consentimentoMarketing}
                          onCheckedChange={(checked) => handleCheckboxChange("consentimentoMarketing", checked as boolean)}
                          className="mt-1"
                        />
                        <Label htmlFor="consentimentoMarketing" className="text-sm leading-relaxed cursor-pointer">
                          Compreendo e autorizo o tratamento dos dados para fins de recebimento de e-mails com informações relevantes sobre serviços, produtos e/ou notícias diversas sobre compliance, privacidade, segurança da informação e gestão de riscos.
                        </Label>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Você pode retirar seu consentimento a qualquer momento. Para mais informações, consulte nossa{" "}
                        <a href="/politicas-privacidade" className="text-primary hover:underline">
                          Política de Privacidade
                        </a>
                        .
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Falar com Especialista
                    </Button>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="mb-6 font-display text-2xl font-bold text-foreground md:text-3xl">
                      Informações de Contato
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-lg font-semibold text-foreground">Telefone</h3>
                          <a
                            href="tel:+551125777899"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            (11) 2577-7899
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-lg font-semibold text-foreground">E-mail</h3>
                          <a
                            href="mailto:suporte@mdscloud.com.br"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            suporte@mdscloud.com.br
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-lg font-semibold text-foreground">Localização</h3>
                          <p className="text-muted-foreground">
                            Vinhedo, SP<br />
                            Data Centers Tier III
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-foreground">Redes Sociais</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://linkedin.com/company/mdscloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card transition-all hover:bg-primary/10 hover:border-primary"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5 text-foreground" />
                      </a>
                      <a
                        href="https://instagram.com/mdscloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card transition-all hover:bg-primary/10 hover:border-primary"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5 text-foreground" />
                      </a>
                      <a
                        href="https://facebook.com/mdscloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card transition-all hover:bg-primary/10 hover:border-primary"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5 text-foreground" />
                      </a>
                      <a
                        href="https://wa.me/551125777899"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card transition-all hover:bg-primary/10 hover:border-primary"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="h-5 w-5 text-foreground" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Contact;
