import { Brain, Target, BookOpen, Users } from "lucide-react";

const MethodSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Técnicas de Controle da Ansiedade",
      description: "Aprenda a gerenciar seus pensamentos e emoções antes e durante a direção"
    },
    {
      icon: Target,
      title: "Reprogramação Emocional",
      description: "Trabalhe a raiz do medo e transforme sua relação com o volante"
    },
    {
      icon: BookOpen,
      title: "Exercícios Guiados",
      description: "Passo a passo para se preparar emocionalmente antes da prática"
    },
    {
      icon: Users,
      title: "Comunidade Exclusiva",
      description: "Troque experiências com outras alunas e receba apoio constante"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full mb-6">
            <span className="font-semibold text-sm">O Método</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que é o <span className="text-accent">Método MASD</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Um método psicológico e prático que atua na <strong className="text-foreground">raiz emocional do medo</strong>, 
            não apenas na técnica de direção. É assim que você conquista resultados reais e duradouros.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_hsl(var(--gold)/0.2)]"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-br from-accent/10 to-primary/5 p-8 md:p-12 rounded-3xl border border-accent/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Não é só sobre aprender a dirigir...
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              É sobre transformar sua relação com o medo, conquistar confiança e liberdade. 
              O Método MASD trabalha o lado psicológico que nenhuma autoescola ensina.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Online e no seu ritmo</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">7 dias</div>
                <div className="text-sm text-muted-foreground">Garantia incondicional</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Acesso vitalício</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
