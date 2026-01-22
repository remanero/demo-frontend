import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarHello } from "../services/helloService";

function HelloForm() {

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  function salvar(e) {
    e.preventDefault();

    if (!mensagem.trim()) {
      setErro("Mensagem é obrigatória");
      return;
    }

    setSubmitting(true);
    setErro("");

    criarHello({ mensagem })
      .then(() => navigate("/"))
      .catch(err => setErro("Erro ao salvar mensagem"))
      .finally(() => setSubmitting(false));
  }

  return (
    <div>
      <h2>Nova Mensagem</h2>

      <form onSubmit={salvar}>
        <input
          type="text"
          placeholder="Digite a mensagem"
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
          disabled={submitting}
        />
        <button type="submit" disabled={submitting}>
          {submitting ? "Salvando..." : "Salvar"}
        </button>
      </form>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

    </div>
  )
}

export default HelloForm