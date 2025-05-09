import React from "react";
import { Cabecalho } from "../components/Cabecalho";
import { Pix } from "../components/Pix";
import { Control } from "../components/Control";

import { LazyLoadProvider } from "../components/LazyLoadContext";
import { LazyLoadSection } from "../components/LazyLoadSection";

const Footer = React.lazy(() => import("../layouts/Footer"));

function Cafe() {
  return (
    <LazyLoadProvider>
      <Cabecalho />
      <Control />
      <Pix />
      <LazyLoadSection Component={Footer} index={0} sectionId="Footer" />
    </LazyLoadProvider>
  );
}

export default Cafe;
