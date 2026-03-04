import imgCloudHoteis from "@/assets/artigo1.jpg";
import imgInfraestruturaErp from "@/assets/artigo2.jpg";
import imgHotelariaDigital from "@/assets/about/hero.jpg";

export type BodyBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | { type: "quote"; content: string }
  | { type: "list"; items: string[] };

export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  externalUrl: string;
  source: string;
  /** Conteúdo completo da matéria (quando disponível) */
  body?: BodyBlock[];
}

export const blogPosts: BlogPostData[] = [
  {
    slug: "infraestrutura-cloud-critica-hoteis",
    title: "Por que a infraestrutura de cloud se tornou crítica para os hotéis",
    excerpt:
      "A hotelaria moderna opera sobre uma base cada vez mais digital. PMS, ERPs, motores de reservas e sistemas de pagamento processam dados sensíveis em tempo real. Segurança e performance são inseparáveis — entenda por que a infraestrutura de cloud virou ativo estratégico.",
    date: "5 Fev 2026",
    author: "Redação Hotelier News",
    category: "Hotelaria",
    image: imgCloudHoteis,
    externalUrl:
      "https://hoteliernews.com.br/por-que-a-infraestrutura-de-cloud-se-tornou-critica-para-os-hoteis/",
    source: "Hotelier News",
    body: [
      {
        type: "paragraph",
        content:
          "A hotelaria moderna opera sobre uma base cada vez mais digital. PMS, ERPs, motores de reservas, sistemas de pagamento, governança e integrações com canais externos processam, em tempo real, dados sensíveis de hóspedes, empresas e transações financeiras. Nesse cenário, a segurança da informação passou a depender diretamente da qualidade da infraestrutura de cloud.",
      },
      {
        type: "paragraph",
        content:
          "Segundo Bruno Schwambach, diretor de Tecnologia e Bancos de Dados da MDS Cloud, existe um ponto que muitos gestores ainda subestimam: segurança e performance são inseparáveis.",
      },
      {
        type: "quote",
        content:
          "Muita gente acha que segurança é só firewall e antivírus. Mas, na prática, um ambiente lento, instável e congestionado é muito mais vulnerável. Segurança real depende de uma rede rápida, estável e previsível.",
      },
      { type: "heading", content: "Dados críticos trafegam em tempo real" },
      {
        type: "paragraph",
        content:
          "Em um hotel, dados de cartão, documentos, histórico de estadias, reservas e faturamento não ficam parados. Eles trafegam constantemente entre o PMS, gateways de pagamento, sistemas fiscais e plataformas de distribuição. Se essa comunicação acontece sobre uma infraestrutura de baixa performance, surgem gargalos, retransmissões, falhas de sincronização e janelas de vulnerabilidade.",
      },
      {
        type: "quote",
        content:
          "Quando uma rede é lenta, o sistema precisa tentar de novo, abrir mais conexões, manter sessões por mais tempo. Isso aumenta o risco de erro, de exposição e até de ataque.",
      },
      { type: "heading", content: "Alta performance como camada de proteção" },
      {
        type: "paragraph",
        content:
          "Em uma cloud corporativa de alto desempenho, os dados trafegam em redes internas de 10 a 25 Gb, com baixa latência, sem congestionamento e com isolamento entre clientes. Isso reduz drasticamente:",
      },
      {
        type: "list",
        items: [
          "Perda de pacotes",
          "Reprocessamentos",
          "Timeouts de banco de dados",
          "Exposição de sessões",
          "Superfícies de ataque",
        ],
      },
      {
        type: "quote",
        content:
          "Quanto mais rápido e estável é o caminho do dado, menos ele fica 'exposto'. Performance, nesse contexto, vira um mecanismo de segurança.",
      },
      { type: "heading", content: "LGPD exige mais do que políticas" },
      {
        type: "paragraph",
        content:
          "A LGPD (Lei Geral de Proteção de Dados) elevou o nível de responsabilidade dos hotéis. Não basta ter termos de uso — é preciso garantir que os dados estejam protegidos técnica e operacionalmente. Isso envolve:",
      },
      {
        type: "list",
        items: [
          "Criptografia em trânsito e em repouso",
          "Segmentação de redes",
          "Firewalls corporativos",
          "Backups imutáveis",
          "Monitoramento 24×7",
        ],
      },
      {
        type: "paragraph",
        content:
          "Mas tudo isso depende de uma infraestrutura que consiga processar segurança sem comprometer a performance.",
      },
      {
        type: "quote",
        content:
          "Muitos ambientes até tentam aplicar segurança, mas como a infraestrutura é fraca, acabam desligando camadas de proteção para o sistema não ficar lento. Aí nasce o risco real.",
      },
      { type: "heading", content: "Cloud genérica vs. cloud especializada" },
      {
        type: "paragraph",
        content:
          "Provedores de cloud genéricos focam em escala. Já ambientes que hospedam PMS e ERPs hoteleiros exigem outro tipo de engenharia: redes dedicadas, storages de alto IOPS, isolamento entre clientes e times que entendem banco de dados. Na MDS Cloud, a infraestrutura foi desenhada exatamente para isso.",
      },
      {
        type: "quote",
        content:
          "Nós operamos uma cloud desenhada para sistemas críticos. Nossa infraestrutura é baseada em redes de alta velocidade, storages SSD e dedicada para cada cliente. Isso permite aplicar segurança forte sem comprometer a performance.",
      },
      { type: "heading", content: "No fim, segurança vira confiança" },
      {
        type: "paragraph",
        content:
          "Para o hóspede, o que importa é que seus dados estejam protegidos e que tudo funcione. Para o hotel, isso se traduz em reputação, conformidade e continuidade do negócio.",
      },
      {
        type: "quote",
        content:
          "Quando a infraestrutura é rápida, estável e segura, a tecnologia some. E o que fica é a confiança do hóspede no hotel.",
      },
    ],
  },
  {
    slug: "mds-cloud-infraestrutura-propria-erp",
    title: "MDS Cloud aposta em infraestrutura própria para liderar hospedagem de sistemas ERP",
    excerpt:
      "Em um mercado dominado por grandes plataformas globais, a MDS Cloud constrói sua própria nuvem — do zero. Conheça a estratégia que transformou a empresa em uma das provedoras nacionais mais especializadas em hospedagem de sistemas de gestão.",
    date: "3 Dez 2025",
    author: "Redação TI INSIDE",
    category: "Infraestrutura",
    image: imgInfraestruturaErp,
    externalUrl:
      "https://tiinside.com.br/03/12/2025/mds-cloud-aposta-em-infraestrutura-propria-para-liderar-hospedagem-de-sistemas-erp/",
    source: "TI INSIDE Online",
    body: [
      {
        type: "paragraph",
        content:
          "Em um mercado dominado por grandes plataformas globais e soluções padronizadas, a MDS Cloud avança na contramão da indústria. Em vez de depender de gigantes de nuvem pública e repassar custos, burocracias e oscilações cambiais aos clientes, a empresa decidiu construir sua própria nuvem — do zero. A estratégia, que exigiu investimento contínuo em hardware, segurança e arquitetura de alta disponibilidade, transformou a MDS Cloud em uma das provedoras nacionais mais especializadas em hospedagem de sistemas de gestão empresarial de qualquer procedência.",
      },
      {
        type: "paragraph",
        content:
          "Fundada em 2012, com mais de 1.200 clientes ativos em setores como hotelaria, agronegócio, automotivo, saúde, entre outros, a empresa vê o momento atual como decisivo para ampliar sua presença e consolidar sua marca no mercado tecnológico.",
      },
      {
        type: "paragraph",
        content:
          "Ao contrário de provedores que apenas revendem capacidade de grandes provedores estrangeiros, a MDS Cloud constrói, gerencia e opera toda a sua nuvem, instalada no maior complexo de data centers da América Latina, em Vinhedo (SP), equipada com servidores Dell e sistemas de alta confiabilidade.",
      },
      {
        type: "quote",
        content:
          "Desenvolvida com infraestrutura própria e uma equipe especializada para manutenção e crescimento contínuo, a MDS Cloud tem controle total sobre performance, segurança e disponibilidade. Isso elimina pedágios, elimina impacto do dólar, elimina intermediários. O cliente fala com quem realmente opera a infraestrutura.",
      },
      {
        type: "paragraph",
        content:
          "Sistemas ERP exigem muito mais do que uma nuvem genérica. Eles são críticos — gerenciam compras, finanças, RH, estoque, produção e logística. Por isso, demandam performance, baixa latência e suporte imediato.",
      },
      {
        type: "quote",
        content:
          "A MDS se especializou em hospedar sistemas supercríticos. Sabemos que um ERP não pode falhar. É alta performance, alta disponibilidade e atendimento imediato, motivo pelo qual temos uma equipe 24×7 horas monitorando o ambiente e garantindo alta disponibilidade dos sistemas.",
      },
      {
        type: "paragraph",
        content:
          "Segundo ele, é comum que clientes que chegam de outras nuvens percebam aceleração média de 40% a 50% na performance dos sistemas, especialmente quando vinham hospedados em data centers fora do Brasil ou ambientes compartilhados de baixa qualidade.",
      },
      { type: "heading", content: "A estratégia multi-cloud: desafio e vantagem" },
      {
        type: "paragraph",
        content:
          "A crescente tendência de adoção do modelo multi-cloud vem sendo sentida pela empresa. Hospitais, grupos empresariais e grandes cadeias que precisam manter parte da infraestrutura local, por exemplo, começam a distribuir cargas entre plataformas distintas em busca de redundância, testes e controle de custos.",
      },
      {
        type: "quote",
        content:
          "Temos inúmeros clientes que usam a MDS para rodar o ERP — que exige performance — e outras nuvens para serviços como e-mail ou arquivos. Trabalhar em ambientes híbridos e multi-cloud não é problema. A MDS se posiciona como a nuvem ideal para aplicações críticas.",
      },
      {
        type: "paragraph",
        content:
          "A MDS atende essas necessidades, pois possui uma arquitetura redundante, nuvem projetada para suportar banco de dados robustos e suporte humano, o que garante aos clientes um SLA (acordo de nível de serviço) de no máximo 5 minutos, bem acima de qualquer média de mercado.",
      },
      { type: "heading", content: "Segurança e conformidade: pilares obrigatórios" },
      {
        type: "paragraph",
        content:
          "Com o aumento de ataques cibernéticos no Brasil, a empresa reforçou sua estrutura de segurança. Possui departamento próprio de LGPD, com um DPO dedicado e entrega aos clientes políticas de backup, criptografia, monitoramento e testes contínuos.",
      },
      {
        type: "quote",
        content:
          "Quando o ERP está na MDS, toda a segurança é nossa responsabilidade. O cliente não precisa ter um analista de segurança interno. Entregamos tudo no pacote.",
      },
      {
        type: "quote",
        content:
          "Outro destaque é a velocidade de ativação de novos contratos. Assim que o contrato é fechado, o ambiente pode ser disponibilizado em até 24 horas. Para migrações urgentes, a empresa realiza o processo durante a madrugada, com suporte ativo para minimizar impactos na operação do cliente.",
      },
      {
        type: "paragraph",
        content:
          "Além disso, antes do cliente fazer a contratação definitiva, ele passa por POC de 30 dias, gratuita, para medir performance, suporte e compatibilidade.",
      },
      {
        type: "quote",
        content:
          "Enquanto clouds públicas trabalham com preços variáveis e cobrança por consumo, a MDS segue na direção oposta: oferece planos de valor fixo, sem tarifas ocultas e sem multas contratuais.",
      },
      { type: "heading", content: "Inteligência artificial" },
      {
        type: "paragraph",
        content:
          "A chegada da inteligência artificial também está no radar da MDS Cloud. A empresa já investe em infraestrutura compatível com processamento de IA e prepara sua nuvem para suportar novos recursos que serão incorporados pelos desenvolvedores de ERP nos próximos anos.",
      },
      {
        type: "quote",
        content:
          "O mercado está em forte expansão. E nós estamos preparados para o futuro. Queremos expandir para aumentar a nossa rede de parceiros de negócios, consultorias de TI e software house e/ou integradores de soluções de TI que precisam ou buscam um parceiro de alto nível para rodar suas soluções.",
      },
      {
        type: "quote",
        content:
          "Ter e confiar em um parceiro tecnológico, ter a MDS como parceiro tech é uma jogada chave, pois somos brasileiros, investindo em infraestrutura própria, escalável e com mão de obra muito especializada.",
      },
    ],
  },
  {
    slug: "cloud-alta-performance-hotelaria-digital",
    title: "Cloud de alta performance se torna pilar da nova hotelaria digital",
    excerpt:
      "A cloud virou o sistema mais importante do hotel: infraestrutura de alta performance por trás de PMS, reservas e faturamento. Para o hóspede ela é invisível — mas está em cada etapa da jornada, da reserva ao check-out.",
    date: "2 Fev 2026",
    author: "Edgar J. Oliveira",
    category: "Hotelaria",
    image: imgHotelariaDigital,
    externalUrl:
      "https://revistahoteis.com.br/cloud-de-alta-performance-se-torna-pilar-da-nova-hotelaria-digital/",
    source: "Revista Hotéis",
  },
];

export function getPostBySlug(slug: string): BlogPostData | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
