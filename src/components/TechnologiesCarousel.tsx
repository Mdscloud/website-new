import oracleLogo from '@/assets/tecnologias/oracle.png';
import ascentyLogo from '@/assets/tecnologias/ascenty.png';
import dellLogo from '@/assets/tecnologias/dell.png';
import mysqlLogo from '@/assets/tecnologias/mysql.png';
import mongodbLogo from '@/assets/tecnologias/mongodb.svg.png';
import aixLogo from '@/assets/tecnologias/aix.png';
import windowsLogo from '@/assets/tecnologias/windows.png';
import linuxLogo from '@/assets/tecnologias/linux.png';
import vmwareLogo from '@/assets/tecnologias/vmware.png';
import sqlServerLogo from '@/assets/tecnologias/microsoft-sql-server.png';
import postgresqlLogo from '@/assets/tecnologias/postgresql.png';
import db2Logo from '@/assets/tecnologias/ibm-db2.png';
interface Technology {
  name: string;
  image?: string;
}

// All technologies
const allTechnologies: Technology[] = [
  { name: 'Oracle', image: oracleLogo },
  { name: 'Ascenty', image: ascentyLogo },
  { name: 'Dell', image: dellLogo },
  { name: 'MySQL', image: mysqlLogo },
  { name: 'MongoDB', image: mongodbLogo },
  { name: 'AIX', image: aixLogo },
  { name: 'Windows', image: windowsLogo },
  { name: 'Linux', image: linuxLogo },
  { name: 'VMware', image: vmwareLogo },
  { name: 'SQL Server', image: sqlServerLogo },
  { name: 'PostgreSQL', image: postgresqlLogo },
  { name: 'DB2', image: db2Logo },
];

interface TechnologiesCarouselProps {
  isInHero?: boolean;
}

export function TechnologiesCarousel({ isInHero = false }: TechnologiesCarouselProps) {
  // Duplicate technologies for seamless loop (3x for smooth animation)
  const duplicatedTechnologies = [...allTechnologies, ...allTechnologies, ...allTechnologies];
  
  // Split into two rows - shuffle each row differently
  const row1 = [...allTechnologies, ...allTechnologies, ...allTechnologies];
  const row2 = [...allTechnologies].reverse().concat([...allTechnologies].reverse(), [...allTechnologies].reverse());

  // Se estiver no hero, retorna apenas o carrossel sem wrapper section
  if (isInHero) {
    return (
      <div className="relative pt-8 lg:pt-10 pb-0 overflow-visible w-full">
        <div className="space-y-4">
          {/* Row 1 - Scroll Left */}
          <div className="overflow-hidden">
            <div className="flex gap-3 md:gap-4 animate-scroll-left">
              {row1.map((tech, index) => (
                <div
                  key={`row1-${tech.name}-${index}`}
                  className="group relative flex h-20 w-20 shrink-0 items-center justify-center md:h-24 md:w-24"
                >
                  <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-white border border-gray-200/70 p-4 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:scale-105 shadow-sm">
                    {tech.image ? (
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="h-full w-full object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-xs md:text-sm font-semibold text-gray-700 transition-all duration-300 group-hover:text-gray-900">
                        {tech.name}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scroll Right */}
          <div className="overflow-hidden">
            <div className="flex gap-3 md:gap-4 animate-scroll-right">
              {row2.map((tech, index) => (
                <div
                  key={`row2-${tech.name}-${index}`}
                  className="group relative flex h-20 w-20 shrink-0 items-center justify-center md:h-24 md:w-24"
                >
                  <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-white border border-gray-200/70 p-4 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:scale-105 shadow-sm">
                    {tech.image ? (
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className="h-full w-full object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-xs md:text-sm font-semibold text-gray-700 transition-all duration-300 group-hover:text-gray-900">
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
    <div className="relative py-2 lg:py-3 overflow-hidden">
      <div className="space-y-4">
        {/* Row 1 - Scroll Left */}
        <div className="overflow-hidden">
          <div className="flex gap-3 md:gap-4 animate-scroll-left">
            {row1.map((tech, index) => (
              <div
                key={`row1-${tech.name}-${index}`}
                className="group relative flex h-20 w-20 shrink-0 items-center justify-center md:h-24 md:w-24"
              >
                <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-white border border-gray-200/70 p-4 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:scale-105 shadow-sm">
                  {tech.image ? (
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-full w-full object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-xs md:text-sm font-semibold text-gray-700 transition-all duration-300 group-hover:text-gray-900">
                      {tech.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="overflow-hidden">
          <div className="flex gap-3 md:gap-4 animate-scroll-right">
            {row2.map((tech, index) => (
              <div
                key={`row2-${tech.name}-${index}`}
                className="group relative flex h-20 w-20 shrink-0 items-center justify-center md:h-24 md:w-24"
              >
                <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-white border border-gray-200/70 p-4 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:scale-105 shadow-sm">
                  {tech.image ? (
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-full w-full object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-xs md:text-sm font-semibold text-gray-700 transition-all duration-300 group-hover:text-gray-900">
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
