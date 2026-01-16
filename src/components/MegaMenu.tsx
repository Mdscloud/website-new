import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Car, Wheat, Factory, Hotel } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  variant: "produtos" | "solucoes" | "sobre" | "conteudo" | null;
}

export function MegaMenu({ isOpen, onClose, onMouseEnter, variant }: MegaMenuProps) {
  const { t } = useI18n();

  if (!variant || !isOpen) return null;

  const produtosContent = {
    title: "Produtos",
    columns: [
      {
        title: "Infraestrutura",
        items: [
          {
            title: "Cloud Corporativa",
            description: "Infraestrutura própria de alta performance para sistemas críticos",
            href: "#cloud",
          },
          {
            title: "Alta Disponibilidade",
            description: "Redundância e failover para continuidade operacional",
            href: "#disponibilidade",
          },
          {
            title: "Escalabilidade",
            description: "Crescimento sob demanda sem perda de performance",
            href: "#escalabilidade",
          },
        ],
      },
      {
        title: "Banco de Dados",
        items: [
          {
            title: "Administração de DBA",
            description: "Gestão especializada 24x7 de bancos de dados",
            href: "#dba",
          },
          {
            title: "Otimização",
            description: "Tuning contínuo e maximização de eficiência",
            href: "#otimizacao",
          },
          {
            title: "Migração",
            description: "Migrações complexas com impacto mínimo",
            href: "#migracao",
          },
        ],
      },
      {
        title: "Segurança",
        items: [
          {
            title: "LGPD e Compliance",
            description: "Estrutura dedicada com DPO e práticas regulatórias",
            href: "#lgpd",
          },
          {
            title: "Backup e Criptografia",
            description: "Proteção total de dados com múltiplas camadas",
            href: "#backup",
          },
          {
            title: "Monitoramento",
            description: "Monitoramento contínuo e testes regulares",
            href: "#monitoramento",
          },
        ],
      },
    ],
    footerLinks: [
      { title: "Ver todos os produtos", href: "#produtos" },
      { title: "Solicitar demonstração", href: "#demo" },
      { title: "Comparar planos", href: "#planos" },
    ],
  };

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
            href: "/solucoes#hotelaria",
            icon: Hotel,
          },
          {
            title: "Automotivo",
            description: "Infraestrutura para indústria automotiva",
            href: "/solucoes#automotivo",
            icon: Car,
          },
          {
            title: "Agronegócio",
            description: "Tecnologia para o campo e agronegócio",
            href: "/solucoes#agro",
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
            title: "ERP em Nuvem",
            description: "Ambientes otimizados para ERPs",
            href: "/solucoes#erp",
          },
          {
            title: "CRM em Nuvem",
            description: "Infraestrutura para CRMs",
            href: "/solucoes#crm",
          },
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
            title: "Sobre Nós",
            description: "Mais de 16 anos de experiência em nuvem corporativa",
            href: "/sobre",
          },
          {
            title: "Nossa História",
            description: "Construindo infraestrutura própria desde o zero",
            href: "/sobre#historia",
          },
          {
            title: "Nossa Equipe",
            description: "Especialistas experientes em infraestrutura e DBA",
            href: "/sobre#equipe",
          },
        ],
      },
      {
        title: "Diferenciais",
        items: [
          {
            title: "Infraestrutura Própria",
            description: "Data centers Tier III em Vinhedo (SP)",
            href: "#infraestrutura",
          },
          {
            title: "Performance Superior",
            description: "Comparável ou superior a grandes nuvens públicas",
            href: "#performance",
          },
          {
            title: "Suporte Humano 24x7",
            description: "Sem chatbots, apenas especialistas",
            href: "#suporte",
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
        title: "Recursos",
        description: "Fique informado sobre insights da indústria, tendências e tudo sobre a MDS Cloud",
        items: [
          { title: "Blog", href: "#blog" },
          { title: "Relatórios e Guias", href: "#relatorios" },
          { title: "Webinars", href: "#webinars" },
          { title: "Glossário", href: "#glossario" },
        ],
      },
      {
        title: "Cases",
        items: [
          { title: "Cases de Sucesso", href: "/#cases" },
          { title: "Depoimentos em Vídeo", href: "/#depoimentos-video" },
          { title: "Depoimentos em Texto", href: "/#depoimentos" },
          { title: "Benchmarks", href: "/#benchmarks" },
        ],
      },
      {
        title: "Ajuda",
        items: [
          { title: "Central de Ajuda", href: "#ajuda" },
          { title: "Documentação", href: "#documentacao" },
          { title: "Status dos Serviços", href: "#status" },
        ],
      },
    ],
    footerLinks: [
      { title: "Tours interativos", href: "#tours" },
      { title: "Veja nossos preços", href: "#precos" },
      { title: "Solicitar demonstração", href: "#demo" },
    ],
  };

  const content = {
    produtos: produtosContent,
    solucoes: solucoesContent,
    sobre: sobreContent,
    conteudo: conteudoContent,
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
