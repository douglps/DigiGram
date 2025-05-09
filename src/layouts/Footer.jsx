import React from "react";

// Importe as imagens necessárias para o footer
import linkedinIcon from "../assets/images/socials/linkedin.svg"; // Caminho relativo de src/components/
import emailIcon from "../assets/images/socials/email-br.svg"; // Caminho relativo de src/components/
import githubIcon from "../assets/images/socials/github-br.svg"; // Caminho relativo de src/components/
import spotifyIcon from "../assets/images/utils/spotify.svg"; // Caminho relativo de src/components/

export default function Footer() {
  return (
    <section className="footer">
      <div className="rodape__container">
        <div className="rodape__cta">
          {/* Ajuste o href para o destino correto, ou remova se não tiver destino */}
          {/* Exemplo: <a href="mailto:seuemail@example.com"> ou <a href="https://seusite.com/contato"> */}
          <p>
            <a href="#">Quero meu site na web!</a>
          </p>{" "}
          {/* Alterado para # como placeholder */}
        </div>
        <div className="social__container">
          <div className="socials">
            {/* Mude o href para o URL do seu perfil LinkedIn */}
            <a
              href="https://www.linkedin.com/in/seu-perfil-do-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon} // Use a variável importada
                alt="Perfil LinkedIn" // Alt texto mais específico
                loading="lazy"
              />
              LinkedIn
            </a>
          </div>
          <div className="socials">
            {/* Mude o href para um link mailto: */}
            <a
              href="mailto:seu-email@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={emailIcon} // Use a variável importada
                alt="Enviar E-mail" // Alt texto mais específico
                loading="lazy"
              />{" "}
              E-mail
            </a>
          </div>
          <div className="socials">
            {/* Link externo para GitHub - manter <a> */}
            <a
              href="https://github.com/douglps"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {/* Adicionado noreferrer */}
              <img
                src={githubIcon} // Use a variável importada
                alt="GitHub Profile DougLps" // Alt texto mais específico
                loading="lazy"
              />{" "}
              GitHub
            </a>
          </div>
          <div className="socials">
            {/* Link externo para Spotify - manter <a> */}
            {/* **CORRIJA ESTE HREF para o URL real da sua playlist/perfil Spotify** */}
            <a
              href="https://open.spotify.com/user/seu-usuario-spotify" // Exemplo de formato de URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={spotifyIcon} // Use a variável importada
                alt="Playlist Spotify" // Alt texto mais específico
                loading="lazy"
              />{" "}
              Spotify
            </a>
          </div>
        </div>
        <div className="copyright">
          <div>
            {/* Ajuste o ano conforme necessário, ou torne-o dinâmico */}
            <p>Todos os direitos reservados. © 2025 - Douglas Lopes</p>
          </div>
          <div>
            <span className="version">V.1.0.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
