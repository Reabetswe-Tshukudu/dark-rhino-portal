
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceLayout } from "@/components/ServiceLayout";
import { Shield, UserCheck, Camera, Bell, ShieldAlert, ShieldCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SecurityPage = () => {
  const services = [
    {
      title: "Professional Guards",
      description: "Highly trained security personnel providing 24/7 protection",
    },
    {
      title: "Surveillance Systems",
      description: "State-of-the-art CCTV and monitoring solutions",
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive security audits and vulnerability analysis",
    },
    {
      title: "Alarm Systems",
      description: "Advanced intrusion detection and alert systems",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <ServiceLayout 
        title="Security Solutions"
        description="Comprehensive security services to protect your assets and ensure peace of mind"
        services={services}
        heroImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop"
      >
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Professional Security Services</h2>
          <p className="text-muted-foreground">
            Our security solutions are designed to provide comprehensive protection for
            businesses, organizations, and individuals. We combine cutting-edge
            technology with professional expertise to deliver reliable security
            services.
          </p>
          
          <Tabs defaultValue="guards" className="w-full mt-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              <TabsTrigger value="guards">Professional Guards</TabsTrigger>
              <TabsTrigger value="surveillance">Surveillance</TabsTrigger>
              <TabsTrigger value="assessment">Risk Assessment</TabsTrigger>
              <TabsTrigger value="alarms">Alarm Systems</TabsTrigger>
            </TabsList>
            
            <TabsContent value="guards" className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Security Guards</h3>
                  <p className="text-muted-foreground">
                    Our highly trained security personnel provide a visible deterrent against potential threats 
                    while ensuring peace of mind for your business or event.
                  </p>
                  
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-medium">Our Guards Provide:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>24/7 on-site protection</li>
                        <li>Uniformed or plain-clothes options</li>
                        <li>Access control management</li>
                        <li>Visitor screening and monitoring</li>
                        <li>Emergency response coordination</li>
                        <li>Regular patrol service</li>
                        <li>Detailed reporting and incident documentation</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium">Our Guard Services Include:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Static guarding for premises protection</li>
                        <li>Mobile patrol services</li>
                        <li>Reception and concierge security</li>
                        <li>Executive protection and VIP security</li>
                        <li>Event security management</li>
                        <li>Construction site security</li>
                        <li>Retail loss prevention guards</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm">
                      <strong>Note:</strong> All our security personnel are fully licensed, vetted, and professionally 
                      trained with regular refresher courses to ensure they remain at the forefront of security best practices.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="surveillance" className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Surveillance Systems</h3>
                  <p className="text-muted-foreground">
                    Our advanced surveillance solutions provide comprehensive monitoring capabilities 
                    using the latest technology to protect your premises and assets.
                  </p>
                  
                  <div className="mt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>CCTV Installation & Monitoring</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-3">
                            We design and install customized CCTV systems tailored to your specific requirements, 
                            using high-definition cameras with advanced features such as night vision, motion detection, 
                            and remote viewing capabilities.
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>HD and 4K resolution cameras</li>
                            <li>Indoor and outdoor weatherproof options</li>
                            <li>Remote access via mobile applications</li>
                            <li>Cloud storage options with secure backup</li>
                            <li>24/7 monitoring services available</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Advanced Video Analytics</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-3">
                            Our systems incorporate intelligent video analytics to enhance security monitoring 
                            by automatically detecting suspicious activities and providing real-time alerts.
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>People counting and crowd monitoring</li>
                            <li>Facial recognition (where legally permitted)</li>
                            <li>Object detection and tracking</li>
                            <li>Perimeter breach detection</li>
                            <li>License plate recognition</li>
                            <li>Loitering detection and alerts</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Integrated Security Systems</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-3">
                            We can integrate your surveillance system with other security components to create 
                            a comprehensive security ecosystem that works seamlessly together.
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>Integration with access control systems</li>
                            <li>Alarm system coordination</li>
                            <li>Centralized security management platform</li>
                            <li>Mobile alerts and notifications</li>
                            <li>Historical data analysis and reporting</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="assessment" className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Risk Assessment & Security Audits</h3>
                  <p className="text-muted-foreground">
                    Our comprehensive security assessment services identify vulnerabilities and risks in your 
                    security infrastructure, allowing for proactive measures to protect your assets.
                  </p>
                  
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border/50 rounded-lg p-5">
                      <h4 className="font-medium mb-3">Initial Security Assessment</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Physical premises vulnerability analysis</li>
                        <li>Existing security measures evaluation</li>
                        <li>Staff security awareness assessment</li>
                        <li>Asset protection review</li>
                        <li>Security protocols examination</li>
                        <li>Identification of potential threats</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card border border-border/50 rounded-lg p-5">
                      <h4 className="font-medium mb-3">Comprehensive Security Audit</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>In-depth security infrastructure analysis</li>
                        <li>Risk probability and impact assessment</li>
                        <li>Security solution recommendations</li>
                        <li>Cost-benefit analysis of security measures</li>
                        <li>Security policy development guidance</li>
                        <li>Compliance with industry standards verification</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-card border border-border/50 rounded-lg">
                    <h4 className="font-medium mb-2">Our Methodical Approach</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                      <li><strong>Identification:</strong> We identify all assets that require protection and potential threats.</li>
                      <li><strong>Analysis:</strong> We analyze the likelihood and potential impact of each identified threat.</li>
                      <li><strong>Mitigation Planning:</strong> We develop strategies to mitigate identified risks.</li>
                      <li><strong>Implementation Guidance:</strong> We provide clear recommendations for security improvements.</li>
                      <li><strong>Follow-up:</strong> We conduct follow-up assessments to ensure effective implementation.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="alarms" className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Alarm Systems</h3>
                  <p className="text-muted-foreground">
                    Our cutting-edge alarm systems provide immediate detection and notification of security breaches, 
                    ensuring rapid response to potential threats.
                  </p>
                  
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <img
                      src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1470&auto=format&fit=crop"
                      alt="Advanced Security Alarm Panel"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1587293439367-79a1dd3ff851?q=80&w=1470&auto=format&fit=crop"
                      alt="Security System Installation"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Alarm System Features</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Intrusion Detection</h5>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          <li>Door and window sensors</li>
                          <li>Motion detectors with pet immunity options</li>
                          <li>Glass break detection</li>
                          <li>Pressure mats and vibration sensors</li>
                          <li>Beam detectors for perimeter protection</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Monitoring & Response</h5>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          <li>24/7 professional monitoring</li>
                          <li>Direct connection to security response teams</li>
                          <li>Mobile app notifications and control</li>
                          <li>SMS and email alerts</li>
                          <li>Automated police dispatch integration</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Additional Safety Features</h5>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          <li>Smoke and heat detection</li>
                          <li>Carbon monoxide monitoring</li>
                          <li>Water leak detection</li>
                          <li>Temperature monitoring</li>
                          <li>Medical emergency buttons</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Smart Integration</h5>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          <li>Smart home compatibility</li>
                          <li>Voice assistant integration</li>
                          <li>Automated rules and scenarios</li>
                          <li>Geofencing capabilities</li>
                          <li>Remote arm/disarm functionality</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <img
              src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=1470&auto=format&fit=crop"
              alt="Security Monitoring System"
              className="rounded-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=1470&auto=format&fit=crop"
              alt="CCTV Security Cameras"
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4">
              <div className="p-3 rounded-full bg-primary/10 w-fit">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Access Control</h3>
              <p className="text-muted-foreground text-sm">
                Advanced access control systems to manage and monitor entry points
              </p>
            </div>
            
            <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4">
              <div className="p-3 rounded-full bg-primary/10 w-fit">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Video Surveillance</h3>
              <p className="text-muted-foreground text-sm">
                24/7 monitoring with high-definition security cameras
              </p>
            </div>
            
            <div className="bg-card border border-border/50 rounded-lg p-6 space-y-4">
              <div className="p-3 rounded-full bg-primary/10 w-fit">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Alarm Systems</h3>
              <p className="text-muted-foreground text-sm">
                Rapid response alarms with instant notifications
              </p>
            </div>
          </div>
        </div>
      </ServiceLayout>

      <Footer />
    </div>
  );
};

export default SecurityPage;
