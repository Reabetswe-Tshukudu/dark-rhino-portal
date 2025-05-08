
import { ServiceLayout } from "@/components/ServiceLayout";

const constructionServices = [
  {
    title: "Residential Construction",
    description:
      "High-quality residential construction services, from custom homes to multi-unit developments, built to the highest standards.",
  },
  {
    title: "Commercial Construction",
    description:
      "Expert commercial construction services for office buildings, retail spaces, and industrial facilities.",
  },
  {
    title: "Renovations",
    description:
      "Complete renovation services to transform and modernize existing structures while maintaining their integrity.",
  },
  {
    title: "Project Management",
    description:
      "Comprehensive project management services ensuring your construction project is delivered on time and within budget.",
  },
  {
    title: "Civil Engineering",
    description:
      "Professional civil engineering services for infrastructure projects, including roads, bridges, and utilities.",
  },
  {
    title: "Green Building Solutions",
    description:
      "Sustainable construction practices and eco-friendly building solutions for environmentally conscious projects.",
  },
  {
    title: "Brick Manufacturing",
    description:
      "High-quality brick production with various styles, colors, and specifications to meet your construction needs.",
  },
  {
    title: "Building Materials Supply",
    description:
      "Supply of various types of sand, concrete, and other building materials delivered directly to your construction site.",
  },
];

interface ConstructionHeroProps {
  children: React.ReactNode;
}

export const ConstructionHero: React.FC<ConstructionHeroProps> = ({ children }) => {
  return (
    <ServiceLayout
      title="Construction Services"
      description="Professional construction services delivering excellence in residential, commercial, and civil engineering projects across South Africa. We build the future with quality and innovation."
      services={constructionServices}
      heroImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1470&auto=format&fit=crop"
    >
      {children}
    </ServiceLayout>
  );
};

export { constructionServices };
