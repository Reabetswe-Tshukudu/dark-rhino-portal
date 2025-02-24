
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Check } from "lucide-react";

export const Footer = () => {
  const whyChooseUs = [
    "25+ Years of Experience",
    "Integrated Solutions Provider",
    "24/7 Support & Service",
    "Industry-Leading Expertise",
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Security Solutions", href: "/services/security" },
    { label: "ICT Solutions", href: "/services/ict" },
    { label: "Construction", href: "/services/construction" },
  ];

  return (
    <footer className="bg-card mt-20 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Why Choose Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Why Choose Us</h3>
            <ul className="space-y-3">
              {whyChooseUs.map((reason) => (
                <li key={reason} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@darkrhino.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Business Avenue, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dark Rhino Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
