import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Navigation, Hospital } from "lucide-react";

interface Hospital {
  id: string;
  name: string;
  distance: string;
  time: string;
  phone: string;
  specialty: string;
  rating: number;
}

const Location = () => {
  const [currentLocation, setCurrentLocation] = useState<string>("Getting location...");
  const [nearbyHospitals, setNearbyHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    // Simulate getting user location
    setTimeout(() => {
      setCurrentLocation("123 Main Street, Downtown, City 12345");
      setNearbyHospitals([
        {
          id: "1",
          name: "City General Hospital",
          distance: "0.8 miles",
          time: "3 mins",
          phone: "+1 (555) 123-4567",
          specialty: "Emergency Care",
          rating: 4.8
        },
        {
          id: "2",
          name: "Memorial Medical Center",
          distance: "1.2 miles",
          time: "5 mins",
          phone: "+1 (555) 234-5678",
          specialty: "Cardiac Care",
          rating: 4.9
        },
        {
          id: "3",
          name: "St. Mary's Healthcare",
          distance: "1.5 miles",
          time: "6 mins",
          phone: "+1 (555) 345-6789",
          specialty: "Trauma Center",
          rating: 4.7
        },
        {
          id: "4",
          name: "Riverside Community Hospital",
          distance: "2.1 miles",
          time: "8 mins",
          phone: "+1 (555) 456-7890",
          specialty: "General Medicine",
          rating: 4.6
        }
      ]);
    }, 1000);
  }, []);

  const handleEmergencyCall = () => {
    // In a real app, this would call emergency services
    window.open("tel:911");
  };

  const handleCallHospital = (phone: string) => {
    window.open(`tel:${phone}`);
  };

  const handleGetDirections = (hospitalName: string) => {
    // In a real app, this would open maps with directions
    const query = encodeURIComponent(hospitalName);
    window.open(`https://www.google.com/maps/search/${query}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Emergency Locations</h1>
          <p className="text-muted-foreground">
            Find nearby hospitals and emergency services
          </p>
        </div>

        {/* Emergency Action */}
        <Card className="gradient-card shadow-card border-critical/20">
          <CardHeader>
            <CardTitle className="text-critical">Emergency Services</CardTitle>
            <CardDescription>In case of medical emergency</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleEmergencyCall}
              className="w-full bg-critical hover:bg-critical/90 text-critical-foreground"
              size="lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call 911 Emergency
            </Button>
          </CardContent>
        </Card>

        {/* Current Location */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Current Location</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">{currentLocation}</p>
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle>Interactive Map</CardTitle>
            <CardDescription>Your location and nearby hospitals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 mx-auto text-primary" />
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
                <p className="text-sm text-muted-foreground">
                  This would integrate with Mapbox or Google Maps to show real-time locations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nearby Hospitals */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Nearby Hospitals</h2>
          <div className="grid gap-4">
            {nearbyHospitals.map((hospital) => (
              <Card key={hospital.id} className="gradient-card shadow-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="flex items-center space-x-2">
                        <Hospital className="h-5 w-5 text-primary" />
                        <span>{hospital.name}</span>
                      </CardTitle>
                      <CardDescription>{hospital.specialty}</CardDescription>
                    </div>
                    <Badge className="bg-healthy text-healthy-foreground">
                      ★ {hospital.rating}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Navigation className="h-4 w-4 text-muted-foreground" />
                      <span>{hospital.distance}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{hospital.time} drive</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => handleCallHospital(hospital.phone)}
                      className="flex-1"
                      variant="outline"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button 
                      onClick={() => handleGetDirections(hospital.name)}
                      className="flex-1 gradient-primary text-white"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;