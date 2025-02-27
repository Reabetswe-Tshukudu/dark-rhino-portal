
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

          <div className="space-y-6">
            <p className="text-muted-foreground">
              At Dark Rhino Group, we are committed to excellence, innovation, and integrity. As a dynamic and forward-thinking company, we specialize in providing top-tier solutions across multiple industries, including security, consulting, construction and business development.
            </p>
            
            <p className="text-muted-foreground">
              Our mission is to empower businesses and communities by delivering reliable, efficient, and cutting-edge services tailored to their unique needs. With a team of skilled professionals and a dedication to customer satisfaction, we strive to set new standards in our field.
            </p>
            
            <p className="text-muted-foreground">
              At Dark Rhino Group, we believe in strong partnerships, strategic growth, and unwavering commitment to quality. Whether it's securing your assets, optimizing your business operations, or driving impactful change, we are your trusted partner for success.
            </p>
            
            <p className="text-muted-foreground font-semibold">
              Strength. Strategy. Success. – That's the Dark Rhino way.
            </p>
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
