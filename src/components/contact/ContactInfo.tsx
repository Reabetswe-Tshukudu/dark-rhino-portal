
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Get in touch with us to discuss your security, technology, or construction needs.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-muted-foreground">+27 67 608 9259</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-muted-foreground">DarkRhinoGroup@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-muted-foreground">
              Head Office: Sandton, South Africa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
