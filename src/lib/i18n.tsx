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
  "nav.cta": { pt: "Avaliação Gratuita", en: "Free Evaluation", es: "Evaluación Gratuita" },
  
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
  "hero.subtitle": { pt: "Cloud para ERP, bancos de dados e sistemas críticos. Infraestrutura 100% gerenciada com a estabilidade e performance que empresas de alta demanda precisam.", en: "Cloud for ERP, databases and critical systems. 100% managed infrastructure with the stability and performance that high-demand companies need.", es: "Cloud para ERP, bases de datos y sistemas críticos. Infraestructura 100% gestionada con la estabilidad y el rendimiento que las empresas de alta demanda necesitan." },
  "hero.cta.primary": { pt: "Falar com especialista", en: "Talk to an expert", es: "Hablar con un especialista" },
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
  "metrics.title.1": { pt: "Performance que você pode", en: "Performance you can", es: "Rendimiento que puedes" },
  "metrics.title.2": { pt: "medir", en: "measure", es: "medir" },
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
  "team.quote": { pt: "Infraestrutura crítica exige especialistas de ponta.", en: "Critical infrastructure requires top specialists.", es: "La infraestructura crítica exige especialistas de primer nivel." },
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
  "footer.description": { pt: "A nuvem de alta performance que seu negócio exige. Infraestrutura 100% gerenciada com suporte 24x7.", en: "The high-performance cloud your business demands. 100% managed infrastructure with 24x7 support.", es: "La nube de alto rendimiento que tu negocio exige. Infraestructura 100% gestionada con soporte 24x7." },
  "footer.services": { pt: "Serviços", en: "Services", es: "Servicios" },
  "footer.solutions": { pt: "Soluções", en: "Solutions", es: "Soluciones" },
  "footer.company": { pt: "Empresa", en: "Company", es: "Empresa" },
  "footer.security": { pt: "Segurança & LGPD", en: "Security & LGPD", es: "Seguridad & LGPD" },
  "footer.contact": { pt: "Contato", en: "Contact", es: "Contacto" },
  "footer.rights": { pt: "Todos os direitos reservados.", en: "All rights reserved.", es: "Todos los derechos reservados." },
  "footer.privacy": { pt: "Política de Privacidade", en: "Privacy Policy", es: "Política de Privacidad" },
  "footer.terms": { pt: "Termos de Uso", en: "Terms of Use", es: "Términos de Uso" },
  "footer.link.cloud": { pt: "Soluções em Cloud", en: "Cloud Solutions", es: "Soluciones Cloud" },
  "footer.link.db": { pt: "Banco de Dados", en: "Database", es: "Base de Datos" },
  "footer.link.backup": { pt: "Backup", en: "Backup", es: "Backup" },
  "footer.link.security": { pt: "Segurança em Cloud", en: "Cloud Security", es: "Seguridad Cloud" },
  "footer.link.about": { pt: "Quem Somos", en: "About Us", es: "Quiénes Somos" },
  "footer.link.what": { pt: "O Que Fazemos", en: "What We Do", es: "Qué Hacemos" },
  "footer.link.how": { pt: "Como Fazemos", en: "How We Do It", es: "Cómo lo Hacemos" },
  "footer.link.blog": { pt: "Blog", en: "Blog", es: "Blog" },
  "footer.link.partners": { pt: "Parceiros", en: "Partners", es: "Socios" },
  "footer.link.contact": { pt: "Contato", en: "Contact", es: "Contacto" },
  "footer.link.privacy": { pt: "Política de Privacidade", en: "Privacy Policy", es: "Política de Privacidad" },
  "footer.link.terms": { pt: "Termos de Uso", en: "Terms of Use", es: "Términos de Uso" },
  "footer.link.lgpd": { pt: "Segurança & LGPD", en: "Security & LGPD", es: "Seguridad & LGPD" },

  // Floating Contact
  "float.title": { pt: "Solicitar Orçamento", en: "Request a Quote", es: "Solicitar Presupuesto" },
  "float.subtitle": { pt: "Escolha como prefere falar conosco", en: "Choose how you'd like to reach us", es: "Elige cómo prefieres contactarnos" },
  "float.whatsapp": { pt: "WhatsApp", en: "WhatsApp", es: "WhatsApp" },
  "float.whatsapp.desc": { pt: "Resposta imediata", en: "Immediate response", es: "Respuesta inmediata" },
  "float.call": { pt: "Ligar Agora", en: "Call Now", es: "Llamar Ahora" },
  "float.email": { pt: "E-mail", en: "Email", es: "Correo" },
  "float.form": { pt: "Formulário", en: "Contact Form", es: "Formulario" },
  "float.privacy": { pt: "Ao continuar navegando, você concorda e aceita as nossas", en: "By continuing to browse, you agree to our", es: "Al continuar navegando, aceptas nuestras" },
  "float.privacy.link": { pt: "condições e política de privacidade", en: "terms and privacy policy", es: "términos y política de privacidad" },

  // CTA Section
  "cta.section.title.1": { pt: "Migre sem risco para uma cloud de", en: "Migrate risk-free to a", es: "Migra sin riesgo a una nube de" },
  "cta.section.title.2": { pt: "alta performance", en: "high-performance cloud", es: "alto rendimiento" },
  "cta.section.desc": { pt: "Veja sua aplicação rodando com mais performance, estabilidade e suporte especializado, sem compromisso.", en: "See your application running with more performance, stability and specialized support, no commitment.", es: "Ve tu aplicación funcionando con más rendimiento, estabilidad y soporte especializado, sin compromiso." },
  "cta.section.button": { pt: "Solicitar POC de até 30 dias", en: "Request Up to 30-Day POC", es: "Solicitar POC de hasta 30 días" },
  "cta.benefit.1": { pt: "Setup gratuito e migração assistida", en: "Free setup and assisted migration", es: "Setup gratuito y migración asistida" },
  "cta.benefit.2": { pt: "30 dias de teste sem compromisso", en: "30-day no-commitment trial", es: "30 días de prueba sin compromiso" },
  "cta.benefit.3": { pt: "Suporte técnico 24x7 incluso", en: "24x7 technical support included", es: "Soporte técnico 24x7 incluido" },
  "cta.benefit.4": { pt: "Contrato sem fidelidade ou multas", en: "No lock-in or cancellation fees", es: "Sin fidelidad ni penalizaciones" },

  // Differentials Section
  "diff.section.title.1": { pt: "Infraestrutura Cloud criada para sistemas que", en: "Cloud Infrastructure built for systems that", es: "Infraestructura Cloud para sistemas que" },
  "diff.section.title.2": { pt: "não podem parar", en: "can't stop", es: "no pueden parar" },
  "diff.section.desc": { pt: "Performance, disponibilidade e suporte especializado para ERP, bancos de dados e aplicações corporativas críticas.", en: "Performance, availability and specialized support for ERP, databases and critical corporate applications.", es: "Rendimiento, disponibilidad y soporte especializado para ERP, bases de datos y aplicaciones corporativas críticas." },
  "diff.perf.title": { pt: "Performance real", en: "Real Performance", es: "Rendimiento real" },
  "diff.perf.desc": { pt: "Storage SSD/NVMe de alta IOPS e rede dedicada eliminando lentidão em ERP e banco de dados.", en: "High-IOPS SSD/NVMe storage and dedicated network eliminating slowness in ERP and databases.", es: "Almacenamiento SSD/NVMe de alta IOPS y red dedicada eliminando lentitud en ERP y bases de datos." },
  "diff.sla.op.title": { pt: "SLA operacional", en: "Operational SLA", es: "SLA operacional" },
  "diff.sla.op.desc": { pt: "Equipe própria 24x7 com atuação direta na causa do problema – não apenas abertura de chamados.", en: "In-house 24x7 team acting directly on the root cause – not just opening tickets.", es: "Equipo propio 24x7 actuando directamente en la causa del problema – no solo abriendo tickets." },
  "diff.freedom.title": { pt: "Liberdade e transparência", en: "Freedom and transparency", es: "Libertad y transparencia" },
  "diff.freedom.desc": { pt: "Sem lock-in contratual. Permanência baseada em performance e resultado entregue.", en: "No contractual lock-in. Retention based on performance and delivered results.", es: "Sin lock-in contractual. Permanencia basada en rendimiento y resultados entregados." },
  "diff.stats.label": { pt: "Empresas que operam sistemas críticos confiam na MDS Cloud", en: "Companies running critical systems trust MDS Cloud", es: "Empresas con sistemas críticos confían en MDS Cloud" },
  "diff.stat.clients": { pt: "clientes ativos", en: "active clients", es: "clientes activos" },
  "diff.stat.iops": { pt: "IOPS em produção", en: "IOPS in production", es: "IOPS en producción" },
  "diff.stat.backbone": { pt: "backbone redundante", en: "redundant backbone", es: "backbone redundante" },
  "diff.stat.dc": { pt: "Data Centers", en: "Data Centers", es: "Data Centers" },
  "diff.cta.button": { pt: "Solicitar análise gratuita de performance", en: "Request free performance analysis", es: "Solicitar análisis gratuito de rendimiento" },
  "diff.cta.footnote": { pt: "Sem fidelidade • Ativação rápida • Especialistas 24x7", en: "No lock-in • Fast activation • 24x7 Specialists", es: "Sin fidelidad • Activación rápida • Especialistas 24x7" },

  // Metrics Section
  "metrics.section.sub": { pt: "Por que escolher a MDS Cloud", en: "Why Choose MDS Cloud", es: "Por qué elegir MDS Cloud" },
  "metrics.section.desc": { pt: "Números reais de uma infraestrutura projetada para empresas de alta demanda.", en: "Real numbers from infrastructure designed for high-demand companies.", es: "Números reales de una infraestructura diseñada para empresas de alta demanda." },
  "metrics.clients.label": { pt: "Clientes", en: "Clients", es: "Clientes" },
  "metrics.clients.desc": { pt: "Empresas confiam em nós", en: "Companies trust us", es: "Empresas confían en nosotros" },
  "metrics.network.label": { pt: "Rede", en: "Network", es: "Red" },
  "metrics.network.desc": { pt: "Velocidade de conexão", en: "Connection speed", es: "Velocidad de conexión" },
  "metrics.storage.label": { pt: "Storage", en: "Storage", es: "Storage" },
  "metrics.storage.desc": { pt: "Alta performance", en: "High performance", es: "Alto rendimiento" },
  "metrics.servers.label": { pt: "Servidores", en: "Servers", es: "Servidores" },
  "metrics.servers.desc": { pt: "Alta tecnologia", en: "High technology", es: "Alta tecnología" },
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
