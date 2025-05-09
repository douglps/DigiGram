import React, { useEffect, useRef, useState, Suspense } from "react";
import { Spinner } from "./Spinner";
import { useLazyLoad } from "./LazyLoadContext";

export const LazyLoadSection = ({
  Component,
  sectionId,
  index,
  fallback = <Spinner />,
}) => {
  const { registerSection, shouldSectionLoad } = useLazyLoad(); // Usa o hook do contexto
  const [isVisibleFromScroll, setIsVisibleFromScroll] = useState(false);
  const sectionRef = useRef(null);

  // Registra a seção no contexto ao montar
  useEffect(() => {
    registerSection(sectionId, index);
  }, [sectionId, index, registerSection]); // Dependências: sectionId, index e registerSection do contexto

  // Configura o Intersection Observer para scroll-based loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisibleFromScroll(true);
            // Opcional: observer.unobserve(entry.target); // Manter observando se quiser re-observar após sair/voltar
          } else {
            // Opcional: setIsVisibleFromScroll(false); // Se quiser que o componente descarregue ao sair da tela (raro e complexo)
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Efeito só roda na montagem e desmontagem

  // Determina se o componente lazy-loaded deve ser renderizado
  const shouldRenderLazy = shouldSectionLoad(sectionId, isVisibleFromScroll);

  return (
    <section id={sectionId} ref={sectionRef}>
      {shouldRenderLazy ? (
        <Suspense fallback={fallback}>
          <Component />
        </Suspense>
      ) : (
        // Placeholder quando não visível e não forçado a carregar
        <div
          style={{
            height: "300px",
            backgroundColor:
              "#f0f0f011" /* Adicione estilos para o placeholder */,
          }}
        >
          {/* Opcional: Mostrar um indicador leve ou apenas um espaço em branco */}
          <Spinner /> {sectionId}...
        </div>
      )}
    </section>
  );
};
