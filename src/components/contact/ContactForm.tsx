import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

interface ContactFormProps {
  serviceId: string;
  templateId: string;
}

const ContactForm = ({ serviceId, templateId }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [id]: ""
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
        to_name: 'Dark Rhino Group',
        subject: `Contact Request from ${formData.name}`,
        reply_to: formData.email,
        from_name: formData.name,
        from_email: formData.email
      };
      
      console.log("Sending email with params:", templateParams);
      await emailjs.send(serviceId, templateId, templateParams);
      
      setFormData({ name: "", email: "", message: "" });
      
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg bg-card border border-border/50 p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-2 rounded-md bg-secondary border ${errors.name ? 'border-destructive' : 'border-border/50'} focus:border-primary/50 focus:outline-none`}
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 rounded-md bg-secondary border ${errors.email ? 'border-destructive' : 'border-border/50'} focus:border-primary/50 focus:outline-none`}
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            className={`w-full px-4 py-2 rounded-md bg-secondary border ${errors.message ? 'border-destructive' : 'border-border/50'} focus:border-primary/50 focus:outline-none resize-none`}
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
