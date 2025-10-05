const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-foreground text-muted-foreground border-t border-border">
      <div className="container max-w-7xl mx-auto text-center text-sm space-y-2">
        <p>&copy; 2025 Método MASD - Márcia Mattos. Todos os direitos reservados.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-background transition">Política de Privacidade</a>
          <span className="text-muted-foreground/50">|</span>
          <a href="#" className="hover:text-background transition">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
