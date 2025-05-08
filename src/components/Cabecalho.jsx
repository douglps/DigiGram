import React from "react";
import { Link } from "react-router-dom";
import { useLazyLoad } from "./LazyLoadContext";

export function Cabecalho() {
  const { lazyLoadAndScrollTo } = useLazyLoad();

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    lazyLoadAndScrollTo(sectionId);
  };
  return (
    <section className="header">
      <div className="cabecalho">
        <div className="navegacao">
          <div className="cabecalho__logo--img">
            <img src="src/assets/images/logo_bgoff_pq.png" alt="Logotipo" />
          </div>
          <div className="menu">
            <nav>
              <ul className="menu-up">
                <li>
                  <a href="#SobreMim">Sobre Mim</a>
                </li>
                <li>
                  <a
                    href="#Portifolio"
                    onClick={(e) => handleClick(e, "Portifolio")}
                  >
                    Portifólio
                  </a>
                </li>
                <li>
                  <Link to="/lab">LAB</Link>
                </li>
                <li>
                  <a href="#Contato">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
