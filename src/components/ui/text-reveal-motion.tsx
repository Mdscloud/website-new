"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Efeito de revelação por bloco (estilo 21st.dev) usando apenas Framer Motion.
 * Não depende de GSAP — evita 504 e tela branca.
 */
export default function TextRevealMotion({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#000",
  duration = 0.7,
}: {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  duration?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const blockDuration = duration;
  const midPoint = 0.5; // no meio do bloco a gente revela o texto

  return (
    <div ref={containerRef} className="relative block overflow-hidden">
      <motion.div
        className="relative z-[1]"
        initial={{ opacity: 0 }}
        animate={
          animateOnScroll && isInView
            ? { opacity: 1 }
            : { opacity: 0 }
        }
        transition={{
          duration: 0.01,
          delay: delay + blockDuration * midPoint,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 z-[2] origin-left"
        style={{ backgroundColor: blockColor }}
        initial={{ scaleX: 0 }}
        animate={
          animateOnScroll && isInView
            ? { scaleX: [0, 1, 0] }
            : { scaleX: 0 }
        }
        transition={{
          duration: blockDuration * 1.4,
          times: [0, 0.5, 1],
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />
    </div>
  );
}
