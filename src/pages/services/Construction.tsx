
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceLayout } from "@/components/ServiceLayout";

const constructionServices = [
  {
    title: "Residential Construction",
    description: "Custom home building, renovations, and housing developments with quality craftsmanship."
  },
  {
    title: "Commercial Construction",
    description: "Office buildings, retail spaces, and industrial facilities built to your specifications."
  },
  {
    title: "Civil Engineering",
    description: "Roads, bridges, and infrastructure projects with a focus on durability and safety."
  },
  {
    title: "Sustainable Building",
    description: "Eco-friendly construction using renewable materials and energy-efficient designs."
  }
];

const constructionTabs = [
  { name: "Cybersecurity", path: "/services/security" },
  { name: "Network", path: "/services/network" },
  { name: "Software", path: "/services/ict" },
  { name: "Cloud", path: "/services/cloud" },
];

const Construction = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <ServiceLayout
        title="Construction Services"
        description="Professional construction solutions for residential, commercial, and civil engineering projects."
        services={constructionServices}
        heroImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop"
        tabs={constructionTabs}
      >
        <div className="space-y-12">
          {/* Content sections */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Our Construction Expertise</h2>
            <p className="mb-6 text-muted-foreground">
              With decades of experience in the construction industry, we deliver high-quality projects on time and within budget. Our team of experts ensures that every project meets the highest standards of craftsmanship and safety.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?q=80&w=1470&auto=format&fit=crop"
                alt="Housing Development in South Africa"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?q=80&w=1470&auto=format&fit=crop"
                alt="Construction Equipment in South Africa"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Quality Materials</h2>
            <p className="mb-4 text-muted-foreground">
              We source only the highest quality materials for all our construction projects, ensuring durability and longevity for every structure we build.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-secondary rounded-lg text-center">
                <h3 className="font-medium">Concrete</h3>
              </div>
              <div className="p-4 bg-secondary rounded-lg text-center">
                <h3 className="font-medium">Steel</h3>
              </div>
              <div className="p-4 bg-secondary rounded-lg text-center">
                <h3 className="font-medium">Timber</h3>
              </div>
              <div className="p-4 bg-secondary rounded-lg text-center">
                <h3 className="font-medium">Glass</h3>
              </div>
            </div>
          </section>
        </div>
      </ServiceLayout>

      <Footer />
    </div>
  );
};

export default Construction;
