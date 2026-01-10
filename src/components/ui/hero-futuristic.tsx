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

export default HeroFuturistic;
