import "./App.css";
import ListaNotas from "./components/ListaNotasTeste";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  const notas = [
    { id: 1, disciplina: "DW-1", nota: "16" },
    { id: 2, disciplina: "DW-2", nota: "17" },
    { id: 3, disciplina: "FP", nota: "13" },
  ];

  const notas2 = [
    { id: 1, disciplina: "DW-1", nota: "19" },
    { id: 2, disciplina: "DW-2", nota: "7" },
    { id: 3, disciplina: "FP", nota: "1" },
  ];
  return (
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
          <ListaNotas notas={notas} />
        </header>
      </div>
    </>
  );
}

export default App;
