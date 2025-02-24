
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background pointer-events-none" />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary">Securing</span> Your Future with
            <span className="text-primary"> Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Dark Rhino Group delivers integrated security, ICT, and construction solutions
            that protect and empower businesses for tomorrow's challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
