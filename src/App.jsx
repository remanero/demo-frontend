import { useEffect, useState } from "react"
import { criarHello, listarHello } from "./services/helloService";

function App() {

  const [dados, setDados] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [submitting, setSubmitting] = useState(false);


  function carregarLista() {
    setLoading(true);
    setErro("");

    listarHello()
      .then(response => setDados(response.data))
      .catch(err => setErro("Erro ao carregar mensagens"))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    carregarLista();
  }, []);

  function salvar(e) {
    e.preventDefault();

    if (!mensagem.trim()) {
      setErro("Mensagem é obrigatória");
      return;
    }

    setSubmitting(true);
    setErro("");

    criarHello({ mensagem })
      .then(() => {
        setMensagem("");
        carregarLista();
      })
      .catch(err => setErro("Erro ao salvar mensagem"))
      .finally(() => setSubmitting(false));
  }

  return (
    <div>
      <h1>React + Spring Boot</h1>

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

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {dados.map(item => (
            <li key={item.id}>{item.mensagem}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App