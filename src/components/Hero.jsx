export function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="me_container">
          <div id="me">
            <h1>Douglas Lopes</h1>
            <img src="src/assets/images/img.jpg" alt="" />
          </div>
          <div id="dev">
            <h2>Desenvolvedor Front-End</h2>
          </div>
        </div>
        <div className="hero__container2">
          <div className="hero__container-text">
            Sou{" "}
            <span className="hero__container--highlight">
              Desenvolvedor Full-Stack com foco em criar experiências Front-End
            </span>{" "}
            que unem lógica e beleza.
            <br />{" "}
            <span className="hero__container--highlight">
              Cada projeto é um convite à expressão{" "}
            </span>{" "}
            — onde a estética encontra a estrutura, e a interação ganha alma.
            Cores, formas, emoções e intenções se traduzem em telas que
            respondem, comunicam e provocam. Este é o espaço onde o código se
            transforma em sensação.{" "}
            <span className="hero__container--highlight">
              Continue, e descubra até onde podemos ir.
            </span>
          </div>
          <div className="hero__container--skills">
            <div className="hero__container--imgbg">
              <img
                className="skills-icon"
                src="src/assets/images/skills/sass.svg"
              />
            </div>
            <div className="hero__container--imgbg">
              <img
                className="skills-icon"
                src="src/assets/images/skills/html5.svg"
              />
            </div>
            <div className="hero__container--imgbg">
              <img
                className="skills-icon"
                src="src/assets/images/skills/react.svg"
                alt=""
              />
            </div>
            <div className="hero__container--imgbg">
              <img
                className="skills-icon"
                src="src/assets/images/skills/python-dark.svg"
                alt=""
              />
            </div>
            <div className="hero__container--imgbg">
              <img
                className="skills-icon"
                src="src/assets/images/skills/javascript.svg"
                alt=""
              />
            </div>
            <div className="hero__container--imgbg">
              <img
                className="skills-icon"
                src="src/assets/images/skills/java-dark.svg"
                alt=""
              />
            </div>
            <div className="hero__container--imgbg">
              <img
                className="skills-icon"
                src="src/assets/images/skills/nodejs.svg"
                alt=""
              />
            </div>
            <div className="hero__container--imgbg">
              <img
                className="skills-icon"
                src="src/assets/images/skills/css.svg"
                alt=""
              />
            </div>
            <div className="hero__container--imgbg">
              <img
                className="skills-icon"
                src="src/assets/images/skills/tailwind.svg"
                alt=""
              />
            </div>
            <div className="hero__container--imgbg">
              <img
                className="skills-icon"
                src="src/assets/images/skills/figma.svg"
                alt=""
              />
            </div>
            <div className="hero__container--imgbg">
              <img
                className="skills-icon"
                src="src/assets/images/skills/php.svg"
                alt=""
              />
            </div>

            <div className="bar"></div>
            <div className="meu-icone-exemplo">
              <img
                className="elemento-circulo"
                src="src/assets/images/skills/JavaScript-logo.png"
                alt=""
              />
            </div>
            <div>
              <button className="botao">Clique Aqui</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
