import { useState } from "react";
import { Control } from "./components/Control";
import { Cabecalho } from "./components/Cabecalho";
import { Hero } from "./components/Hero";
import { ElevatorPitch } from "./components/ElevatorPitch";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import "./styles/style.css";
import { Terminal } from "./components/Terminal";
import { Footer } from "./layouts/Footer";

function App() {
  useState();
  return (
    <div className="App">
      <Cabecalho />
      <Control />
      <Hero />
      <Terminal />
      <div>lazing page</div>
      <Skills />
      <ElevatorPitch />
      {/* Sessão “Processo de Trabalho” */}
      <Portfolio />
      {/* Sessão “Depoimentos” //“Resumo Profissional” em PDF. */}
      <Footer />
    </div>
  );
}

export default App;
