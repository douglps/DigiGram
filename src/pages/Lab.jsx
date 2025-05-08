import { Cubo } from "../components/Cubo";
import { Icosaedro } from "../components/Icosaedro";

function Lab() {
  return (
    <section className="lab">
      <div>
        Cubo interativo
        <div className="meu3d">
          <Cubo />
        </div>
      </div>
      <div className="icosaedro">
        <Icosaedro />
      </div>
    </section>
  );
}

export default Lab;
