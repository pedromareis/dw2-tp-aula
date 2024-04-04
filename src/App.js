import "./App.css";
import ListaNotas from "./components/ListaNotasTeste";

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
    <div className="App">
      <header className="App-header">
        <ListaNotas notas={notas} />
      </header>
    </div>
  );
}

export default App;
