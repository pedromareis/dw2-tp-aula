import "./App.css";
import ListaNotas from "./components/ListaNotas";
import { aluno1 } from "./data/notas-alunos";

function App() {
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
