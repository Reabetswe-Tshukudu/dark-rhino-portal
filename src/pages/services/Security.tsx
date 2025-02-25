
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
        heroImage="https://images.unsplash.com/photo-1582559934353-2e47140e7501?q=80&w=1470&auto=format&fit=crop"
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
      </ServiceLayout>

      <Footer />
    </div>
  );
};

export default SecurityPage;
