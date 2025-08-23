import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Activity, Shield, Zap, BarChart3, MapPin, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-health.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous tracking of vital signs including heart rate, blood oxygen, and temperature",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Health Analytics",
      description: "AI-powered insights and trends analysis of your health data over time",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: MapPin,
      title: "Emergency Locations",
      description: "Instant access to nearby hospitals and emergency services when you need them most",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Emergency Response",
      description: "Automatic alerts to emergency contacts and healthcare providers during critical situations",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content: "Beat Aware helped me understand my health patterns better than ever before.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      content: "The real-time monitoring capabilities are impressive and clinically valuable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="gradient-hero relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-10 animate-slide-in-up">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Heart className="h-12 w-12 text-white animate-pulse-heart glow-effect" />
                    <div className="absolute inset-0 h-12 w-12 rounded-full bg-white/20 animate-ping"></div>
                  </div>
                  <h1 className="text-6xl font-bold text-white font-playfair">Beat Aware</h1>
                </div>
                <p className="text-2xl text-white/95 leading-relaxed font-medium max-w-2xl">
                  Your personal health guardian. Monitor your vitals in real-time, 
                  get AI-powered health insights, and stay connected to emergency 
                  services wherever you are.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 text-white/90 group">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Real-time</div>
                    <div className="text-sm opacity-80">Health monitoring</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white/90 group">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7</div>
                    <div className="text-sm opacity-80">Emergency response</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white/90 group">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">AI-powered</div>
                    <div className="text-sm opacity-80">Health insights</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  onClick={() => navigate("/login")}
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 transition-all duration-300 text-xl px-10 py-6 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-white/80 text-lg">
                  Join <span className="font-bold text-white">10,000+</span> users who trust Beat Aware with their health
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-scale">
              <div className="relative float-animation">
                <img 
                  src={heroImage} 
                  alt="Advanced health monitoring technology" 
                  className="rounded-3xl shadow-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-3xl"></div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 animate-bounce-in">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-white animate-pulse-heart" />
                  <span className="text-white font-semibold">72 BPM</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 animate-bounce-in" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-white" />
                  <span className="text-white font-semibold">98% SpO2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20 animate-slide-in-up">
            <h2 className="text-5xl font-bold font-playfair">Why Choose Beat Aware?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive health monitoring designed for modern life with cutting-edge technology and intuitive design
            </p>
            <div className="h-1 w-24 gradient-primary rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="gradient-card shadow-card border-0 text-center card-hover group animate-fade-in-scale" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-4">
                    <div className={`mx-auto h-16 w-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-playfair group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 gradient-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold font-playfair">Trusted by Healthcare Professionals</h2>
            <p className="text-xl text-muted-foreground">See what our users say about Beat Aware</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="gradient-card shadow-card border-0 card-hover animate-fade-in-scale" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="gradient-hero py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-scale">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-white font-playfair">Ready to Take Control of Your Health?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Start monitoring your health today with Beat Aware's advanced technology and join thousands of satisfied users
            </p>
            <Button 
              onClick={() => navigate("/login")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 text-xl px-10 py-6 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 group"
            >
              Start Your Health Journey
              <Heart className="ml-2 h-6 w-6 group-hover:animate-pulse-heart transition-all" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
