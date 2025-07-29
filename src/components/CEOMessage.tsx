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
                  <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <div className="w-40 h-40 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary">RT</span>
                    </div>
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