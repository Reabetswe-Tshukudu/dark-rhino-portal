
import { Building } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ResidentialTabContent: React.FC = () => {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Building className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Residential Construction</h3>
        <p className="text-muted-foreground">
          We specialize in building exceptional residential properties that meet the highest standards of
          quality, functionality, and design. From custom homes to multi-unit developments, our residential
          construction services cover all aspects of home building.
        </p>
        
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Custom Home Construction</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-3">
                  We build bespoke homes tailored to your specific requirements, preferences, and lifestyle.
                  Our custom home construction process ensures that every detail reflects your vision while
                  adhering to the highest quality standards.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Personalized design consultation</li>
                  <li>Architectural planning and blueprint development</li>
                  <li>Premium material selection</li>
                  <li>Energy-efficient building systems</li>
                  <li>High-end finishes and fixtures</li>
                  <li>Smart home integration options</li>
                  <li>Landscaping and exterior features</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Multi-Family Residential Projects</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-3">
                  We develop and construct multi-family residential properties that maximize space
                  efficiency while providing comfortable and attractive living environments.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Apartment buildings and complexes</li>
                  <li>Townhouse developments</li>
                  <li>Condominium projects</li>
                  <li>Mixed-use residential buildings</li>
                  <li>Student and workforce housing</li>
                  <li>Senior living communities</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Residential Renovations & Additions</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-3">
                  We transform existing homes with high-quality renovations and additions that enhance
                  functionality, aesthetics, and value while respecting the original character of the property.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-medium mb-2">Interior Renovations</h4>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Kitchen and bathroom remodeling</li>
                      <li>Basement finishing</li>
                      <li>Interior reconfiguration</li>
                      <li>Flooring and ceiling upgrades</li>
                      <li>Built-in cabinetry and storage solutions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Additions & Extensions</h4>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Room additions</li>
                      <li>Second story additions</li>
                      <li>Sunroom and conservatory construction</li>
                      <li>Garage conversions and additions</li>
                      <li>Outdoor living space expansion</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
