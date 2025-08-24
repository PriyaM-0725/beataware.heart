import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bluetooth, Wifi, Check, Loader2, Smartphone, Radio, Zap } from "lucide-react";

const smartWatches = [
  "Apple Watch Series 9",
  "Samsung Galaxy Watch 6",
  "Fitbit Versa 4",
  "Garmin Venu 3",
  "Withings ScanWatch"
];

const DeviceSetup = () => {
  const [connectionType, setConnectionType] = useState<"bluetooth" | "wifi" | null>(null);
  const [selectedWatch, setSelectedWatch] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionProgress, setConnectionProgress] = useState(0);
  const navigate = useNavigate();

  const handleConnect = (type: "bluetooth" | "wifi") => {
    setConnectionType(type);
    setSelectedWatch(null);
  };

  const handleSelectWatch = (watch: string) => {
    setSelectedWatch(watch);
    setIsConnecting(true);
    setConnectionProgress(0);

    // Simulate connection process
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
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl space-y-10">
        <div className="text-center space-y-6 animate-slide-in-up">
          <h1 className="text-5xl font-bold">Connect Your Device</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose how you'd like to connect your Beat Aware health monitoring device for seamless data sync
          </p>
          <div className="h-1 w-24 gradient-primary rounded-full mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Connection Options */}
          <div className="grid md:grid-cols-2 gap-8">
            {(["bluetooth", "wifi"] as const).map((type, idx) => {
              const isTypeSelected = connectionType === type;
              const IconComponent = type === "bluetooth" ? Bluetooth : Wifi;
              const bgGradient = type === "bluetooth" ? "from-blue-500 to-purple-500" : "from-green-500 to-blue-500";

              return (
                <Card
                  key={type}
                  className={`cursor-pointer transition-all duration-500 border-2 card-hover group animate-fade-in-scale ${
                    isTypeSelected ? "border-primary shadow-glow gradient-card" : "border-border hover:border-primary/50 gradient-card"
                  }`}
                  onClick={() => !isConnecting && !isConnected && handleConnect(type)}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-6">
                    <div className={`mx-auto h-20 w-20 rounded-3xl bg-gradient-to-r ${bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-playfair group-hover:text-primary transition-colors">
                      {type === "bluetooth" ? "Bluetooth Connection" : "Wi-Fi Connection"}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {type === "bluetooth"
                        ? "Connect via Bluetooth for seamless monitoring with automatic sync"
                        : "Connect via Wi-Fi for continuous monitoring and real-time alerts"}
                    </CardDescription>
                  </CardHeader>

                  {isTypeSelected && !isConnecting && !isConnected && (
                    <CardContent className="text-center space-y-4">
                      <div className="text-sm text-muted-foreground mb-2">Select a Smart Watch</div>
                      <div className="flex flex-wrap justify-center gap-3">
                        {smartWatches.map((watch) => (
                          <Button
                            key={watch}
                            variant={selectedWatch === watch ? "default" : "outline"}
                            onClick={() => handleSelectWatch(watch)}
                            className="px-4 py-2"
                          >
                            {watch}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  )}

                  {isTypeSelected && isConnecting && (
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-center space-x-2 text-primary">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span className="font-medium">Connecting {selectedWatch}...</span>
                      </div>
                      <Progress value={connectionProgress} className="w-full" />
                    </CardContent>
                  )}

                  {isTypeSelected && isConnected && (
                    <CardContent className="flex items-center justify-center space-x-2 text-healthy animate-bounce-in">
                      <Check className="h-5 w-5" />
                      <span className="font-semibold">Connected Successfully</span>
                    </CardContent>
                  )}
                </Card>
              );
            })}
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
                  Your Beat Aware health monitoring device ({selectedWatch}) is now ready and syncing data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button
                  onClick={handleContinue}
                  size="lg"
                  className="gradient-primary text-white font-semibold px-10 py-6 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  Continue to Dashboard
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeviceSetup;
