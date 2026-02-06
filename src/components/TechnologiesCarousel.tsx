import { useState, useRef, useEffect, useMemo } from 'react';
import oracleLogo from '@/assets/tecnologias/oracle.png';
import ascentyLogo from '@/assets/tecnologias/ascenty.png';
import dellLogo from '@/assets/tecnologias/dell.png';
import mysqlLogo from '@/assets/tecnologias/mysql.png';
import mongodbLogo from '@/assets/tecnologias/mongodb.svg.png';
import aixLogo from '@/assets/tecnologias/aix.png';
import windowsLogo from '@/assets/tecnologias/windows.png';
import solarisLogo from '@/assets/tecnologias/solaris.png';
import linuxLogo from '@/assets/tecnologias/linux.png';
import vmwareLogo from '@/assets/tecnologias/vmware.png';
import sqlServerLogo from '@/assets/tecnologias/microsoft-sql-server.png';
import postgresqlLogo from '@/assets/tecnologias/postgresql.png';
import db2Logo from '@/assets/tecnologias/ibm-db2.png';
import informixLogo from '@/assets/tecnologias/informix.png';

interface Technology {
  name: string;
  image?: string;
}

// Function to shuffle array randomly
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// All technologies
const allTechnologies: Technology[] = [
  { name: 'Oracle', image: oracleLogo },
  { name: 'Ascenty', image: ascentyLogo },
  { name: 'Dell', image: dellLogo },
  { name: 'MySQL', image: mysqlLogo },
  { name: 'MongoDB', image: mongodbLogo },
  { name: 'AIX', image: aixLogo },
  { name: 'Windows', image: windowsLogo },
  { name: 'Solaris', image: solarisLogo },
  { name: 'Linux', image: linuxLogo },
  { name: 'VMware', image: vmwareLogo },
  { name: 'SQL Server', image: sqlServerLogo },
  { name: 'PostgreSQL', image: postgresqlLogo },
  { name: 'DB2', image: db2Logo },
  { name: 'Informix', image: informixLogo },
];

interface TechnologiesCarouselProps {
  isInHero?: boolean;
}

export function TechnologiesCarousel({ isInHero = false }: TechnologiesCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const scrollPositionRef = useRef<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Shuffle technologies randomly and duplicate for seamless loop
  const duplicatedTechnologies = useMemo(() => {
    const shuffled = shuffleArray(allTechnologies);
    return [...shuffled, ...shuffled];
  }, []);

  // Smooth animation that doesn't reset on pause
  useEffect(() => {
    if (!carouselRef.current) return;

    const animate = () => {
      if (!isPaused && carouselRef.current) {
        scrollPositionRef.current += 0.5; // Adjust speed here
        const maxScroll = carouselRef.current.scrollWidth / 2;
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }
        carouselRef.current.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  // Se estiver no hero, retorna apenas o carrossel sem wrapper section
  if (isInHero) {
    return (
      <div className="relative pt-8 lg:pt-10 pb-0 overflow-visible w-full">
        {/* Gradient masks for fade effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background/60 via-background/20 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background/60 via-background/20 to-transparent z-20 pointer-events-none" />

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative py-4 overflow-visible"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="px-4 md:px-8 overflow-visible">
            <div
              ref={carouselRef}
              className="flex gap-6 md:gap-8 lg:gap-10"
              style={{
                width: 'max-content',
              }}
            >
              {duplicatedTechnologies.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="group relative flex h-20 w-40 shrink-0 items-center justify-center md:h-24 md:w-48 py-4 px-3"
                >
                  {/* Technology card */}
                  <div className="relative flex h-full w-full items-center justify-center rounded-lg border border-border/20 bg-card/30 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-card/50 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:scale-110 group-hover:-translate-y-1 group-hover:z-50">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-lg bg-primary/0 transition-all duration-300 group-hover:bg-primary/5" />
                    
                    {tech.image ? (
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="relative z-10 h-full w-full object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                        loading="lazy"
                      />
                    ) : (
                      <span className="relative z-10 text-sm md:text-base font-semibold text-foreground/70 transition-all duration-300 group-hover:text-foreground group-hover:text-primary">
                        {tech.name}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Versão normal quando não está no hero
  return (
    <section className="relative py-6 lg:py-8 overflow-visible">
      {/* Gradient masks for fade effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background/90 via-background/50 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background/90 via-background/50 to-transparent z-20 pointer-events-none" />

      {/* Carousel */}
      <div
        ref={containerRef}
        className="relative py-4 overflow-visible"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="px-4 md:px-8 overflow-visible">
          <div
            ref={carouselRef}
            className="flex gap-6 md:gap-8 lg:gap-10"
            style={{
              width: 'max-content',
            }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="group relative flex h-20 w-40 shrink-0 items-center justify-center md:h-24 md:w-48 py-4 px-3"
              >
                {/* Technology card */}
                <div className="relative flex h-full w-full items-center justify-center rounded-lg border border-border/20 bg-card/30 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-card/50 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:scale-110 group-hover:-translate-y-1 group-hover:z-50">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg bg-primary/0 transition-all duration-300 group-hover:bg-primary/5" />
                  
                  {tech.image ? (
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="relative z-10 h-full w-full object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                      loading="lazy"
                    />
                  ) : (
                    <span className="relative z-10 text-sm md:text-base font-semibold text-foreground/70 transition-all duration-300 group-hover:text-foreground group-hover:text-primary">
                      {tech.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
