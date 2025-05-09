import React from "react";

import { Cabecalho } from "../components/Cabecalho";
import { Control } from "../components/Control";

import { LazyLoadProvider } from "../components/LazyLoadContext";
import { LazyLoadSection } from "../components/LazyLoadSection";

const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Footer = React.lazy(() => import("../layouts/Footer"));

function MeuPortifolio() {
  return (
    <LazyLoadProvider>
      <div id="Topo"></div>
      <Cabecalho />
      <Control />
      <div className="meuport">
        <LazyLoadSection
          Component={Portfolio}
          index={2}
          sectionId="Portifolio"
        />
      </div>
      <LazyLoadSection Component={Footer} index={0} sectionId="Footer" />
    </LazyLoadProvider>
  );
}

export default MeuPortifolio;
