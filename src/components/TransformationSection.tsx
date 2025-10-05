import { Car, Heart, Briefcase, Sparkles } from "lucide-react";

const TransformationSection = () => {
  const transformations = [
    {
      icon: Car,
      title: "Liberdade Total",
      description: "Vá onde quiser, quando quiser, sem depender de ninguém"
    },
    {
      icon: Heart,
      title: "Confiança no Volante",
      description: "Dirija com segurança e tranquilidade, sem ansiedade"
    },
    {
      icon: Briefcase,
      title: "Novas Oportunidades",
      description: "Aceite aquele emprego ou projeto que exige mobilidade"
    },
    {
      icon: Sparkles,
      title: "Economia e Praticidade",
      description: "Economize com Uber e tenha total autonomia no dia a dia"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-primary/5">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Imagine sua vida com{" "}
            <span className="text-accent">total liberdade</span> para dirigir
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            É hora de transformar o medo em confiança e conquistar a independência que você merece
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {transformations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-[0_10px_40px_-10px_hsl(var(--green-dark)/0.15)] border border-border hover:shadow-[0_15px_50px_-10px_hsl(var(--green-dark)/0.2)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 p-8 bg-accent/5 border-l-4 border-accent rounded-lg">
          <p className="text-lg md:text-xl text-foreground font-medium">
            ✓ Levar seus filhos na escola sem depender de ninguém<br/>
            ✓ Viajar sem medo e com total autonomia<br/>
            ✓ Assumir oportunidades profissionais que antes não podia<br/>
            ✓ Sentir-se orgulhosa e confiante ao volante
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
