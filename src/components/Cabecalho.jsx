export function Cabecalho() {
  return (
    <section className="header">
      <div className="cabecalho">
        <div className="navegacao">
          <div className="cabecalho__logo--img">
            <img
              src="src\assets\images\logo_bgoff.png"
              id="logo"
              alt="logo"
              title="DigiGram (Douglas Lopes - Dev />)"
            />
          </div>
          <div className="menu">
            <nav>
              <ul className="menu-up">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#SobreMim">Sobre Mim</a>
                </li>
                <li>
                  <a href="#Portifolio">Portifólio</a>
                </li>
                <li>
                  <a href="#LAB">LAB</a>
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
