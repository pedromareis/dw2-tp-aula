import "./App.css";
import ListaNotas from "./components/ListaNotas";

function App() {
  const aluno1 = [
    { id: 1, disciplina: "DW-1", nota: 16 },
    { id: 2, disciplina: "DW-2", nota: 17 },
    { id: 3, disciplina: "FP", nota: 13 },
  ];

  const aluno2 = [
    { id: 1, disciplina: "DW-1", nota: 12 },
    { id: 2, disciplina: "DW-2", nota: 13 },
    { id: 3, disciplina: "FP", nota: 13 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <code>Diogo Fonseca</code> */}
          {/* <p>Aluno 1:</p> */}
          <ListaNotas notas={aluno1} />
          <br />
          {/* <p>Aluno 2:</p>
          <ListaNotas notas={aluno2} /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
