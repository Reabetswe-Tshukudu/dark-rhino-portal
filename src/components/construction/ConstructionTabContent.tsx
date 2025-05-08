
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResidentialTabContent } from "./ResidentialTabContent";
import { CommercialTabContent } from "./CommercialTabContent";
import { CivilEngineeringTabContent } from "./CivilEngineeringTabContent";
import { SustainableTabContent } from "./SustainableTabContent";

export const ConstructionTabContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Expert Construction Solutions</h2>
      <p className="text-muted-foreground">
        Our construction team delivers exceptional building services throughout South Africa,
        combining local expertise with international standards. From residential developments
        to commercial complexes and infrastructure projects, we handle every aspect of construction
        with precision and professionalism.
      </p>
      
      <Tabs defaultValue="residential" className="w-full mt-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
          <TabsTrigger value="residential">Residential</TabsTrigger>
          <TabsTrigger value="commercial">Commercial</TabsTrigger>
          <TabsTrigger value="civil">Civil Engineering</TabsTrigger>
          <TabsTrigger value="green">Sustainable</TabsTrigger>
        </TabsList>
        
        <TabsContent value="residential" className="mt-6 space-y-4">
          <ResidentialTabContent />
        </TabsContent>
        
        <TabsContent value="commercial" className="mt-6 space-y-4">
          <CommercialTabContent />
        </TabsContent>
        
        <TabsContent value="civil" className="mt-6 space-y-4">
          <CivilEngineeringTabContent />
        </TabsContent>
        
        <TabsContent value="green" className="mt-6 space-y-4">
          <SustainableTabContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};
