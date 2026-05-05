import { N8nTestimonials } from "@/components/ui/n8n-testimonials";
import atrioPhoto from "@/assets/testimonials/atrio.png";
import ernaniPhoto from "@/assets/testimonials/ernani.jpeg";
import alfaTecnologiaPhoto from "@/assets/testimonials/alfa-tecnologia.png";
import hostHotelPhoto from "@/assets/testimonials/host-hotel.png";
import aliarePhoto from "@/assets/testimonials/aliare.png";
import celsoPhoto from "@/assets/testimonials/celso.jpeg";
import hspotPhoto from "@/assets/testimonials/hspot.png";
import greenAutomoveisPhoto from "@/assets/testimonials/green-automoveis.png";
import ciaramaLogo from "@/assets/testimonials/ciarama.jpg";
import toyomasterLogo from "@/assets/testimonials/toyomaster.jpg";
import graoDeOuroLogo from "@/assets/testimonials/grao-de-ouro.png";
import redemaqLogo from "@/assets/testimonials/redemaq.png";
import mearimLogo from "@/assets/testimonials/mearim.png";
import andretaLogo from "@/assets/testimonials/andreta.png";
import softpigLogo from "@/assets/testimonials/softpig.png";
import compelLogo from "@/assets/testimonials/compel.jpg";
import otonTechLogo from "@/assets/testimonials/otontech.png";
import flexlifeLogo from "@/assets/testimonials/flexlife.png";

// Import company logos if available
import atrioLogo from "@/assets/testimonials/atrio.png";
import alfaTecnologiaLogo from "@/assets/testimonials/alfa-tecnologia.png";
import hostHotelLogo from "@/assets/testimonials/host-hotel.png";
import aliareLogo from "@/assets/testimonials/aliare.png";
import hspotLogo from "@/assets/testimonials/hspot.png";
import greenAutomoveisLogo from "@/assets/testimonials/green-automoveis.png";

export const homeTestimonials = [
  {
    companyLogo: atrioLogo,
    companyName: "Átrio Hotéis",
    headline: "Como a Átrio Hotéis resolveu problemas de performance e estabilidade com a MDS Cloud",
    quote: "Antes da MDS, enfrentávamos problemas recorrentes de performance e quedas de sistemas, sempre com soluções paliativas. Após a migração, os ganhos foram evidentes: as dores relacionadas à performance e à instabilidade foram resolvidas. Sempre que acionamos a MDS, somos prontamente atendidos com soluções rápidas e eficientes.",
    author: {
      name: "Carlo Pereira",
      role: "Diretor de Tecnologia na Átrio Hotéis",
      avatar: atrioPhoto,
    },
  },
  {
    companyLogo: alfaTecnologiaLogo,
    companyName: "Alfa Tecnologia",
    headline: "Como a Alfa Tecnologia confia nas soluções MDS Cloud há mais de 4 anos",
    quote: "Temos total confiança nas soluções MDS Cloud. Somos parceiros há mais de 4 anos e levamos as soluções da MDS a todos os nossos clientes, especialmente no mercado hoteleiro. Posso garantir que todos os nossos clientes estão 100% satisfeitos.",
    author: {
      name: "Acir Bachmann Cordeiro",
      role: "COO na Alfa Tecnologia",
      avatar: alfaTecnologiaPhoto,
    },
  },
  {
    companyLogo: hostHotelLogo,
    companyName: "Host Hotel Systems Brasil",
    headline: "Como a Host Hotel melhorou infraestrutura e desempenho com suporte ágil",
    quote: "Desde que migramos nossas operações no Brasil para a nuvem da MDS, experimentamos uma melhoria significativa em nossa infraestrutura e desempenho. A agilidade do suporte é impressionante: sempre que enfrentamos algum desafio, a equipe está prontamente disponível.",
    author: {
      name: "Renata Carreira",
      role: "Sócia-Diretora na Host Hotel Systems Brasil",
      avatar: hostHotelPhoto,
    },
  },
  {
    companyLogo: aliareLogo,
    companyName: "Aliare",
    headline: "Como a Aliare se tornou um grande parceiro da MDS através de indicação",
    quote: "Conhecemos a MDS através de uma indicação de um cliente. Após algumas conversas, entendemos que a MDS atendia nossas necessidades técnicas e expectativas quanto a atendimento e backup. Hoje temos a satisfação de ser um grande parceiro da MDS.",
    author: {
      name: "Rossana Ribas",
      role: "Comercial Solution na Aliare",
      avatar: aliarePhoto,
    },
  },
  {
    companyLogo: hspotLogo,
    companyName: "HSPOT",
    headline: "Como a HSPOT encontrou excelência e dedicação na MDS Cloud",
    quote: "Ao longo de nossa jornada conjunta, ficou evidente que a MDS é uma empresa comprometida com a excelência e dedicação em tudo o que faz. A qualidade do trabalho entregue é simplesmente impressionante: cada projeto é realizado com precisão e alto nível de expertise.",
    author: {
      name: "Volnei Miguel",
      role: "Diretor Administrativo na HSPOT",
      avatar: hspotPhoto,
    },
  },
  {
    companyLogo: greenAutomoveisLogo,
    companyName: "Grupo Green - Automóveis",
    headline: "Como o Grupo Green se surpreendeu com a competência da MDS Cloud",
    quote: "A competência da MDS Cloud me surpreendeu! Viemos através de indicação de um amigo. Estava insatisfeito com o antigo fornecedor e comecei a procurar outro. Fiz várias cotações, mas o que me surpreendeu com atendimento, proposta e serviços foi a MDS.",
    author: {
      name: "Eduardo Marques",
      role: "Gerente de TI no Grupo Green - Automóveis",
      avatar: greenAutomoveisPhoto,
    },
  },
  {
    companyLogo: redemaqLogo,
    companyName: "Redemaq",
    headline: "Como a Redemaq ganhou tranquilidade e confiança com a MDS Cloud",
    quote: "Temos mais tranquilidade e confiança com o ambiente rodando na nuvem da MDS Cloud.",
    author: {
      name: "José Franco",
      role: "Redemaq",
      avatar: redemaqLogo,
    },
  },
  {
    companyLogo: mearimLogo,
    companyName: "Mearim Autopeças",
    headline: "Como a Mearim Autopeças eliminou quedas de serviço com a MDS Cloud",
    quote: "Com o uso da Cloud da MDS, hoje não temos quedas de serviços e o atendimento é rápido e preciso.",
    author: {
      name: "Orlando Brito",
      role: "Mearim Autopeças",
      avatar: mearimLogo,
    },
  },
  {
    companyLogo: andretaLogo,
    companyName: "Grupo Andreta",
    headline: "Como o Grupo Andreta ganhou segurança e continuidade operacional na nuvem",
    quote: "Desde a migração para a cloud, percebemos mais segurança e continuidade na nossa operação. O ambiente em nuvem atende com eficiência nossas demandas, garantindo performance e disponibilidade.",
    author: {
      name: "Peterson Grandisoli",
      role: "Gerente de TI no Grupo Andreta",
      avatar: andretaLogo,
    },
  },
  {
    companyLogo: softpigLogo,
    companyName: "SoftPig",
    headline: "Como a SoftPig mantém aplicações críticas estáveis com a MDS Cloud",
    quote: "O ambiente é estável e suporta com eficiência nossas aplicações críticas.",
    author: {
      name: "Jenivaldo Queiroz",
      role: "Gerente de TI na SoftPig",
      avatar: softpigLogo,
    },
  },
  {
    companyLogo: compelLogo,
    companyName: "Compel",
    headline: "Como a Compel conquistou performance e confiabilidade com a MDS Cloud",
    quote: "A adoção da nuvem e suporte MDS trouxe ganhos importantes em performance e confiabilidade. Um servidor em nuvem é mais seguro, tem escala e, se precisar de um recovery, é muito mais rápido — a produção não fica muito tempo parada.",
    author: {
      name: "Denival Silva",
      role: "Analista de TI na Compel",
      avatar: compelLogo,
    },
  },
  {
    companyLogo: toyomasterLogo,
    companyName: "Toyomaster",
    headline: "Como a Toyomaster encontrou na MDS Cloud um parceiro de verdade",
    quote: "A MDS Cloud virou praticamente parte do nosso time! Hoje eles cuidam dos nossos servidores em nuvem, do banco de dados e do firewall — e fazem isso com maestria. Sempre que precisamos, o atendimento é super-rápido e eficiente. Inclusive, já nos salvaram várias vezes quando a internet resolveu tirar férias sem avisar. É muito bom trabalhar com uma equipe parceira de verdade, que resolve, orienta e está sempre pronta para ajudar. Estamos muito satisfeitos e tranquilos sabendo que estamos em boas mãos!",
    author: {
      name: "Nadson Sergio",
      role: "Gestor de TI na Toyomaster",
      avatar: toyomasterLogo,
    },
  },
  {
    companyLogo: graoDeOuroLogo,
    companyName: "Grão de Ouro",
    headline: "Como o Grão de Ouro é atendido com dedicação e tempo recorde pela MDS Cloud",
    quote: "Sempre fomos muito bem atendidos. A equipe de suporte nos atende sempre com muita dedicação e tempo recorde. Em especial, destaco o Diego, que sempre nos atende prontamente.",
    author: {
      name: "Otávio Diniz",
      role: "Gerente de TI no Grão de Ouro",
      avatar: graoDeOuroLogo,
    },
  },
  {
    companyLogo: flexlifeLogo,
    companyName: "Flexlife",
    headline: "Como a Flexlife conquistou mais performance e estabilidade com a MDS Cloud",
    quote: "A adoção da nuvem da MDS marcou um avanço para a Flexlife, com melhorias na performance do ERP, mais estabilidade e redução de falhas. Durante a implantação, o atendimento da MDS se destacou pela agilidade e suporte eficiente, reforçando uma parceria confiável.",
    author: {
      name: "Flexlife",
      role: "",
      avatar: flexlifeLogo,
    },
  },
  {
    companyLogo: otonTechLogo,
    companyName: "OtonTech Soluções",
    headline: "Como a OtonTech Soluções potencializa clientes do agronegócio com a infraestrutura MDS Cloud",
    quote: "A parceria entre a OtonTech Soluções e a MDS Cloud é essencial para a implantação e otimização do ERP Siagri no agronegócio. A OtonTech garante consultoria especializada, alinhando o sistema às necessidades do negócio. Com a nuvem da MDS Cloud, há alta performance, segurança e acesso rápido às informações. Essa integração gera eficiência, reduz custos e agiliza decisões.",
    author: {
      name: "OtonTech Soluções",
      role: "Consultoria especializada em ERP Siagri",
      avatar: otonTechLogo,
    },
  },
  {
    companyLogo: ciaramaLogo,
    companyName: "Ciarama",
    headline: "Como a Ciarama elevou seu padrão de infraestrutura com a MDS Cloud",
    quote: "A MDS Cloud elevou nosso padrão de infraestrutura. Saímos de um cenário mais reativo para um ambiente em nuvem com maior disponibilidade, controle e segurança. O trabalho de dimensionamento e o suporte próximo reduziram riscos operacionais e trouxeram mais estabilidade para sistemas críticos. O resultado é uma TI mais eficiente, com capacidade de escalar e manter a operação com confiança.",
    author: {
      name: "Rainer Pedrozo",
      role: "Gerente Corporativo de TI na Ciarama",
      avatar: ciaramaLogo,
    },
  },
];

export function NewTestimonialsSection() {
  return (
    <N8nTestimonials
      testimonials={homeTestimonials}
      autoPlay={true}
      speed={30}
    />
  );
}
