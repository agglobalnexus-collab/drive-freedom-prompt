const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">
            Método <span className="text-accent">MASD</span>
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Supere o medo de dirigir e conquiste sua liberdade no volante
          </p>
          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Método MASD - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
