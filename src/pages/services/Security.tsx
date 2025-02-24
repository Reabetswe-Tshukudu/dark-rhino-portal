
import { Navigation } from "@/components/Navigation";
import { ServiceLayout } from "@/components/ServiceLayout";

const securityServices = [
  {
    title: "Manned Guarding",
    description:
      "Professional security personnel trained to protect your premises 24/7 with the highest standards of vigilance and professionalism.",
  },
  {
    title: "Surveillance Systems",
    description:
      "State-of-the-art CCTV and monitoring solutions providing comprehensive coverage and real-time surveillance of your property.",
  },
  {
    title: "Event Security",
    description:
      "Specialized security services for events of all sizes, ensuring smooth operations and guest safety throughout your function.",
  },
  {
    title: "Armed and Unarmed Security",
    description:
      "Flexible security solutions tailored to your specific needs, with both armed and unarmed personnel available.",
  },
  {
    title: "VIP Protection",
    description:
      "Elite security details providing discreet and professional protection for high-profile individuals and executives.",
  },
  {
    title: "Risk Assessment",
    description:
      "Comprehensive security audits and risk assessments to identify vulnerabilities and implement effective security measures.",
  },
];

const Security = () => {
  return (
    <>
      <Navigation />
      <ServiceLayout
        title="Security Solutions"
        description="Comprehensive security services tailored to protect your assets, people, and peace of mind. Our expert team delivers professional security solutions for businesses and individuals."
        services={securityServices}
      />
    </>
  );
};

export default Security;
