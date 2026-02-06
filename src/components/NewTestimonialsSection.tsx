import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import atrioPhoto from "@/assets/testimonials/atrio.png";
import ernaniPhoto from "@/assets/testimonials/ernani.jpeg";
import alfaTecnologiaPhoto from "@/assets/testimonials/alfa-tecnologia.png";
import hostHotelPhoto from "@/assets/testimonials/host-hotel.png";
import aliarePhoto from "@/assets/testimonials/aliare.png";
import celsoPhoto from "@/assets/testimonials/celso.jpeg";
import hspotPhoto from "@/assets/testimonials/hspot.png";
import greenAutomoveisPhoto from "@/assets/testimonials/green-automoveis.png";

const testimonials = [
  {
    author: {
      name: "Carlos Pereira",
      handle: "Diretor de Tecnologia na Átrio Hotéis",
      avatar: atrioPhoto,
    },
    text: "Antes da MDS, enfrentávamos problemas recorrentes de performance e quedas de sistemas, sempre com soluções paliativas. Após a migração, os ganhos foram evidentes: as dores relacionadas à performance e à instabilidade foram resolvidas. Sempre que acionamos a MDS, somos prontamente atendidos com soluções rápidas e eficientes.",
  },
  {
    author: {
      name: "Ernani Rodrigues",
      handle: "Gerente de TI na Swan Hotéis",
      avatar: ernaniPhoto,
    },
    text: "Com a MDS, tivemos uma melhoria significativa em performance e estabilidade. O suporte diário prestado é um grande diferencial: sempre que surge qualquer necessidade, o atendimento é rápido e eficiente, o que nos transmite segurança.",
  },
  {
    author: {
      name: "Acir Bachmann Cordeiro",
      handle: "COO na Alfa Tecnologia",
      avatar: alfaTecnologiaPhoto,
    },
    text: "Temos total confiança nas soluções MDS Cloud. Somos parceiros há mais de 4 anos e levamos as soluções da MDS a todos os nossos clientes, especialmente no mercado hoteleiro. Posso garantir que todos os nossos clientes estão 100% satisfeitos.",
  },
  {
    author: {
      name: "Renata Carreira",
      handle: "Sócia-Diretora na Host Hotel Systems Brasil",
      avatar: hostHotelPhoto,
    },
    text: "Desde que migramos nossas operações no Brasil para a nuvem da MDS, experimentamos uma melhoria significativa em nossa infraestrutura e desempenho. A agilidade do suporte é impressionante: sempre que enfrentamos algum desafio, a equipe está prontamente disponível.",
  },
  {
    author: {
      name: "Rossana Ribas",
      handle: "Comercial Solution na Aliare",
      avatar: aliarePhoto,
    },
    text: "Conhecemos a MDS através de uma indicação de um cliente. Após algumas conversas, entendemos que a MDS atendia nossas necessidades técnicas e expectativas quanto a atendimento e backup. Hoje temos a satisfação de ser um grande parceiro da MDS.",
  },
  {
    author: {
      name: "Volnei Miguel",
      handle: "Diretor Administrativo na HSPOT",
      avatar: hspotPhoto,
    },
    text: "Ao longo de nossa jornada conjunta, ficou evidente que a MDS é uma empresa comprometida com a excelência e dedicação em tudo o que faz. A qualidade do trabalho entregue é simplesmente impressionante: cada projeto é realizado com precisão e alto nível de expertise.",
  },
  {
    author: {
      name: "Eduardo Marques",
      handle: "Gerente de TI no Grupo Green - Automóveis",
      avatar: greenAutomoveisPhoto,
    },
    text: "A competência da MDS Cloud me surpreendeu! Viemos através de indicação de um amigo. Estava insatisfeito com o antigo fornecedor e comecei a procurar outro. Fiz várias cotações, mas o que me surpreendeu com atendimento, proposta e serviços foi a MDS.",
  },
  {
    author: {
      name: "Celso Lurk",
      handle: "Diretor de Operações na Sight Business Intelligence",
      avatar: celsoPhoto,
    },
    text: "A MDS atendeu completamente nossos requisitos, oferecendo uma camada de proteção contra invasões ou vazamentos de dados, e garantindo nenhuma indisponibilidade de dados ao longo de cinco anos de parceria. Após cinco anos de parceria, podemos afirmar com total segurança que estamos muito satisfeitos com os serviços da MDS.",
  },
];

export function NewTestimonialsSection() {
  return (
    <TestimonialsSection
      title="O que nossos clientes dizem"
      description="Histórias reais de empresas que transformaram sua infraestrutura com a MDS Cloud"
      testimonials={testimonials}
      className="bg-card/20"
    />
  );
}
