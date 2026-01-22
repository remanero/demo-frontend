import { useEffect, useState } from "react";
import { listarHello } from "../services/helloService";

function HelloList() {

  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

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


  return (
    <div>
      <h2>Mensagens</h2>

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

export default HelloList