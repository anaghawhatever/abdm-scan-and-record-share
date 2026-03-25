import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CitizenPage from "./pages/CitizenPage";
import IntegratorPage from "./pages/IntegratorPage";
import PolicyPage from "./pages/PolicyPage";
import ResourcesPage from "./pages/ResourcesPage";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/citizens" element={<CitizenPage />} />
          <Route path="/integrators" element={<IntegratorPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
