import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import DomainLookup from "./pages/web-tools/DomainLookup";
import WebsiteAnalysis from "./pages/web-tools/WebsiteAnalysis";
import TechStack from "./pages/web-tools/TechStack";
import LifestyleAssessment from "./pages/health/LifestyleAssessment";
import Recommendations from "./pages/health/Recommendations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/web-tools/domain" element={<DomainLookup />} />
          <Route path="/web-tools/analysis" element={<WebsiteAnalysis />} />
          <Route path="/web-tools/tech-stack" element={<TechStack />} />
          <Route path="/health/assessment" element={<LifestyleAssessment />} />
          <Route path="/health/recommendations" element={<Recommendations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
