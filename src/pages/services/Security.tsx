
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceLayout } from "@/components/ServiceLayout";
import { Shield, UserCheck, Camera, Bell } from "lucide-react";

const SecurityPage = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Professional Guards",
      description: "Highly trained security personnel providing 24/7 protection",
    },
    {
      icon: Camera,
      title: "Surveillance Systems",
      description: "State-of-the-art CCTV and monitoring solutions",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Comprehensive security audits and vulnerability analysis",
    },
    {
      icon: Bell,
      title: "Alarm Systems",
      description: "Advanced intrusion detection and alert systems",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582559934353-2e47140e7501?q=80&w=1470&auto=format&fit=crop"
            alt="Security Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        
        <div className="relative container mx-auto px-4 pt-20 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive security services to protect your assets and ensure peace of mind
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <ServiceLayout
        features={features}
        mainImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop"
        mainContent={
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Professional Security Services</h2>
            <p className="text-muted-foreground">
              Our security solutions are designed to provide comprehensive protection for
              businesses, organizations, and individuals. We combine cutting-edge
              technology with professional expertise to deliver reliable security
              services.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1561134643-568b4d64b3e5?q=80&w=1470&auto=format&fit=crop"
                alt="Security Monitoring"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1470&auto=format&fit=crop"
                alt="Security Guard"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        }
      />

      <Footer />
    </div>
  );
};

export default SecurityPage;
