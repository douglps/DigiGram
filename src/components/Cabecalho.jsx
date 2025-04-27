export function Cabecalho() {
  return (
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

      <div className="control">
        <div className="tema">
          <img
            src="src/assets/images/utils/light_mode.svg"
            alt="Alternar tema"
            title="Alternar tema"
          />
        </div>
        <div className="github">
          <img
            src="src/assets/images/socials/github-br.svg"
            alt="GitHub Douglps"
            title="GitHub Douglps"
          />
        </div>
        <div className="cafe">
          <img
            src="src/assets/images/coffeebr.svg"
            alt="Me pague um café"
            title="Me pague um café"
          />
        </div>
        <div className="chat">
          <img
            src="src/assets/images/socials/chat.svg"
            alt="Vamos Conversar"
            title="Vamos Conversar"
          />
        </div>
      </div>
    </div>
  );
}
