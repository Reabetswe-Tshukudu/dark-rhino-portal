
import { Navigation } from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">About Dark Rhino Group</h1>
            <p className="text-lg text-muted-foreground">
              Leading the way in integrated security, technology, and construction solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide comprehensive, innovative solutions that protect and empower our clients,
                enabling them to focus on their core business while we handle their security,
                technology, and infrastructure needs.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading integrated solutions provider, recognized globally for our
                excellence in security, ICT, and construction services, while maintaining the
                highest standards of professionalism and innovation.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Values</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Excellence",
                  description: "Striving for the highest standards in everything we do",
                },
                {
                  title: "Integrity",
                  description: "Operating with honesty, transparency, and ethical principles",
                },
                {
                  title: "Innovation",
                  description: "Embracing new technologies and creative solutions",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-lg bg-card border border-border/50"
                >
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
