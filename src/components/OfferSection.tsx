import { Check, Shield } from "lucide-react";

const OfferSection = () => {
  const benefits = [
    "Acesso vitalício ao Método MASD.",
    "Aulas de reprogramação mental e controle da ansiedade.",
    "Materiais de apoio e exercícios guiados (PDFs).",
    "Participação na comunidade exclusiva de alunas."
  ];

  const handleCTA = () => {
    window.open("https://pay.kiwify.com.br/f1hS5iq", "_blank");
  };

  return (
    <section id="oferta-irresistivel" className="py-16 px-4 md:px-8 bg-accent-green-dark text-primary-foreground">
      <div className="container max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Chegou a hora de investir na sua <span className="text-accent-gold">Liberdade</span>
        </h2>

        <div className="bg-green-700 p-6 rounded-xl mb-8 shadow-inner">
          <p className="text-2xl font-bold mb-4 text-accent-gold">O que você vai receber:</p>
          <ul className="text-lg text-primary-foreground space-y-2 text-left inline-block">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <Check className="text-accent-gold mr-3 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xl text-gray-300 line-through">
          Valor do Atendimento Individual é de: R$680,00
        </p>
        
        <div className="bg-background p-6 md:p-10 rounded-xl my-6 shadow-2xl border-4 border-accent-gold text-foreground">
          <p className="text-2xl font-bold mb-2">Seu Investimento Único Hoje:</p>
          <p className="text-5xl md:text-6xl font-extrabold text-accent-green-dark">
            <span className="text-xl align-top">12x de </span>R$20,27
          </p>
          <p className="text-lg mt-2 text-muted-foreground font-bold">ou R$197,00 à vista</p>
        </div>
        
        <p className="text-2xl font-extrabold text-primary-foreground mb-6">
          Pague menos do que <span className="text-accent-gold">alguns dias de Uber</span> e conquiste sua liberdade para sempre.
        </p>

        <button 
          onClick={handleCTA}
          className="inline-block px-8 md:px-12 py-4 md:py-5 bg-accent-gold text-foreground font-extrabold text-lg md:text-2xl rounded-xl shadow-2xl hover:bg-accent-gold/90 transition duration-300 transform hover:scale-[1.05] uppercase"
        >
          EU QUERO O ACESSO IMEDIATO
        </button>

        <div className="mt-8 flex items-center justify-center space-x-3 text-lg font-semibold text-primary-foreground">
          <Shield className="w-6 h-6 text-green-300" />
          <p>Teste por <span className="text-accent-gold">7 dias</span>. Se não sentir resultados, devolvemos 100% do seu dinheiro.</p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;