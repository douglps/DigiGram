import { useState } from "react";
import { Cabecalho } from "./components/Cabecalho";
import { Hero } from "./components/hero";
import "./styles/style.css";

function App() {
  useState();
  return (
    <div className="App">
      <Cabecalho />
      <Hero />
      <div>bloco notas com JS simulando escrita</div>
      <div>lazing page</div>
    </div>
  );
}

export default App;
