
import { BarChart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const CivilEngineeringTabContent: React.FC = () => {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <BarChart className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Civil Engineering & Infrastructure</h3>
        <p className="text-muted-foreground">
          Our civil engineering division specializes in infrastructure projects that support community 
          development and economic growth. We bring technical expertise and innovative solutions to 
          projects of all scales.
        </p>
        
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Transportation Infrastructure</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-3">
                  We design and construct transportation infrastructure that facilitates safe and 
                  efficient movement of people and goods throughout communities and regions.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Road construction and rehabilitation</li>
                  <li>Bridge design and construction</li>
                  <li>Intersection improvements</li>
                  <li>Highway projects</li>
                  <li>Pedestrian walkways and cycling paths</li>
                  <li>Traffic management systems</li>
                  <li>Parking facilities</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Utility Infrastructure</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-3">
                  We develop and implement essential utility systems that provide reliable services 
                  to communities and businesses.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-medium mb-2">Water Systems</h4>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Water treatment facilities</li>
                      <li>Water distribution networks</li>
                      <li>Pump stations</li>
                      <li>Reservoirs and storage tanks</li>
                      <li>Irrigation systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Wastewater & Drainage</h4>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Sewer collection systems</li>
                      <li>Wastewater treatment plants</li>
                      <li>Stormwater management</li>
                      <li>Drainage solutions</li>
                      <li>Flood control structures</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Site Development & Land Planning</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-3">
                  We provide comprehensive site development services that transform raw land into 
                  construction-ready properties for residential, commercial, and industrial use.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Land clearing and grading</li>
                  <li>Earthwork and excavation</li>
                  <li>Erosion control systems</li>
                  <li>Site utilities installation</li>
                  <li>Retaining walls and slope stabilization</li>
                  <li>Paving and hardscape construction</li>
                  <li>Subdivision development</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
