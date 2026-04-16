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
import { useI18n } from "@/lib/i18n";

const Contact = () => {
  const { t } = useI18n();
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
      alert(t("contact.alert.consent"));
      return;
    }

    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Form submitted:", formData);
    alert(t("contact.alert.success"));
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
                {t("contact.hero.title")}
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                {t("contact.hero.subtitle")}
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
                    {t("contact.form.title")}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="nome">
                          {t("contact.form.name")} <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="nome"
                          name="nome"
                          type="text"
                          required
                          placeholder={t("contact.form.name")}
                          value={formData.nome}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {t("contact.form.email")} <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder={t("contact.form.email")}
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="telefone">
                          {t("contact.form.phone")} <span className="text-destructive">*</span>
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
                        <Label htmlFor="empresa">{t("contact.form.company")}</Label>
                        <Input
                          id="empresa"
                          name="empresa"
                          type="text"
                          placeholder={t("contact.form.company")}
                          value={formData.empresa}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mensagem">{t("contact.form.message")}</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        placeholder={t("contact.form.message")}
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
                          <span className="text-destructive">*</span> {t("contact.form.consent.purpose")}
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
                          {t("contact.form.consent.marketing")}
                        </Label>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {t("contact.form.consent.withdraw")}{" "}
                        <a href="/politicas-privacidade" className="text-primary hover:underline">
                          {t("footer.link.privacy")}
                        </a>
                        .
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      {t("common.talk.expert")}
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
                      {t("contact.info.title")}
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-lg font-semibold text-foreground">{t("contact.info.phone")}</h3>
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
                          <h3 className="mb-1 text-lg font-semibold text-foreground">{t("contact.info.email")}</h3>
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
                          <h3 className="mb-1 text-lg font-semibold text-foreground">{t("contact.info.location")}</h3>
                          <p className="text-muted-foreground">
                            Vinhedo, SP<br />
                            {t("contact.info.location.line2")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-foreground">{t("contact.info.social")}</h3>
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
