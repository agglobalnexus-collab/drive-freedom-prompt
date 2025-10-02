import { AlertCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Depende do marido, amigos ou Uber para ir a qualquer lugar",
    "Sente vergonha por ter CNH e não dirigir",
    "Ansiedade só de pensar em pegar o volante",
    "Já tentou autoescola ou instrutores e não funcionou",
    "Perdeu oportunidades de trabalho por não dirigir",
    "Sente-se presa e sem liberdade no dia a dia"
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-full mb-6">
            <AlertCircle className="w-4 h-4" />
            <span className="font-semibold text-sm">Você se identifica com isso?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O medo de dirigir está limitando sua vida?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-destructive rounded-full" />
                </div>
                <p className="text-foreground">{problem}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            Se você sente isso, saiba que{" "}
            <span className="text-accent">não está sozinha</span>.
          </p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Milhares de mulheres já superaram esse medo e conquistaram sua independência. Agora é a sua vez.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
