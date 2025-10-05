import { Car, MapPin, Wallet } from "lucide-react";

const TransformationSection = () => {
  const transformations = [
    {
      icon: Car,
      title: "Independência Total",
      description: "Levar os filhos na escola, ir ao mercado ou buscar a família no aeroporto, tudo sem depender de terceiros."
    },
    {
      icon: MapPin,
      title: "Viajar sem Medo",
      description: "Fazer aquela viagem de carro que sempre sonhou, com zero ansiedade e confiança total em qualquer estrada."
    },
    {
      icon: Wallet,
      title: "Economia Inteligente",
      description: "Diga adeus aos gastos diários com Uber/Táxi e direcione esse dinheiro para o que realmente importa."
    }
  ];

  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta-irresistivel');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary-dark">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
          Imagine sua vida daqui a 30 dias...
        </h2>
        
        <p className="text-xl text-center text-muted-foreground mb-8">
          Após aplicar o <strong>Método MASD</strong>, você não só irá dirigir, mas irá sentir uma <span className="text-accent-gold font-bold">confiança inabalável</span> e uma verdadeira <strong>liberdade</strong> para ir e vir.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {transformations.map((transformation, index) => {
            const Icon = transformation.icon;
            return (
              <div key={index} className="p-5 bg-card border-b-4 border-accent-green-dark rounded-lg shadow-lg">
                <Icon className="text-accent-green-dark w-6 h-6 mb-3" />
                <h4 className="text-xl font-semibold mb-2 text-foreground">{transformation.title}</h4>
                <p className="text-muted-foreground" dangerouslySetInnerHTML={{ 
                  __html: transformation.description.replace(/sem depender de terceiros|zero ansiedade|Uber\/Táxi/g, 
                    '<span class="text-accent-gold font-bold">$&</span>') 
                }} />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={scrollToOffer}
            className="inline-block px-10 py-4 bg-accent-green-dark text-accent-gold font-extrabold text-xl rounded-lg shadow-xl hover:bg-accent-green-dark/90 transition duration-300 transform hover:scale-[1.02] uppercase"
          >
            Sim! Eu quero essa transformação em 30 dias!
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
