import { motion } from "framer-motion";

type DividerVariant = "gradient" | "wave" | "geometric" | "grid";
type DividerSpacing = "sm" | "md" | "lg";

interface SectionDividerProps {
  variant?: DividerVariant;
  inverted?: boolean;
  spacing?: DividerSpacing;
  className?: string;
}

const spacingMap = {
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
};

export function SectionDivider({
  variant = "gradient",
  inverted = false,
  spacing = "md",
  className = "",
}: SectionDividerProps) {
  const spacingClass = spacingMap[spacing];

  const GradientDivider = () => (
    <div className={`relative ${spacingClass} ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      {!inverted && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-2 w-2 rounded-full bg-primary/30" />
        </div>
      )}
    </div>
  );

  const WaveDivider = () => (
    <div className={`relative ${spacingClass} overflow-hidden ${className}`}>
      <svg
        className={`h-12 w-full ${inverted ? "rotate-180" : ""}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C300,20 600,100 900,50 C1050,30 1150,40 1200,50 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          opacity="0.1"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  const GeometricDivider = () => (
    <div className={`relative ${spacingClass} ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/30" />
          <div className="relative">
            <div className="h-3 w-3 rotate-45 border-2 border-primary/30" />
            <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary/20" />
          </div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>
      {inverted && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent" />
      )}
    </div>
  );

  const GridDivider = () => (
    <div className={`relative ${spacingClass} overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
    </div>
  );

  const renderDivider = () => {
    switch (variant) {
      case "wave":
        return <WaveDivider />;
      case "geometric":
        return <GeometricDivider />;
      case "grid":
        return <GridDivider />;
      default:
        return <GradientDivider />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {renderDivider()}
    </motion.div>
  );
}

