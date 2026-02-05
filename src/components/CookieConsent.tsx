import { useEffect } from "react";

export function CookieConsent() {
  useEffect(() => {
    // Adiciona a meta tag do Adopt
    const metaTag = document.createElement("meta");
    metaTag.name = "adopt-website-id";
    metaTag.content = "6459de6a-390d-4c47-a9bd-c2231cb83b1d";
    document.head.appendChild(metaTag);

    // Carrega o script do Adopt
    const script = document.createElement("script");
    script.src = "//tag.goadopt.io/injector.js?website_code=6459de6a-390d-4c47-a9bd-c2231cb83b1d";
    script.className = "adopt-injector";
    script.async = true;
    
    // Adiciona o script ao head
    document.head.appendChild(script);

    // Cleanup: remove o script e meta tag quando o componente for desmontado
    return () => {
      const existingScript = document.querySelector('script.adopt-injector');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      const existingMeta = document.querySelector('meta[name="adopt-website-id"]');
      if (existingMeta) {
        document.head.removeChild(existingMeta);
      }
    };
  }, []);

  return null; // Este componente não renderiza nada visualmente
}
