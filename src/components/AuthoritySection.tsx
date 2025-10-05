import { Check } from "lucide-react";

const AuthoritySection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container max-w-4xl mx-auto md:flex md:items-center md:space-x-8">
        <div className="md:w-1/3 mb-6 md:mb-0 flex-shrink-0">
          <img 
            src="https://clinicasuperedirigindo.com.br/wp-content/uploads/2024/12/WhatsApp-Image-2024-11-15-at-13.31.30.jpeg" 
            alt="Foto de Márcia Mattos, Psicóloga Clínica" 
            className="w-48 h-48 mx-auto md:w-full md:h-auto rounded-full object-cover border-4 border-accent-gold shadow-2xl"
          />
        </div>

        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Quem está por trás do Método MASD?
          </h2>
          <p className="text-xl font-semibold text-muted-foreground mb-4">
            Eu sou a <strong>Márcia Mattos</strong>, psicóloga clínica com anos de experiência em tratamentos de ansiedade e fobias.
          </p>
          <ul className="space-y-3 text-lg text-muted-foreground">
            <li className="flex items-center justify-center md:justify-start">
              <Check className="text-accent-green-dark mr-3 flex-shrink-0" />
              Psicóloga especializada em <span className="font-bold text-accent-gold ml-1">medo e ansiedade</span>.
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Check className="text-accent-green-dark mr-3 flex-shrink-0" />
              Criadora do <span className="font-bold text-accent-gold ml-1">MASD</span> (Método de Autossuperação no Dirigir).
            </li>
            <li className="text-lg font-bold text-foreground mt-4">
              <span className="text-accent-green-dark font-extrabold">Método Comprovado:</span>
              {" "}Validado em atendimentos presenciais que custavam <span className="text-accent-gold">R$1.350,00</span>. Agora, totalmente online e acessível.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
