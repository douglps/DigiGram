import React, { Suspense } from "react";
import { Control } from "./components/Control";
import { Cabecalho } from "./components/Cabecalho";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import "./styles/style.css";
import { Terminal } from "./components/Terminal";

import { LazyLoadProvider } from "./components/LazyLoadContext";
import { LazyLoadSection } from "./components/LazyLoadSection";

const ElevatorPitch = React.lazy(() => import("./components/ElevatorPitch"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Footer = React.lazy(() => import("./layouts/Footer"));

function App() {
  return (
    <LazyLoadProvider>
      <div className="App">
        <Cabecalho />
        <Control />
        <Hero />
        <Terminal />
        <Skills />
        <LazyLoadSection
          Component={ElevatorPitch}
          index={1}
          sectionId="ElevatorPitch"
        />
        <LazyLoadSection
          Component={Portfolio}
          index={2}
          sectionId="Portifolio"
        />
        <LazyLoadSection Component={Footer} index={3} sectionId="Footer" />
      </div>
    </LazyLoadProvider>
  );
}

export default App;
