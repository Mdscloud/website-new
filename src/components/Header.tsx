import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Cloud, Database, Server, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
const services = [
  { name: "Cloud Computing", href: "#cloud", icon: Cloud, description: "Infraestrutura de alta performance" },
  { name: "Backup em Nuvem", href: "#backup", icon: Database, description: "Proteção total de dados" },
  { name: "DBA Remoto", href: "#dba", icon: Server, description: "Gestão especializada 24x7" },
  { name: "ERP SaaS", href: "#erp", icon: BarChart3, description: "Sistemas empresariais em nuvem" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Cloud className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              MDS<span className="text-primary">Cloud</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <a href="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
                Soluções
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 rounded-xl border border-border bg-card p-2 shadow-xl"
                  >
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <service.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{service.name}</div>
                          <div className="text-xs text-muted-foreground">{service.description}</div>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#cases" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Cases
            </a>
            <a href="#sobre" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Sobre
            </a>
            <a href="#contato" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Contato
            </a>
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Button variant="hero" size="default">
              Falar com Especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                <a href="/" className="text-sm font-medium text-foreground">Home</a>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">Soluções</div>
                  {services.map((service) => (
                    <a key={service.name} href={service.href} className="flex items-center gap-2 pl-4 text-sm text-foreground">
                      <service.icon className="h-4 w-4 text-primary" />
                      {service.name}
                    </a>
                  ))}
                </div>
                <a href="#cases" className="text-sm font-medium text-foreground">Cases</a>
                <a href="#sobre" className="text-sm font-medium text-foreground">Sobre</a>
                <a href="#contato" className="text-sm font-medium text-foreground">Contato</a>
                <Button variant="hero" className="mt-2 w-full">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
