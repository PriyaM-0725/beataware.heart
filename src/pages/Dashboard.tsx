import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, Activity, Thermometer, Droplets, Zap, Gauge, AlertTriangle, TrendingUp, Wifi } from "lucide-react";

interface VitalSign {
  id: string;
  name: string;
  value: number;
  unit: string;
  icon: any;
  status: "healthy" | "warning" | "critical";
  range: string;
  trend: "up" | "down" | "stable";
  gradient: string;
}

const Dashboard = () => {
  const [vitals, setVitals] = useState<VitalSign[]>([
    {
      id: "heartrate",
      name: "Heart Rate",
      value: 72,
      unit: "bpm",
      icon: Heart,
      status: "healthy",
      range: "60-100 bpm",
      trend: "stable",
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: "spo2",
      name: "Blood Oxygen",
      value: 98,
      unit: "%",
      icon: Droplets,
      status: "healthy",
      range: "95-100%",
      trend: "up",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "temperature",
      name: "Body Temperature",
      value: 98.6,
      unit: "°F",
      icon: Thermometer,
      status: "healthy",
      range: "97-99°F",
      trend: "stable",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      id: "bloodpressure",
      name: "Blood Pressure",
      value: 120,
      unit: "mmHg",
      icon: Gauge,
      status: "healthy",
      range: "90-140 mmHg",
      trend: "down",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      id: "stress",
      name: "Stress Level",
      value: 25,
      unit: "%",
      icon: Zap,
      status: "healthy",
      range: "0-30%",
      trend: "down",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: "activity",
      name: "Activity Level",
      value: 65,
      unit: "%",
      icon: Activity,
      status: "healthy",
      range: "Active",
      trend: "up",
      gradient: "from-indigo-500 to-purple-500"
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVitals(prev => prev.map(vital => ({
        ...vital,
        value: Math.max(0, vital.value + (Math.random() - 0.5) * 2)
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy": return "text-healthy";
      case "warning": return "text-warning";
      case "critical": return "text-critical";
      default: return "text-muted-foreground";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "healthy": return <Badge className="bg-healthy text-healthy-foreground">Normal</Badge>;
      case "warning": return <Badge className="bg-warning text-warning-foreground">Warning</Badge>;
      case "critical": return <Badge className="bg-critical text-critical-foreground">Critical</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-3 w-3 text-healthy" />;
      case "down": return <TrendingUp className="h-3 w-3 text-healthy rotate-180" />;
      case "stable": return <div className="h-3 w-3 bg-muted-foreground rounded-full"></div>;
      default: return null;
    }
  };

  return (
    <div className="p-6 space-y-8 font-sans">
      {/* Header */}
      <div className="space-y-6 animate-slide-in-up">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold font-sans">Health Dashboard</h1>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Wifi className="h-4 w-4" />
            <span>Real-time sync</span>
          </div>
        </div>
        
        <Card className="gradient-card shadow-glow border-0 card-hover">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl font-sans">
              <div className="relative">
                <div className="h-4 w-4 bg-healthy rounded-full animate-pulse-heart"></div>
                <div className="absolute inset-0 h-4 w-4 bg-healthy/30 rounded-full animate-ping"></div>
              </div>
              <span>All Systems Normal</span>
            </CardTitle>
            <CardDescription className="text-lg font-sans">
              Last updated: {new Date().toLocaleTimeString()} • All vitals within healthy ranges
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Vital Signs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vitals.map((vital, index) => {
          const IconComponent = vital.icon;
          return (
            <Card 
              key={vital.id} 
              className="gradient-card shadow-card border-0 card-hover group animate-fade-in-scale" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-lg font-semibold font-sans">
                  {vital.name}
                </CardTitle>
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-r ${vital.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className={`h-6 w-6 text-white ${vital.id === 'heartrate' ? 'animate-pulse-heart' : ''}`} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    <div className="text-3xl font-bold font-sans">
                      {vital.value.toFixed(vital.id === 'temperature' ? 1 : 0)}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {vital.unit}
                    </div>
                    {getTrendIcon(vital.trend)}
                  </div>
                  <div className="flex items-center justify-between">
                    {getStatusBadge(vital.status)}
                    <div className="text-xs text-muted-foreground">
                      {vital.range}
                    </div>
                  </div>
                  {vital.id === "activity" && (
                    <div className="space-y-2">
                      <Progress value={vital.value} className="w-full h-2" />
                      <div className="text-xs text-muted-foreground text-center">Daily Goal Progress</div>
                    </div>
                  )}
                  {vital.id === "stress" && (
                    <div className="space-y-2">
                      <Progress value={vital.value} className="w-full h-2" />
                      <div className="text-xs text-muted-foreground text-center">Stress Management</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Health Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="gradient-card shadow-card border-0 animate-fade-in-scale">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-sans">
              <Activity className="h-5 w-5 text-primary" />
              <span>Today's Summary</span>
            </CardTitle>
            <CardDescription>Your health metrics overview for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="text-2xl font-bold font-sans text-primary">8.2k</div>
                <div className="text-xs text-muted-foreground">Steps Today</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-healthy/10 to-healthy/5">
                <div className="text-2xl font-bold font-sans text-healthy">7h 23m</div>
                <div className="text-xs text-muted-foreground">Sleep Duration</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-card border-0 animate-fade-in-scale" style={{animationDelay: '0.1s'}}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-sans">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <span>Health Alerts</span>
            </CardTitle>
            <CardDescription>Important notifications and reminders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-healthy/10 border border-healthy/20">
                <div className="h-2 w-2 bg-healthy rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">All vitals within normal range</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-primary/10 border border-primary/20">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Device sync completed</p>
                  <p className="text-xs text-muted-foreground">5 minutes ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
