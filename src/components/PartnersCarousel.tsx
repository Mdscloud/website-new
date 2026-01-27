import { useState, useRef, useEffect, useMemo } from 'react';

// Import logos from hotelaria folder
import areiaHotel from '@/assets/cases/hotelaria/areia-hotel.png';
import devilleHoteis from '@/assets/cases/hotelaria/deville-hoteis.png';
import ekoHotel from '@/assets/cases/hotelaria/eko-hotel.png';
import hotelariaBrasil from '@/assets/cases/hotelaria/hotelaria-brasil.png';
import interclassHotel from '@/assets/cases/hotelaria/interclasshotel.png';
import rialeHotel from '@/assets/cases/hotelaria/riale-hotel.png';
import salinnasHotel from '@/assets/cases/hotelaria/salinnas-hotel.png';
import summitHotels from '@/assets/cases/hotelaria/summit-hotels.png';
import transamericaResort from '@/assets/cases/hotelaria/transamerica-resort.png';
import travellInHotel from '@/assets/cases/hotelaria/travell-in-hotel.png';

// Import logos from agronegocio folder
import abudi from '@/assets/cases/agronegocio/abudi.png';
import agricolaAlvorada from '@/assets/cases/agronegocio/agricola-alvorada.png';
import agricolaSetePovos from '@/assets/cases/agronegocio/agricola-sete-povos.png';
import agrimaq from '@/assets/cases/agronegocio/agrimaq.png';
import agroAlianca from '@/assets/cases/agronegocio/agro-aliança.png';
import agroDivel from '@/assets/cases/agronegocio/agro-divel.png';
import agroKayama from '@/assets/cases/agronegocio/agro-kayama.png';
import agrobras from '@/assets/cases/agronegocio/agrobras.png';
import agrobrazEngenharia from '@/assets/cases/agronegocio/agrobraz-engenharia.jpg';
import auraBrasil from '@/assets/cases/agronegocio/aura-brasil.png';
import ciarama from '@/assets/cases/agronegocio/ciarama.png';
import stara from '@/assets/cases/agronegocio/stara.png';

// Import logos from automotivo folder
import andreta from '@/assets/cases/automotivo/andreta.png';
import assobrav from '@/assets/cases/automotivo/assobrav.png';
import bravo from '@/assets/cases/automotivo/bravo.png';
import chevrolet from '@/assets/cases/automotivo/chevrolet.png';
import cimavel from '@/assets/cases/automotivo/cimavel.png';
import comeri from '@/assets/cases/automotivo/comeri.png';
import gambatto from '@/assets/cases/automotivo/gambatto.png';
import grupoCavel from '@/assets/cases/automotivo/grupo-cavel.png';
import honda from '@/assets/cases/automotivo/honda.png';
import ideal from '@/assets/cases/automotivo/ideal.png';
import iguauto from '@/assets/cases/automotivo/iguauto.png';
import luchini from '@/assets/cases/automotivo/luchini.png';
import mailon from '@/assets/cases/automotivo/mailon.png';
import medauto from '@/assets/cases/automotivo/medauto.jpg';
import primava from '@/assets/cases/automotivo/primava.png';
import repecon from '@/assets/cases/automotivo/repecon.png';
import umuarama from '@/assets/cases/automotivo/umuarama.png';
import waya from '@/assets/cases/automotivo/waya.png';

interface Partner {
  name: string;
  logo: string;
  href?: string;
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

// All partners from all folders
const allPartners: Partner[] = [
  // Hotelaria
  { name: 'Areia Hotel', logo: areiaHotel },
  { name: 'Deville Hoteis', logo: devilleHoteis },
  { name: 'Eko Hotel', logo: ekoHotel },
  { name: 'Hotelaria Brasil', logo: hotelariaBrasil },
  { name: 'Interclass Hotel', logo: interclassHotel },
  { name: 'Riale Hotel', logo: rialeHotel },
  { name: 'Salinnas Hotel', logo: salinnasHotel },
  { name: 'Summit Hotels', logo: summitHotels },
  { name: 'Transamerica Resort', logo: transamericaResort },
  { name: 'Travell In Hotel', logo: travellInHotel },
  // Agronegocio
  { name: 'Abudi', logo: abudi },
  { name: 'Agrícola Alvorada', logo: agricolaAlvorada },
  { name: 'Agrícola Sete Povos', logo: agricolaSetePovos },
  { name: 'Agrimaq', logo: agrimaq },
  { name: 'Agro Aliança', logo: agroAlianca },
  { name: 'Agro Divel', logo: agroDivel },
  { name: 'Agro Kayama', logo: agroKayama },
  { name: 'Agrobras', logo: agrobras },
  { name: 'Agrobraz Engenharia', logo: agrobrazEngenharia },
  { name: 'Aura Brasil', logo: auraBrasil },
  { name: 'Ciarama', logo: ciarama },
  { name: 'Stara', logo: stara },
  // Automotivo
  { name: 'Andreta', logo: andreta },
  { name: 'Assobrav', logo: assobrav },
  { name: 'Bravo', logo: bravo },
  { name: 'Chevrolet', logo: chevrolet },
  { name: 'Cimavel', logo: cimavel },
  { name: 'Comeri', logo: comeri },
  { name: 'Gambatto', logo: gambatto },
  { name: 'Grupo Cavel', logo: grupoCavel },
  { name: 'Honda', logo: honda },
  { name: 'Ideal', logo: ideal },
  { name: 'Iguauto', logo: iguauto },
  { name: 'Luchini', logo: luchini },
  { name: 'Mailon', logo: mailon },
  { name: 'Medauto', logo: medauto },
  { name: 'Primava', logo: primava },
  { name: 'Repecon', logo: repecon },
  { name: 'Umuarama', logo: umuarama },
  { name: 'Waya', logo: waya },
];

interface PartnersCarouselProps {
  isInHero?: boolean;
}

export function PartnersCarousel({ isInHero = false }: PartnersCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const scrollPositionRef = useRef<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Shuffle partners randomly and duplicate for seamless loop
  const duplicatedPartners = useMemo(() => {
    const shuffled = shuffleArray(allPartners);
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
        {/* Gradient masks for fade effect - mais sutis no hero */}
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
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="group relative flex h-20 w-40 shrink-0 items-center justify-center md:h-24 md:w-48 py-4 px-3"
                >
                  {/* Logo container - Com espaço extra para hover sem cortar borda */}
                  <div className="relative flex h-full w-full items-center justify-center rounded-lg border border-border/20 bg-card/30 p-3 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-card/50 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:scale-110 group-hover:-translate-y-1 group-hover:z-50">
                    {/* Glow effect on hover - Subtle */}
                    <div className="absolute inset-0 rounded-lg bg-primary/0 transition-all duration-300 group-hover:bg-primary/5" />
                    
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="relative z-10 h-full w-full object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                      loading="lazy"
                    />
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
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group relative flex h-20 w-40 shrink-0 items-center justify-center md:h-24 md:w-48 py-4 px-3"
              >
                {/* Logo container - Com espaço extra para hover sem cortar borda */}
                <div className="relative flex h-full w-full items-center justify-center rounded-lg border border-border/20 bg-card/30 p-3 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-card/50 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:scale-110 group-hover:-translate-y-1 group-hover:z-50">
                  {/* Glow effect on hover - Subtle */}
                  <div className="absolute inset-0 rounded-lg bg-primary/0 transition-all duration-300 group-hover:bg-primary/5" />
                  
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="relative z-10 h-full w-full object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
