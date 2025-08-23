import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Login from "./pages/Login";
import DeviceSetup from "./pages/DeviceSetup";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Location from "./pages/Location";
import Profile from "./pages/Profile";
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
          <Route path="/login" element={<Login />} />
          <Route path="/device-setup" element={<DeviceSetup />} />
          <Route 
            path="/dashboard" 
            element={
              <div className="flex">
                <Navigation />
                <main className="flex-1 md:ml-80 pt-20 md:pt-0 min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
                  <Dashboard />
                </main>
              </div>
            } 
          />
          <Route 
            path="/analytics" 
            element={
              <div className="flex">
                <Navigation />
                <main className="flex-1 md:ml-80 pt-20 md:pt-0 min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
                  <Analytics />
                </main>
              </div>
            } 
          />
          <Route 
            path="/location" 
            element={
              <div className="flex">
                <Navigation />
                <main className="flex-1 md:ml-80 pt-20 md:pt-0 min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
                  <Location />
                </main>
              </div>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <div className="flex">
                <Navigation />
                <main className="flex-1 md:ml-80 pt-20 md:pt-0 min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
                  <Profile />
                </main>
              </div>
            } 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
