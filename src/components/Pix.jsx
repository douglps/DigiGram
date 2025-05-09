import React, { useState } from "react";

export function Pix() {
  // Estado para gerenciar a visibilidade de cada modal
  const [showQrCode, setShowQrCode] = useState(false);
  const [showCopiaCola, setShowCopiaCola] = useState(false);
  const [showChavePix, setShowChavePix] = useState(false);

  // Novos estados para gerenciar o texto dos botões de copiar
  const [copiaColaButtonText, setCopiaColaButtonText] =
    useState("Clique para copiar");
  const [chavePixButtonText, setChavePixButtonText] =
    useState("Clique para copiar");

  // Textos a serem copiados (defina-os aqui para fácil acesso)
  const pixCopiaColaCode =
    "00020126580014BR.GOV.BCB.PIX0136de1e9802-3b1f-4f94-a722-c0810a0deed45204000053039865802BR5921DOUGLAS LOPES PADILHA6012PORTO ALEGRE62070503***6304177D";
  const pixChaveKey = "de1e9802-3b1f-4f94-a722-c0810a0deed4";

  // --- Funções para abrir os modais (AGORA FECHAM OS OUTROS) ---
  const openQrCode = () => {
    // Fechar outros modais
    setShowCopiaCola(false);
    setShowChavePix(false);
    // Abrir este modal
    setShowQrCode(true);
  };

  const openCopiaCola = () => {
    // Fechar outros modais
    setShowQrCode(false);
    setShowChavePix(false);
    // Resetar o texto do botão ao abrir (se necessário)
    setCopiaColaButtonText("Clique para copiar");
    // Abrir este modal
    setShowCopiaCola(true);
  };

  const openChavePix = () => {
    // Fechar outros modais
    setShowQrCode(false);
    setShowCopiaCola(false);
    // Resetar o texto do botão ao abrir (se necessário)
    setChavePixButtonText("Clique para copiar");
    // Abrir este modal
    setShowChavePix(true);
  };
  // --- FIM das Funções para abrir os modais ---

  // Funções para fechar os modais (permanecem as mesmas)
  const closeQrCode = () => setShowQrCode(false);
  const closeCopiaCola = () => setShowCopiaCola(false);
  const closeChavePix = () => setShowChavePix(false);

  // Impede que cliques dentro do conteúdo do modal o fechem (permanece a mesma)
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  // Função assíncrona para copiar texto para a área de transferência (permanece a mesma)
  const handleCopy = async (textToCopy, setTextState) => {
    if (!navigator.clipboard) {
      alert(
        "Recurso de copiar para a área de transferência não suportado neste navegador."
      );
      return;
    }
    try {
      await navigator.clipboard.writeText(textToCopy);
      setTextState("Copiado!");
      setTimeout(() => {
        setTextState("Clique para copiar");
      }, 3000);
    } catch (err) {
      console.error("Erro ao copiar: ", err);
      alert("Falha ao copiar o texto.");
    }
  };

  return (
    <section className="pix">
      <div id="Topo"></div>
      <div className="container--pix">
        <div className="fundo-pix">
          <div className="quero-cafe">
            <p>Upload de Cafeína 🚀</p>
            <p>
              Design e código incríveis? Tem café no meio! Sua contribuição dá
              energia extra para continuar criando e explorando. Dedicação e
              estudo constante movem meu trabalho. Valorizamos seu apoio (pull
              request de cafeína!).
            </p>
          </div>
          <div className="aviso-pix">
            <p>
              A contribuição pode ser feita através de Pix. Escolha como
              prefere:
            </p>
          </div>
          <div className="dados-pix">
            <div className="pix-logo">
              <img
                src="src/assets/images/utils/logo_pix.png"
                alt="Logo Pix"
                loading="lazy"
              />
            </div>

            {/* Gatilho QR Code */}
            <div className="qr" onClick={openQrCode}>
              <p>QR Code</p>
              <img
                src="src/assets/images/utils/qr-code.svg"
                alt="QR Code"
                loading="lazy"
              />
            </div>
            {/* Gatilho Copia e Cola */}
            <div className="copia-cola" onClick={openCopiaCola}>
              <p>Copia e Cola</p>
              <img
                src="src/assets/images/utils/copia-cola.svg"
                alt="Copia e cola"
                loading="lazy"
              />
            </div>
            {/* Gatilho Chave Pix */}
            <div className="chave" onClick={openChavePix}>
              <p>Chave Pix</p>
              <img
                src="src/assets/images/utils/key.svg"
                alt="Chave Pix"
                loading="lazy"
              />
            </div>

            {/* Modal QR Code */}
            {showQrCode && (
              <div className="modal-overlay" onClick={closeQrCode}>
                <div className="qr-code" onClick={handleModalContentClick}>
                  <div className="fechar" onClick={closeQrCode}>
                    <img src="src/assets/images/utils/close.svg" alt="Fechar" />
                  </div>
                  <img
                    className="meu-qr"
                    src="src/assets/images/utils/qrpix-next.jpeg"
                    alt="QR Code Pix"
                    loading="lazy"
                  />{" "}
                  <div className="passo-qr">
                    <ol>
                      <li>Abra o aplicativo de seu banco no celular;</li>
                      <li>Faça a leitura do QR Code;</li>
                      <li>
                        Digite o valor da contribuição (Sugestão R$ 5,00);
                      </li>
                      <li>Confira os dados e confirme.</li>
                    </ol>
                    <div className="dados-qr">
                      <p>Dados:</p>
                      <p>Nome: Douglas Lopes Padilha</p>
                      <p>CPF: ***.451.510-**</p>
                      <p>Banco Bradesco S.A.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Copia e Cola */}
            {showCopiaCola && (
              <div className="modal-overlay" onClick={closeCopiaCola}>
                <div
                  className="pix-copia-cola"
                  onClick={handleModalContentClick}
                >
                  <div className="fechar" onClick={closeCopiaCola}>
                    <img src="src/assets/images/utils/close.svg" alt="Fechar" />
                  </div>
                  <div
                    className="copiar"
                    onClick={() =>
                      handleCopy(pixCopiaColaCode, setCopiaColaButtonText)
                    }
                  >
                    {copiaColaButtonText}{" "}
                    <img
                      src="src/assets/images/utils/copy.svg"
                      alt={
                        copiaColaButtonText === "Copiado!"
                          ? "Código copiado"
                          : "Clique para copiar o código Pix Copia e Cola"
                      }
                    />
                  </div>
                  <div className="cod-copia">{pixCopiaColaCode}</div>
                  <div className="passo-qr">
                    <ol>
                      <li>Copie o codigo clicando acima;</li>
                      <li>Abra o aplicativo de seu banco no celular;</li>
                      <li>
                        Seleciona a opção de pagamento via Pix, escolha "Copia e
                        Cola"
                      </li>
                      <li>Cole o codigo copiado;</li>
                      <li>
                        Digite o valor da contribuição (Sugestão R$ 5,00);
                      </li>
                      <li>Confira os dados e confirme.</li>
                    </ol>
                    <div className="dados-qr">
                      <p>Dados:</p>
                      <p>Nome: Douglas Lopes Padilha</p>
                      <p>CPF: ***.451.510-**</p>
                      <p>Banco Bradesco S.A.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Chave Pix */}
            {showChavePix && (
              <div className="modal-overlay" onClick={closeChavePix}>
                <div className="chave-pix" onClick={handleModalContentClick}>
                  <div className="fechar" onClick={closeChavePix}>
                    <img src="src/assets/images/utils/close.svg" alt="Fechar" />
                  </div>
                  <div
                    className="copiar"
                    onClick={() =>
                      handleCopy(pixChaveKey, setChavePixButtonText)
                    }
                  >
                    {chavePixButtonText}{" "}
                    <img
                      src="src/assets/images/utils/copy.svg"
                      alt={
                        chavePixButtonText === "Copiado!"
                          ? "Chave copiada"
                          : "Clique para copiar a chave Pix"
                      }
                    />
                  </div>
                  <div className="key-pix">{pixChaveKey}</div>
                  <div className="passo-qr">
                    <ol>
                      <li>Copie a chave clicando acima;</li>
                      <li>Abra o aplicativo de seu banco no celular;</li>
                      <li>
                        Seleciona a opção de pagamento via Pix, escolha "Chave
                        Pix"
                      </li>
                      <li>Cole a chave copiada;</li>
                      <li>
                        Digite o valor da contribuição (Sugestão R$ 5,00);
                      </li>
                      <li>Confira os dados e confirme.</li>
                    </ol>
                    <div className="dados-qr">
                      <p>Dados:</p>
                      <p>Nome: Douglas Lopes Padilha</p>
                      <p>CPF: ***.451.510-**</p>
                      <p>Banco Bradesco S.A.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
