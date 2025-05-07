
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceLayout } from "@/components/ServiceLayout";
import { Building, Hammer, Leaf, HardHat, Warehouse, Truck, Building as BuildingIcon, Building as BuildingTwo } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  {
    title: "Brick Manufacturing",
    description:
      "High-quality brick production with various styles, colors, and specifications to meet your construction needs.",
  },
  {
    title: "Building Materials Supply",
    description:
      "Supply of various types of sand, concrete, and other building materials delivered directly to your construction site.",
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
          
          <Tabs defaultValue="residential" className="w-full mt-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="civil">Civil Engineering</TabsTrigger>
              <TabsTrigger value="green">Sustainable</TabsTrigger>
            </TabsList>
            
            <TabsContent value="residential" className="mt-6 space-y-4">
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
            </TabsContent>
            
            <TabsContent value="commercial" className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BuildingTwo className="h-6 w-6 text-primary" />
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
            </TabsContent>
            
            <TabsContent value="civil" className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Traffic className="h-6 w-6 text-primary" />
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
            </TabsContent>
            
            <TabsContent value="green" className="mt-6 space-y-4">
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
            </TabsContent>
          </Tabs>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
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
          
          {/* Materials Manufacturing & Supply section */}
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
        </div>
      </ServiceLayout>

      <Footer />
    </div>
  );
};

export default Construction;
