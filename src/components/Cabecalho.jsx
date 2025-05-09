import React, { useState, useEffect } from "react";
// Importe Link do react-router-dom
import { Link } from "react-router-dom";
// Removido: import { useLazyLoad } from "./LazyLoadContext";

// Importe a imagem do logotipo
import logoImage from "../assets/images/logo_bgoff_pq.png"; // Ajuste o caminho se o arquivo Cabecalho.jsx não estiver na mesma pasta que assets

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

  // Função para fechar o menu (usada em links clicáveis no mobile)
  const closeMenu = () => {
    if (isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
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
            {/* Use Link para navegar para a rota raiz "/" */}
            {/* Ao clicar, feche o menu mobile se estiver aberto */}
            <Link to="/" onClick={closeMenu}>
              {/* Use a variável importada para o src da imagem */}
              <img src={logoImage} alt="Logotipo" />
            </Link>
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
                    {/* Use apenas "#SobreMim" como href para rolar na página atual */}
                    {/* Adiciona a lógica para fechar o menu ao clicar */}
                    <a
                      href="#SobreMim"
                      onClick={closeMenu} // Chame a função simplificada
                    >
                      Sobre Mim
                    </a>
                  </li>
                  <li>
                    {/* Mude para Link para navegar para a rota /meuportifolio */}
                    {/* Ao clicar, feche o menu mobile se estiver aberto */}
                    <Link to="/meuportifolio" onClick={closeMenu}>
                      {" "}
                      {/* Chame a função simplificada */}
                      Portifólio
                    </Link>
                  </li>
                  <li>
                    {/* Este já estava correto com Link */}
                    {/* Ao clicar, feche o menu mobile se estiver aberto */}
                    <Link
                      to="/lab"
                      onClick={closeMenu} // Chame a função simplificada
                      className="nav-link" // Adicione uma classe para estilizar como link de navegação
                    >
                      LAB
                    </Link>
                  </li>
                  <li>
                    {/* Mude para Link para navegar para a rota /contato */}
                    {/* Ao clicar, feche o menu mobile se estiver aberto */}
                    {/* Certifique-se de que a rota em main.jsx é "/contato" com 'c' minúsculo */}
                    <Link to="/contato" onClick={closeMenu}>
                      {" "}
                      {/* Chame a função simplificada */}
                      Contato
                    </Link>
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
