import React from "react";
import { Cabecalho } from "../components/Cabecalho";
import { Control } from "../components/Control";
import { ContatoInfo } from "../components/ContatoInfo";

import { LazyLoadProvider } from "../components/LazyLoadContext";
import { LazyLoadSection } from "../components/LazyLoadSection";

const Footer = React.lazy(() => import("../layouts/Footer"));

function Contato() {
  return (
    <LazyLoadProvider>
      <Cabecalho />
      <Control />
      <ContatoInfo />
      <LazyLoadSection Component={Footer} index={0} sectionId="Footer" />
    </LazyLoadProvider>
  );
}

export default Contato;
