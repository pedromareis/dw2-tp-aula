import logo from "./logo.svg";
import "./App.css";
import ListaNotas from "./components/ListaNotas";

function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ListaNotas notas={aluno1} />
        </div>
      </header>
    </div>
  );
}

export default App;
