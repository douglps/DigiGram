import React from "react";
import { Link } from "react-router-dom";
import { useLazyLoad } from "./LazyLoadContext";

export function Cabecalho() {
  const { jumpTo } = useLazyLoad();

  const handleAnchorClick = (id, index) => {
    jumpTo(index);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // ajuste o tempo de acordo com a necessidade
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
                    onClick={() => handleAnchorClick("Portifolio", 1)}
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
