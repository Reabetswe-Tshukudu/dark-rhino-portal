
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceTabsProps {
  tabs: {
    name: string;
    path: string;
  }[];
}

export const ServiceTabs: React.FC<ServiceTabsProps> = ({ tabs }) => {
  const location = useLocation();
  
  return (
    <div className="bg-secondary rounded-md flex w-full overflow-hidden border-primary/20 border">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          to={tab.path}
          className={cn(
            "flex-1 py-3 px-4 text-center transition-all",
            location.pathname === tab.path
              ? "bg-primary text-primary-foreground font-medium"
              : "hover:bg-secondary-foreground/10"
          )}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};
