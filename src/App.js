import "./App.css";
import ListaNotas from "./components/ListaNotas";
import aluno1 from "./mocked-data/notas-alunos";

function App() {
  //let soma = 20;

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <p>
          <code>Joao Belo</code>
        </p> */}
          <ListaNotas notas={aluno1} />
          {/*<br />
      <ListaNotas notas={aluno2} testeVariavel={"Teste"} numero={soma}></ListaNotas>*/}
        </div>
      </header>
    </div>
  );
}

export default App;
