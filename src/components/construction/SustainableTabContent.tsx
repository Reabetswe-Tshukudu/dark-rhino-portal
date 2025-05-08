
import { Leaf, Hammer, HardHat } from "lucide-react";

export const SustainableTabContent: React.FC = () => {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Leaf className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Sustainable Building Solutions</h3>
        <p className="text-muted-foreground">
          We are committed to environmentally responsible construction practices that reduce environmental 
          impact while creating healthy, efficient, and sustainable buildings.
        </p>
        
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border/50 rounded-lg p-5">
            <h4 className="font-medium mb-3">Green Building Practices</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Energy-efficient design and construction</li>
              <li>Sustainable material sourcing and selection</li>
              <li>Reduced waste construction techniques</li>
              <li>Water conservation systems</li>
              <li>Indoor air quality enhancement</li>
              <li>Life cycle assessment and planning</li>
              <li>Green building certification assistance</li>
            </ul>
          </div>
          
          <div className="bg-card border border-border/50 rounded-lg p-5">
            <h4 className="font-medium mb-3">Renewable Energy Integration</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Solar panel installation</li>
              <li>Solar water heating systems</li>
              <li>Wind energy solutions</li>
              <li>Geothermal heating and cooling</li>
              <li>Energy storage systems</li>
              <li>Smart energy management systems</li>
              <li>Net-zero energy building design</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
          <h4 className="font-medium mb-3">Sustainable Building Benefits</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-3">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-2">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium text-sm">Environmental Impact</p>
              <p className="text-xs text-muted-foreground mt-1">Reduced carbon footprint and resource consumption</p>
            </div>
            <div className="text-center p-3">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-2">
                <Hammer className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium text-sm">Economic Benefits</p>
              <p className="text-xs text-muted-foreground mt-1">Lower operating costs and increased property value</p>
            </div>
            <div className="text-center p-3">
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-2">
                <HardHat className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium text-sm">Health & Comfort</p>
              <p className="text-xs text-muted-foreground mt-1">Improved indoor air quality and occupant wellbeing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
