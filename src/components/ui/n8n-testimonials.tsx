import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  companyLogo?: string;
  companyName: string;
  headline: string;
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  href?: string;
}

interface N8nTestimonialsProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  speed?: number; // pixels per second
}

const CARD_SCROLL_STEP = 412; // ~380px card + 32px gap

export function N8nTestimonials({
  testimonials,
  autoPlay = true,
  speed = 30
}: N8nTestimonialsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // paused by button click or touch
  const animationFrameRef = useRef<number>();
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const touchStartXRef = useRef<number>(0);

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Pause and auto-resume after a delay (used by buttons and touch)
  const pauseWithTimer = useCallback((durationMs: number) => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setIsPaused(false), durationMs);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const shouldPause = isHovered || isPaused;

  // Auto-scroll animation
  useEffect(() => {
    if (!autoPlay || shouldPause || !scrollContainerRef.current) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      if (!scrollContainerRef.current || shouldPause) return;

      const deltaTime = (currentTime - lastTime) / 1000;
      const scrollAmount = speed * deltaTime;

      const container = scrollContainerRef.current;
      const newPosition = container.scrollLeft + scrollAmount;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (newPosition >= maxScroll) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = newPosition;
      }

      lastTime = currentTime;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [autoPlay, shouldPause, speed]);

  // Mouse wheel scroll
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    container.scrollLeft = Math.max(0, Math.min(container.scrollLeft + e.deltaY * 0.5, maxScroll));
    pauseWithTimer(2000);
  };

  // Prev / Next buttons
  const scrollBy = (direction: 'prev' | 'next') => {
    if (!scrollContainerRef.current) return;
    const delta = direction === 'next' ? CARD_SCROLL_STEP : -CARD_SCROLL_STEP;
    scrollContainerRef.current.scrollBy({ left: delta, behavior: 'smooth' });
    pauseWithTimer(3000);
  };

  // Touch / swipe handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    const delta = touchStartXRef.current - e.touches[0].clientX;
    scrollContainerRef.current.scrollLeft += delta;
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    pauseWithTimer(2000);
  };

  // Testimonial Card Component with mouse tracking
  function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative flex-shrink-0 w-[85vw] md:w-[320px] lg:w-[380px] pt-6 pb-6"
      >
        <div className="relative h-full rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 transition-all duration-500 hover:border-primary/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden">
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.15) 0%, hsl(var(--accent) / 0.1) 40%, transparent 70%)`,
            }}
          />
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 80% 60% at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.1) 0%, transparent 60%)`,
            }}
          />

          <div className="relative z-10">
            {testimonial.companyLogo ? (
              <div className="mb-4">
                <img
                  src={testimonial.companyLogo}
                  alt={testimonial.companyName}
                  className="h-6 md:h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ) : (
              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {testimonial.companyName}
                </h3>
              </div>
            )}

            <h4 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-tight">
              {testimonial.headline}
            </h4>

            <blockquote className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
              "{testimonial.quote}"
            </blockquote>

            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-border/50">
                <AvatarImage
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="object-cover"
                />
              </Avatar>
              <div>
                <div className="font-semibold text-foreground text-sm">
                  {testimonial.author.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.author.role}
                </div>
              </div>
            </div>

            {testimonial.href && (
              <div className="mt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80 hover:bg-primary/10"
                  asChild
                >
                  <a href={testimonial.href}>
                    Ver Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Cases de Sucesso
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground">
            Histórias reais de empresas que transformaram sua infraestrutura com a MDS Cloud
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Prev button */}
          <button
            onClick={() => scrollBy('prev')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 border border-border/50 shadow-lg backdrop-blur-sm text-foreground hover:bg-card hover:border-primary/50 transition-all duration-200"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next button */}
          <button
            onClick={() => scrollBy('next')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 border border-border/50 shadow-lg backdrop-blur-sm text-foreground hover:bg-card hover:border-primary/50 transition-all duration-200"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollContainerRef}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide py-6 px-12"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'auto',
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${index}-${testimonial.companyName}`}
                testimonial={testimonial}
              />
            ))}
          </div>

          {/* Gradient fade on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
