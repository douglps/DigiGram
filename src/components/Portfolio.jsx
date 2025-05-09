import React from "react";

// Importe as imagens necessárias
import thumbPortfolioImage from "../assets/images/compressed_images/thumb-portfolio-min.png"; // Caminho relativo de src/components/

// Importe os ícones de skills
import html5Icon from "../assets/images/skills/html5.svg";
import cssIcon from "../assets/images/skills/css.svg";
import sassIcon from "../assets/images/skills/sass.svg";
import javascriptIcon from "../assets/images/skills/javascript.svg";
import reactIcon from "../assets/images/skills/react.svg";
import gitIcon from "../assets/images/skills/git.svg";
import windowsIcon from "../assets/images/skills/windows.svg";
import vscodeIcon from "../assets/images/skills/vs-code.svg";

export default function Portfolio() {
  return (
    <section className="portfolio" id="Portifolio">
      {/* Removido o ID duplicado "#portfolio" - o primeiro div pode ter o ID "portfolio" se necessário, mas não deve ser "#portfolio" */}
      {/* Considere usar um ID diferente aqui se precisar referenciar este div especificamente */}
      {/* Se o texto "Portifólio" for o target, o ID deveria estar nele ou em um elemento pai próximo */}
      <div className="meu-portfolio">Portifólio</div>
      <div className="container">
        <div className="overlay"></div>
        {/* Removido o ID duplicado "portfolio" neste grid */}
        <div className="grid grid--portfolio">
          <div className="portfolio--img">
            {/* Ajuste o href se houver um link específico para este projeto */}
            {/* Se o link não tiver destino, remova a tag <a> ou use href="#" como placeholder */}
            <a href="#">
              {" "}
              {/* Exemplo com placeholder #, ajuste conforme necessário */}
              <img
                src={thumbPortfolioImage} // Use a variável importada
                alt="Portifólio" // Considere um alt mais descritivo
              />
            </a>
          </div>
          <div className="portfolio--texto">
            <p className="portfolio--titulo">DigiGram</p>
            <p>
              De layout simples a portfólio completo. O DigiGram começou como um
              pequeno projeto de layout para testar ideias de design. Com o
              tempo, fui aprimorando a estrutura, aplicando boas práticas de
              UI/UX e incluindo recursos modernos. O que era apenas um
              experimento acabou se tornando meu portfólio principal —
              funcional, responsivo e alinhado com meu estilo profissional.
            </p>
            <div className="container__skills">
              <div className="cabecalho__skills">
                Principais Tecnologias Utilizadas:
              </div>
              <div className="grid__portfolio--skills">
                <div className="skill-portfolio">
                  <img src={html5Icon} alt="HTML5" />{" "}
                  {/* Use a variável importada */}
                </div>
                <div className="skill-portfolio">
                  <img src={cssIcon} alt="CSS" />{" "}
                  {/* Use a variável importada */}
                </div>
                <div className="skill-portfolio">
                  <img src={sassIcon} alt="SASS" />{" "}
                  {/* Use a variável importada */}
                </div>
                <div className="skill-portfolio">
                  <img
                    src={javascriptIcon} // Use a variável importada
                    alt="JavaScript"
                  />
                </div>
                <div className="skill-portfolio">
                  <img src={reactIcon} alt="React" />{" "}
                  {/* Use a variável importada */}
                </div>
                <div className="skill-portfolio">
                  <img src={gitIcon} alt="Git" />{" "}
                  {/* Use a variável importada */}
                </div>
                <div className="skill-portfolio">
                  <img
                    src={windowsIcon} // Use a variável importada
                    alt="Windows"
                  />
                </div>
                <div className="skill-portfolio">
                  <img
                    src={vscodeIcon} // Use a variável importada
                    alt="Visual Studio Code"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Este div parece estar vazio, ajuste seu layout CSS ou remova se não for necessário */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
