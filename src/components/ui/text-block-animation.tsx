"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function TextBlockAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#000",
  stagger = 0.1,
  duration = 0.6,
}: {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !blockRef.current || !contentRef.current) return;

      const block = blockRef.current;
      const content = contentRef.current;

      gsap.set(content, { opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "expo.inOut" },
        scrollTrigger: animateOnScroll
          ? {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          : undefined,
        delay,
      });

      tl.to(block, {
        scaleX: 1,
        duration,
        transformOrigin: "left center",
      })
        .set(content, { opacity: 1 }, `<-${duration / 2}`)
        .to(
          block,
          {
            scaleX: 0,
            duration,
            transformOrigin: "right center",
          },
          `<-${duration * 0.4}`
        );
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    }
  );

  return (
    <div ref={containerRef} className="relative block overflow-hidden">
      <div ref={contentRef} className="relative z-[1]">
        {children}
      </div>
      <div
        ref={blockRef}
        className="absolute inset-0 z-[2] origin-left"
        style={{
          backgroundColor: blockColor,
          scaleX: 0,
        }}
      />
    </div>
  );
}
