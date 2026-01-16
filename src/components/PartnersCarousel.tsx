import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useState, useRef } from 'react';

interface Partner {
  name: string;
  logo: string;
  href?: string;
}

const partners: Partner[] = [
  {
    name: 'Microsoft Azure',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
    href: 'https://azure.microsoft.com',
  },
  {
    name: 'Google Cloud',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    href: 'https://cloud.google.com',
  },
  {
    name: 'Amazon AWS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    href: 'https://aws.amazon.com',
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    href: 'https://www.oracle.com',
  },
  {
    name: 'VMware',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Vmware_logo.svg',
    href: 'https://www.vmware.com',
  },
  {
    name: 'NVIDIA',
    logo: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg',
    href: 'https://www.nvidia.com',
  },
  {
    name: 'GitHub',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    href: 'https://github.com',
  },
  {
    name: 'Red Hat',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Red_Hat_logo.svg',
    href: 'https://www.redhat.com',
  },
  {
    name: 'Docker',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
    href: 'https://www.docker.com',
  },
  {
    name: 'Kubernetes',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
    href: 'https://kubernetes.io',
  },
];

export function PartnersCarousel() {
  const { t } = useI18n();
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative py-8 lg:py-10 bg-background border-y border-border/30">
      {/* Gradient masks for fade effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            {t('hero.partners')}
          </p>
          <h2 className="text-sm font-display font-semibold text-foreground md:text-base">
            Parceiros e <span className="text-primary">Certificações</span>
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="relative overflow-hidden py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden px-4 md:px-8">
          <div
            className={`flex gap-6 md:gap-8 lg:gap-10 ${
              !isPaused ? 'animate-scroll' : ''
            }`}
            style={{
              width: 'max-content',
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-12 w-24 shrink-0 items-center justify-center md:h-16 md:w-32"
              >
                {/* Logo container - Minimal design com espaço para hover */}
                <div className="relative flex h-full w-full items-center justify-center rounded-lg border border-border/20 bg-card/30 p-3 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-card/50 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:scale-105 group-hover:-translate-y-0.5 z-30">
                  {/* Glow effect on hover - Subtle */}
                  <div className="absolute inset-0 rounded-lg bg-primary/0 transition-all duration-300 group-hover:bg-primary/5" />
                  
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="relative z-10 h-full w-full object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback: usar Simple Icons SVG diretamente
                      const iconName = partner.name.toLowerCase().replace(/\s+/g, '');
                      e.currentTarget.src = `https://cdn.simpleicons.org/${iconName}/666`;
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
