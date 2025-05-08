import React, { useState, useEffect, useRef } from "react";

export function Cubo() {
  // Estado para armazenar os ângulos de rotação X e Y
  const [rotateX, setRotateX] = useState(-15); // Inicia com a rotação do seu CSS
  const [rotateY, setRotateY] = useState(45); // Inicia com a rotação do seu CSS

  // Estado para verificar se o mouse está sendo arrastado
  const [isDragging, setIsDragging] = useState(false);

  // Estado para armazenar a posição inicial do mouse ao começar a arrastar
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  // Ref opcional para o elemento cubo, caso precise de acesso direto
  const cuboRef = useRef(null);

  // Manipulador para quando o botão do mouse é pressionado (início do arrasto)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX); // Posição X inicial do mouse
    setStartY(e.clientY); // Posição Y inicial do mouse
    // Previne o comportamento padrão (como selecionar texto)
    e.preventDefault();
  };

  // Manipulador para quando o mouse se move (durante o arrasto)
  const handleMouseMove = (e) => {
    if (!isDragging) return; // Só faz algo se estiver arrastando

    // Calcula a diferença na posição do mouse desde o último evento de move
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    // Fator de sensibilidade para ajustar a velocidade da rotação
    const sensitivity = 0.5; // Ajuste este valor conforme preferir

    // Atualiza os ângulos de rotação
    // Movimento horizontal (deltaX) afeta a rotação no eixo Y
    // Movimento vertical (deltaY) afeta a rotação no eixo X
    // Nota: o movimento vertical geralmente causa uma rotação X inversa visualmente
    setRotateY((prevRotateY) => prevRotateY + deltaX * sensitivity);
    setRotateX((prevRotateX) => prevRotateX - deltaY * sensitivity); // Subtrai para rotação intuitiva para cima/baixo

    // Atualiza a posição inicial para o próximo cálculo de delta
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  // Manipulador para quando o botão do mouse é liberado (fim do arrasto)
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Efeito para adicionar e remover os listeners de mouse globalmente
  // Adicionamos os listeners ao 'window' para que o arrasto continue mesmo se o mouse sair do elemento cubo
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Função de limpeza para remover os listeners quando o componente for desmontado
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, startY]); // Adiciona dependências para garantir que os handlers usem o estado mais recente

  // Cria a string de estilo transform dinamicamente
  const transformStyle = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  return (
    <div className="cubo3d">
      {/* Adiciona o manipulador onMouseDown ao elemento que inicia o arrasto (o próprio cubo) */}
      {/* Aplica o estilo transform dinâmico */}
      <div
        className="cubo"
        style={{ transform: transformStyle }}
        onMouseDown={handleMouseDown}
        ref={cuboRef}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    </div>
  );
}
