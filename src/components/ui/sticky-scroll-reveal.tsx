"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    image?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "hsl(var(--background))",
    "hsl(var(--background))",
    "hsl(var(--background))",
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--accent)))",
    "linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--accent)))",
    "linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--accent)))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div 
      ref={ref} 
      className="relative w-full"
      style={{ 
        height: `${content.length * 100}vh`,
        position: 'relative',
      }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
        {/* Coluna esquerda - Textos */}
        <div className="flex-1">
          {content.map((item, index) => (
            <div 
              key={item.title + index} 
              className="h-screen flex items-center justify-start px-4"
              style={{ 
                height: '100vh',
                minHeight: '100vh',
              }}
            >
              <div className="max-w-2xl">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl md:text-3xl font-bold text-foreground mb-6"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
          ))}
        </div>

        {/* Coluna direita - Imagem Sticky */}
        <div className="hidden lg:block lg:w-[500px] lg:flex-shrink-0">
          <div 
            className="sticky"
            style={{ 
              top: '6rem',
              height: 'fit-content',
              position: 'sticky',
            }}
          >
            <div
              style={{ background: backgroundGradient }}
              className={cn(
                "h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl",
                contentClassName
              )}
            >
              {content[activeCard].image ? (
                <img
                  src={content[activeCard].image}
                  alt={content[activeCard].title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                content[activeCard].content ?? null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
