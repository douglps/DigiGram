import { createContext, useContext, useState, useRef } from "react";

const LazyLoadContext = createContext();

export const useLazyLoad = () => {
  const context = useContext(LazyLoadContext);
  if (!context) {
    throw new Error("useLazyLoad must be used within a LazyLoadProvider");
  }
  return context;
};

export const LazyLoadProvider = ({ children }) => {
  const [forcedLoadSections, setForcedLoadSections] = useState({});
  const registeredSections = useRef({});

  const registerSection = (id, index) => {
    registeredSections.current[id] = { index };
  };

  const shouldSectionLoad = (id, isVisible) => {
    return isVisible || forcedLoadSections[id];
  };

  const lazyLoadAndScrollTo = async (targetId) => {
    const targetSection = registeredSections.current[targetId];
    if (!targetSection) {
      console.warn(`Section with ID ${targetId} not registered.`);
      return;
    }

    const targetIndex = targetSection.index;
    const sectionsToLoad = Object.entries(registeredSections.current)
      .filter(([_, { index }]) => index <= targetIndex)
      .map(([id]) => id);

    setForcedLoadSections((prev) => {
      const updated = { ...prev };
      sectionsToLoad.forEach((id) => {
        updated[id] = true;
      });
      return updated;
    });

    // Aguarda a renderização completa da seção de destino
    await new Promise((resolve) => {
      const checkIfReady = () => {
        const el = document.getElementById(targetId);
        if (el) {
          // Utiliza MutationObserver para detectar alterações no DOM
          const observer = new MutationObserver(() => {
            observer.disconnect();
            resolve();
          });
          observer.observe(el, { childList: true, subtree: true });
        } else {
          requestAnimationFrame(checkIfReady);
        }
      };
      requestAnimationFrame(checkIfReady);
    });

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <LazyLoadContext.Provider
      value={{
        registerSection,
        shouldSectionLoad,
        lazyLoadAndScrollTo,
      }}
    >
      {children}
    </LazyLoadContext.Provider>
  );
};
