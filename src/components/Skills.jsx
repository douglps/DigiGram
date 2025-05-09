import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// Importe todos os ícones de skills individualmente
import html5Icon from "../assets/images/skills/html5.svg"; // Caminho relativo de src/components/ para src/assets/images/skills/
import cssIcon from "../assets/images/skills/css.svg";
import javascriptIcon from "../assets/images/skills/javascript.svg";
import reactIcon from "../assets/images/skills/react.svg";
import tailwindIcon from "../assets/images/skills/tailwind.svg";
import bootstrapIcon from "../assets/images/skills/bootstrap.svg";
import pythonIcon from "../assets/images/skills/python.svg";
import javaIcon from "../assets/images/skills/java-dark.svg";
import nodejsIcon from "../assets/images/skills/nodejs.svg";
import jsonIcon from "../assets/images/skills/json.svg";
import figmaIcon from "../assets/images/skills/figma.svg";
import canvaIcon from "../assets/images/skills/canva.svg";
import kritaIcon from "../assets/images/skills/krita.svg";
import gitIcon from "../assets/images/skills/git.svg";
import githubIcon from "../assets/images/skills/github.svg";
import windowsIcon from "../assets/images/skills/windows.svg";
import npmIcon from "../assets/images/skills/npm.svg";
import viteIcon from "../assets/images/skills/vite.svg";
// Verifique a capitalização do arquivo .PNG
import firebaseIcon from "../assets/images/skills/firebase.PNG"; // Certifique-se que o nome do arquivo e extensão correspondem exatamente

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

  // --- Dados das skills (use as variáveis importadas) ---
  const skills = [
    // Front-end ************************************
    {
      src: html5Icon, // Use a variável importada
      alt: "HTML 5",
      name: "HTML 5",
    },
    { src: cssIcon, alt: "CSS 3", name: "CSS 3" }, // Use a variável importada
    {
      src: javascriptIcon, // Use a variável importada
      alt: "JavaScript",
      name: "JavaScript",
    },
    {
      src: reactIcon, // Use a variável importada
      alt: "React",
      name: "React",
    },
    {
      src: tailwindIcon, // Use a variável importada
      alt: "Tailwind CSS",
      name: "Tailwind CSS",
    },
    {
      src: bootstrapIcon, // Use a variável importada
      alt: "Bootstrap",
      name: "Bootstrap",
    },
    // Back-end *********************************
    {
      src: pythonIcon, // Use a variável importada
      alt: "Python",
      name: "Python",
    },
    {
      src: javaIcon, // Use a variável importada
      alt: "Java",
      name: "Java",
    },
    {
      src: nodejsIcon, // Use a variável importada
      alt: "Node.Js",
      name: "Node.Js",
    },
    {
      src: jsonIcon, // Use a variável importada
      alt: "JSON",
      name: "JSON",
    },
    // UI/UX *********************************
    {
      src: figmaIcon, // Use a variável importada
      alt: "Figma",
      name: "Figma",
    },
    {
      src: canvaIcon, // Use a variável importada
      alt: "Canva",
      name: "Canva",
    },
    {
      src: kritaIcon, // Use a variável importada
      alt: "Krita",
      name: "Krita",
    },
    // Ferramentas *********************************
    {
      src: gitIcon, // Use a variável importada
      alt: "Git",
      name: "Git",
    },
    {
      src: githubIcon, // Use a variável importada
      alt: "GitHub",
      name: "GitHub",
    },
    {
      src: windowsIcon, // Use a variável importada
      alt: "Windows",
      name: "Windows",
    },
    {
      src: npmIcon, // Use a variável importada
      alt: "npm",
      name: "npm",
    },
    {
      src: viteIcon, // Use a variável importada
      alt: "Vite",
      name: "Vite",
    },
    {
      src: firebaseIcon, // Use a variável importada
      alt: "Firebase",
      name: "Firebase",
    },
  ];

  return (
    <section className="skills" id="Skills">
      {" "}
      {/* Este é um ID de âncora */}
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
                        src={skill.src} // Aqui já usa skill.src, que agora será a variável importada
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
