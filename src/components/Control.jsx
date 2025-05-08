import { useState, useEffect } from "react"; // Importe useState E useEffect

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
          {/* Muda a imagem baseada no estado isOpen */}
          <img
            src={
              isOpen
                ? "src/assets/images/utils/minus.svg"
                : "src/assets/images/utils/plus.svg"
            }
            alt={isOpen ? "Fechar opções" : "Mais opções"}
          />
        </div>
        {/* Demais botões */}
        <div className="tema">
          <img
            src="src/assets/images/utils/light_mode.svg"
            alt="Alternar tema"
            title="Alternar tema"
          />
        </div>
        <div className="github">
          <a href="https://github.com/douglps" target="_blank" rel="noopener">
            <img
              src="src/assets/images/socials/github-br.svg"
              alt="GitHub Douglps"
              title="GitHub Douglps"
            />
          </a>
        </div>
        <div className="cafe">
          <img
            src="src/assets/images/coffeebr.svg"
            alt="Contribua com um café"
            title="Contribua com um café"
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
      {/* Este botão não faz parte do menu animado */}
      <div className="acima">
        <a href="#SobreMim">
          <img
            src="src/assets/images/utils/up.svg"
            alt="Topo da página"
            title="Topo da página"
          />
        </a>
      </div>
    </div>
  );
}
