import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/style.css";

// Lazy imports
const App = lazy(() => import("./App.jsx"));
const Lab = lazy(() => import("./pages/Lab.jsx"));

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div className="spinner"></div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/lab" element={<Lab />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);
