
import { Navigation } from "@/components/Navigation";
import { ServiceLayout } from "@/components/ServiceLayout";

const ictServices = [
  {
    title: "Cybersecurity",
    description:
      "Advanced threat protection, vulnerability assessment, and security monitoring to protect your digital assets and infrastructure.",
  },
  {
    title: "Network Infrastructure",
    description:
      "Design, implementation, and maintenance of robust network solutions that form the backbone of your digital operations.",
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions and applications developed to meet your specific business requirements and enhance operational efficiency.",
  },
  {
    title: "Cloud Computing",
    description:
      "Scalable cloud solutions and migration services to modernize your IT infrastructure and improve business agility.",
  },
  {
    title: "Data Analytics",
    description:
      "Advanced data analysis and visualization tools to help you make informed decisions based on your business data.",
  },
  {
    title: "IT Consulting",
    description:
      "Expert guidance and strategic planning to align your technology investments with your business objectives.",
  },
];

const ICT = () => {
  return (
    <>
      <Navigation />
      <ServiceLayout
        title="ICT Solutions"
        description="Cutting-edge technology solutions that drive digital transformation and enhance operational efficiency. Our ICT services help businesses stay ahead in the digital age."
        services={ictServices}
      />
    </>
  );
};

export default ICT;
