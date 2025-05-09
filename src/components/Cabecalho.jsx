import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Removido: import { useLazyLoad } from "./LazyLoadContext";

export function Cabecalho() {
  // Removido: const { lazyLoadAndScrollTo } = useLazyLoad();

  // --- Lógica para detectar o tamanho da janela ---
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const MOBILE_BREAKPOINT = 480; // Defina seu breakpoint para mobile

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

  const isMobile = windowWidth <= MOBILE_BREAKPOINT;

  // --- Lógica para o menu hambúrguer ---
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar se o menu mobile está aberto

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // --- Efeito para fechar o menu no scroll (Mantido) ---
  useEffect(() => {
    const handleScroll = () => {
      // Fecha o menu apenas se estiver em mobile E o menu estiver aberto
      if (isMobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Função de limpeza: remove o listener quando o componente desmonta
    // ou quando as dependências (isMobile, isMenuOpen) mudam.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, isMenuOpen]); // Depende de isMobile e isMenuOpen para ter os valores atualizados no handler

  // Removido: Lógica de Lazy Load / Scroll (clickedSections, disabledClicks, handleClick)
  // Removido: Função para fechar o menu mobile ao clicar em um Link do React Router (handleLinkClick)

  return (
    <section className="header">
      <div className="cabecalho">
        <div className="navegacao">
          <div className="cabecalho__logo--img">
            <a href="/">
              <img src="src/assets/images/logo_bgoff_pq.png" alt="Logotipo" />
            </a>
          </div>

          {/* Renderiza o menu hambúrguer APENAS em telas pequenas */}
          {isMobile && (
            <div
              className={`hamburger-icon ${isMenuOpen ? "is-active" : ""}`}
              onClick={toggleMenu}
              // Adicionar atributos ARIA para acessibilidade
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label="Abrir/Fechar Menu de Navegação"
            >
              {/* Ícone de hambúrguer */}
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          )}

          {/*
            Renderiza o menu de navegação:
            - Sempre se NÃO for mobile (!isMobile)
            - Apenas se for mobile E o menu estiver aberto (isMobile && isMenuOpen)
          */}
          {(isMobile && isMenuOpen) || !isMobile ? (
            <div
              id="mobile-menu" // ID para o aria-controls do hamburger
              className={`menu ${isMobile ? "menu--mobile" : ""} ${
                isMenuOpen ? "menu--open" : ""
              }`}
              // Adicionar atributo ARIA role="navigation"
              role="navigation"
            >
              <nav>
                <ul className="menu-up">
                  <li>
                    {/* Link interno para ID - Usará scroll nativo do navegador */}
                    {/* Adiciona a lógica para fechar o menu ao clicar */}
                    <a
                      href="/#SobreMim"
                      onClick={() => {
                        if (isMobile && isMenuOpen) {
                          setIsMenuOpen(false);
                        }
                      }}
                    >
                      Sobre Mim
                    </a>
                  </li>
                  <li>
                    {/* Link interno para ID - Usará scroll nativo do navegador */}
                    {/* Adiciona a lógica para fechar o menu ao clicar */}
                    <a href="/meuportifolio">Portifólio</a>
                  </li>
                  <li>
                    {/* Link para rotas internas do React Router */}
                    {/* Ao clicar, feche o menu mobile se estiver aberto */}
                    <Link
                      to="/lab"
                      onClick={() => {
                        if (isMobile && isMenuOpen) {
                          setIsMenuOpen(false);
                        }
                      }}
                      className="nav-link" // Adicione uma classe para estilizar como link de navegação
                    >
                      LAB
                    </Link>
                  </li>
                  <li>
                    {/* Link interno para ID - Usará scroll nativo do navegador */}
                    {/* Adiciona a lógica para fechar o menu ao clicar */}
                    <a href="/Contato">Contato</a>
                  </li>
                </ul>
              </nav>
            </div>
          ) : null}

          {/* Este div <div></div> extra pode ser um placeholder ou precisa de ajuste no layout CSS */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
