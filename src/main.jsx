import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
// Mantenha a importação do BrowserRouter
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/style.css";

// Lazy imports
const App = lazy(() => import("./App.jsx"));
const MeuPortifolio = lazy(() => import("./pages/MeuPortifolio.jsx"));
const Lab = lazy(() => import("./pages/Lab.jsx"));
const Cafe = lazy(() => import("./pages/Cafe.jsx"));
const Contato = lazy(() => import("./pages/Contato.jsx"));

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Adicione o prop basename aqui, com o nome do seu repositório */}
    <Router basename="/DigiGram/">
      <Suspense fallback={<div className="spinner"></div>}>
        <Routes>
          {/* Estas rotas agora são relativas ao basename "/DigiGram/" */}
          <Route path="/" element={<App />} />{" "}
          {/* Corresponderá a /DigiGram/ */}
          <Route path="/meuportifolio" element={<MeuPortifolio />} />{" "}
          {/* Corresponderá a /DigiGram/meuportifolio */}
          <Route path="/lab" element={<Lab />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);
