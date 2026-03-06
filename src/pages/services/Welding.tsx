
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceLayout } from "@/components/ServiceLayout";

const weldingServices = [
  {
    title: "Structural Steel Fabrication",
    description: "Custom steel structures, beams, columns, and frameworks for commercial and industrial applications."
  },
  {
    title: "MIG & TIG Welding",
    description: "Precision welding services using MIG and TIG techniques for a wide range of metals and applications."
  },
  {
    title: "Custom Metal Work",
    description: "Bespoke gates, railings, staircases, balustrades, and decorative metalwork to your specifications."
  },
  {
    title: "Industrial Maintenance & Repairs",
    description: "On-site welding repairs, maintenance, and refurbishment of industrial equipment and structures."
  }
];

const Welding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <ServiceLayout
        title="Welding & Steel Fabrication"
        description="Professional welding and steel fabrication services for structural, industrial, and custom metalwork projects."
        services={weldingServices}
        heroImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470&auto=format&fit=crop"
      >
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Welding & Fabrication Expertise</h2>
            <p className="mb-6 text-muted-foreground">
              Our certified welders and fabricators deliver precision metalwork for projects of all scales. From structural steelwork for buildings and infrastructure to custom decorative pieces, we combine skilled craftsmanship with modern techniques to ensure strength, durability, and quality finishes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470&auto=format&fit=crop"
                alt="Steel welding in progress"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1470&auto=format&fit=crop"
                alt="Steel fabrication workshop"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Capabilities</h2>
            <p className="mb-4 text-muted-foreground">
              We work with a wide range of metals and techniques to meet your project requirements.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-secondary rounded-lg text-center">
                <h3 className="font-medium">Mild Steel</h3>
              </div>
              <div className="p-4 bg-secondary rounded-lg text-center">
                <h3 className="font-medium">Stainless Steel</h3>
              </div>
              <div className="p-4 bg-secondary rounded-lg text-center">
                <h3 className="font-medium">Aluminium</h3>
              </div>
              <div className="p-4 bg-secondary rounded-lg text-center">
                <h3 className="font-medium">Cast Iron</h3>
              </div>
            </div>
          </section>
        </div>
      </ServiceLayout>

      <Footer />
    </div>
  );
};

export default Welding;
