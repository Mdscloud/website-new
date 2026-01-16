import { useState, useEffect } from 'react';
import { HeroParticles } from './hero-particles';

interface HeroFuturisticProps {
  title?: string;
  subtitle?: string;
}

export function HeroFuturistic({ title, subtitle }: HeroFuturisticProps) {
  const titleWords = (title || 'A Nuvem de Alta Performance').split(' ').filter(word => word.trim().length > 0);
  const subtitleText = subtitle || 'Cloud Computing que seu negócio exige';
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleWords.length]);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 200);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 300);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Particles Background Effect */}
      <HeroParticles className="pointer-events-none" />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/70 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-20 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Title with word-by-word animation - Smaller, more minimal */}
          <div className="mb-4 font-display text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-4xl">
            <div className="flex flex-wrap items-center justify-center gap-1.5 overflow-hidden md:gap-2">
              {titleWords.map((word, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index < visibleWords ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    animationDelay: `${index * 0.05 + (delays[index] || 0)}s`,
                    transitionDelay: `${index * 0.05 + (delays[index] || 0)}s`,
                  }}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>

          {/* Subtitle - Smaller */}
          <div
            className={`mb-6 text-xs font-medium text-muted-foreground transition-all duration-500 md:text-sm lg:text-base ${
              subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              transitionDelay: `${titleWords.length * 0.05 + 0.1 + subtitleDelay}s`,
            }}
          >
            {subtitleText}
          </div>

          {/* Floating Scroll Button - Modern, minimal */}
          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 ${
              subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              transitionDelay: `${titleWords.length * 0.05 + 0.3 + subtitleDelay}s`,
            }}
          >
            <button
              onClick={() => {
                const nextSection = document.querySelector('section:not(#hero)');
                nextSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 animate-float"
              aria-label="Scroll to explore"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-foreground/70 transition-colors group-hover:text-foreground"
              >
                <path
                  d="M11 5V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6 12L11 17L16 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroFuturistic;
