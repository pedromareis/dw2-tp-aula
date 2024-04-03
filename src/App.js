import logo from './logo.svg';
import './App.css';

import ListaNotas from "./components/ListaNotas";

function App() {

  const notas =[
    {id: 1, disciplina: "DW-1", nota: 16},
    {id: 1, disciplina: "DW-2", nota: 16},
    {id: 1, disciplina: "DW-1", nota: 17}
  ]
  const notas2 =[
    {id: 1, disciplina: "DW-1", nota: 16},
    {id: 1, disciplina: "DW-1", nota: 6},
    {id: 1, disciplina: "DW-9", nota: 19}
  ]

  let soma = 20;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Dinis Ferreira</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>aluno 1</p>
        <ListaNotas notas={notas} />
        <p>aluno 2</p>
        <ListaNotas notas={notas2} />
      </header>
    </div>
  );
}

export default App;