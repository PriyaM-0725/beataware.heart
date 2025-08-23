import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bluetooth, Wifi, Check, Loader2, Smartphone, Radio, Zap } from "lucide-react";

const DeviceSetup = () => {
  const [connectionType, setConnectionType] = useState<"bluetooth" | "wifi" | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionProgress, setConnectionProgress] = useState(0);
  const navigate = useNavigate();

  const handleConnect = async (type: "bluetooth" | "wifi") => {
    setConnectionType(type);
    setIsConnecting(true);
    setConnectionProgress(0);
    
    // Simulate connection process with progress
    const progressInterval = setInterval(() => {
      setConnectionProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsConnecting(false);
          setIsConnected(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleContinue = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-10">
        <div className="text-center space-y-6 animate-slide-in-up">
          <h1 className="text-5xl font-bold font-playfair">Connect Your Device</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose how you'd like to connect your Beat Aware health monitoring device for seamless data sync
          </p>
          <div className="h-1 w-24 gradient-primary rounded-full mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Connection Options */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card 
              className={`cursor-pointer transition-all duration-500 border-2 card-hover group animate-fade-in-scale ${
                connectionType === "bluetooth" 
                  ? "border-primary shadow-glow gradient-card" 
                  : "border-border hover:border-primary/50 gradient-card"
              }`}
              onClick={() => !isConnecting && !isConnected && handleConnect("bluetooth")}
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto h-20 w-20 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Bluetooth className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-playfair group-hover:text-primary transition-colors">
                  Bluetooth Connection
                </CardTitle>
                <CardDescription className="text-base">
                  Connect via Bluetooth for seamless monitoring with automatic sync
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center space-x-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Smartphone className="h-4 w-4" />
                    <span>Mobile Friendly</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4" />
                    <span>Low Power</span>
                  </div>
                </div>
                {connectionType === "bluetooth" && isConnecting && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-primary">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span className="font-medium">Connecting...</span>
                    </div>
                    <Progress value={connectionProgress} className="w-full" />
                  </div>
                )}
                {connectionType === "bluetooth" && isConnected && (
                  <div className="flex items-center justify-center space-x-2 text-healthy animate-bounce-in">
                    <Check className="h-5 w-5" />
                    <span className="font-semibold">Connected Successfully</span>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all duration-500 border-2 card-hover group animate-fade-in-scale ${
                connectionType === "wifi" 
                  ? "border-primary shadow-glow gradient-card" 
                  : "border-border hover:border-primary/50 gradient-card"
              }`}
              style={{animationDelay: '0.1s'}}
              onClick={() => !isConnecting && !isConnected && handleConnect("wifi")}
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto h-20 w-20 rounded-3xl bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Wifi className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-playfair group-hover:text-primary transition-colors">
                  Wi-Fi Connection
                </CardTitle>
                <CardDescription className="text-base">
                  Connect via Wi-Fi for continuous monitoring and real-time alerts
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center space-x-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Radio className="h-4 w-4" />
                    <span>Always Online</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4" />
                    <span>Real-time Sync</span>
                  </div>
                </div>
                {connectionType === "wifi" && isConnecting && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-primary">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span className="font-medium">Connecting...</span>
                    </div>
                    <Progress value={connectionProgress} className="w-full" />
                  </div>
                )}
                {connectionType === "wifi" && isConnected && (
                  <div className="flex items-center justify-center space-x-2 text-healthy animate-bounce-in">
                    <Check className="h-5 w-5" />
                    <span className="font-semibold">Connected Successfully</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Device Status */}
          {isConnected && (
            <Card className="gradient-card shadow-glow border-0 animate-bounce-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl font-playfair">
                  <div className="p-2 rounded-full bg-healthy/20">
                    <Check className="h-6 w-6 text-healthy" />
                  </div>
                  <span>Device Connected Successfully</span>
                </CardTitle>
                <CardDescription className="text-lg">
                  Your Beat Aware health monitoring device is now ready and syncing data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200">
                    <Badge variant="secondary" className="mb-2">Heart Rate</Badge>
                    <div className="text-2xl font-bold text-primary">●</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200">
                    <Badge variant="secondary" className="mb-2">SpO2 Sensor</Badge>
                    <div className="text-2xl font-bold text-primary">●</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-200">
                    <Badge variant="secondary" className="mb-2">Temperature</Badge>
                    <div className="text-2xl font-bold text-primary">●</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-200">
                    <Badge variant="secondary" className="mb-2">Blood Pressure</Badge>
                    <div className="text-2xl font-bold text-primary">●</div>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
                    <div className="text-lg font-semibold text-primary mb-2">Ready to Monitor Your Health</div>
                    <div className="text-muted-foreground">All sensors are active and data synchronization is enabled</div>
                  </div>
                  
                  <Button 
                    onClick={handleContinue}
                    size="lg"
                    className="gradient-primary text-white font-semibold px-10 py-6 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                  >
                    Continue to Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeviceSetup;