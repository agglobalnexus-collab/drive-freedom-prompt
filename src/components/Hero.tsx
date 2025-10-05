const Hero = () => {
  const scrollToMethod = () => {
    const methodSection = document.getElementById('masd-conteudo');
    if (methodSection) {
      methodSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-background pt-8 pb-16 px-4 md:px-8 text-center">
      <div className="container max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-foreground">
          Supere o medo de dirigir e <span className="text-accent-gold">conquiste sua liberdade no volante.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground">
          Se só a prática resolvesse você já estaria dirigindo! Cuide do seu emocional, com um método validado, 100% online, acessível e com transformação garantida.
        </p>

        <button 
          onClick={scrollToMethod}
          className="mt-8 inline-block px-10 py-4 bg-accent-green-dark text-accent-gold font-extrabold text-xl rounded-lg shadow-xl hover:bg-accent-green-dark/90 transition duration-300 transform hover:scale-[1.02] uppercase"
        >
          Quero vencer o medo de dirigir agora.
        </button>
        
        <p className="text-sm text-muted-foreground">
          Acesso imediato e 7 dias de garantia incondicional.
        </p>
      </div>
    </section>
  );
};

export default Hero;
