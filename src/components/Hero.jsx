import Typewriter from "./Typewriter";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="me_container">
          <div id="me">
            <h1>Douglas Lopes</h1>
            <img src="src/assets/images/avatar.png" alt="" />
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
        </div>
      </div>
    </section>
  );
}
