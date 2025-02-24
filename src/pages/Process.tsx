
import { Navigation } from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Process = () => {
  const steps = [
    {
      step: 1,
      title: "Initial Consultation",
      description:
        "We begin with a thorough consultation to understand your specific needs and objectives.",
    },
    {
      step: 2,
      title: "Assessment & Planning",
      description:
        "Our experts conduct a comprehensive assessment and develop a tailored solution plan.",
    },
    {
      step: 3,
      title: "Implementation",
      description:
        "We execute the plan with precision, ensuring minimal disruption to your operations.",
    },
    {
      step: 4,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality checks ensure everything meets our high standards.",
    },
    {
      step: 5,
      title: "Ongoing Support",
      description:
        "We provide continuous support and maintenance to ensure long-term success.",
    },
  ];

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

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Our Process</h1>
            <p className="text-lg text-muted-foreground">
              A systematic approach to delivering excellence in every project
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.step}
                className="flex gap-6 p-6 rounded-lg bg-card border border-border/50"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  {step.step}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
