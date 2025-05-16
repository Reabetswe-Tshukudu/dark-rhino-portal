
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
    <div className="flex border-b border-border mb-6">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          to={tab.path}
          className={cn(
            "service-tab",
            location.pathname === tab.path && "active"
          )}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};
