import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLazyLoad } from "./LazyLoadContext";

export function Cabecalho() {
  const { lazyLoadAndScrollTo } = useLazyLoad();

  // Referência para armazenar estado de clique por seção
  const clickedSections = useRef({});

  const [disabledClicks, setDisabledClicks] = useState({});

  const handleClick = (e, id) => {
    e.preventDefault();

    if (disabledClicks[id]) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    lazyLoadAndScrollTo(id).then(() => {
      setDisabledClicks((prev) => ({ ...prev, [id]: true }));
    });
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
                    onClick={
                      !disabledClicks["Portifolio"]
                        ? (e) => handleClick(e, "Portifolio")
                        : undefined
                    }
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
