import { createContext, useContext, useState } from "react";

const LazyLoadContext = createContext();

export function LazyLoadProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const allowNext = () => setCurrentIndex((prev) => prev + 1);
  const jumpTo = (index) => setCurrentIndex((prev) => Math.max(prev, index));

  return (
    <LazyLoadContext.Provider value={{ currentIndex, allowNext, jumpTo }}>
      {children}
    </LazyLoadContext.Provider>
  );
}

export const useLazyLoad = () => useContext(LazyLoadContext);
