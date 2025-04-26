import { useState } from "react";
import { Cabecalho } from "./components/Cabecalho";
import { Hero } from "./components/Hero";
import { ElevatorPitch } from "./components/ElevatorPitch";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import "./styles/style.css";
import { Terminal } from "./components/Terminal";

function App() {
  useState();
  const frases = [
    "Olá, mundo!",
    "Sou um desenvolvedor React.",
    "Vamos codar com estilo!",
    "JavaScript é vida!",
  ];
  return (
    <div className="App">
      <Cabecalho />
      <Hero />
      <Terminal />
      <div>bloco notas com JS simulando escrita</div>
      <div>lazing page</div>
      <Skills />
      <ElevatorPitch />
      <Portfolio />
    </div>
  );
}

export default App;
