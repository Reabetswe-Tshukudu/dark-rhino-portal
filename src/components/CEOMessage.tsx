import { Card, CardContent } from "@/components/ui/card";

export const CEOMessage = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Message from our CEO
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 space-y-6">
                  <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                    "At Dark Rhino Group, we believe that true security comes from understanding that every client's needs are unique. Our commitment goes beyond just providing services—we build lasting partnerships that secure your future while fostering growth and innovation."
                  </blockquote>
                  
                  <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                    "With our integrated approach to security, technology, and construction, we don't just meet today's challenges—we anticipate tomorrow's opportunities."
                  </blockquote>
                  
                  <div className="pt-4">
                    <p className="text-xl font-semibold text-foreground">Reabetswe Tshukudu</p>
                    <p className="text-primary font-medium">Chief Executive Officer</p>
                    <p className="text-muted-foreground">Dark Rhino Group</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-primary/5 to-background shadow-2xl">
                    <img
                      src="/lovable-uploads/0c9051bd-c857-4c3d-8fb9-6fd9c78d1313.png"
                      alt="Reabetswe Tshukudu - CEO of Dark Rhino Group"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 ring-2 ring-primary/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};