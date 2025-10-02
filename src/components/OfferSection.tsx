import { Button } from "@/components/ui/button";
import { Check, Shield, ArrowRight } from "lucide-react";

const OfferSection = () => {
  const scrollToCheckout = () => {
    window.open('https://pay.kiwify.com.br/f1hS5iq', '_blank');
  };

  const benefits = [
    "Acesso imediato ao curso completo",
    "Técnicas psicológicas comprovadas",
    "Exercícios práticos guiados",
    "Comunidade exclusiva de alunas",
    "Suporte especializado",
    "Atualizações gratuitas",
    "Acesso vitalício ao conteúdo",
    "Certificado de conclusão"
  ];

  return (
    <section id="oferta" className="py-20 px-4 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Conquiste sua <span className="text-accent">liberdade</span> no volante hoje
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Investimento muito menor do que alguns dias de Uber para ter liberdade para sempre
          </p>
        </div>
        
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[0_20px_70px_-10px_hsl(var(--gold)/0.3)] border-2 border-accent/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-4">
                <span className="text-accent font-bold text-sm">OFERTA ESPECIAL</span>
              </div>
              <div className="mb-4">
                <span className="text-muted-foreground line-through text-2xl">R$ 1.350,00</span>
                <span className="text-sm text-muted-foreground ml-2">(valor do atendimento individual)</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                R$ 197<span className="text-2xl">,00</span>
              </div>
              <p className="text-accent font-semibold text-xl">
                ou 12x de R$ 20,27
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              onClick={scrollToCheckout}
              className="w-full bg-accent hover:bg-accent/90 text-foreground font-bold py-6 px-4 text-sm md:text-xl shadow-[0_10px_30px_-5px_hsl(var(--gold)/0.4)] hover:shadow-[0_15px_40px_-5px_hsl(var(--gold)/0.5)] transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center gap-1 md:gap-2 text-center leading-tight">
                <span className="hidden md:inline">Sim, quero conquistar minha liberdade agora</span>
                <span className="md:hidden">Quero conquistar minha liberdade</span>
                <ArrowRight className="h-4 w-4 md:h-6 md:w-6 flex-shrink-0" />
              </span>
            </Button>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-2xl border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    Garantia Incondicional de 7 Dias
                  </h3>
                  <p className="text-muted-foreground">
                    Teste o Método MASD por 7 dias. Se não sentir resultados ou não gostar por qualquer motivo, 
                    devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>🔒 Pagamento 100% seguro | ⚡ Acesso imediato após aprovação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
