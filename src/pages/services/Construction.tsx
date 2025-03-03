
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceLayout } from "@/components/ServiceLayout";
import { Building, Hammer, Leaf, HardHat } from "lucide-react";

const constructionServices = [
  {
    title: "Residential Construction",
    description:
      "High-quality residential construction services, from custom homes to multi-unit developments, built to the highest standards.",
  },
  {
    title: "Commercial Construction",
    description:
      "Expert commercial construction services for office buildings, retail spaces, and industrial facilities.",
  },
  {
    title: "Renovations",
    description:
      "Complete renovation services to transform and modernize existing structures while maintaining their integrity.",
  },
  {
    title: "Project Management",
    description:
      "Comprehensive project management services ensuring your construction project is delivered on time and within budget.",
  },
  {
    title: "Civil Engineering",
    description:
      "Professional civil engineering services for infrastructure projects, including roads, bridges, and utilities.",
  },
  {
    title: "Green Building Solutions",
    description:
      "Sustainable construction practices and eco-friendly building solutions for environmentally conscious projects.",
  },
];

const Construction = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <ServiceLayout
        title="Construction Services"
        description="Professional construction services delivering excellence in residential, commercial, and civil engineering projects across South Africa. We build the future with quality and innovation."
        services={constructionServices}
        heroImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1470&auto=format&fit=crop"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Expert Construction Solutions</h2>
          <p className="text-muted-foreground">
            Our construction team delivers exceptional building services throughout South Africa,
            combining local expertise with international standards. From residential developments
            to commercial complexes and infrastructure projects, we handle every aspect of construction
            with precision and professionalism.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1470&auto=format&fit=crop"
              alt="Modern Construction Project in South Africa"
              className="rounded-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=1470&auto=format&fit=crop"
              alt="Infrastructure Development"
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4">
              <div className="p-3 rounded-full bg-primary/10 w-fit">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Urban Development</h3>
              <p className="text-muted-foreground text-sm">
                Transforming urban landscapes with innovative construction solutions
              </p>
            </div>
            
            <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4">
              <div className="p-3 rounded-full bg-primary/10 w-fit">
                <HardHat className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Safety First</h3>
              <p className="text-muted-foreground text-sm">
                Rigorous safety standards that exceed industry regulations
              </p>
            </div>
            
            <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4">
              <div className="p-3 rounded-full bg-primary/10 w-fit">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Sustainable Building</h3>
              <p className="text-muted-foreground text-sm">
                Eco-friendly construction practices for a greener South Africa
              </p>
            </div>
          </div>
        </div>
      </ServiceLayout>

      <Footer />
    </div>
  );
};

export default Construction;
