import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { I18nProvider } from "@/lib/i18n";
import { CookieConsent } from "@/components/CookieConsent";
import Index from "./pages/Index";
import CloudSolutions from "./pages/CloudSolutions";
import DatabaseSolutions from "./pages/DatabaseSolutions";
import BackupSolutions from "./pages/BackupSolutions";
import SecuritySolutions from "./pages/SecuritySolutions";
import HotelariaSolutions from "./pages/HotelariaSolutions";
import AutomotivoSolutions from "./pages/AutomotivoSolutions";
import AgronegocioSolutions from "./pages/AgronegocioSolutions";
import IndustrialSolutions from "./pages/IndustrialSolutions";
import QuemSomos from "./pages/QuemSomos";
import OQueFazemos from "./pages/OQueFazemos";
import ComoFazemos from "./pages/ComoFazemos";
import Parceiros from "./pages/Parceiros";
import Blog from "./pages/Blog";
import Depoimentos from "./pages/Depoimentos";
import DepoimentosVideo from "./pages/DepoimentosVideo";
import PoliticasPrivacidade from "./pages/PoliticasPrivacidade";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark">
      <I18nProvider>
        <TooltipProvider>
          <CookieConsent />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/solucoes-cloud" element={<CloudSolutions />} />
              <Route path="/banco-de-dados" element={<DatabaseSolutions />} />
              <Route path="/backup" element={<BackupSolutions />} />
              <Route path="/seguranca" element={<SecuritySolutions />} />
              <Route path="/hotelaria" element={<HotelariaSolutions />} />
              <Route path="/automotivo" element={<AutomotivoSolutions />} />
              <Route path="/agronegocio" element={<AgronegocioSolutions />} />
              <Route path="/industrial" element={<IndustrialSolutions />} />
              <Route path="/quem-somos" element={<QuemSomos />} />
              <Route path="/o-que-fazemos" element={<OQueFazemos />} />
              <Route path="/como-fazemos" element={<ComoFazemos />} />
              <Route path="/parceiros" element={<Parceiros />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/depoimentos" element={<Depoimentos />} />
              <Route path="/depoimentos-video" element={<DepoimentosVideo />} />
              <Route path="/politicas-privacidade" element={<PoliticasPrivacidade />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </I18nProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
