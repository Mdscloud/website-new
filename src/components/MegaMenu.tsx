import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Car, Wheat, Factory, Hotel, Building2, Users, Award, TrendingUp, Headphones, Zap, Users2, Handshake, FileText, Phone, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  variant: "solucoes" | "sobre" | "conteudo" | "parceiros" | null;
}

export function MegaMenu({ isOpen, onClose, onMouseEnter, variant }: MegaMenuProps) {
  const { t } = useI18n();

  if (!variant || !isOpen) return null;

  const solucoesContent = {
    title: "Soluções",
    columns: [
      {
        title: "Nossas Soluções",
        items: [
          {
            title: "Soluções em Cloud",
            description: "Infraestrutura de alta performance com 30.000+ IOPS, redundância total e escalabilidade sob demanda. Data centers Tier III certificados.",
            href: "/solucoes-cloud",
          },
          {
            title: "Banco de Dados",
            description: "Gestão especializada de banco de dados 24x7. Monitoramento proativo, otimização de performance e suporte técnico dedicado.",
            href: "/banco-de-dados",
          },
          {
            title: "Backup",
            description: "Proteção completa de dados com backup automatizado, retenção flexível e recuperação rápida. Segurança enterprise para seus dados críticos.",
            href: "/backup",
          },
        ],
      },
      {
        title: "Vertical",
        items: [
          {
            title: "Hotelaria",
            description: "Soluções especializadas para o setor hoteleiro",
            href: "/hotelaria",
            icon: Hotel,
          },
          {
            title: "Automotivo",
            description: "Infraestrutura para indústria automotiva",
            href: "/automotivo",
            icon: Car,
          },
          {
            title: "Agronegócio",
            description: "Tecnologia para o campo e agronegócio",
            href: "/agronegocio",
            icon: Wheat,
          },
          {
            title: "Industrial",
            description: "Sistemas críticos para indústria e saúde",
            href: "/solucoes#industrial",
            icon: Factory,
          },
        ],
      },
      {
        title: "Por Tipo",
        items: [
          {
            title: "Aplicações Empresariais",
            description: "Sistemas corporativos críticos",
            href: "/solucoes#aplicacoes",
          },
        ],
      },
    ],
    footerLinks: [
      { title: "Cases de sucesso", href: "/cases" },
      { title: "Solicitar consultoria", href: "/contato" },
      { title: "Proof of Concept (30 dias)", href: "/contato#poc" },
    ],
  };

  const sobreContent = {
    title: "Sobre",
    columns: [
      {
        title: "Quem Somos",
        items: [
          {
            title: "Institucional",
            description: "Mais de 16 anos de experiência em nuvem corporativa",
            href: "/quem-somos#institucional",
          },
          {
            title: "Sócios",
            description: "Conheça nossos sócios e fundadores",
            href: "/quem-somos#socios",
          },
          {
            title: "Equipe",
            description: "Especialistas experientes em infraestrutura e DBA",
            href: "/quem-somos#equipe",
          },
        ],
      },
      {
        title: "O Que Fazemos",
        items: [
          {
            title: "Cloud Builder",
            description: "Infraestrutura própria de alta performance",
            href: "/o-que-fazemos#cloud-builder",
          },
          {
            title: "DBA Time",
            description: "Tunning e administração de bancos de dados",
            href: "/o-que-fazemos#dba-time",
          },
          {
            title: "Suporte Técnico",
            description: "Suporte humano 24x7 ultra rápido",
            href: "/o-que-fazemos#suporte-tecnico",
          },
          {
            title: "Backup",
            description: "Proteção completa de dados críticos",
            href: "/o-que-fazemos#backup",
          },
        ],
      },
      {
        title: "Como Fazemos",
        items: [
          {
            title: "Diferenciais",
            description: "O que nos torna únicos no mercado",
            href: "/como-fazemos#diferenciais",
          },
        ],
      },
    ],
    footerLinks: [
      { title: "Carreiras", href: "/contato#carreiras" },
      { title: "Contato", href: "/contato" },
      { title: "Blog", href: "#blog" },
    ],
  };

  const conteudoContent = {
    title: "Conteúdo",
    columns: [
      {
        title: "Conteúdo",
        description: "Acesse nossos recursos, depoimentos e informações importantes",
        items: [
          { 
            title: "Blog", 
            description: "Artigos, insights e novidades sobre tecnologia e nuvem",
            href: "/blog" 
          },
          { 
            title: "Depoimentos", 
            description: "O que nossos clientes falam sobre a MDS Cloud",
            href: "/depoimentos" 
          },
          { 
            title: "Depoimentos em Vídeo", 
            description: "Depoimentos em vídeo de nossos clientes",
            href: "/depoimentos-video" 
          },
          { 
            title: "Políticas de Privacidade", 
            description: "Nossas políticas e termos de privacidade",
            href: "/politicas-privacidade" 
          },
        ],
      },
    ],
    footerLinks: [],
  };

  const parceirosContent = {
    title: "Parceiros",
    columns: [
      {
        title: "Níveis de Parceria",
        items: [
          {
            title: "Level 1 - Empresas de Software",
            description: "Modelo comercial para empresas de software que revendem nossa solução",
            href: "/parceiros#levels",
            icon: Building2,
          },
          {
            title: "Level 2 - Consultoria",
            description: "Modelo para consultorias que indicam leads e oportunidades",
            href: "/parceiros#levels",
            icon: Users,
          },
          {
            title: "Level 3 - Consultorias Premium",
            description: "Modelo premium para consultorias estratégicas",
            href: "/parceiros#levels",
            icon: Award,
          },
        ],
      },
      {
        title: "Benefícios",
        items: [
          {
            title: "Aumento dos ganhos proporcionais",
            description: "Comissões atrativas e crescimento junto com a MDS Cloud",
            href: "/parceiros#benefits",
            icon: TrendingUp,
          },
          {
            title: "Suporte técnico integral",
            description: "Suporte técnico completo para seus clientes, 24x7",
            href: "/parceiros#benefits",
            icon: Headphones,
          },
          {
            title: "Acompanhamento do ciclo de vendas",
            description: "Apoio completo durante todo o processo de vendas",
            href: "/parceiros#benefits",
            icon: Users2,
          },
          {
            title: "Política de gestão de Leads",
            description: "Sistema estruturado para gestão de leads e oportunidades",
            href: "/parceiros#benefits",
            icon: Zap,
          },
        ],
      },
      {
        title: "Processo",
        items: [
          {
            title: "Seleção do Partner & Nível",
            description: "Avaliamos seu perfil e definimos o nível de parceria ideal",
            href: "/parceiros#process",
          },
          {
            title: "Contrato",
            description: "Assinatura do contrato de parceria",
            href: "/parceiros#process",
          },
          {
            title: "CRM User",
            description: "Acesso ao nosso CRM para gestão de leads e oportunidades",
            href: "/parceiros#process",
          },
          {
            title: "Mapeamento das contas/território",
            description: "Definimos o território e contas que você irá atuar",
            href: "/parceiros#process",
          },
          {
            title: "Atuação & Agendamentos",
            description: "Início da atuação comercial com suporte da MDS Cloud",
            href: "/parceiros#process",
          },
        ],
      },
    ],
    footerLinks: [
      { title: "Falar com Comercial", href: "/parceiros#cta" },
      { title: "Enviar Proposta", href: "/parceiros#cta" },
      { title: "Política de Parceria", href: "/parceiros#policy" },
    ],
  };

  const content = {
    solucoes: solucoesContent,
    sobre: sobreContent,
    conteudo: conteudoContent,
    parceiros: parceirosContent,
  }[variant];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 top-16 z-40 bg-black/5"
          />
          
          {/* MegaMenu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed left-0 right-0 top-16 z-50 border-b border-border bg-background shadow-lg"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onClose}
          >
            <div className="container mx-auto px-6 py-6">
              {/* Tab indicator */}
              <div className="mb-3">
                <span className="inline-block rounded-t-md bg-muted px-3 py-1 text-[10px] font-semibold text-foreground">
                  {content.title}
                </span>
              </div>

              {/* Main content */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {content.columns.map((column, colIndex) => (
                  <div key={colIndex} className="space-y-2.5">
                    <h3 className="text-xs font-bold text-foreground">{column.title}</h3>
                    {column.description && (
                      <p className="mb-2 text-[10px] leading-relaxed text-muted-foreground">{column.description}</p>
                    )}
                    <ul className="space-y-1.5">
                      {column.items.map((item, itemIndex) => {
                        const Icon = item.icon;
                        return (
                          <li key={itemIndex}>
                            <a
                              href={item.href}
                              onClick={onClose}
                              className="group flex items-start gap-2 rounded-md p-1.5 transition-colors hover:bg-muted/30"
                            >
                              {Icon && (
                                <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/70 group-hover:text-primary" />
                              )}
                              <div className="flex-1">
                                <div className="text-xs font-semibold leading-tight text-foreground group-hover:text-primary">
                                  {item.title}
                                </div>
                                {item.description && (
                                  <div className="mt-0.5 text-[10px] leading-relaxed text-muted-foreground">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Footer links */}
              {content.footerLinks && (
                <div className="mt-6 flex flex-wrap gap-5 border-t border-border pt-4">
                  {content.footerLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center gap-1 text-[10px] font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      {link.title}
                      <ChevronDown className="h-2.5 w-2.5 rotate-[-90deg]" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
