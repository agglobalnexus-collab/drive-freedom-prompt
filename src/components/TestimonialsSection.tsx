import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      video: "/videos/depoimento-isabel.mp4",
      name: "Isabel",
      result: "Conquistou autonomia e independência"
    },
    {
      video: "/videos/depoimento-1.mp4",
      name: "Aluna MASD",
      result: "Superou o medo e dirige com confiança"
    },
    {
      video: "/videos/depoimento-2.mp4",
      name: "Aluna MASD",
      result: "Realizou o sonho de dirigir"
    },
    {
      video: "/videos/depoimento-3.mp4",
      name: "Aluna MASD",
      result: "Transformou sua vida"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Histórias de <span className="text-accent">transformação</span> reais
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que alunas que já conquistaram sua liberdade têm a dizer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_hsl(var(--green-dark)/0.15)] border border-border hover:shadow-[0_15px_50px_-10px_hsl(var(--green-dark)/0.2)] transition-all duration-300"
            >
              <div className="aspect-video bg-primary/5">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src={testimonial.video} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-bold text-foreground mb-1">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.result}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">
            "Tinha CNH há 6 anos e nunca dirigi sozinha. Em poucos dias já estava dirigindo sem medo."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
