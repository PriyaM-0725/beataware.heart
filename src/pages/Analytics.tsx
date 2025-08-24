import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";
import { Heart, Activity, Thermometer, Droplets } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Analytics = () => {
  // timeline states
  const [heartRateTimeline, setHeartRateTimeline] = useState("24h");
  const [bloodPressureTimeline, setBloodPressureTimeline] = useState("7d");
  const [temperatureTimeline, setTemperatureTimeline] = useState("24h");
  const [oxygenTimeline, setOxygenTimeline] = useState("7d");

  // Sample data (you can replace with real filtered datasets)
  const heartRateData: Record<string, any[]> = {
    "24h": [
      { time: "00:00", value: 65 },
      { time: "04:00", value: 62 },
      { time: "08:00", value: 72 },
      { time: "12:00", value: 85 },
      { time: "16:00", value: 78 },
      { time: "20:00", value: 70 },
      { time: "24:00", value: 68 }
    ],
    "7d": [
      { time: "Mon", value: 72 },
      { time: "Tue", value: 70 },
      { time: "Wed", value: 75 },
      { time: "Thu", value: 73 },
      { time: "Fri", value: 74 },
      { time: "Sat", value: 71 },
      { time: "Sun", value: 72 }
    ],
    "30d": Array.from({ length: 30 }, (_, i) => ({ time: `Day ${i + 1}`, value: 65 + Math.floor(Math.random() * 10) }))
  };

  const bloodPressureData: Record<string, any[]> = {
    "7d": [
      { time: "Mon", systolic: 120, diastolic: 80 },
      { time: "Tue", systolic: 118, diastolic: 78 },
      { time: "Wed", systolic: 122, diastolic: 82 },
      { time: "Thu", systolic: 125, diastolic: 85 },
      { time: "Fri", systolic: 119, diastolic: 79 },
      { time: "Sat", systolic: 117, diastolic: 77 },
      { time: "Sun", systolic: 121, diastolic: 81 }
    ],
    "30d": Array.from({ length: 30 }, (_, i) => ({
      time: `Day ${i + 1}`,
      systolic: 115 + Math.floor(Math.random() * 15),
      diastolic: 75 + Math.floor(Math.random() * 10)
    }))
  };

  const temperatureData: Record<string, any[]> = {
    "24h": [
      { time: "6 AM", value: 97.8 },
      { time: "12 PM", value: 98.6 },
      { time: "6 PM", value: 99.1 },
      { time: "12 AM", value: 98.2 }
    ],
    "7d": [
      { time: "Mon", value: 98.6 },
      { time: "Tue", value: 98.4 },
      { time: "Wed", value: 98.9 },
      { time: "Thu", value: 99.0 },
      { time: "Fri", value: 98.7 },
      { time: "Sat", value: 98.5 },
      { time: "Sun", value: 98.6 }
    ]
  };

  const oxygenData: Record<string, any[]> = {
    "7d": [
      { day: "Mon", value: 98 },
      { day: "Tue", value: 97 },
      { day: "Wed", value: 98 },
      { day: "Thu", value: 99 },
      { day: "Fri", value: 98 },
      { day: "Sat", value: 97 },
      { day: "Sun", value: 98 }
    ],
    "30d": Array.from({ length: 30 }, (_, i) => ({
      day: `Day ${i + 1}`,
      value: 96 + Math.floor(Math.random() * 4)
    }))
  };

  return (
    <div className="min-h-screen bg-background p-4 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold font-sans">Health Analytics</h1>
          <p className="text-muted-foreground font-sans">
            Comprehensive analysis of your health trends and insights
          </p>
        </div>

        {/* Charts with dropdown filters */}
        <Tabs defaultValue="heartrate" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 font-sans">
            <TabsTrigger value="heartrate">Heart Rate</TabsTrigger>
            <TabsTrigger value="bloodpressure">Blood Pressure</TabsTrigger>
            <TabsTrigger value="temperature">Temperature</TabsTrigger>
            <TabsTrigger value="oxygen">Blood Oxygen</TabsTrigger>
          </TabsList>

          {/* Heart Rate */}
          <TabsContent value="heartrate">
            <Card className="gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-sans">Heart Rate Trends</CardTitle>
                  <CardDescription className="font-sans">Heart rate monitoring</CardDescription>
                </div>
                <Select value={heartRateTimeline} onValueChange={setHeartRateTimeline}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24h">24h</SelectItem>
                    <SelectItem value="7d">7d</SelectItem>
                    <SelectItem value="30d">30d</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={heartRateData[heartRateTimeline]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blood Pressure */}
          <TabsContent value="bloodpressure">
            <Card className="gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-sans">Blood Pressure History</CardTitle>
                  <CardDescription className="font-sans">Blood pressure readings</CardDescription>
                </div>
                <Select value={bloodPressureTimeline} onValueChange={setBloodPressureTimeline}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">7d</SelectItem>
                    <SelectItem value="30d">30d</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={bloodPressureData[bloodPressureTimeline]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="systolic" stroke="hsl(var(--primary))" name="Systolic" />
                    <Line type="monotone" dataKey="diastolic" stroke="hsl(var(--accent))" name="Diastolic" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Temperature */}
          <TabsContent value="temperature">
            <Card className="gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-sans">Temperature Variations</CardTitle>
                  <CardDescription className="font-sans">Temperature patterns</CardDescription>
                </div>
                <Select value={temperatureTimeline} onValueChange={setTemperatureTimeline}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24h">24h</SelectItem>
                    <SelectItem value="7d">7d</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={temperatureData[temperatureTimeline]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={["97", "100"]} />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="hsl(var(--warning))" fill="hsl(var(--warning))" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Blood Oxygen */}
          <TabsContent value="oxygen">
            <Card className="gradient-card shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-sans">Blood Oxygen Levels</CardTitle>
                  <CardDescription className="font-sans">SpO2 readings</CardDescription>
                </div>
                <Select value={oxygenTimeline} onValueChange={setOxygenTimeline}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">7d</SelectItem>
                    <SelectItem value="30d">30d</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={oxygenData[oxygenTimeline]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis domain={[95, 100]} />
                    <Tooltip />
                    <Bar dataKey="value" fill="hsl(var(--healthy))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Health Insights */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="font-sans">Health Insights</CardTitle>
            <CardDescription className="font-sans">AI-powered analysis of your health data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <Badge className="bg-healthy text-healthy-foreground">Positive</Badge>
              <div>
                <p className="font-medium font-sans">Excellent cardiovascular health</p>
                <p className="text-sm text-muted-foreground font-sans">Your heart rate variability indicates good cardiovascular fitness. Keep up the regular exercise routine.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge className="bg-primary text-primary-foreground">Insight</Badge>
              <div>
                <p className="font-medium font-sans">Sleep quality correlation</p>
                <p className="text-sm text-muted-foreground font-sans">Better sleep duration correlates with lower resting heart rate. Aim for 7-8 hours nightly.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge className="bg-warning text-warning-foreground">Attention</Badge>
              <div>
                <p className="font-medium font-sans">Stress level monitoring</p>
                <p className="text-sm text-muted-foreground font-sans">Slight increase in stress indicators during afternoon hours. Consider brief relaxation breaks.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
