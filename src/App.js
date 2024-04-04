import "./App.css";
import ListaNotas from "./components/ListaNotas";

function App() {
  const aluno1 = [
    { id: 1, disciplina: "DW-1", nota: 16 },
    { id: 2, disciplina: "DW-2", nota: 17 },
    { id: 3, disciplina: "FP", nota: 13 },
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
