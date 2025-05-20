
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceLayout } from "@/components/ServiceLayout";

const securityServices = [
  {
    title: "Physical Security",
    description: "Comprehensive protection for your property and assets with trained security personnel.",
  },
  {
    title: "Electronic Security",
    description: "Advanced surveillance and alarm systems to monitor and protect your premises.",
  },
  {
    title: "Risk Assessment",
    description: "Thorough analysis of potential security risks and vulnerabilities with tailored solutions.",
  },
  {
    title: "Executive Protection",
    description: "Specialized security services for high-profile individuals and executives.",
  },
];

const securityTabs = [
  { name: "Guards", path: "/services/security/guards" },
  { name: "CCTV", path: "/services/security/cctv" },
  { name: "Access Control", path: "/services/security/access" },
  { name: "Alarms", path: "/services/security/alarms" },
];

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <ServiceLayout
        title="Security Solutions"
        description="Comprehensive security services to protect your assets and people."
        services={securityServices}
        heroImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop"
        tabs={securityTabs}
      >
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Professional Security Services</h2>
            <p className="mb-6 text-muted-foreground">
              Our security solutions are designed to provide peace of mind and ensure the safety of your property, assets, and personnel.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border border-primary/50">
                <h3 className="text-xl font-semibold mb-4">24/7 Monitoring</h3>
                <p className="text-muted-foreground">
                  Round-the-clock surveillance and monitoring to protect your premises at all times.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/50">
                <h3 className="text-xl font-semibold mb-4">Trained Personnel</h3>
                <p className="text-muted-foreground">
                  Our security staff undergo rigorous training to handle various security situations effectively.
                </p>
              </div>
            </div>
          </section>
        </div>
      </ServiceLayout>

      <Footer />
    </div>
  );
};

export default Security;
