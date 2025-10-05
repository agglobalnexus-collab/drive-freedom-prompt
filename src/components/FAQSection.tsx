const FAQSection = () => {
  const faqs = [
    {
      question: "O curso é 100% online? Como vou aprender sem prática?",
      answer: "Sim, o curso é totalmente online, e isso é uma vantagem. O medo de dirigir nasce de fatores emocionais — não da prática. No MASD, você aprende técnicas psicológicas e exercícios que eliminam a ansiedade e o bloqueio que te impedem de dirigir. Depois disso, a prática acontece naturalmente, sem pânico."
    },
    {
      question: "Funciona mesmo pra quem já tentou de tudo e não conseguiu?",
      answer: "Sim! O método é diferente de tudo o que você já viu, porque trabalha a causa real do medo — o emocional. Mesmo quem está travada há anos consegue resultados quando segue o passo a passo do MASD."
    },
    {
      question: "Preciso ter carro pra fazer o curso?",
      answer: "Não. Você pode aplicar todas as técnicas mesmo sem ter um carro. O foco é preparar a sua mente e suas emoções. Quando surgir a oportunidade de dirigir, você estará pronta."
    },
    {
      question: "Quanto tempo leva pra ver resultados?",
      answer: "Muitas alunas já sentem uma mudança nas primeiras aulas. O ritmo varia de pessoa pra pessoa, mas todas as técnicas foram criadas pra gerar resultados reais e rápidos."
    },
    {
      question: "O curso serve só pra mulheres?",
      answer: "O método foi desenvolvido pensando nas mulheres, mas qualquer pessoa que sofre com medo de dirigir pode participar."
    },
    {
      question: "Eu tenho trauma de acidente. O curso serve pra mim?",
      answer: "Sim. O método trabalha o emocional, inclusive traumas, ansiedade e crenças limitantes. Márcia é psicóloga clínica e criou o MASD justamente pra lidar com casos como o seu."
    },
    {
      question: "Posso assistir quando quiser?",
      answer: "Sim! As aulas ficam disponíveis e você pode assistir quantas vezes quiser, no seu ritmo e horário."
    },
    {
      question: "Tem acompanhamento durante o curso?",
      answer: "Sim! Você terá acesso à comunidade exclusiva de alunas, onde pode tirar dúvidas, receber apoio e acompanhar conteúdos complementares da Márcia."
    },
    {
      question: "E se eu não gostar do curso?",
      answer: "Você tem 7 dias de garantia incondicional. Se não sentir evolução ou achar que o método não é pra você, devolvemos 100% do seu dinheiro."
    },
    {
      question: "Por que o curso é tão acessível?",
      answer: "O atendimento individual da Márcia custa R$1.350, mas ela quis transformar o método em um formato online pra alcançar mais mulheres. O valor acessível permite que você tenha acesso ao mesmo conhecimento por uma fração do preço."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary-dark">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
          💬 Dúvidas Frequentes (FAQ – Método MASD)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-card p-4 rounded-lg shadow-md border border-border">
              <summary className="font-bold text-lg cursor-pointer text-accent-green-dark hover:text-accent-green-dark/80 transition">
                {faq.question}
              </summary>
              <p className="mt-3 text-muted-foreground border-t border-border pt-3">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
