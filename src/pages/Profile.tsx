import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Phone, Mail, MapPin, Heart, Shield, Plus, Edit3 } from "lucide-react";

interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  email: string;
}

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, City, State 12345",
    dateOfBirth: "1990-01-15",
    bloodType: "O+",
    allergies: "Penicillin, Shellfish",
    medicalConditions: "None"
  });

  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>([
    {
      id: "1",
      name: "Jane Doe",
      relationship: "Spouse",
      phone: "+1 (555) 234-5678",
      email: "jane.doe@email.com"
    },
    {
      id: "2",
      name: "Robert Doe",
      relationship: "Father",
      phone: "+1 (555) 345-6789",
      email: "robert.doe@email.com"
    }
  ]);

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const handleAddEmergencyContact = () => {
    console.log("Add emergency contact");
  };

  return (
    <div className="min-h-screen bg-background p-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold font-sans">Profile Settings</h1>
          <p className="text-muted-foreground font-sans">
            Manage your personal information and emergency contacts
          </p>
        </div>

        {/* Profile Information */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="" alt="Profile" />
                  <AvatarFallback className="text-lg font-sans">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="font-sans">Personal Information</CardTitle>
                  <CardDescription className="font-sans">Your basic profile details</CardDescription>
                </div>
              </div>
              <Button
                onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                className={`font-sans ${isEditing ? "gradient-primary text-white" : ""}`}
                variant={isEditing ? "default" : "outline"}
              >
                <Edit3 className="h-4 w-4 mr-2" />
                {isEditing ? "Save Changes" : "Edit Profile"}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={profile.dateOfBirth}
                  onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={profile.address}
                onChange={(e) => setProfile({...profile, address: e.target.value})}
                disabled={!isEditing}
              />
            </div>
          </CardContent>
        </Card>

        {/* Medical Information */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 font-sans">
              <Heart className="h-5 w-5 text-primary" />
              <span>Medical Information</span>
            </CardTitle>
            <CardDescription className="font-sans">Important health details for emergency situations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bloodType">Blood Type</Label>
                <Input
                  id="bloodType"
                  value={profile.bloodType}
                  onChange={(e) => setProfile({...profile, bloodType: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="allergies">Allergies</Label>
                <Input
                  id="allergies"
                  value={profile.allergies}
                  onChange={(e) => setProfile({...profile, allergies: e.target.value})}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="conditions">Medical Conditions</Label>
              <Input
                id="conditions"
                value={profile.medicalConditions}
                onChange={(e) => setProfile({...profile, medicalConditions: e.target.value})}
                disabled={!isEditing}
              />
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2 font-sans">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Emergency Contacts</span>
                </CardTitle>
                <CardDescription className="font-sans">People to contact in case of emergency</CardDescription>
              </div>
              <Button onClick={handleAddEmergencyContact} variant="outline" className="font-sans">
                <Plus className="h-4 w-4 mr-2" />
                Add Contact
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 font-sans">
            {emergencyContacts.map((contact, index) => (
              <div key={contact.id}>
                {index > 0 && <Separator className="my-4" />}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="font-sans">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium font-sans">{contact.name}</h4>
                        <Badge variant="secondary" className="font-sans">{contact.relationship}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-12">
                    <div className="flex items-center space-x-2 text-sm font-sans">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm font-sans">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{contact.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Device Information */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="font-sans">Connected Devices</CardTitle>
            <CardDescription className="font-sans">Health monitoring devices linked to your account</CardDescription>
          </CardHeader>
          <CardContent className="font-sans">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-healthy rounded-full"></div>
                <div>
                  <p className="font-medium font-sans">BeatAware Health Monitor Pro</p>
                  <p className="text-sm text-muted-foreground font-sans">Connected via Bluetooth</p>
                </div>
              </div>
              <Badge className="bg-healthy text-healthy-foreground font-sans">Active</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
