import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";
import { TrendingUp, TrendingDown, Heart, Activity, Thermometer, Droplets } from "lucide-react";

const Analytics = () => {
  // Sample data for charts
  const heartRateData = [
    { time: "00:00", value: 65 },
    { time: "04:00", value: 62 },
    { time: "08:00", value: 72 },
    { time: "12:00", value: 85 },
    { time: "16:00", value: 78 },
    { time: "20:00", value: 70 },
    { time: "24:00", value: 68 }
  ];

  const bloodPressureData = [
    { time: "Mon", systolic: 120, diastolic: 80 },
    { time: "Tue", systolic: 118, diastolic: 78 },
    { time: "Wed", systolic: 122, diastolic: 82 },
    { time: "Thu", systolic: 125, diastolic: 85 },
    { time: "Fri", systolic: 119, diastolic: 79 },
    { time: "Sat", systolic: 117, diastolic: 77 },
    { time: "Sun", systolic: 121, diastolic: 81 }
  ];

  const temperatureData = [
    { time: "6 AM", value: 97.8 },
    { time: "12 PM", value: 98.6 },
    { time: "6 PM", value: 99.1 },
    { time: "12 AM", value: 98.2 }
  ];

  const oxygenData = [
    { day: "Mon", value: 98 },
    { day: "Tue", value: 97 },
    { day: "Wed", value: 98 },
    { day: "Thu", value: 99 },
    { day: "Fri", value: 98 },
    { day: "Sat", value: 97 },
    { day: "Sun", value: 98 }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Health Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive analysis of your health trends and insights
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Heart Rate</CardTitle>
              <Heart className="h-4 w-4 text-primary animate-pulse-heart" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72 bpm</div>
              <div className="flex items-center space-x-2 text-xs">
                <TrendingDown className="h-3 w-3 text-healthy" />
                <span className="text-healthy">2% lower than last week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blood Pressure</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">120/80</div>
              <div className="flex items-center space-x-2 text-xs">
                <TrendingUp className="h-3 w-3 text-healthy" />
                <span className="text-healthy">Optimal range</span>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Body Temperature</CardTitle>
              <Thermometer className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.6°F</div>
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-healthy">Normal range</span>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blood Oxygen</CardTitle>
              <Droplets className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-healthy">Excellent</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <Tabs defaultValue="heartrate" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="heartrate">Heart Rate</TabsTrigger>
            <TabsTrigger value="bloodpressure">Blood Pressure</TabsTrigger>
            <TabsTrigger value="temperature">Temperature</TabsTrigger>
            <TabsTrigger value="oxygen">Blood Oxygen</TabsTrigger>
          </TabsList>

          <TabsContent value="heartrate">
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Heart Rate Trends</CardTitle>
                <CardDescription>24-hour heart rate monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={heartRateData}>
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

          <TabsContent value="bloodpressure">
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Blood Pressure History</CardTitle>
                <CardDescription>Weekly blood pressure readings</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={bloodPressureData}>
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

          <TabsContent value="temperature">
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Temperature Variations</CardTitle>
                <CardDescription>Daily temperature patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={temperatureData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={['97', '100']} />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="hsl(var(--warning))" fill="hsl(var(--warning))" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="oxygen">
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Blood Oxygen Levels</CardTitle>
                <CardDescription>Weekly SpO2 readings</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={oxygenData}>
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
            <CardTitle>Health Insights</CardTitle>
            <CardDescription>AI-powered analysis of your health data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <Badge className="bg-healthy text-healthy-foreground">Positive</Badge>
              <div>
                <p className="font-medium">Excellent cardiovascular health</p>
                <p className="text-sm text-muted-foreground">Your heart rate variability indicates good cardiovascular fitness. Keep up the regular exercise routine.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge className="bg-primary text-primary-foreground">Insight</Badge>
              <div>
                <p className="font-medium">Sleep quality correlation</p>
                <p className="text-sm text-muted-foreground">Better sleep duration correlates with lower resting heart rate. Aim for 7-8 hours nightly.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Badge className="bg-warning text-warning-foreground">Attention</Badge>
              <div>
                <p className="font-medium">Stress level monitoring</p>
                <p className="text-sm text-muted-foreground">Slight increase in stress indicators during afternoon hours. Consider brief relaxation breaks.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;