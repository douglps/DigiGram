import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
// Mude a importação para HashRouter
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
    {/* Use o HashRouter aqui e REMOVA o prop basename */}
    <Router>
      <Suspense fallback={<div className="spinner"></div>}>
        <Routes>
          {/* As rotas continuam as mesmas, mas agora corresponderão a #/, #/meuportifolio, etc. */}
          <Route path="/" element={<App />} />
          <Route path="/meuportifolio" element={<MeuPortifolio />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);
