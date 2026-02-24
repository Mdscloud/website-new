import { N8nTestimonials } from "@/components/ui/n8n-testimonials";
import atrioPhoto from "@/assets/testimonials/atrio.png";
import ernaniPhoto from "@/assets/testimonials/ernani.jpeg";
import alfaTecnologiaPhoto from "@/assets/testimonials/alfa-tecnologia.png";
import hostHotelPhoto from "@/assets/testimonials/host-hotel.png";
import aliarePhoto from "@/assets/testimonials/aliare.png";
import celsoPhoto from "@/assets/testimonials/celso.jpeg";
import hspotPhoto from "@/assets/testimonials/hspot.png";
import greenAutomoveisPhoto from "@/assets/testimonials/green-automoveis.png";

// Import company logos if available
import atrioLogo from "@/assets/testimonials/atrio.png";
import alfaTecnologiaLogo from "@/assets/testimonials/alfa-tecnologia.png";
import hostHotelLogo from "@/assets/testimonials/host-hotel.png";
import aliareLogo from "@/assets/testimonials/aliare.png";
import hspotLogo from "@/assets/testimonials/hspot.png";
import greenAutomoveisLogo from "@/assets/testimonials/green-automoveis.png";

const testimonials = [
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
];

export function NewTestimonialsSection() {
  return (
    <N8nTestimonials
      testimonials={testimonials}
      autoPlay={true}
      speed={30}
    />
  );
}
