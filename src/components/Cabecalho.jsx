export function Cabecalho() {
  return (
    <div className="cabecalho">
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
      <div className="menu-up--botoes">
        <button>DM</button>
        <button>LG</button>
      </div>
    </div>
  );
}
