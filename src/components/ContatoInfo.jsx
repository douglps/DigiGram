import { FormularioContato } from "./FormularioContato";
// Importe as imagens dos ícones sociais
import whatsappIcon from "../assets/images/socials/whatsapp.svg"; // Caminho relativo de src/components/ para src/assets/images/socials/
import emailIcon from "../assets/images/socials/email.svg"; // Caminho relativo de src/components/ para src/assets/images/socials/
import linkedinIcon from "../assets/images/socials/linkedin.svg"; // Caminho relativo de src/components/ para src/assets/images/socials/

export function ContatoInfo() {
  return (
    <section className="contato">
      <div className="contate-me">
        <img
          className="socials-contato"
          src={whatsappIcon} // Use a variável importada
          alt="WhatsApp"
          title="WhatsApp"
        />
        <img
          className="socials-contato"
          src={emailIcon} // Use a variável importada
          alt="E-mail"
          title="E-mail"
        />
        <img
          className="socials-contato"
          src={linkedinIcon} // Use a variável importada
          alt="LinkedIn"
          title="LinkedIn"
        />
        <FormularioContato />
      </div>
      <div className="maps">
        <iframe
          // Verifique se este src do iframe é o correto para o seu mapa.
          // Ele parece ser um placeholder ou um URL genérico que pode não funcionar.
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220896.07344905447!2d-51.34195636499523!3d-30.10847014460951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199cd2566acb1d%3A0x603111a89f87e91f!2sPorto%20Alegre%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1746813056626!5m2!1spt-BR!2sbr"
          width="300"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
