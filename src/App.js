import logo from "./logo.svg";
import "./App.css";
import ListaNotas from "./components/ListaNotas";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { useEffect, useState } from "react";

function App() {
  const [numero, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [alerta, setAlerta] = useState(undefined);

  useEffect(() => {
    console.log("useEffect tipo 1: sem dependências");
  });

  useEffect(() => {
    console.log("useEffect tipo 2: array dependências vazio");
  }, []);

  useEffect(() => {
    console.log("useEffect tipo 3: array dependências com dependência número");
  }, [numero, numero2]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Valor dos números: {numero} | {numero2}
        </p>
        <button
          style={{ fontSize: 32 + numero }}
          onClick={() => setNumero(numero + 1)}
        >
          Incrementa
        </button>
        <button
          style={{ fontSize: 32 + numero2 }}
          onClick={() => setNumero2(numero2 + 1)}
        >
          Incrementa o n2
        </button>
        {alerta && <p>{alerta}</p>}
      </header>
    </div>
  );

  const aluno1 = [
    { id: 1, disciplina: "DW-I", nota: 16 },
    { id: 2, disciplina: "DW-II", nota: 17 },
    { id: 3, disciplina: "FP", nota: 13 },
  ];

  const aluno2 = [
    { id: 1, disciplina: "DW-I", nota: 15 },
    { id: 2, disciplina: "DW-II", nota: 16 },
    { id: 3, disciplina: "FP", nota: 12 },
  ];

  /*  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className="App">
      <header className="App-header">
        <div>
          <ListaNotas notas={aluno1} />
        </div>
      </header>
    </div>
    </>
  ); */
}

export default App;
