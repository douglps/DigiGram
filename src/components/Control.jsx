import { useState, useEffect } from "react"; // Importe useState E useEffect
import { Link } from "react-router-dom"; // Importe Link para navegação interna

// Importe as imagens necessárias
import minusIcon from "../assets/images/utils/minus.svg"; // Caminho relativo de src/components/
import plusIcon from "../assets/images/utils/plus.svg"; // Caminho relativo de src/components/
import lightModeIcon from "../assets/images/utils/light_mode.svg"; // Caminho relativo de src/components/
import githubIcon from "../assets/images/socials/github-br.svg"; // Caminho relativo de src/components/
import coffeeIcon from "../assets/images/coffeebr.svg"; // Caminho relativo de src/components/ - Verifique se coffeebr.svg está diretamente em src/assets/images/
import chatIcon from "../assets/images/socials/chat.svg"; // Caminho relativo de src/components/
import upIcon from "../assets/images/utils/up.svg"; // Caminho relativo de src/components/

export function Control() {
  const [isOpen, setIsOpen] = useState(false);

  const handlePlusClick = () => {
    setIsOpen(!isOpen); // Alterna o estado no clique
  };

  // Função para fechar o menu
  const closeMenu = () => {
    if (isOpen) {
      // Verifica se o menu está aberto antes de fechar
      setIsOpen(false);
    }
  };

  // Hook useEffect para gerenciar o event listener de scroll
  useEffect(() => {
    // Adiciona o event listener quando o componente é montado
    // Use a função closeMenu no scroll para fechar o menu se ele estiver aberto
    window.addEventListener("scroll", closeMenu);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", closeMenu);
    };
  }, [isOpen]); // <- Adicionamos 'isOpen' como dependência.
  // O efeito rodará (adicionará/removerá o listener)
  // apenas se 'isOpen' mudar.
  // Alternativa: [] roda apenas uma vez no mount/unmount,
  // mas a função closeMenu precisaria ser memorizada ou
  // lidar com o estado atual de outra forma. Com [isOpen]
  // a função closeMenu sempre terá acesso ao estado mais recente.

  return (
    <div className="control__container">
      {/* Adiciona a classe 'menu-open' baseada no estado isOpen */}
      <div className={`control__aside ${isOpen ? "menu-open" : ""}`}>
        {/* Botao-plus com onClick handler */}
        <div className="botao-plus" onClick={handlePlusClick}>
          {/* Muda a imagem baseada no estado isOpen, usando as variáveis importadas */}
          <img
            src={isOpen ? minusIcon : plusIcon} // Use as variáveis importadas aqui
            alt={isOpen ? "Fechar opções" : "Mais opções"}
          />
        </div>
        {/* Demais botões */}
        <div className="tema">
          <img
            src={lightModeIcon} // Use a variável importada
            alt="Alternar tema"
            title="Alternar tema"
          />
        </div>
        <div className="github">
          {/* Link externo - manter <a> */}
          <a href="https://github.com/douglps" target="_blank" rel="noopener">
            <img
              src={githubIcon} // Use a variável importada
              alt="GitHub Douglps"
              title="GitHub Douglps"
            />
          </a>
        </div>
        <div className="cafe">
          {/* Link interno para rota - Mude para <Link> */}
          {/* Adicione onClick={closeMenu} se desejar que ele feche o menu ao clicar */}
          <Link to="/cafe" onClick={closeMenu}>
            {" "}
            {/* Use Link e a rota */}
            <img
              src={coffeeIcon} // Use a variável importada
              alt="Contribua com um café"
              title="Contribua com um café"
            />
          </Link>
        </div>
        <div className="chat">
          <img
            src={chatIcon} // Use a variável importada
            alt="Vamos Conversar"
            title="Vamos Conversar"
          />
        </div>
      </div>
      {/* Este botão não faz parte do menu animado */}
      <div className="acima">
        {/* Link âncora interno - manter <a> */}
        <a href="#Topo">
          <img
            src={upIcon} // Use a variável importada
            alt="Topo da página"
            title="Topo da página"
          />
        </a>
      </div>
    </div>
  );
}
