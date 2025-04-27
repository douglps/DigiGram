import { useEffect, useState } from "react";

export function Hero() {
  const [showMessage, setShowMessage] = useState(false);
  const [hideLoading, setHideLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoading(true); // Esconde o loading
      setShowMessage(true); // Mostra a mensagem
    }, 5000); // Ajuste o tempo para o fim da animação

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="SobreMim">
      <div className="hero__container">
        <div className="me_container">
          <div id="me">
            <h1>Douglas Lopes</h1>
            <img
              src="src/assets/images/avatar.png"
              alt="Avatar de Douglas Lopes"
            />
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
            <p>
              <span className="hero__container--highlight">
                Cada projeto é um convite à expressão
              </span>{" "}
              — onde a estética encontra a estrutura, e a interação ganha alma.
              Cores, formas, emoções e intenções se traduzem em telas que
              respondem, comunicam e provocam. Este é o espaço onde o código se
              transforma em sensação.{" "}
              <span className="hero__container--highlight">
                Continue, e descubra até onde podemos ir.
              </span>
            </p>
          </div>

          <div className="msg-cta-pai">
            {!hideLoading && (
              <div
                className="loading"
                style={{ animation: "rotate 5s linear" }}
              >
                <img src="src/assets/images/utils/loading.svg" alt="Loading" />
              </div>
            )}
            <div
              className="msg-cta"
              style={{
                visibility: showMessage ? "visible" : "hidden",
                opacity: showMessage ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            >
              <p>
                O próximo grande projeto pode começar com uma simples conversa.
              </p>
              <div className="msg-cta--btn">Vamos Conversar!</div>
              <div className="check-all">
                <img
                  src="src/assets/images/utils/check-all.svg"
                  alt="Check all"
                />
              </div>
              <div className="seta-msg">
                <img src="src/assets/images/seta-msg.png" alt="Seta mensagem" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dot">
        .........................................................................
      </div>
    </section>
  );
}
