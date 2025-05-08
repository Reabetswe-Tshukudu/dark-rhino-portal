
import { Building, HardHat, Leaf } from "lucide-react";

export const ConstructionFeatures: React.FC = () => {
  return (
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
  );
};
