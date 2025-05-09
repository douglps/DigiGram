import React, { useState, useEffect } from "react"; // Importe useEffect
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export function Skills() {
  // Estado para controlar qual aba de conteúdo extra está aberta
  const [openDiv, setOpenDiv] = useState(null);

  // --- Lógica para detectar o tamanho da janela ---
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Função de limpeza para remover o listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Executa apenas na montagem e desmontagem

  // --- Lógica para os botões das abas ---
  const handleButtonClick = (divName) => {
    if (openDiv === divName) {
      setOpenDiv(null);
    } else {
      setOpenDiv(divName);
    }
  };

  // --- Textos das abas (longo e curto) ---
  const abasTextContent = {
    1: {
      // BACK-END
      long: "BACK-END",
      short: "BACK", // Texto curto para telas pequenas
    },
    2: {
      // FRONT-END
      long: "FRONT-END",
      short: "FRONT", // Texto curto
    },
    3: {
      // UI/UX - DESIGN
      long: "UI/UX - DESIGN",
      short: "DESIGN", // Texto curto
    },
    4: {
      // FERRAMENTAS
      long: "FERRAMENTAS",
      short: "FERRAM.", // Texto curto
    },
  };

  // --- Variável booleana para verificar se é tela pequena ---
  const isSmallScreen = windowWidth <= 480;

  // --- Dados das skills (mantidos do seu código) ---
  const skills = [
    // Front-end ************************************
    {
      src: "src/assets/images/skills/html5.svg",
      alt: "HTML 5",
      name: "HTML 5",
    },
    { src: "src/assets/images/skills/css.svg", alt: "CSS 3", name: "CSS 3" },
    {
      src: "src/assets/images/skills/javascript.svg",
      alt: "JavaScript",
      name: "JavaScript",
    },
    {
      src: "src/assets/images/skills/react.svg",
      alt: "React",
      name: "React",
    },
    {
      src: "src/assets/images/skills/tailwind.svg",
      alt: "Tailwind CSS",
      name: "Tailwind CSS",
    },
    {
      src: "src/assets/images/skills/bootstrap.svg",
      alt: "Bootstrap",
      name: "Bootstrap",
    },
    // Back-end *********************************
    {
      src: "src/assets/images/skills/python.svg",
      alt: "Python",
      name: "Python",
    },
    {
      src: "src/assets/images/skills/java-dark.svg",
      alt: "Java",
      name: "Java",
    },
    {
      src: "src/assets/images/skills/nodejs.svg",
      alt: "Node.Js",
      name: "Node.Js",
    },
    {
      src: "src/assets/images/skills/json.svg",
      alt: "JSON",
      name: "JSON",
    },
    // UI/UX *********************************
    {
      src: "src/assets/images/skills/figma.svg",
      alt: "Figma",
      name: "Figma",
    },
    {
      src: "src/assets/images/skills/canva.svg",
      alt: "Canva",
      name: "Canva",
    },
    {
      src: "src/assets/images/skills/krita.svg",
      alt: "Krita",
      name: "Krita",
    },
    // Ferramentas *********************************
    {
      src: "src/assets/images/skills/git.svg",
      alt: "Git",
      name: "Git",
    },
    {
      src: "src/assets/images/skills/github.svg",
      alt: "GitHub",
      name: "GitHub",
    },
    {
      src: "src/assets/images/skills/windows.svg",
      alt: "Windows",
      name: "Windows",
    },
    {
      src: "src/assets/images/skills/npm.svg",
      alt: "npm",
      name: "npm",
    },
    {
      src: "src/assets/images/skills/vite.svg",
      alt: "Vite",
      name: "Vite",
    },
    {
      src: "src/assets/images/skills/firebase.PNG",
      alt: "Firebase",
      name: "Firebase",
    },
  ];

  return (
    <section className="skills" id="Skills">
      <div className="abas__container">
        {/* Aplicando renderização condicional para o texto */}
        <div
          className="abas__container--back"
          onClick={() => handleButtonClick(1)}
        >
          {isSmallScreen ? abasTextContent[1].short : abasTextContent[1].long}
        </div>
        <div
          className="abas__container--front"
          onClick={() => handleButtonClick(2)}
        >
          {isSmallScreen ? abasTextContent[2].short : abasTextContent[2].long}
        </div>
        <div
          className="abas__container--ux_ui"
          onClick={() => handleButtonClick(3)}
        >
          {isSmallScreen ? abasTextContent[3].short : abasTextContent[3].long}
        </div>
        <div
          className="abas__container--ferramentas"
          onClick={() => handleButtonClick(4)}
        >
          {isSmallScreen ? abasTextContent[4].short : abasTextContent[4].long}
        </div>
      </div>

      {/* Conteúdo extra das abas (mantido) */}
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

      {/* Container do Swiper (mantido) */}
      <div className="skills__container">
        <Swiper
          modules={[Autoplay, Navigation, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={6}
          navigation
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          className="skills-swiper"
          breakpoints={{
            // when window width is >= 0px
            300: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
            481: {
              // Note: Este breakpoint começa em 481px, então 480px cairá no breakpoint anterior (320px)
              slidesPerView: 4,
              spaceBetween: 120,
            },
            // when window width is >= 768px (example breakpoint)
            768: {
              slidesPerView: 6,
              spaceBetween: 80,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 60,
            },
          }}
        >
          {/* Slides do Swiper */}
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="skills__container--content">
                <div className="skill">
                  <div className="skills-icon--fundo-animado">
                    <div className="skills-icon--fundo">
                      <img
                        className="skills-icon"
                        src={skill.src}
                        alt={skill.alt}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="skill--nome">{skill.name}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
