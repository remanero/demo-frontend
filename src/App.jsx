import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import HelloList from "./pages/HelloList"
import HelloForm from "./pages/HelloForm"


function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Listar</Link> | {" "}
        <Link to="/novo">Novo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HelloList />} />
        <Route path="/novo" element={<HelloForm />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App