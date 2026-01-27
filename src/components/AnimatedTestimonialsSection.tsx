import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import atrioPhoto from "@/assets/testimonials/atrio.png";
import ernaniPhoto from "@/assets/testimonials/ernani.jpeg";
import alfaTecnologiaPhoto from "@/assets/testimonials/alfa-tecnologia.png";
import hostHotelPhoto from "@/assets/testimonials/host-hotel.png";
import aliarePhoto from "@/assets/testimonials/aliare.png";
import hspotPhoto from "@/assets/testimonials/hspot.png";
import greenAutomoveisPhoto from "@/assets/testimonials/green-automoveis.png";

const testimonials = [
  {
    quote:
      "Antes da MDS, enfrentávamos problemas recorrentes de performance e quedas de sistemas, sempre com soluções paliativas. Após a migração, os ganhos foram evidentes: as dores relacionadas à performance e à instabilidade foram resolvidas. Sempre que acionamos a MDS, somos prontamente atendidos com soluções rápidas e eficientes. O principal diferencial é o pós-venda: somos sempre ouvidos e atendidos com agilidade, tornando o pós-venda um dos grandes diferenciais da MDS.",
    name: "Carlos Pereira",
    designation: "Diretor de Tecnologia na Átrio Hotéis",
    src: atrioPhoto,
  },
  {
    quote:
      "Com a MDS, tivemos uma melhoria significativa em performance e estabilidade. O suporte diário prestado é um grande diferencial: sempre que surge qualquer necessidade, o atendimento é rápido e eficiente, o que nos transmite segurança. Passamos a contar com acompanhamento contínuo, monitoramento constante e recomendações de melhorias. Durante todo o período de contrato, praticamente não tivemos downtime nem problemas de indisponibilidade. Estamos muito satisfeitos com a MDS.",
    name: "Ernani Rodrigues",
    designation: "Gerente de TI na Swan Hotéis",
    src: ernaniPhoto,
  },
  {
    quote:
      "Temos total confiança nas soluções MDS Cloud. Somos parceiros há mais de 4 anos e levamos as soluções da MDS a todos os nossos clientes, especialmente no mercado hoteleiro. Já comercializamos em mais de 100 hotéis independentes e diversas redes hoteleiras. Posso garantir que todos os nossos clientes estão 100% satisfeitos. Estar com a MDS nos deixa extremamente tranquilos e seguros, pois sabemos das qualidades e do comprometimento que a MDS e sua equipe têm conosco e com nossos clientes.",
    name: "Acir Bachmann Cordeiro",
    designation: "COO na Alfa Tecnologia",
    src: alfaTecnologiaPhoto,
  },
  {
    quote:
      "Desde que migramos nossas operações no Brasil para a nuvem da MDS, experimentamos uma melhoria significativa em nossa infraestrutura e desempenho. A agilidade do suporte é impressionante: sempre que enfrentamos algum desafio, a equipe está prontamente disponível com rapidez e eficiência. A estabilidade e escalabilidade dos serviços são excepcionais: nossos sistemas executam sem interrupções e podemos dimensionar nossos recursos facilmente. Nossa satisfação é tanto que recomendamos a todos os nossos clientes os serviços da MDS.",
    name: "Renata Carreira",
    designation: "Sócia-Diretora na Host Hotel Systems Brasil",
    src: hostHotelPhoto,
  },
  {
    quote:
      "Conhecemos a MDS através de uma indicação de um cliente. Após algumas conversas, entendemos que a MDS atendia nossas necessidades técnicas e expectativas quanto a atendimento e backup. Decidimos fazer um projeto piloto e, após todos os testes, homologamos a MDS como solução de cloud para nossos clientes. Hoje temos a satisfação de ser um grande parceiro da MDS e a segurança de poder oferecer aos nossos clientes as soluções da MDS Cloud. Estar com a MDS nos deixa extremamente tranquilos e seguros.",
    name: "Rossana Ribas",
    designation: "Comercial Solution na Aliare",
    src: aliarePhoto,
  },
  {
    quote:
      "Ao longo de nossa jornada conjunta, ficou evidente que a MDS é uma empresa comprometida com a excelência e dedicação em tudo o que faz. A qualidade do trabalho entregue é simplesmente impressionante: cada projeto é realizado com precisão, atenção aos detalhes e alto nível de expertise. É notável o comprometimento da equipe em entregar resultados que realmente façam a diferença em nosso negócio. A MDS é uma parceira confiável que se esforça para superar expectativas e oferecer resultados excepcionais.",
    name: "Volnei Miguel",
    designation: "Diretor Administrativo na HSPOT - Gestão de Internet",
    src: hspotPhoto,
  },
  {
    quote:
      "A competência da MDS Cloud me surpreendeu! Viemos através de indicação de um amigo. Estava insatisfeito com o antigo fornecedor e comecei a procurar outro. Fiz várias cotações, mas o que me surpreendeu com atendimento, proposta e serviços foi a MDS. Já estamos utilizando há mais de um ano e nunca tivemos problemas. Resolveram todas as nossas dores, principalmente nos finais de semana. Fiquei extremamente satisfeito pelo atendimento prestado e pela qualidade do serviço: rapidez, eficiência e agilidade nos chamados abertos.",
    name: "Eduardo Marques",
    designation: "Gerente de TI no Grupo Green - Automóveis",
    src: greenAutomoveisPhoto,
  },
];

export function AnimatedTestimonialsSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/3 h-72 w-72 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-4 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Depoimentos
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            O que nossos clientes <span className="text-gradient">dizem</span>
          </h2>
          <p className="text-muted-foreground">
            Histórias reais de empresas que transformaram sua infraestrutura com a MDS Cloud.
          </p>
        </motion.div>

        {/* Animated Testimonials Component */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
