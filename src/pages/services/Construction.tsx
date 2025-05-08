
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ConstructionHero } from "@/components/construction/ConstructionHero";
import { ConstructionTabContent } from "@/components/construction/ConstructionTabContent";
import { ConstructionGallery } from "@/components/construction/ConstructionGallery";
import { ConstructionFeatures } from "@/components/construction/ConstructionFeatures";
import { MaterialsSection } from "@/components/construction/MaterialsSection";

const Construction = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <ConstructionHero>
        <div className="space-y-6">
          <ConstructionTabContent />
          <ConstructionGallery />
          <ConstructionFeatures />
          <MaterialsSection />
        </div>
      </ConstructionHero>

      <Footer />
    </div>
  );
};

export default Construction;
