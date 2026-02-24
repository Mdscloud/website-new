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

interface Case {
  name: string;
  image: string;
}

// All cases from all folders
const allCases: Case[] = [
  // Hotelaria
  { name: 'Areia Hotel', image: areiaHotel },
  { name: 'Deville Hoteis', image: devilleHoteis },
  { name: 'Eko Hotel', image: ekoHotel },
  { name: 'Hotelaria Brasil', image: hotelariaBrasil },
  { name: 'Interclass Hotel', image: interclassHotel },
  { name: 'Riale Hotel', image: rialeHotel },
  { name: 'Salinnas Hotel', image: salinnasHotel },
  { name: 'Summit Hotels', image: summitHotels },
  { name: 'Transamerica Resort', image: transamericaResort },
  { name: 'Travell In Hotel', image: travellInHotel },
  // Agronegocio
  { name: 'Abudi', image: abudi },
  { name: 'Agrícola Alvorada', image: agricolaAlvorada },
  { name: 'Agrícola Sete Povos', image: agricolaSetePovos },
  { name: 'Agrimaq', image: agrimaq },
  { name: 'Agro Aliança', image: agroAlianca },
  { name: 'Agro Divel', image: agroDivel },
  { name: 'Agro Kayama', image: agroKayama },
  { name: 'Agrobras', image: agrobras },
  { name: 'Agrobraz Engenharia', image: agrobrazEngenharia },
  { name: 'Aura Brasil', image: auraBrasil },
  { name: 'Ciarama', image: ciarama },
  { name: 'Stara', image: stara },
  // Automotivo
  { name: 'Andreta', image: andreta },
  { name: 'Assobrav', image: assobrav },
  { name: 'Bravo', image: bravo },
  { name: 'Chevrolet', image: chevrolet },
  { name: 'Cimavel', image: cimavel },
  { name: 'Comeri', image: comeri },
  { name: 'Gambatto', image: gambatto },
  { name: 'Grupo Cavel', image: grupoCavel },
  { name: 'Honda', image: honda },
  { name: 'Ideal', image: ideal },
  { name: 'Iguauto', image: iguauto },
  { name: 'Luchini', image: luchini },
  { name: 'Mailon', image: mailon },
  { name: 'Medauto', image: medauto },
  { name: 'Primava', image: primava },
  { name: 'Repecon', image: repecon },
  { name: 'Umuarama', image: umuarama },
  { name: 'Waya', image: waya },
];

interface CasesCarouselProps {
  isInHero?: boolean;
}

export function CasesCarousel({ isInHero = false }: CasesCarouselProps) {
  // Duplicate cases for seamless loop (3x for smooth animation)
  const row1 = [...allCases, ...allCases, ...allCases];
  const row2 = [...allCases].reverse().concat([...allCases].reverse(), [...allCases].reverse());

  // Se estiver no hero, retorna apenas o carrossel sem wrapper section
  if (isInHero) {
    return (
      <div className="relative pt-8 lg:pt-10 pb-0 overflow-visible w-full">
        <div className="space-y-4">
          {/* Row 1 - Scroll Left */}
          <div className="overflow-hidden">
            <div className="flex gap-3 md:gap-4 animate-scroll-left">
              {row1.map((caseItem, index) => (
                <div
                  key={`row1-${caseItem.name}-${index}`}
                  className="group relative flex h-20 w-20 shrink-0 items-center justify-center md:h-24 md:w-24"
                >
                  <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-card border border-border/10 p-4 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:scale-105">
                    <img
                      src={caseItem.image}
                      alt={caseItem.name}
                      className="h-full w-full object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scroll Right */}
          <div className="overflow-hidden">
            <div className="flex gap-3 md:gap-4 animate-scroll-right">
              {row2.map((caseItem, index) => (
                <div
                  key={`row2-${caseItem.name}-${index}`}
                  className="group relative flex h-20 w-20 shrink-0 items-center justify-center md:h-24 md:w-24"
                >
                  <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-card border border-border/10 p-4 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:scale-105">
                    <img
                      src={caseItem.image}
                      alt={caseItem.name}
                      className="h-full w-full object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
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
    <div className="relative py-2 lg:py-3 overflow-hidden">
      <div className="space-y-4">
        {/* Row 1 - Scroll Left */}
        <div className="overflow-hidden">
          <div className="flex gap-3 md:gap-4 animate-scroll-left">
            {row1.map((caseItem, index) => (
              <div
                key={`row1-${caseItem.name}-${index}`}
                className="group relative flex h-20 w-20 shrink-0 items-center justify-center md:h-24 md:w-24"
              >
                <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-card border border-border/10 p-4 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:scale-105">
                  <img
                    src={caseItem.image}
                    alt={caseItem.name}
                    className="h-full w-full object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="overflow-hidden">
          <div className="flex gap-3 md:gap-4 animate-scroll-right">
            {row2.map((caseItem, index) => (
              <div
                key={`row2-${caseItem.name}-${index}`}
                className="group relative flex h-20 w-20 shrink-0 items-center justify-center md:h-24 md:w-24"
              >
                <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-card border border-border/10 p-4 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:scale-105">
                  <img
                    src={caseItem.image}
                    alt={caseItem.name}
                    className="h-full w-full object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
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
