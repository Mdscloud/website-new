"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { useRef } from "react";
import atrioPhoto from "@/assets/testimonials/atrio.png";
import ernaniPhoto from "@/assets/testimonials/ernani.jpeg";
import alfaTecnologiaPhoto from "@/assets/testimonials/alfa-tecnologia.png";
import hostHotelPhoto from "@/assets/testimonials/host-hotel.png";
import aliarePhoto from "@/assets/testimonials/aliare.png";
import celsoPhoto from "@/assets/testimonials/celso.jpeg";

function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <section className="relative h-full container text-foreground mx-auto rounded-lg py-14 bg-background" ref={testimonialRef}>
      <article className="max-w-screen-md mx-auto text-center space-y-2">
        <TimelineContent
          as="h1"
          className="xl:text-4xl text-3xl font-medium"
          animationNum={0}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
        >
          Confiado por startups e as maiores empresas do mundo
        </TimelineContent>
        <TimelineContent
          as="p"
          className="mx-auto text-muted-foreground"
          animationNum={1}
          customVariants={revealVariants}
          timelineRef={testimonialRef}
        >
          Veja como os clientes da MDS Cloud se sentem sobre nossos serviços
        </TimelineContent>
      </article>
      <div className="lg:grid lg:grid-cols-3 gap-2 flex flex-col w-full lg:py-10 pt-10 pb-4 lg:px-10 px-4">
        <div className="md:flex lg:flex-col lg:space-y-2 h-full lg:gap-0 gap-2">
          <TimelineContent
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-card overflow-hidden rounded-lg border border-border p-5"
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <article className="mt-auto relative z-10">
              <p className="text-foreground">
                "Antes da MDS, enfrentávamos problemas recorrentes de performance e quedas de sistemas. Após a migração, os ganhos foram evidentes: as dores relacionadas à performance e à instabilidade foram resolvidas."
              </p>
              <div className="flex justify-between pt-5">
                <div>
                  <h2 className="font-semibold lg:text-xl text-sm text-foreground">
                    Carlos Pereira
                  </h2>
                  <p className="text-muted-foreground">Diretor de Tecnologia na Átrio Hotéis</p>
                </div>
                <img
                  src={atrioPhoto}
                  alt="Carlos Pereira"
                  className="w-16 h-16 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
          <TimelineContent
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative bg-primary text-primary-foreground overflow-hidden rounded-lg border border-border p-5"
          >
            <article className="mt-auto">
              <p>
                "Com a MDS, tivemos uma melhoria significativa em performance e estabilidade. O suporte diário prestado é um grande diferencial."
              </p>
              <div className="flex justify-between pt-5">
                <div>
                  <h2 className="font-semibold text-xl">Ernani Rodrigues</h2>
                  <p className="text-primary-foreground/80">Gerente de TI na Swan Hotéis</p>
                </div>
                <img
                  src={ernaniPhoto}
                  alt="Ernani Rodrigues"
                  className="w-16 h-16 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
        </div>
        <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-2 lg:gap-0 gap-2">
          <TimelineContent
            animationNum={2}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex flex-col justify-between relative bg-card text-foreground overflow-hidden rounded-lg border border-border p-5"
          >
            <article className="mt-auto">
              <p className="2xl:text-base text-sm">
                "Temos total confiança nas soluções MDS Cloud. Somos parceiros há mais de 4 anos e levamos as soluções da MDS a todos os nossos clientes."
              </p>
              <div className="flex justify-between items-end pt-5">
                <div>
                  <h2 className="font-semibold lg:text-xl text-lg">Acir Bachmann Cordeiro</h2>
                  <p className="lg:text-base text-sm text-muted-foreground">COO na Alfa Tecnologia</p>
                </div>
                <img
                  src={alfaTecnologiaPhoto}
                  alt="Acir Bachmann Cordeiro"
                  className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
          <TimelineContent
            animationNum={3}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex flex-col justify-between relative bg-card text-foreground overflow-hidden rounded-lg border border-border p-5"
          >
            <article className="mt-auto">
              <p className="2xl:text-base text-sm">
                "Desde que migramos nossas operações no Brasil para a nuvem da MDS, experimentamos uma melhoria significativa em nossa infraestrutura e desempenho."
              </p>
              <div className="flex justify-between items-end pt-5">
                <div>
                  <h2 className="font-semibold lg:text-xl text-lg">Renata Carreira</h2>
                  <p className="lg:text-base text-sm text-muted-foreground">Sócia-Diretora na Host Hotel Systems Brasil</p>
                </div>
                <img
                  src={hostHotelPhoto}
                  alt="Renata Carreira"
                  className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
          <TimelineContent
            animationNum={4}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="flex flex-col justify-between relative bg-card text-foreground overflow-hidden rounded-lg border border-border p-5"
          >
            <article className="mt-auto">
              <p className="2xl:text-base text-sm">
                "Conhecemos a MDS através de uma indicação. Após alguns testes, homologamos a MDS como solução de cloud para nossos clientes. Hoje temos a satisfação de ser um grande parceiro da MDS."
              </p>
              <div className="flex justify-between items-end pt-5">
                <div>
                  <h2 className="font-semibold lg:text-xl text-lg">Rossana Ribas</h2>
                  <p className="lg:text-base text-sm text-muted-foreground">Comercial Solution na Aliare</p>
                </div>
                <img
                  src={aliarePhoto}
                  alt="Rossana Ribas"
                  className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
        </div>
        <div className="h-full md:flex lg:flex-col lg:space-y-2 lg:gap-0 gap-2">
          <TimelineContent
            animationNum={5}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="lg:flex-[3] flex-[4] flex flex-col justify-between relative bg-primary text-primary-foreground overflow-hidden rounded-lg border border-border p-5"
          >
            <article className="mt-auto">
              <p>
                "A MDS atendeu completamente nossos requisitos, oferecendo uma camada de proteção contra invasões ou vazamentos de dados."
              </p>
              <div className="flex justify-between pt-5">
                <div>
                  <h2 className="font-semibold text-xl">Celso Lurk</h2>
                  <p className="text-primary-foreground/80">Diretor de Operações na Sight Business Intelligence</p>
                </div>
                <img
                  src={celsoPhoto}
                  alt="Celso Lurk"
                  className="w-16 h-16 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
          <TimelineContent
            animationNum={6}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-card overflow-hidden rounded-lg border border-border p-5"
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <article className="mt-auto relative z-10">
              <p>
                "Ao longo de nossa jornada conjunta, ficou evidente que a MDS é uma empresa comprometida com a excelência. A qualidade do trabalho entregue é simplesmente impressionante: cada projeto é realizado com precisão e alto nível de expertise."
              </p>
              <div className="flex justify-between pt-5">
                <div>
                  <h2 className="font-semibold text-xl text-foreground">Equipe HSpot</h2>
                  <p className="text-muted-foreground">Parceiros MDS Cloud</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=687&auto=format&fit=crop"
                  alt="HSpot"
                  className="w-16 h-16 rounded-xl object-cover"
                />
              </div>
            </article>
          </TimelineContent>
        </div>
      </div>

      <div className="absolute border-b-2 border-border bottom-4 h-16 z-[2] md:w-full w-[90%] md:left-0 left-[5%]">
        <div className="container mx-auto w-full h-full relative before:absolute before:-left-2 before:-bottom-2 before:w-4 before:h-4 before:bg-background before:shadow-sm before:border before:border-border after:absolute after:-right-2 after:-bottom-2 after:w-4 after:h-4 after:bg-background after:shadow-sm after:border after:border-border"></div>
      </div>
    </section>
  );
}

export default ClientFeedback;
