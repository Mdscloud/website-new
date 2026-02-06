import { motion } from "framer-motion";
import { FlippingCard } from "@/components/ui/flipping-card";

interface CardData {
  id: string;
  href: string;
  front: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  back: {
    description: string;
    buttonText: string;
  };
}

const services: CardData[] = [
  {
    id: "cloud-solutions",
    href: "/solucoes-cloud",
    front: {
      imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      imageAlt: "Soluções em Cloud",
      title: "Soluções em Cloud",
      description: "Infraestrutura de alta performance com 30.000+ IOPS, redundância total e escalabilidade sob demanda. Data centers Tier III certificados.",
    },
    back: {
      description: "Oferecemos infraestrutura cloud completa e gerenciada com alta disponibilidade, escalabilidade automática e SLA 99.9%. Data centers Tier III certificados para garantir máxima performance e segurança para seu negócio.",
      buttonText: "Saiba Mais",
    },
  },
  {
    id: "database",
    href: "/banco-de-dados",
    front: {
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      imageAlt: "Banco de Dados",
      title: "Banco de Dados",
      description: "Gestão especializada de banco de dados 24x7. Monitoramento proativo, otimização de performance e suporte técnico dedicado.",
    },
    back: {
      description: "Nossa equipe de especialistas oferece gestão completa de banco de dados com monitoramento 24x7, tuning de performance, otimização de queries e suporte para Oracle, SQL Server, PostgreSQL e MySQL.",
      buttonText: "Saiba Mais",
    },
  },
  {
    id: "backup",
    href: "/backup",
    front: {
      imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      imageAlt: "Backup",
      title: "Backup",
      description: "Proteção completa de dados com backup automatizado, retenção flexível e recuperação rápida. Segurança enterprise para seus dados críticos.",
    },
    back: {
      description: "Soluções de backup em nuvem com criptografia AES-256, backup automatizado, retenção flexível e recuperação rápida garantida. Proteja seus dados críticos com segurança enterprise.",
      buttonText: "Saiba Mais",
    },
  },
];

export function ServicesSection() {
  return (
    <section id="solucoes" className="relative py-16 lg:py-20 bg-background">
      {/* Background - Light for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20" />
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-0 bottom-1/3 h-72 w-72 rounded-full bg-accent/5 blur-[100px]" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Nossas Soluções
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Infraestrutura Cloud
            <br />
            <span className="text-gradient">Completa e Gerenciada</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções enterprise para empresas que não podem parar. 
            Performance, segurança e suporte especializado 24x7.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="flex gap-6 flex-wrap justify-center lg:gap-8">
          {services.map((service, index) => (
            <motion.a
              key={service.id}
              href={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block"
            >
              <FlippingCard
                width={350}
                height={400}
                frontContent={<ServiceCardFront data={service.front} />}
                backContent={<ServiceCardBack data={service.back} href={service.href} />}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardFrontProps {
  data: CardData["front"];
}

function ServiceCardFront({ data }: ServiceCardFrontProps) {
  return (
    <div className="flex flex-col h-full w-full p-4">
      <img
        src={data.imageSrc}
        alt={data.imageAlt}
        className="w-full h-auto object-cover flex-grow min-h-0 rounded-md"
      />
      <div className="p-2">
        <h3 className="text-base font-semibold mt-2">{data.title}</h3>
        <p className="text-[13.5px] mt-2 text-muted-foreground">
          {data.description}
        </p>
      </div>
    </div>
  );
}

interface ServiceCardBackProps {
  data: CardData["back"];
  href: string;
}

function ServiceCardBack({ data, href }: ServiceCardBackProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6">
      <p className="text-[13.5px] mt-2 text-muted-foreground text-center">
        {data.description}
      </p>
      <a 
        href={href}
        className="mt-6 bg-foreground text-background px-4 py-2 rounded-md text-[13.5px] w-min whitespace-nowrap h-8 flex items-center justify-center transition-opacity hover:opacity-90"
      >
        {data.buttonText}
      </a>
    </div>
  );
}
