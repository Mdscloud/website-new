"use client";
import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TimelineContentProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  animationNum?: number;
  customVariants?: any;
  timelineRef?: React.RefObject<HTMLDivElement>;
}

export function TimelineContent({
  children,
  as: Component = "div",
  className = "",
  animationNum = 0,
  customVariants,
  timelineRef,
}: TimelineContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef || ref, { once: true, margin: "-100px" });

  const defaultVariants = {
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: animationNum * 0.1,
        duration: 0.5,
      },
    },
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const variants = customVariants || defaultVariants;

  const motionProps: HTMLMotionProps<"div"> = {
    ref: ref,
    className: className,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    variants: variants,
  };

  if (Component === "h1") {
    return <motion.h1 {...motionProps}>{children}</motion.h1>;
  }
  if (Component === "p") {
    return <motion.p {...motionProps}>{children}</motion.p>;
  }
  if (Component === "h2") {
    return <motion.h2 {...motionProps}>{children}</motion.h2>;
  }
  if (Component === "article") {
    return <motion.article {...motionProps}>{children}</motion.article>;
  }

  return <motion.div {...motionProps}>{children}</motion.div>;
}
