import { Award, Users, TrendingUp } from "lucide-react";

const AuthoritySection = () => {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6">
              <span className="text-accent font-semibold text-sm">Criadora do Método</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Conheça a <span className="text-accent">Psicóloga Márcia Mattos</span>
            </h2>
            <div className="space-y-4 text-primary-foreground/90 text-lg">
              <p>
                <strong className="text-primary-foreground">Psicóloga clínica especialista</strong> em ansiedade e medos, Márcia Mattos criou o Método MASD após anos de experiência ajudando mulheres a superarem o medo de dirigir.
              </p>
              <p>
                O que antes era oferecido apenas em atendimentos presenciais de <strong className="text-accent">R$1.350</strong>, agora está acessível a todas as mulheres que desejam conquistar sua liberdade no volante.
              </p>
              <p>
                Com uma abordagem que vai além da prática, Márcia trabalha a <strong className="text-primary-foreground">raiz emocional</strong> do medo, proporcionando resultados duradouros e transformadores.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl border border-primary-foreground/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Método Validado</h3>
                  <p className="text-primary-foreground/80">
                    Testado e aprovado em centenas de atendimentos presenciais
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl border border-primary-foreground/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Especialista em Ansiedade</h3>
                  <p className="text-primary-foreground/80">
                    Anos de experiência tratando medos e ansiedade na prática clínica
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl border border-primary-foreground/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Resultados Comprovados</h3>
                  <p className="text-primary-foreground/80">
                    Mulheres de todo Brasil já conquistaram sua independência
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
