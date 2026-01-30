import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "pt" | "en" | "es";

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
    es: string;
  };
}

export const translations: Translations = {
  // Header
  "nav.home": { pt: "Home", en: "Home", es: "Inicio" },
  "nav.solutions": { pt: "Soluções", en: "Solutions", es: "Soluciones" },
  "nav.cases": { pt: "Cases", en: "Cases", es: "Casos" },
  "nav.about": { pt: "Sobre", en: "About", es: "Nosotros" },
  "nav.contact": { pt: "Contato", en: "Contact", es: "Contacto" },
  "nav.cta": { pt: "Falar com Especialista", en: "Talk to Specialist", es: "Hablar con Especialista" },
  
  // Services
  "service.cloud": { pt: "Cloud Computing", en: "Cloud Computing", es: "Cloud Computing" },
  "service.cloud.desc": { pt: "Infraestrutura de alta performance", en: "High performance infrastructure", es: "Infraestructura de alto rendimiento" },
  "service.backup": { pt: "Backup em Nuvem", en: "Cloud Backup", es: "Backup en la Nube" },
  "service.backup.desc": { pt: "Proteção total de dados", en: "Complete data protection", es: "Protección total de datos" },
  "service.dba": { pt: "DBA Remoto", en: "Remote DBA", es: "DBA Remoto" },
  "service.dba.desc": { pt: "Gestão especializada 24x7", en: "24x7 specialized management", es: "Gestión especializada 24x7" },
  "service.erp": { pt: "ERP SaaS", en: "ERP SaaS", es: "ERP SaaS" },
  "service.erp.desc": { pt: "Sistemas empresariais em nuvem", en: "Enterprise cloud systems", es: "Sistemas empresariales en la nube" },
  
  // Hero
  "hero.badge": { pt: "+15 anos de experiência em infraestrutura cloud", en: "+15 years of experience in cloud infrastructure", es: "+15 años de experiencia en infraestructura cloud" },
  "hero.title.1": { pt: "A Nuvem de", en: "The", es: "La Nube de" },
  "hero.title.highlight": { pt: "Alta Performance", en: "High Performance", es: "Alto Rendimiento" },
  "hero.title.2": { pt: "que seu Negócio Exige", en: "Cloud Your Business Demands", es: "que tu Negocio Exige" },
  "hero.subtitle": { pt: "Cloud Computing, Backup em Nuvem, DBA Remoto e ERP SaaS. Infraestrutura 100% gerenciada com a estabilidade e performance que empresas de alta demanda precisam.", en: "Cloud Computing, Cloud Backup, Remote DBA and ERP SaaS. 100% managed infrastructure with the stability and performance that high-demand businesses need.", es: "Cloud Computing, Backup en la Nube, DBA Remoto y ERP SaaS. Infraestructura 100% gestionada con la estabilidad y rendimiento que las empresas de alta demanda necesitan." },
  "hero.cta.primary": { pt: "Solicite Cotação", en: "Request Quote", es: "Solicitar Cotización" },
  "hero.cta.secondary": { pt: "Teste Grátis 30 Dias", en: "Free 30-Day Trial", es: "Prueba Gratis 30 Días" },
  "hero.badge.iops": { pt: "30.000+ IOPS", en: "30,000+ IOPS", es: "30.000+ IOPS" },
  "hero.badge.support": { pt: "Suporte 24x7", en: "24x7 Support", es: "Soporte 24x7" },
  "hero.badge.tier": { pt: "Tier III", en: "Tier III", es: "Tier III" },
  "hero.partners": { pt: "Parceiros e Certificações", en: "Partners & Certifications", es: "Socios y Certificaciones" },
  
  // Services Section
  "services.subtitle": { pt: "Soluções", en: "Solutions", es: "Soluciones" },
  "services.title": { pt: "Infraestrutura completa para seu negócio", en: "Complete infrastructure for your business", es: "Infraestructura completa para tu negocio" },
  "services.description": { pt: "Desde a migração até a gestão diária, cuidamos de toda sua infraestrutura de TI para que você foque no que realmente importa: seu negócio.", en: "From migration to daily management, we take care of all your IT infrastructure so you can focus on what really matters: your business.", es: "Desde la migración hasta la gestión diaria, cuidamos toda tu infraestructura de TI para que te concentres en lo que realmente importa: tu negocio." },
  "services.learnmore": { pt: "Saiba mais", en: "Learn more", es: "Saber más" },
  
  // Differentials
  "diff.subtitle": { pt: "Por que nos escolher", en: "Why Choose Us", es: "Por qué elegirnos" },
  "diff.title": { pt: "Diferenciais que fazem a diferença", en: "Differentials that make a difference", es: "Diferenciales que hacen la diferencia" },
  "diff.description": { pt: "Não somos apenas mais um provedor de cloud. Somos parceiros comprometidos com seu sucesso.", en: "We're not just another cloud provider. We're partners committed to your success.", es: "No somos solo otro proveedor de cloud. Somos socios comprometidos con tu éxito." },
  "diff.support.title": { pt: "Atendimento Humanizado", en: "Humanized Support", es: "Atención Humanizada" },
  "diff.support.desc": { pt: "Resposta rápida com pessoas reais. Sem filas, sem robôs. Seu problema é nossa prioridade.", en: "Fast response with real people. No queues, no robots. Your problem is our priority.", es: "Respuesta rápida con personas reales. Sin colas, sin robots. Tu problema es nuestra prioridad." },
  "diff.sla.title": { pt: "SLA Sem Amarras", en: "No-Lock-In SLA", es: "SLA Sin Ataduras" },
  "diff.sla.desc": { pt: "Zero cláusula de rescisão. Se não estiver satisfeito, pode cancelar a qualquer momento. Confiamos na qualidade do nosso serviço.", en: "Zero termination clause. If you're not satisfied, you can cancel anytime. We trust in our service quality.", es: "Cero cláusula de rescisión. Si no estás satisfecho, puedes cancelar en cualquier momento. Confiamos en la calidad de nuestro servicio." },
  "diff.partners.title": { pt: "Rede de Parceiros", en: "Partner Network", es: "Red de Socios" },
  "diff.partners.desc": { pt: "80% dos nossos clientes vêm por indicação de parceiros satisfeitos. Isso diz muito sobre nós.", en: "80% of our clients come from satisfied partner referrals. That says a lot about us.", es: "El 80% de nuestros clientes vienen por recomendación de socios satisfechos. Eso dice mucho de nosotros." },
  
  // Client Types
  "clients.consultants": { pt: "Consultores de TI", en: "IT Consultants", es: "Consultores de TI" },
  "clients.consultants.desc": { pt: "Parceiros que indicam leads e confiam em nossa infraestrutura", en: "Partners who refer leads and trust our infrastructure", es: "Socios que refieren leads y confían en nuestra infraestructura" },
  "clients.software": { pt: "Software Houses", en: "Software Houses", es: "Software Houses" },
  "clients.software.desc": { pt: "Desenvolvedores que precisam de cloud confiável para seus sistemas", en: "Developers who need reliable cloud for their systems", es: "Desarrolladores que necesitan cloud confiable para sus sistemas" },
  "clients.integrators": { pt: "Integradores", en: "Integrators", es: "Integradores" },
  "clients.integrators.desc": { pt: "Especialistas em automação industrial, IoT e câmeras", en: "Specialists in industrial automation, IoT and cameras", es: "Especialistas en automatización industrial, IoT y cámaras" },
  "clients.direct": { pt: "Clientes Diretos", en: "Direct Clients", es: "Clientes Directos" },
  "clients.direct.desc": { pt: "Empresas que buscam excelência em infraestrutura cloud", en: "Companies seeking excellence in cloud infrastructure", es: "Empresas que buscan excelencia en infraestructura cloud" },
  
  // Metrics
  "metrics.subtitle": { pt: "Em números", en: "By the Numbers", es: "En números" },
  "metrics.title": { pt: "Performance que você pode medir", en: "Performance you can measure", es: "Rendimiento que puedes medir" },
  "metrics.uptime": { pt: "Uptime Médio", en: "Average Uptime", es: "Uptime Promedio" },
  "metrics.response": { pt: "Tempo de Resposta", en: "Response Time", es: "Tiempo de Respuesta" },
  "metrics.migration": { pt: "Migração Segura", en: "Secure Migration", es: "Migración Segura" },
  "metrics.clients": { pt: "Clientes Ativos", en: "Active Clients", es: "Clientes Activos" },
  
  // Team
  "team.subtitle": { pt: "Nossa Equipe", en: "Our Team", es: "Nuestro Equipo" },
  "team.title.1": { pt: "Time de Especialistas,", en: "Team of Specialists,", es: "Equipo de Especialistas," },
  "team.title.2": { pt: "atendimento ultra-rápido", en: "ultra-fast service", es: "atención ultra-rápida" },
  "team.description.1": { pt: "Por trás de cada servidor, cada backup, cada migração, existe uma equipe apaixonada por tecnologia e comprometida com seu sucesso. Não somos apenas fornecedores — somos parceiros.", en: "Behind every server, every backup, every migration, there's a team passionate about technology and committed to your success. We're not just vendors — we're partners.", es: "Detrás de cada servidor, cada backup, cada migración, existe un equipo apasionado por la tecnología y comprometido con tu éxito. No somos solo proveedores — somos socios." },
  "team.description.2": { pt: "Nossa equipe reúne especialistas certificados em Oracle, VMware, Microsoft e AWS. Cada membro traz anos de experiência em projetos críticos, garantindo que sua infraestrutura esteja sempre em boas mãos.", en: "Our team brings together certified specialists in Oracle, VMware, Microsoft and AWS. Each member brings years of experience in critical projects, ensuring your infrastructure is always in good hands.", es: "Nuestro equipo reúne especialistas certificados en Oracle, VMware, Microsoft y AWS. Cada miembro aporta años de experiencia en proyectos críticos, garantizando que tu infraestructura esté siempre en buenas manos." },
  "team.quote": { pt: "A tecnologia conecta, mas são as pessoas que fazem a diferença.", en: "Technology connects, but it's people who make the difference.", es: "La tecnología conecta, pero son las personas las que hacen la diferencia." },
  "team.stat.specialists": { pt: "Especialistas", en: "Specialists", es: "Especialistas" },
  "team.stat.experience": { pt: "Anos de Experiência", en: "Years of Experience", es: "Años de Experiencia" },
  "team.stat.clients": { pt: "Clientes Satisfeitos", en: "Satisfied Clients", es: "Clientes Satisfechos" },
  "team.stat.uptime": { pt: "Uptime Garantido", en: "Guaranteed Uptime", es: "Uptime Garantizado" },
  
  // Testimonials
  "testimonials.subtitle": { pt: "Depoimentos", en: "Testimonials", es: "Testimonios" },
  "testimonials.title.1": { pt: "O que nossos clientes", en: "What our clients", es: "Lo que nuestros clientes" },
  "testimonials.title.2": { pt: "dizem sobre nós", en: "say about us", es: "dicen de nosotros" },
  
  // Video Testimonials
  "video.subtitle": { pt: "Cases em Vídeo", en: "Video Cases", es: "Casos en Video" },
  "video.title.1": { pt: "Histórias de", en: "Success", es: "Historias de" },
  "video.title.2": { pt: "sucesso reais", en: "stories", es: "éxito reales" },
  "video.description": { pt: "Veja como nossos clientes transformaram seus negócios com a MDS Cloud Solutions.", en: "See how our clients transformed their businesses with MDS Cloud Solutions.", es: "Mira cómo nuestros clientes transformaron sus negocios con MDS Cloud Solutions." },
  
  // CTA
  "cta.title": { pt: "Pronto para transformar sua infraestrutura?", en: "Ready to transform your infrastructure?", es: "¿Listo para transformar tu infraestructura?" },
  "cta.description": { pt: "Comece hoje mesmo com 30 dias grátis. Sem cartão de crédito, sem compromisso.", en: "Start today with 30 free days. No credit card, no commitment.", es: "Comienza hoy mismo con 30 días gratis. Sin tarjeta de crédito, sin compromiso." },
  "cta.button.primary": { pt: "Começar Teste Grátis", en: "Start Free Trial", es: "Comenzar Prueba Gratis" },
  "cta.button.secondary": { pt: "Agendar Demonstração", en: "Schedule Demo", es: "Agendar Demostración" },
  
  // Footer
  "footer.description": { pt: "Infraestrutura cloud de alta performance para empresas que exigem o melhor.", en: "High-performance cloud infrastructure for companies that demand the best.", es: "Infraestructura cloud de alto rendimiento para empresas que exigen lo mejor." },
  "footer.services": { pt: "Serviços", en: "Services", es: "Servicios" },
  "footer.company": { pt: "Empresa", en: "Company", es: "Empresa" },
  "footer.contact": { pt: "Contato", en: "Contact", es: "Contacto" },
  "footer.rights": { pt: "Todos os direitos reservados.", en: "All rights reserved.", es: "Todos los derechos reservados." },
  "footer.privacy": { pt: "Política de Privacidade", en: "Privacy Policy", es: "Política de Privacidad" },
  "footer.terms": { pt: "Termos de Uso", en: "Terms of Use", es: "Términos de Uso" },
  
  // Floating Contact
  "float.title": { pt: "Como podemos ajudar?", en: "How can we help?", es: "¿Cómo podemos ayudar?" },
  "float.whatsapp": { pt: "WhatsApp", en: "WhatsApp", es: "WhatsApp" },
  "float.call": { pt: "Ligar Agora", en: "Call Now", es: "Llamar Ahora" },
  "float.form": { pt: "Formulário", en: "Contact Form", es: "Formulario" },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "pt";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
