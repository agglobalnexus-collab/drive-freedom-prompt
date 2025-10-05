const UrgencySection = () => {
  const handleCTA = () => {
    window.open("https://pay.kiwify.com.br/f1hS5iq", "_blank");
  };

  return (
    <section className="py-12 px-4 md:px-8 text-center bg-background">
      <div className="container max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-destructive mb-6">
          ATENÇÃO: As vagas são limitadas para garantir qualidade no acompanhamento das alunas.
        </h3>
        
        <p className="text-xl text-muted-foreground mb-8">
          Garanta a sua agora antes que esta oferta exclusiva e as vagas acabem.
        </p>

        <button 
          onClick={handleCTA}
          className="inline-block px-10 py-4 bg-accent-green-dark text-accent-gold font-extrabold text-xl rounded-lg shadow-xl hover:bg-accent-green-dark/90 transition duration-300 transform hover:scale-[1.02] uppercase"
        >
          Quero vencer o medo de dirigir agora.
        </button>
      </div>
    </section>
  );
};

export default UrgencySection;
