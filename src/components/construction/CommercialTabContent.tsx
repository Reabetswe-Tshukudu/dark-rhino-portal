
import { Building } from "lucide-react";

export const CommercialTabContent: React.FC = () => {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Building className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Commercial Construction</h3>
        <p className="text-muted-foreground">
          We deliver high-quality commercial construction projects that meet the unique needs of businesses 
          across various industries. Our commercial construction services combine functionality, efficiency, 
          and aesthetic appeal to create spaces that enhance your business operations.
        </p>
        
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border/50 rounded-lg p-5">
            <h4 className="font-medium mb-3">Office Buildings</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Corporate headquarters construction</li>
              <li>Multi-tenant office buildings</li>
              <li>Professional office spaces</li>
              <li>Modern workspace environments</li>
              <li>Sustainable office design and construction</li>
              <li>Office renovations and upgrades</li>
            </ul>
          </div>
          
          <div className="bg-card border border-border/50 rounded-lg p-5">
            <h4 className="font-medium mb-3">Retail & Hospitality</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Shopping centers and malls</li>
              <li>Standalone retail stores</li>
              <li>Restaurants and cafes</li>
              <li>Hotels and lodging facilities</li>
              <li>Entertainment venues</li>
              <li>Mixed-use retail developments</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-card border border-border/50 rounded-lg p-5">
          <h4 className="font-medium mb-3">Industrial Facilities</h4>
          <p className="text-muted-foreground mb-4">
            We build industrial facilities designed for maximum operational efficiency, productivity, 
            and compliance with industry regulations.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h5 className="font-medium mb-2">Manufacturing</h5>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Production facilities</li>
                <li>Assembly plants</li>
                <li>Clean room environments</li>
                <li>Factory floor layouts</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Warehousing & Logistics</h5>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Warehouse construction</li>
                <li>Distribution centers</li>
                <li>Cold storage facilities</li>
                <li>Logistics hubs</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Specialized Facilities</h5>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Data centers</li>
                <li>Research laboratories</li>
                <li>Food processing plants</li>
                <li>Pharmaceutical facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
