import React, { useState } from "react";

export function FormularioContato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [telefoneWhats, setTelefoneWhats] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode manipular os dados
    console.log({ nome, email, telefone, telefoneWhats, mensagem });
  };

  return (
    <div className="div-form">
      <form className="formcontato" onSubmit={handleSubmit}>
        <div>
          <label>
            Nome*:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            E-mail*:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Telefone:
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <label>
              <input
                type="checkbox"
                checked={telefoneWhats}
                onChange={(e) => setTelefoneWhats(e.target.checked)}
              />
              WhatsApp
            </label>
          </label>
        </div>
        <label>
          Mensagem*:
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
        </label>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioContato;
