import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { useI18n, Language } from "@/lib/i18n";

const languages = [
  { code: "pt" as Language, name: "Português", flag: "🇧🇷" },
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "es" as Language, name: "Español", flag: "🇪🇸" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-lg border border-border/50 bg-secondary/50 px-2.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLang?.flag}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)} 
            />
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full z-50 mt-2 w-40 rounded-lg border border-border bg-card p-1 shadow-xl"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                    language === lang.code
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
