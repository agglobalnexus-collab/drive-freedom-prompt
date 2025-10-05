import { Shield, Heart, MessageSquare, Users } from "lucide-react";

const MethodSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Técnicas de Controle da Ansiedade",
      description: "Específicas para o trânsito."
    },
    {
      icon: Heart,
      title: "Reprogramação Emocional",
      description: "Contra o medo, a vergonha e os traumas."
    },
    {
      icon: MessageSquare,
      title: "Exercícios Mentais e Guiados",
      description: "Para se preparar antes da prática no carro."
    },
    {
      icon: Users,
      title: "Comunidade Exclusiva",
      description: "De alunas no WhatsApp para apoio mútuo."
    }
  ];

  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta-irresistivel');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="masd-conteudo" className="py-16 px-4 md:px-8 bg-secondary-dark">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
          O que você vai aprender no Método MASD?
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          O MASD é um método <span className="text-accent-gold font-bold">psicológico e prático</span> que atua na <strong>raiz emocional do medo</strong>, e não apenas nos sintomas. Você terá um mapa claro para a sua superação:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-xl border-l-4 border-accent-gold space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start">
                  <Icon className="text-accent-gold mt-1 mr-3 w-6 h-6 flex-shrink-0" />
                  <p className="text-lg font-semibold text-foreground">
                    {feature.title} <span className="font-normal text-muted-foreground">({feature.description})</span>
                  </p>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://placehold.co/400x300/FACC15/047857?text=Liberdade+no+Volante" 
              alt="Mulher dirigindo com confiança" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={scrollToOffer}
            className="inline-block px-10 py-4 bg-accent-green-dark text-accent-gold font-extrabold text-xl rounded-lg shadow-xl hover:bg-accent-green-dark/90 transition duration-300 transform hover:scale-[1.02] uppercase"
          >
            Quero eliminar o medo com o Método MASD!
          </button>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
