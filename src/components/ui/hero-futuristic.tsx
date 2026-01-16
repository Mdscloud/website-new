<<<<<<< HEAD
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
=======
'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import datacenterImage from '@/assets/datacenter.jpg';

export const HeroFuturistic = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const imageDataRef = useRef<ImageData | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = datacenterImage;
    
    img.onload = () => {
      imgRef.current = img;
      
      // Pre-compute image data for faster pixel access
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = img.width;
      tempCanvas.height = img.height;
      const tempCtx = tempCanvas.getContext('2d');
      if (tempCtx) {
        tempCtx.drawImage(img, 0, 0);
        imageDataRef.current = tempCtx.getImageData(0, 0, img.width, img.height);
      }
      
      setIsLoaded(true);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !imgRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imgRef.current;

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (!container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const getLuminance = (x: number, y: number): number => {
      if (!imageDataRef.current) return 0.5;
      
      const imgX = Math.max(0, Math.min(img.width - 1, Math.floor(x)));
      const imgY = Math.max(0, Math.min(img.height - 1, Math.floor(y)));
      const idx = (imgY * img.width + imgX) * 4;
      
      const r = imageDataRef.current.data[idx];
      const g = imageDataRef.current.data[idx + 1];
      const b = imageDataRef.current.data[idx + 2];
      
      return (r * 0.299 + g * 0.587 + b * 0.114) / 255;
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      timeRef.current += 0.012;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate image dimensions
      const imgAspect = img.width / img.height;
      const canvasAspect = canvas.width / canvas.height;
      
      let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;
      
      if (canvasAspect > imgAspect) {
        drawWidth = canvas.width * 0.95;
        drawHeight = drawWidth / imgAspect;
        offsetX = canvas.width * 0.025;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height * 0.95;
        drawWidth = drawHeight * imgAspect;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = canvas.height * 0.025;
      }

      // Subtle parallax
      const parallaxX = mousePosRef.current.x * 8;
      const parallaxY = mousePosRef.current.y * 8;
      
      // Draw base image
      ctx.save();
      ctx.globalAlpha = 0.9;
      ctx.drawImage(img, offsetX + parallaxX, offsetY + parallaxY, drawWidth, drawHeight);
      ctx.restore();
      
      // Scanning effect
      const scanSpeed = 0.5;
      const scanPos = ((timeRef.current * scanSpeed) % 1.4) - 0.2;
      const scanWidth = 0.18;
      
      // Draw dot matrix overlay - optimized with larger spacing
      const dotSpacing = 10;
      const maxDotSize = 4;
      
      ctx.save();
      
      for (let x = offsetX; x < offsetX + drawWidth; x += dotSpacing) {
        for (let y = offsetY; y < offsetY + drawHeight; y += dotSpacing) {
          const normalizedY = (y - offsetY) / drawHeight;
          
          // Calculate scan intensity
          const distFromScan = Math.abs(normalizedY - scanPos);
          if (distFromScan >= scanWidth) continue;
          
          const scanIntensity = 1 - (distFromScan / scanWidth);
          
          // Get luminance from pre-computed data
          const imgX = ((x - offsetX) / drawWidth) * img.width;
          const imgY = ((y - offsetY) / drawHeight) * img.height;
          const luminance = getLuminance(imgX, imgY);
          
          // Calculate dot properties
          const dotIntensity = scanIntensity * scanIntensity * (0.4 + luminance * 0.6);
          const dotSize = maxDotSize * dotIntensity;
          
          if (dotSize < 0.5) continue;
          
          // Draw main dot with brand blue color
          ctx.beginPath();
          ctx.arc(x + parallaxX, y + parallaxY, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(90, 122, 255, ${dotIntensity * 0.9})`;
          ctx.fill();
          
          // Draw glow
          if (dotIntensity > 0.3) {
            ctx.beginPath();
            ctx.arc(x + parallaxX, y + parallaxY, dotSize * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(90, 122, 255, ${dotIntensity * 0.15})`;
            ctx.fill();
          }
        }
      }
      
      // Draw scan line glow band
      const glowY = offsetY + scanPos * drawHeight + parallaxY;
      const glowHeight = 80;
      const gradient = ctx.createLinearGradient(0, glowY - glowHeight, 0, glowY + glowHeight);
      gradient.addColorStop(0, 'rgba(90, 122, 255, 0)');
      gradient.addColorStop(0.4, 'rgba(90, 122, 255, 0.08)');
      gradient.addColorStop(0.5, 'rgba(90, 122, 255, 0.15)');
      gradient.addColorStop(0.6, 'rgba(90, 122, 255, 0.08)');
      gradient.addColorStop(1, 'rgba(90, 122, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(offsetX + parallaxX, glowY - glowHeight, drawWidth, glowHeight * 2);
      
      // Add horizontal scan line
      ctx.strokeStyle = 'rgba(90, 122, 255, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(offsetX + parallaxX, glowY);
      ctx.lineTo(offsetX + drawWidth + parallaxX, glowY);
      ctx.stroke();
      
      ctx.restore();
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [isLoaded]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    
    mousePosRef.current = { x, y };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0"
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          opacity: isLoaded ? 1 : 0, 
          transition: 'opacity 0.5s ease-in-out' 
        }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#5a7aff]/20 border-t-[#5a7aff] rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};
>>>>>>> f304a7ebf87deb00537bfda1a682323e4ed708af

export default HeroFuturistic;
