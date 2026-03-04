"use client";

import React, { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange" | "mds";
  glowIntensity?: "default" | "strong";
  /** Quando true, não desenha borda nem anel 1px no card (só glow do wrapper); use nos stats cards. */
  glowOnly?: boolean;
  /** Quando true (e mds), fundo do card mais transparente para o background da seção aparecer. */
  transparent?: boolean;
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

// Paleta MDS: laranja 26 99% 60%, azul 230 85% 60%
const glowColorMap: Record<
  string,
  { base: number; spread: number; saturation: number; lightness: number }
> = {
  blue: { base: 230, spread: 200, saturation: 85, lightness: 60 },
  purple: { base: 280, spread: 300, saturation: 75, lightness: 60 },
  green: { base: 120, spread: 200, saturation: 70, lightness: 55 },
  red: { base: 0, spread: 200, saturation: 100, lightness: 55 },
  orange: { base: 26, spread: 200, saturation: 99, lightness: 60 },
  mds: { base: 26, spread: 180, saturation: 99, lightness: 60 },
};

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

export function GlowCard({
  children,
  className = "",
  glowColor = "mds",
  glowIntensity = "default",
  glowOnly = false,
  transparent = false,
  size = "md",
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cardRef.current) {
        cardRef.current.style.setProperty("--x", x.toFixed(2));
        cardRef.current.style.setProperty(
          "--xp",
          (x / window.innerWidth).toFixed(2)
        );
        cardRef.current.style.setProperty("--y", y.toFixed(2));
        cardRef.current.style.setProperty(
          "--yp",
          (y / window.innerHeight).toFixed(2)
        );
      }
    };
    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  const config = glowColorMap[glowColor] ?? glowColorMap.mds;
  const { base, spread, saturation, lightness } = config;

  const getSizeClasses = () => {
    if (customSize) return "";
    return sizeMap[size];
  };

  const getInlineStyles = (): CSSProperties => {
    const isMds = glowColor === "mds";
    // Card translúcido (fundo da seção visível) + borda com glow azul + ponto laranja
    const borderColor = isMds ? "hsl(232 45% 24% / 0.5)" : "hsl(232 70% 20% / 0.25)";
    const styles: CSSProperties = {
      ["--base" as string]: base,
      ["--spread" as string]: spread,
      ["--radius" as string]: "14",
      ["--border" as string]: isMds ? "1" : "3",
      ["--backdrop" as string]: isMds
        ? transparent
          ? "hsl(232 28% 8% / 0.28)"
          : "hsl(232 35% 10% / 0.48)"
        : "hsl(232 70% 9% / 0.88)",
      ["--backup-border" as string]: borderColor,
      ["--saturation" as string]: `${saturation}%`,
      ["--lightness" as string]: `${lightness}%`,
      ["--bg-spot-opacity" as string]: isMds ? "0.06" : "0.18",
      ["--border-spot-opacity" as string]: isMds ? "0" : "0.85",
      ["--border-light-opacity" as string]: isMds ? "0" : "0.4",
      ["--size" as string]: "200",
      ["--outer" as string]: "1",
      ["--border-size" as string]: "calc(var(--border, 2) * 1px)",
      ["--spotlight-size" as string]: "calc(var(--size, 150) * 1px)",
      ["--hue" as string]:
        "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
      backgroundColor: isMds ? "var(--backdrop)" : "var(--backdrop)",
      backgroundImage: isMds
        ? "none"
        : `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 26) var(--saturation) var(--lightness) / var(--bg-spot-opacity, 0.18)), transparent
      )`,
      backgroundSize: isMds
        ? undefined
        : "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
      backgroundPosition: isMds ? undefined : "50% 50%",
      backgroundAttachment: isMds ? undefined : "fixed",
      backgroundRepeat: "no-repeat",
      border: glowOnly && isMds ? "none" : `var(--border-size) solid ${borderColor}`,
      position: "relative",
      touchAction: "none",
    };
    // Borda com glow sutil azul-laranja (laranja no topo, azul nos lados/base) – sutil, neon/electric
    if (isMds) {
      if (glowOnly) {
        (styles as Record<string, unknown>).boxShadow = "0 8px 24px -6px rgba(0,0,0,0.2)";
      } else {
        const subtle = glowIntensity !== "strong";
        const orangeTop = subtle
          ? "0 -2px 14px 0 hsl(26 99% 58% / 0.28), 0 -1px 8px 0 hsl(26 99% 55% / 0.22)"
          : "0 -4px 20px 0 hsl(26 99% 58% / 0.32), 0 -2px 10px 0 hsl(26 99% 55% / 0.26)";
        const blueSides = subtle
          ? "0 0 0 1px hsl(230 70% 48% / 0.22), 0 0 16px 0 hsl(230 75% 50% / 0.12), 0 4px 12px 0 hsl(230 75% 45% / 0.1)"
          : "0 0 0 1px hsl(230 70% 50% / 0.28), 0 0 20px 0 hsl(230 75% 52% / 0.18), 0 6px 16px 0 hsl(230 75% 48% / 0.12)";
        const dropShadow = "0 8px 24px -6px rgba(0,0,0,0.35)";
        (styles as Record<string, unknown>).boxShadow = `${orangeTop}, ${blueSides}, ${dropShadow}`;
      }
    }
    if (width !== undefined) {
      styles.width = typeof width === "number" ? `${width}px` : width;
    }
    if (height !== undefined) {
      styles.height = typeof height === "number" ? `${height}px` : height;
    }
    return styles;
  };

  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    [data-glow]:not([data-glow-style="mds"])::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 26) var(--saturation) var(--lightness) / var(--border-spot-opacity, 0.85)), transparent 100%
      );
      filter: brightness(2);
    }
    [data-glow]:not([data-glow-style="mds"])::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(0 100% 100% / var(--border-light-opacity, 0.4)), transparent 100%
      );
    }
    [data-glow][data-glow-style="mds"]::before,
    [data-glow][data-glow-style="mds"]::after {
      opacity: 0;
      pointer-events: none;
    }
    [data-glow][data-glow-style="mds"] > [data-glow] {
      opacity: 0;
    }
    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
    [data-glow] > [data-glow]::before {
      inset: -10px;
      border-width: 10px;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        data-glow-style={glowColor === "mds" ? "mds" : undefined}
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize ? "aspect-[3/4]" : ""}
          rounded-2xl
          relative
          grid
          grid-rows-[1fr_auto]
          shadow-[0_1rem_2rem_-1rem_rgba(0,0,0,0.2)]
          p-4
          gap-4
          ${glowColor === "mds" ? "backdrop-blur-[5px]" : "backdrop-blur-[8px]"}
          ${className}
        `}
      >
        <div ref={innerRef} data-glow aria-hidden />
        {children}
      </div>
    </>
  );
}
