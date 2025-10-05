const ProblemSection = () => {
  const problems = [
    "Sentir-se dependente do marido, filho ou de aplicativos de Uber para tarefas simples do dia a dia?",
    "Sentir ansiedade extrema, coração acelerado ou as mãos suando só de pensar em pegar no volante?",
    "Ter vergonha de admitir que tem CNH há anos e nunca dirigiu sozinha?",
    "Perder oportunidades profissionais ou não conseguir acompanhar os filhos na rotina por falta de autonomia?",
    "Já tentou aulas de autoescola ou instrutores e o medo sempre voltou?"
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
          Você se identifica com algum desses sentimentos?
        </h2>
        
        <p className="text-xl text-center text-muted-foreground mb-8">
          <strong>Eu sei o que você está sentindo.</strong> A ansiedade e a vergonha de não dirigir, mesmo com CNH, criam um ciclo vicioso que te aprisiona. É por isso que o Método MASD atua na raiz emocional e não apenas na prática.
        </p>

        <ul className="space-y-5 text-lg text-muted-foreground">
          {problems.map((problem, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-3 text-2xl text-destructive font-bold leading-none">🚫</span>
              <p dangerouslySetInnerHTML={{ 
                __html: problem.replace(/Uber|ansiedade extrema|dirigiu sozinha|oportunidades profissionais|sempre voltou/g, 
                  '<span class="text-accent-gold font-bold">$&</span>') 
              }} />
            </li>
          ))}
        </ul>
        
        <p className="text-2xl font-extrabold text-center mt-12 text-accent-green-dark">
          Se você sente isso, saiba que não está sozinha. Milhares de mulheres passam pelo mesmo e o problema não é você, mas sim o método!
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
