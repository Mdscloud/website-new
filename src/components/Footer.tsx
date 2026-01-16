import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";
import mdsLogo from "@/assets/mds-logo.png";

const footerLinks = {
  solucoes: [
    { name: "Soluções em Cloud", href: "/solucoes-cloud" },
    { name: "Banco de Dados", href: "/banco-de-dados" },
    { name: "Backup", href: "/backup" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Cases de Sucesso", href: "#cases" },
    { name: "Blog", href: "#" },
    { name: "Carreiras", href: "#" },
  ],
  suporte: [
    { name: "Central de Ajuda", href: "#" },
    { name: "Documentação", href: "#" },
    { name: "Status dos Serviços", href: "#" },
    { name: "SLA", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer id="contato" className="relative z-20 border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="mb-6 inline-block">
              <img 
                src={mdsLogo} 
                alt="MDS Cloud Solutions" 
                className="h-12 w-auto"
              />
            </a>
            <p className="mb-6 max-w-sm text-muted-foreground">
              A nuvem de alta performance que seu negócio exige. 
              Infraestrutura 100% gerenciada com suporte 24x7.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+551140044004" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Phone className="h-4 w-4" />
                (11) 4004-4004
              </a>
              <a href="mailto:contato@mdscloud.com.br" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4" />
                contato@mdscloud.com.br
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                São Paulo, SP - Brasil
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="mb-4 font-display font-semibold text-foreground">Soluções</h4>
            <ul className="space-y-3">
              {footerLinks.solucoes.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-foreground">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-foreground">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 MDS Cloud. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
