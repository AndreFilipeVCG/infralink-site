import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import SolicitacaoServicos from "./pages/SolicitacaoServicos";
import ServicosInfraestrutura from "./pages/ServicosInfraestrutura";
import ServicosCFTV from "./pages/ServicosCFTV";
import ServicosWorkstations from "./pages/ServicosWorkstations";
import ServicosManutencao from "./pages/ServicosManutencao";
import NossoTime from "./pages/NossoTime";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quem-somos" element={<QuemSomos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/solicitacao" element={<SolicitacaoServicos />} />
              {/* Service pages */}
              <Route path="/servicos/manutencao" element={<ServicosManutencao />} />
              <Route path="/servicos/workstations" element={<ServicosWorkstations />} />
              <Route path="/servicos/redes" element={<ServicosInfraestrutura />} />
              <Route path="/servicos/cftv" element={<ServicosCFTV />} />
              <Route path="/nosso-time" element={<NossoTime />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;