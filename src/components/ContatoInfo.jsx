import { FormularioContato } from "./FormularioContato";

export function ContatoInfo() {
  return (
    <section className="contato">
      <div className="contate-me">
        <img
          className="socials-contato"
          src="src/assets/images/socials/whatsapp.svg"
          alt="WhatsApp"
          title="WhatsApp"
        />
        <img
          className="socials-contato"
          src="src/assets/images/socials/email.svg"
          alt="E-mail"
          title="E-mail"
        />
        <img
          className="socials-contato"
          src="src/assets/images/socials/linkedin.svg"
          alt="LinkedIn"
          title="LinkedIn"
        />
        <FormularioContato />
      </div>
      <div className="maps">
        <iframe
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
