
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image: string;
}

export const ServiceCard = ({ title, description, icon: Icon, href, image }: ServiceCardProps) => {
  return (
    <Link to={href} className="service-card group">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card to-card/95" />
      </div>
      <div className="relative space-y-4">
        <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};
