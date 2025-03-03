
import { Navigation } from "@/components/Navigation";
import { ServiceLayout } from "@/components/ServiceLayout";
import { Footer } from "@/components/Footer";
import { Code, Globe, Server } from "lucide-react";
import { Link } from "react-router-dom";

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
