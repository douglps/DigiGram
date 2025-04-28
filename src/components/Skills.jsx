import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export function Skills() {
  const [openDiv, setOpenDiv] = useState(null);
  const handleButtonClick = (divName) => {
    if (openDiv === divName) {
      setOpenDiv(null);
    } else {
      setOpenDiv(divName);
    }
  };

  return (
    <section className="skills" id="Skills">
      <div className="abas__container">
        <div
          className="abas__container--back"
          onClick={() => handleButtonClick(1)}
        >
          Back-End
        </div>
        <div
          className="abas__container--front"
          onClick={() => handleButtonClick(2)}
        >
          Front-End
        </div>
        <div
          className="abas__container--ux_ui"
          onClick={() => handleButtonClick(3)}
        >
          UI/UX - DESIGN
        </div>
        <div
          className="abas__container--ferramentas"
          onClick={() => handleButtonClick(4)}
        >
          FERRAMENTAS
        </div>
      </div>
      <div
        className={`abas-more collapsible ${openDiv === 1 ? "is-open" : ""}`}
      >
        <p>
          Aqui reside a inteligência e a estrutura que opera nos bastidores. É o
          motor que processa dados, gerencia informações e garante que tudo
          funcione de forma segura e confiável. A essência de todo o
          funcionamento de qualquer aplicação está no Back-End.{" "}
        </p>
        <div className="citacao">
          "A arte de programar consiste em organizar e dominar a complexidade."
          <br /> -Edsger W. Dijkstra
        </div>
      </div>
      <div
        className={`abas-more collapsible ${openDiv === 2 ? "is-open" : ""}`}
      >
        <p>
          É a camada que ganha vida nos navegadores, a interface onde todos
          usuários, assim como você neste momento, se conectam diretamente com o
          conteúdo. O Front-End é incrivelmente a vitrine, o ambiente e o elo de
          toda a interação do site com o utilizador.
        </p>
        <div className="citacao">
          "Você nunca terá uma segunda chance de causar uma primeira impressão
          forte."
          <br />- Will Rogers
        </div>
      </div>
      <div
        className={`abas-more collapsible ${openDiv === 3 ? "is-open" : ""}`}
      >
        <p>
          Da prancheta digital à implementação final, esta área é sobre a
          harmonia entre estética, usabilidade e a identidade da sua marca. a UI
          (<i>User Interface</i>) e a UX (<i>User Experience</i>) sintetizam a
          percepção do usuário no front-end junto ao inteligência do back-end
          para proporcionar experiências agradáveis.
        </p>
        <div className="citacao">
          "Design não é apenas o que parece e o que se sente. Design é como
          funciona."
          <br />
          -Steve Jobs
        </div>
      </div>
      <div
        className={`abas-more collapsible ${openDiv === 4 ? "is-open" : ""}`}
      >
        <p>
          Construir projetos digitais exige mais do que apenas linguagens de
          programação. O uso estratégico destas ferramentas não é opcional; são
          requisitos fundamentais que garantem a construção sólida, a manutenção
          eficiente, o controle e a organização impecável dos projetos desde o
          primeiro clique até a entrega e além.
        </p>
        <div className="citacao">
          "A estratégia sem tática é o caminho mais lento para a vitória. Tática
          sem estratégia é o ruído antes da derrota."
          <br />- Sun Tzu
        </div>
      </div>
      <div className="skills__container">
        {/* Swiper JS */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          className="skills-swiper"
        >
          {/* Front-end Container */}
          <SwiperSlide>
            <div className="front-end__container">
              <div>FRONT-END</div>
              <div className="front-end__container--content">
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/html5.svg"
                        alt="HTML 5"
                      />
                    </div>
                  </div>
                  <div>HTML 5</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/css.svg"
                        alt="CSS 3"
                      />
                    </div>
                  </div>
                  <div>Css 3</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/javascript.svg"
                        alt="JavaScript"
                      />
                    </div>
                  </div>
                  JavaScript
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/react.svg"
                        alt="HTML5"
                      />
                    </div>
                  </div>
                  <div>React JS</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/tailwind.svg"
                        alt="Tailwind CSS"
                      />
                    </div>
                  </div>
                  <div>Tailwind CSS</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/bootstrap.svg"
                        alt="Bootstrap"
                      />
                    </div>
                  </div>
                  <div>Bootstrap</div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Back-end Container */}
          <SwiperSlide>
            <div className="back-end__container">
              <div>BACK-END</div>
              <div className="back-end__container--content">
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/nodejs.svg"
                        alt="Node JS"
                      />
                    </div>
                  </div>
                  <div>Node JS</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/php.svg"
                        alt="PHP"
                      />
                    </div>
                  </div>
                  <div>PHP</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/java-dark.svg"
                        alt="Java"
                      />
                    </div>
                  </div>
                  <div>Java</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/python.svg"
                        alt="Python"
                      />
                    </div>
                  </div>
                  <div>Python</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        id="json"
                        src="src/assets/images/skills/json.svg"
                        alt="JSON"
                      />
                    </div>
                  </div>
                  <div>JSON</div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* UX/UI Container */}
          <SwiperSlide>
            <div className="ux-ui__container">
              <div>UX/UI - DESIGN</div>
              <div className="ux-ui__container--content">
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/sass.svg"
                        alt="Sass"
                      />
                    </div>
                  </div>
                  <div>Sass</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/figma.svg"
                        alt="Figma"
                      />
                    </div>
                  </div>
                  <div>Figma</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/canva.svg"
                        alt="Canva"
                      />
                    </div>
                  </div>
                  <div>Canva</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/krita.svg"
                        alt="Krita"
                      />
                    </div>
                  </div>
                  <div>Krita</div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Ferramentas */}
          <SwiperSlide>
            <div className="ferramentas__container">
              <div>FERRAMENTAS</div>
              <div className="ferramentas__container--content">
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/git.svg"
                        alt="Git"
                      />
                    </div>
                  </div>
                  <div>Git</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/github.svg"
                        alt="GitHub"
                      />
                    </div>
                  </div>
                  <div>GitHub</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/windows.svg"
                        alt="Windows"
                      />
                    </div>
                  </div>
                  <div>Windows</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        id="npm"
                        src="src/assets/images/skills/npm.svg"
                        alt="npm"
                      />
                    </div>
                  </div>
                  <div>npm</div>
                </div>
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src="src/assets/images/skills/vite.svg"
                        alt="Vite"
                      />
                    </div>
                  </div>
                  <div>Vite</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
