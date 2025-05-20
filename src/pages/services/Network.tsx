
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceLayout } from "@/components/ServiceLayout";
import { Wifi, Shield, Server, Network as NetworkIcon } from "lucide-react";

const networkServices = [
  {
    title: "Network Infrastructure",
    description: "Design and implementation of robust network infrastructure solutions for businesses of all sizes.",
  },
  {
    title: "Network Security",
    description: "Comprehensive security solutions to protect your network from internal and external threats.",
  },
  {
    title: "Wireless Solutions",
    description: "Enterprise-grade wireless network deployment for seamless connectivity across your organization.",
  },
  {
    title: "Network Monitoring",
    description: "24/7 network monitoring and management to ensure optimal performance and quick issue resolution.",
  },
];

const networkTabs = [
  { name: "Infrastructure", path: "/services/network/infrastructure" },
  { name: "Wireless", path: "/services/network/wireless" },
  { name: "WAN/LAN", path: "/services/network/wan-lan" },
  { name: "Monitoring", path: "/services/network/monitoring" },
];

const Network = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <ServiceLayout
        title="Network Solutions"
        description="Enterprise-grade networking solutions designed for reliability, security, and performance."
        services={networkServices}
        heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1470&auto=format&fit=crop"
        tabs={networkTabs}
      >
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Enterprise Network Solutions</h2>
            <p className="mb-6 text-muted-foreground">
              Our network solutions are designed to provide reliable, secure, and high-performance connectivity for your business. 
              We specialize in designing, implementing, and maintaining network infrastructure that meets your specific needs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border border-primary/50 flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Wireless Networks</h3>
                  <p className="text-muted-foreground">
                    Enterprise-grade wireless solutions with high availability, security, and coverage for your entire organization.
                  </p>
                </div>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/50 flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Network Security</h3>
                  <p className="text-muted-foreground">
                    Protect your network with advanced security solutions, including firewalls, intrusion detection, and VPNs.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border border-primary/50 flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Server Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Robust server solutions designed for high availability, scalability, and performance to support your business operations.
                  </p>
                </div>
              </div>
              <div className="bg-card rounded-lg p-6 border border-primary/50 flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <NetworkIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Network Infrastructure</h3>
                  <p className="text-muted-foreground">
                    End-to-end network infrastructure solutions, including cabling, switches, routers, and network management systems.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ServiceLayout>

      <Footer />
    </div>
  );
};

export default Network;
