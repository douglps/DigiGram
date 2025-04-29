export function Control() {
  return (
    <div className="control__container">
      <div className="control__aside">
        <div className="botao-plus">
          <img src="src/assets/images/utils/plus.svg" alt="Mais opções" />
        </div>
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
      <div className="acima">
        <a href="#SobreMim">
          <img src="src/assets/images/utils/up.svg" alt="Topo da página" />
        </a>
      </div>
    </div>
  );
}
