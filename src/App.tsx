import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import MeetingRoom from "./pages/MeetingRoom";
import MeetingSummary from "./pages/MeetingSummary";
import Dashboard from "./pages/Dashboard";
import Ceremonies from "./pages/Ceremonies";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ceremonies" element={<Ceremonies />} />
          <Route path="/meeting" element={<MeetingRoom />} />
          <Route path="/meeting/summary" element={<MeetingSummary />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<div className="pt-24 p-8 text-center"><h1 className="text-2xl font-bold">Community Hub Coming Soon</h1></div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
