export default function Footer() {
  return (
    <section className="footer">
      <div className="rodape__container">
        <div className="rodape__cta">
          <p>
            <a href="">Quero meu site na web!</a>
          </p>
        </div>
        <div className="social__container">
          <div className="socials">
            <a href="#LinkedIn">
              <img
                src="src/assets/images/socials/linkedin.svg"
                alt="LinkedIn"
                rel="noopener"
                loading="lazy"
              />
              LinkedIn
            </a>
          </div>
          <div className="socials">
            <a href="#Email">
              <img
                src="src/assets/images/socials/email-br.svg"
                alt="E-mail"
                loading="lazy"
              />{" "}
              E-mail
            </a>
          </div>
          <div className="socials">
            <a href="https://github.com/douglps" target="_blank">
              <img
                src="src/assets/images/socials/github-br.svg"
                alt="Github DougLps"
                rel="noopener"
                loading="lazy"
              />{" "}
              GitHub
            </a>
          </div>
          <div className="socials">
            <a
              href="https://open.spotify.com/playlist/0jxvWAbhSGQuGxgdtzzKxz?si=Ge414pUDQDS0ceUpxfh5dw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/images/utils/spotify.svg"
                alt="Playlist Spotify"
                loading="lazy"
              />{" "}
              Spotify
            </a>
          </div>
        </div>
        <div className="copyright">
          <div>
            <p>Todos os direitos reservados. © 2025 - Douglas Lopes</p>
          </div>
          <div>
            <span className="version">V.1.0.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
