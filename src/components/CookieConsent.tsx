import { useEffect } from "react";

export function CookieConsent() {
  useEffect(() => {
    // Carrega o script do Adopt
    const script = document.createElement("script");
    script.src = "https://cdn.goadopt.io/bundle.js";
    script.async = true;
    script.setAttribute("data-site-id", "YOUR_SITE_ID"); // Substitua pelo seu Site ID do Adopt
    
    // Adiciona o script ao head
    document.head.appendChild(script);

    // Cleanup: remove o script quando o componente for desmontado
    return () => {
      const existingScript = document.querySelector('script[src="https://cdn.goadopt.io/bundle.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null; // Este componente não renderiza nada visualmente
}
