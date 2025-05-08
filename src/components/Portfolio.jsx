export default function Portfolio() {
  return (
    <section className="portfolio" id="Portifolio">
      <div className="meu-portfolio" id="#portfolio">
        Portifólio
      </div>
      <div className="container">
        <div className="overlay"></div>
        <div className="grid grid--portfolio" id="portfolio">
          <div className="portfolio--img">
            <a href="">
              <img
                src="src/assets/images/compressed_images/thumb-portfolio-min.png"
                alt="Portifólio"
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
              <div className="cabecalho__skills">Tecnologias Utilizadas:</div>
              <div className="grid__portfolio--skills">
                <div className="skill-portfolio">
                  <img src="src/assets/images/skills/html5.svg" alt="HTML5" />
                </div>
                <div className="skill-portfolio">
                  <img src="src/assets/images/skills/css.svg" alt="CSS" />
                </div>
                <div className="skill-portfolio">
                  <img src="src/assets/images/skills/sass.svg" alt="SASS" />
                </div>
                <div className="skill-portfolio">
                  <img
                    src="src/assets/images/skills/javascript.svg"
                    alt="JavaScript"
                  />
                </div>
                <div className="skill-portfolio">
                  <img src="src/assets/images/skills/react.svg" alt="React" />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
