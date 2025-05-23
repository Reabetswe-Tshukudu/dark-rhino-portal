
import { Navigation } from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { useEffect } from "react";

// EmailJS service and template IDs
const SERVICE_ID = 'service_ks6w7eo';
const TEMPLATE_ID = 'template_6wnu294';
const PUBLIC_KEY = 'wvJ4hHf8KL9ZNoSD3';

const Contact = () => {
  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

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

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm serviceId={SERVICE_ID} templateId={TEMPLATE_ID} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
