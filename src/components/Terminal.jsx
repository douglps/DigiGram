import Typewriter from "./Typewriter";

export function Terminal() {
  return (
    <section className="terminal">
      <div>
        <Typewriter
          words={[
            "'Simplicidade é a máxima sofisticação.' — Leonardo da Vinci ",
            "Desenvolvedor => Design. Código. Impacto. ",
            "'Você nunca terá uma segunda chance de causar uma primeira impressão forte.' - Will Rogers",
            "Muito mais que apenas um endereço na web. ",
            "Layout bonito sim, e com atitude também! ",
            "Simples por fora. Poderoso por dentro. ",
            "Design pensado. Código limpo. ",
            "Ao pixel e além! ",
          ]}
          fixedCount={3} // As 3 primeiras serão fixas e em ordem
          loop={true}
          typingSpeed={90}
          deletingSpeed={50}
          pauseTime={1800}
        />
        <div>
          <br /> / {">"}
        </div>
      </div>
    </section>
  );
}
