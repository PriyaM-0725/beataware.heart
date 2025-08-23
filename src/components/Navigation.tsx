import { NavLink, useLocation } from "react-router-dom";
import { Heart, Home, BarChart3, MapPin, User, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Location", path: "/location", icon: MapPin },
    { name: "Profile", path: "/profile", icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  const NavContent = () => (
    <div className="flex flex-col h-full gradient-card">
      <div className="flex items-center space-x-3 p-8 border-b border-primary/10">
        <div className="relative">
          <Heart className="h-8 w-8 text-primary animate-pulse-heart" />
          <div className="absolute inset-0 h-8 w-8 rounded-full bg-primary/20 animate-ping"></div>
        </div>
        <div>
          <span className="text-2xl font-bold font-playfair text-primary">Beat Aware</span>
          <div className="text-xs text-muted-foreground flex items-center space-x-1">
            <Sparkles className="h-3 w-3" />
            <span>Premium Health</span>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-6">
        <div className="space-y-3">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const active = isActive(item.path);
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`group flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  active
                    ? "gradient-primary text-white shadow-lg transform scale-[1.02]"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-primary hover:scale-[1.01]"
                }`}
              >
                <div className={`p-2 rounded-xl transition-all duration-300 ${
                  active 
                    ? "bg-white/20" 
                    : "bg-primary/10 group-hover:bg-primary/20"
                }`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <span className="font-medium">{item.name}</span>
                {active && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      <div className="p-6 border-t border-primary/10">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
          <div className="flex items-center space-x-3">
            <div className="h-3 w-3 bg-healthy rounded-full animate-pulse"></div>
            <div>
              <div className="text-sm font-semibold">All Systems Normal</div>
              <div className="text-xs text-muted-foreground">Device Connected</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed left-0 top-0 h-full w-80 z-50 shadow-glow">
        <NavContent />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 gradient-card border-b shadow-card backdrop-blur-md">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <Heart className="h-7 w-7 text-primary animate-pulse-heart" />
            <span className="text-xl font-bold font-playfair text-primary">Beat Aware</span>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-xl border-2 border-primary/20 hover:border-primary/40">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80">
              <NavContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Navigation;