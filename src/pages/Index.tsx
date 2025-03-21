
import { Shield, Server, Construction } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Footer } from "@/components/Footer";

const services = [
  {
    title: "Security Solutions",
    description:
      "Comprehensive security services including manned guarding, surveillance, and risk assessment.",
    icon: Shield,
    href: "/services/security",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "ICT Solutions",
    description:
      "Advanced technology solutions covering cybersecurity, infrastructure, and software development.",
    icon: Server,
    href: "/services/ict",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Construction",
    description:
      "Expert construction services for residential, commercial, and civil engineering projects.",
    icon: Construction,
    href: "/services/construction",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-in">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-muted-foreground">
              Discover our comprehensive range of professional services designed to
              meet your security, technology, and construction needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
