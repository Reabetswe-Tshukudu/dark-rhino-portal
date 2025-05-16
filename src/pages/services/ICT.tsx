
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceLayout } from "@/components/ServiceLayout";

const ictServices = [
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our comprehensive security solutions.",
  },
  {
    title: "Network Infrastructure",
    description: "Design and implementation of robust and scalable network solutions.",
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your specific business needs.",
  },
  {
    title: "Cloud Services",
    description: "Harness the power of cloud technology for your business operations.",
  },
];

const ictTabs = [
  { name: "Cybersecurity", path: "/services/security" },
  { name: "Network", path: "/services/network" },
  { name: "Software", path: "/services/ict" },
  { name: "Cloud", path: "/services/construction" },
];

const ICT = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <ServiceLayout
        title="ICT Solutions"
        description="Advanced technology solutions to drive your business forward."
        services={ictServices}
        heroImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop"
        tabs={ictTabs}
      >
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Innovative Technology Solutions</h2>
            <p className="mb-6 text-muted-foreground">
              Our ICT solutions are designed to enhance your business operations and give you a competitive edge in today's digital landscape.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 border border-primary/50">
                <h3 className="text-xl font-semibold mb-4">Enterprise Systems</h3>
                <p className="text-muted-foreground">
                  Comprehensive enterprise solutions that streamline operations and enhance productivity.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/50">
                <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
                <p className="text-muted-foreground">
                  Turn your data into actionable insights with our advanced analytics solutions.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/50">
                <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
                <p className="text-muted-foreground">
                  Navigate your digital transformation journey with expert guidance and implementation.
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

export default ICT;
