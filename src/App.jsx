import { useEffect, useState } from "react"

function App() {

  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/hello")
    .then(res => res.json())
    .then(data => setDados(data))
    .catch(err => console.error(err));
  }, []);
  return (
    <div>
      <h1>React + Spring Boot</h1>

      <ul>
        {dados.map(item => (
          <li key={item.id}>{item.mensagem}</li>
        ))}
      </ul>
    </div>
  )
}

export default App