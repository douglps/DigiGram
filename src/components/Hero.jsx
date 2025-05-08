import { useEffect, useState } from "react";

export function Hero() {
  const [showMessage, setShowMessage] = useState(false);
  const [hideLoading, setHideLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoading(true); // Esconde o loading
      setShowMessage(true); // Mostra a mensagem
    }, 1500); // Ajuste o tempo para o fim da animação

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="SobreMim">
      <div className="hero__container">
        <div className="dobra"></div>
        <div className="me__container">
          <div className="me__container--foto">
            <h1>Douglas Lopes</h1>
            <img
              src="src/assets/images/avatar.png"
              alt="Avatar de Douglas Lopes"
            />
            <div className="maior-que">
              <img
                src="src/assets/images/compressed_images/code-3maior-que-min.png"
                alt=""
              />
            </div>
          </div>
          <div className="dev">
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
            <p>
              <span className="hero__container--highlight">
                Cada projeto é um convite à expressão
              </span>{" "}
              - onde a estética encontra a estrutura, e a interação ganha alma.
              Cores, formas, emoções e intenções se traduzem em telas que
              respondem, comunicam e provocam. Este é o espaço onde o código se
              transforma em sensação.{" "}
              <span className="hero__container--highlight">
                Continue e descubra até onde podemos ir.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
