export function Cabecalho() {
  return (
    <div className="escopo">
      <div className="faixa"></div>
      <div className="cabecalho">
        <div className="menu">
          <div className="cabecalho__logo">
            <div className="logo">
              <img
                src="src\assets\images\logo_bgoff.png"
                id="logo"
                alt="logo"
                title="DiGiGram"
              />
            </div>
            DiGiGram Dev
          </div>
          <div className="cabecalho__menu">
            <nav>
              <ul className="menu-up">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#Sobre Mim">Sobre Mim</a>
                </li>
                <li>
                  <a href="#Portifólio">Portifólio</a>
                </li>
                <li>
                  <a href="#LAB">LAB</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="caixa">
            <img
              className="cabecalho--botoes"
              src="src/assets/images/utils/light_mode.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
