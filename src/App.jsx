import { useEffect, useState } from "react"
import { criarHello, listarHello } from "./services/helloService";

function App() {

  const [dados, setDados] = useState([]);
  const [mensagem, setMensagem] = useState("");


  function carregarLista() {
    listarHello()
      .then(response => setDados(response.data))
      .catch(err => console.error(err));
  }
  useEffect(() => {
    carregarLista();
  }, []);

  function salvar(e) {
    e.preventDefault();

    criarHello({ mensagem })
      .then(() => {
        setMensagem("");
        carregarLista();
      })
      .catch(err => console.error(err))
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
        />
        <button type="submit">Salvar</button>
      </form>
      <ul>
        {dados.map(item => (
          <li key={item.id}>{item.mensagem}</li>
        ))}
      </ul>
    </div>
  )
}

export default App