
import { useLocation } from "react-router-dom";
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
    <div className="flex bg-[#1A1F2C] rounded-md w-full mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => {}} // We'll keep the button without navigation for now
          className={cn(
            "flex-1 py-3 px-4 text-center text-gray-300 transition-colors",
            location.pathname === tab.path ? "bg-[#222222] text-white font-medium" : "hover:bg-[#222222]/50"
          )}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};
