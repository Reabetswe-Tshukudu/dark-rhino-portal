
import { Warehouse, Truck } from "lucide-react";

export const MaterialsSection: React.FC = () => {
  return (
    <div className="mt-12 py-8 border-t border-border/50">
      <h2 className="text-2xl font-bold mb-6">Materials Manufacturing & Supply</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4">
          <div className="p-3 rounded-full bg-primary/10 w-fit">
            <Warehouse className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Brick Manufacturing</h3>
          <p className="text-muted-foreground">
            We manufacture high-quality bricks for all construction needs. Our brick production facility 
            uses modern techniques to create durable, reliable bricks in various types:
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>Standard face bricks</li>
            <li>Engineering bricks for high-strength applications</li>
            <li>Decorative and specialty bricks</li>
            <li>Eco-friendly brick options</li>
          </ul>
          
          <div className="mt-2">
            <h4 className="font-medium mb-2">Brick Types & Applications</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <h5 className="font-medium text-sm">Clay Bricks</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Traditional fired clay bricks known for durability and classic aesthetics
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h5 className="font-medium text-sm">Concrete Bricks</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Versatile and cost-effective options for various construction applications
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h5 className="font-medium text-sm">Paving Bricks</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Specialized bricks for driveways, walkways, and landscaping projects
                </p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <h5 className="font-medium text-sm">Firebricks</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Heat-resistant bricks for fireplaces, ovens, and industrial applications
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4">
          <div className="p-3 rounded-full bg-primary/10 w-fit">
            <Truck className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Building Materials Supply</h3>
          <p className="text-muted-foreground">
            We supply a comprehensive range of construction materials delivered directly to your site:
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>Various grades of sand (building, plaster, river)</li>
            <li>Ready-mix concrete in different strengths</li>
            <li>Specialty concrete mixes for specific applications</li>
            <li>Aggregate materials in various sizes</li>
            <li>Cement and cement products</li>
          </ul>
          
          <div className="mt-4">
            <h4 className="font-medium mb-2">Quality & Logistics</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li><strong>Quality Control:</strong> All materials are tested and certified to meet industry standards</li>
              <li><strong>Custom Mixing:</strong> Special mix designs available for specific project requirements</li>
              <li><strong>Volume Pricing:</strong> Competitive rates for bulk orders</li>
              <li><strong>Timely Delivery:</strong> Reliable delivery scheduling to keep your project on track</li>
              <li><strong>Technical Support:</strong> Expert advice on material selection and application</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-3 bg-muted/50 rounded-lg">
              <h5 className="font-medium text-sm">Concrete Services</h5>
              <ul className="list-disc pl-5 text-xs text-muted-foreground mt-2 space-y-1">
                <li>Ready-mix concrete delivery</li>
                <li>Concrete pumping services</li>
                <li>On-site concrete testing</li>
              </ul>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <h5 className="font-medium text-sm">Aggregate Supply</h5>
              <ul className="list-disc pl-5 text-xs text-muted-foreground mt-2 space-y-1">
                <li>Crushed stone in various sizes</li>
                <li>Gravel and pebbles</li>
                <li>Decorative aggregates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
