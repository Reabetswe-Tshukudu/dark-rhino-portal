
import { ArrowLeft, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceLayoutProps {
  title: string;
  description: string;
  services: {
    title: string;
    description: string;
  }[];
  heroImage: string;
  children?: React.ReactNode;
}

export const ServiceLayout = ({ title, description, services, heroImage }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Image */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border/50 space-y-4 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="max-w-2xl mx-auto text-center space-y-6 animate-in">
          <h2 className="text-2xl font-semibold">Ready to Get Started?</h2>
          <p className="text-muted-foreground">
            Contact us today to discuss how we can help secure your future.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <PhoneCall className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
