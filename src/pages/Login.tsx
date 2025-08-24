import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Activity, Sparkles, Eye, EyeOff } from "lucide-react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, navigate directly to device setup
    navigate("/device-setup");
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Hero Section */}
        <div className="hidden lg:block space-y-8 animate-slide-in-up">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="h-10 w-10 text-white animate-pulse-heart glow-effect" />
                <div className="absolute inset-0 h-10 w-10 rounded-full bg-white/20 animate-ping"></div>
              </div>
              <h1 className="text-5xl font-bold text-white font-playfair">Beat Aware</h1>
            </div>
            <p className="text-xl text-white/95 leading-relaxed font-medium">
              Your personal health guardian with real-time monitoring and AI-powered insights
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-white/90 group">
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <Activity className="h-5 w-5" />
                </div>
                <span className="font-medium">Continuous vital monitoring</span>
              </div>
              <div className="flex items-center space-x-4 text-white/90 group">
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <Shield className="h-5 w-5" />
                </div>
                <span className="font-medium">Emergency response system</span>
              </div>
              <div className="flex items-center space-x-4 text-white/90 group">
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="font-medium">AI-powered health insights</span>
              </div>
            </div>
          </div>
          <div className="relative float-animation">
           
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Login Form */}
        <div className="animate-fade-in-scale">
          <Card className="gradient-card shadow-glow border-0 backdrop-blur-sm bg-white/95">
            <CardHeader className="text-center space-y-6 pb-8">
              <div className="lg:hidden flex items-center justify-center space-x-3">
                <Heart className="h-8 w-8 text-primary animate-pulse-heart" />
                <h1 className="text-3xl font-bold font-playfair">Beat Aware</h1>
              </div>
              <div className="space-y-2">
                <CardTitle className="text-3xl font-playfair">Welcome Back</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Sign in to access your health monitoring dashboard
                </CardDescription>
              </div>
              <div className="h-1 w-20 gradient-primary rounded-full mx-auto"></div>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 px-4 rounded-xl border-2 border-muted focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-3 relative">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 px-4 pr-12 rounded-xl border-2 border-muted focus:border-primary transition-all duration-300"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-muted" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <a href="#" className="text-primary hover:text-primary/80 font-medium transition-colors">
                    Forgot password?
                  </a>
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 gradient-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Sign In to Dashboard
                </Button>
              </form>
              
              <div className="text-center pt-4">
                <p className="text-muted-foreground">
                  Don't have an account?{" "}
                  <a href="#" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                    Create Account
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;