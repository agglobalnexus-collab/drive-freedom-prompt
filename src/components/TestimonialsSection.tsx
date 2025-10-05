const TestimonialsSection = () => {
  const testimonials = [
    {
      video: "/videos/depoimento-1.mp4",
      quote: "Hoje eu dirijo para qualquer lugar, não sinto mais medo, mais ansiedade. Só tenho vontade de dirigir cada vez mais!"
    },
    {
      video: "/videos/depoimento-2.mp4",
      quote: "Procurei a Supere e aqui encontrei todo o apoio. Hoje posso dizer que sou dona de mim, conduzindo o meu veículo."
    },
    {
      video: "/videos/depoimento-3.mp4",
      quote: "Em 7 dias eu voltei na Supere dirigindo meu carro. Impressionante! Era algo que eu tinha guardado dentro de mim."
    },
    {
      video: "/videos/depoimento-isabel.mp4",
      quote: "Eu tava vindo de táxi, decidida a renovar minha carteira. Já fiz minhas aulas e estou me sentindo maravilhada, maravilhada!"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-secondary-dark">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          O Resultado de quem <span className="text-accent-gold font-bold">confiou na Márcia</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-3 rounded-xl shadow-2xl border-2 border-accent-gold">
              <video controls className="w-full rounded-lg mb-3">
                <source src={testimonial.video} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <p className="text-md font-semibold text-foreground">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground italic mt-8">
          Depoimentos reais de alunas que superaram o medo e conquistaram sua liberdade.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
