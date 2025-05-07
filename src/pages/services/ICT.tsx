
import { Navigation } from "@/components/Navigation";
import { ServiceLayout } from "@/components/ServiceLayout";
import { Footer } from "@/components/Footer";
import { Code, Globe, Server, Shield, Laptop, Network, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ictServices = [
  {
    title: "Cybersecurity",
    description:
      "Advanced threat protection, vulnerability assessment, and security monitoring to protect your digital assets and infrastructure.",
  },
  {
    title: "Network Infrastructure",
    description:
      "Design, implementation, and maintenance of robust network solutions that form the backbone of your digital operations.",
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions and applications developed to meet your specific business requirements and enhance operational efficiency.",
  },
  {
    title: "Website Development",
    description:
      "Professional, responsive website design and development services that help businesses establish a strong online presence.",
  },
  {
    title: "Cloud Computing",
    description:
      "Scalable cloud solutions and migration services to modernize your IT infrastructure and improve business agility.",
  },
  {
    title: "Data Analytics",
    description:
      "Advanced data analysis and visualization tools to help you make informed decisions based on your business data.",
  },
  {
    title: "IT Consulting",
    description:
      "Expert guidance and strategic planning to align your technology investments with your business objectives.",
  },
];

const ICT = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ServiceLayout
        title="ICT Solutions"
        description="Cutting-edge technology solutions that drive digital transformation and enhance operational efficiency. Our ICT services help businesses stay ahead in the digital age."
        services={ictServices}
        heroImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Comprehensive IT Solutions</h2>
          <p className="text-muted-foreground">
            Dark Rhino Group delivers robust and scalable IT solutions designed to meet the unique needs of modern businesses. 
            Our team of experts leverages cutting-edge technologies to drive digital transformation across your organization.
          </p>
          
          <Tabs defaultValue="cybersecurity" className="w-full mt-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              <TabsTrigger value="cybersecurity">Cybersecurity</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
              <TabsTrigger value="software">Software</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cybersecurity" className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cybersecurity Solutions</h3>
                  <p className="text-muted-foreground">
                    We provide comprehensive cybersecurity services to protect your business from 
                    ever-evolving digital threats. Our multi-layered approach ensures your systems,
                    data, and users remain secure.
                  </p>
                  
                  <div className="mt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Threat Protection & Management</AccordionTrigger>
                        <AccordionContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium mb-2">Protection Services</h4>
                              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Advanced endpoint protection</li>
                                <li>Email security and anti-phishing</li>
                                <li>Next-generation firewalls</li>
                                <li>Intrusion detection/prevention systems</li>
                                <li>Data loss prevention (DLP)</li>
                                <li>Web application firewalls</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Security Operations</h4>
                              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>24/7 security monitoring</li>
                                <li>Security incident response</li>
                                <li>Threat intelligence integration</li>
                                <li>Security information and event management (SIEM)</li>
                                <li>Vulnerability scanning and management</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Security Assessment & Compliance</AccordionTrigger>
                        <AccordionContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium mb-2">Security Assessments</h4>
                              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>Penetration testing</li>
                                <li>Vulnerability assessments</li>
                                <li>Security architecture reviews</li>
                                <li>Social engineering simulations</li>
                                <li>Security gap analysis</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Compliance Services</h4>
                              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>GDPR compliance assessment</li>
                                <li>PCI DSS compliance support</li>
                                <li>Industry-specific regulatory compliance</li>
                                <li>Security policy development</li>
                                <li>Compliance monitoring and reporting</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Training & Awareness</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-3">
                            We provide comprehensive security awareness programs to educate your employees about 
                            cybersecurity threats and best practices, creating a human firewall within your organization.
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>Security awareness training programs</li>
                            <li>Phishing simulation campaigns</li>
                            <li>Executive security briefings</li>
                            <li>Role-specific security training</li>
                            <li>Incident response training</li>
                            <li>Security policy education</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="network" className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Network Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Our network infrastructure solutions provide the foundation for your business operations,
                    ensuring reliable connectivity, optimal performance, and scalability for future growth.
                  </p>
                  
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border/50 rounded-lg p-5">
                      <h4 className="font-medium mb-3">Network Design & Implementation</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Network architecture planning</li>
                        <li>LAN/WAN design and deployment</li>
                        <li>Wireless network solutions</li>
                        <li>Software-defined networking (SDN)</li>
                        <li>Virtual private networks (VPNs)</li>
                        <li>Network segmentation implementation</li>
                        <li>Campus and multi-site networking</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card border border-border/50 rounded-lg p-5">
                      <h4 className="font-medium mb-3">Network Management & Support</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>24/7 network monitoring</li>
                        <li>Performance optimization</li>
                        <li>Traffic analysis and management</li>
                        <li>Bandwidth optimization</li>
                        <li>Quality of service (QoS) implementation</li>
                        <li>Network troubleshooting and support</li>
                        <li>Hardware maintenance and upgrades</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                    <h4 className="font-medium mb-2">Advanced Networking Technologies</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium text-sm">SD-WAN Solutions</h5>
                        <p className="text-xs text-muted-foreground mt-1">
                          Optimize your wide area network with intelligent traffic routing and management.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">Zero Trust Networking</h5>
                        <p className="text-xs text-muted-foreground mt-1">
                          Implement security models that verify every user and device before granting access.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm">Network Automation</h5>
                        <p className="text-xs text-muted-foreground mt-1">
                          Automate network tasks and processes to improve efficiency and reduce errors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="software" className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Software Development</h3>
                  <p className="text-muted-foreground">
                    We design and develop custom software solutions tailored to your unique business needs,
                    helping you streamline operations, enhance productivity, and gain competitive advantages.
                  </p>
                  
                  <div className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-card border border-border/50 rounded-lg p-5">
                        <h4 className="font-medium mb-3">Custom Application Development</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Business process automation applications</li>
                          <li>Enterprise resource planning (ERP) systems</li>
                          <li>Customer relationship management (CRM) tools</li>
                          <li>Custom inventory and warehouse management systems</li>
                          <li>Business intelligence and reporting tools</li>
                          <li>Mobile applications (iOS, Android, cross-platform)</li>
                          <li>Progressive web applications (PWAs)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-card border border-border/50 rounded-lg p-5">
                        <h4 className="font-medium mb-3">Development Approach</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Agile development methodology</li>
                          <li>Collaborative requirements gathering</li>
                          <li>Iterative development and rapid prototyping</li>
                          <li>Comprehensive testing and quality assurance</li>
                          <li>DevOps practices for continuous integration/delivery</li>
                          <li>Post-deployment support and maintenance</li>
                          <li>Knowledge transfer and training</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-card border border-border/50 rounded-lg p-5">
                      <h4 className="font-medium mb-3">Web Application Development</h4>
                      <p className="text-muted-foreground mb-4">
                        Our web application development team builds powerful, scalable, and secure applications that 
                        help businesses streamline operations and reach customers more effectively.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3">
                          <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-2">
                            <Code className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-sm font-medium">Frontend Development</p>
                          <p className="text-xs text-muted-foreground">React, Angular, Vue</p>
                        </div>
                        <div className="text-center p-3">
                          <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-2">
                            <Server className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-sm font-medium">Backend Development</p>
                          <p className="text-xs text-muted-foreground">Node.js, Python, Java</p>
                        </div>
                        <div className="text-center p-3">
                          <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-2">
                            <Database className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-sm font-medium">Database Design</p>
                          <p className="text-xs text-muted-foreground">SQL, NoSQL solutions</p>
                        </div>
                        <div className="text-center p-3">
                          <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-2">
                            <Shield className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-sm font-medium">Security</p>
                          <p className="text-xs text-muted-foreground">Built-in protection</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cloud" className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cloud Computing Solutions</h3>
                  <p className="text-muted-foreground">
                    Our cloud computing services help businesses leverage the flexibility, scalability, and cost 
                    efficiency of cloud platforms while ensuring security and performance.
                  </p>
                  
                  <div className="mt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Cloud Migration & Deployment</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-3">
                            We guide businesses through every step of their cloud journey, from planning and assessment 
                            to migration and optimization, ensuring a smooth transition to cloud infrastructure.
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>Cloud readiness assessment</li>
                            <li>Migration strategy and planning</li>
                            <li>Workload analysis and prioritization</li>
                            <li>Data migration and validation</li>
                            <li>Application re-platforming</li>
                            <li>Post-migration optimization</li>
                            <li>Hybrid cloud architecture design</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Cloud Platform Services</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-3">
                            We provide expertise across major cloud platforms, helping you select and leverage the 
                            best cloud services for your specific business needs.
                          </p>
                          <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div className="p-4 bg-muted/50 rounded-lg">
                              <h5 className="font-medium mb-2">AWS Solutions</h5>
                              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                <li>EC2 and ECS implementations</li>
                                <li>S3 storage solutions</li>
                                <li>RDS database services</li>
                                <li>Lambda serverless computing</li>
                                <li>CloudFormation automation</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-muted/50 rounded-lg">
                              <h5 className="font-medium mb-2">Azure Solutions</h5>
                              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                <li>Azure Virtual Machines</li>
                                <li>Azure App Services</li>
                                <li>Azure SQL databases</li>
                                <li>Azure Functions</li>
                                <li>Azure DevOps integration</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-muted/50 rounded-lg">
                              <h5 className="font-medium mb-2">Google Cloud Solutions</h5>
                              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                <li>Google Compute Engine</li>
                                <li>Google Kubernetes Engine</li>
                                <li>Cloud Storage solutions</li>
                                <li>BigQuery analytics</li>
                                <li>Cloud Functions</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Cloud Management & Optimization</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-3">
                            We help you maximize the value of your cloud investments with comprehensive management 
                            and optimization services that enhance performance while controlling costs.
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>Cloud cost optimization and management</li>
                            <li>Performance monitoring and tuning</li>
                            <li>Resource scaling and automation</li>
                            <li>Cloud security management</li>
                            <li>Backup and disaster recovery planning</li>
                            <li>Governance and compliance monitoring</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 space-y-8">
            <div className="bg-card border border-border/50 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Website Development</h3>
                  <p className="text-muted-foreground">
                    We build professional, responsive websites that help businesses establish a strong online presence. Our website 
                    development services include:
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2 mt-4">
                    <li className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" />
                      <span>Corporate Websites</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" />
                      <span>E-commerce Solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" />
                      <span>Web Applications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" />
                      <span>Content Management Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" />
                      <span>API Integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" />
                      <span>SEO Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1470&auto=format&fit=crop"
                alt="Web Development"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1470&auto=format&fit=crop"
                alt="Coding"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get a Website Quote
              </Link>
            </div>
          </div>
        </div>
      </ServiceLayout>
      <Footer />
    </div>
  );
};

export default ICT;
