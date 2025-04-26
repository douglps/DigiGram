export function Cabecalho() {
  return (
    <div className="cabecalho">
      <div className="navegacao">
        <div className="cabecalho__logo--img">
          <img
            src="src\assets\images\logo_bgoff.png"
            id="logo"
            alt="logo"
            title="DiGiGram"
          />
        </div>
        <div className="menu">
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
            src="src/assets/images/skills/github-br.svg"
            alt="GitHub Douglps"
            title="GitHub Douglps"
          />
        </div>
        <div className="chat">
          <img
            src="src/assets/images/skills/chat.svg"
            alt="Vamos Conversar"
            title="Vamos Conversar"
          />
        </div>
        <div className="cafe">
          <img
            src="src/assets/images/skills/coffeebr.svg"
            alt="Me pague um café"
            title="Me pague um café"
          />
        </div>
      </div>
    </div>
  );
}
