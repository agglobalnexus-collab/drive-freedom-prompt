import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold))_0%,transparent_50%)] opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--green-dark))_0%,transparent_50%)] opacity-5" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm border border-accent/20">
              Método Psicológico Comprovado
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
            Supere o <span className="text-accent">medo de dirigir</span> e conquiste sua liberdade no volante
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Método psicológico exclusivo criado pela psicóloga clínica <span className="font-semibold text-foreground">Márcia Mattos</span>. 100% online, acessível e transformador.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToOffer}
              className="bg-accent hover:bg-accent/90 text-foreground font-bold px-8 py-6 text-lg shadow-[0_10px_30px_-5px_hsl(var(--gold)/0.3)] hover:shadow-[0_15px_40px_-5px_hsl(var(--gold)/0.4)] transition-all duration-300 hover:scale-105"
            >
              Quero vencer o medo de dirigir agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>✓ Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>✓ Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>✓ 100% online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
