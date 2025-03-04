
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceLayout } from "@/components/ServiceLayout";
import { Shield, UserCheck, Camera, Bell } from "lucide-react";

const SecurityPage = () => {
  const services = [
    {
      title: "Professional Guards",
      description: "Highly trained security personnel providing 24/7 protection",
    },
    {
      title: "Surveillance Systems",
      description: "State-of-the-art CCTV and monitoring solutions",
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive security audits and vulnerability analysis",
    },
    {
      title: "Alarm Systems",
      description: "Advanced intrusion detection and alert systems",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <ServiceLayout 
        title="Security Solutions"
        description="Comprehensive security services to protect your assets and ensure peace of mind"
        services={services}
        heroImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop"
      >
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
              src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=1470&auto=format&fit=crop"
              alt="Security Monitoring System"
              className="rounded-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1557183983-0a5f3ed3df8f?q=80&w=1476&auto=format&fit=crop"
              alt="CCTV Security Cameras"
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4">
              <div className="p-3 rounded-full bg-primary/10 w-fit">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Access Control</h3>
              <p className="text-muted-foreground text-sm">
                Advanced access control systems to manage and monitor entry points
              </p>
            </div>
            
            <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4">
              <div className="p-3 rounded-full bg-primary/10 w-fit">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Video Surveillance</h3>
              <p className="text-muted-foreground text-sm">
                24/7 monitoring with high-definition security cameras
              </p>
            </div>
            
            <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4">
              <div className="p-3 rounded-full bg-primary/10 w-fit">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Alarm Systems</h3>
              <p className="text-muted-foreground text-sm">
                Rapid response alarms with instant notifications
              </p>
            </div>
          </div>
        </div>
      </ServiceLayout>

      <Footer />
    </div>
  );
};

export default SecurityPage;
