import logo from './logo.svg';
import './App.css';

import ListaNotas from "./components/ListaNotas";

function App() {

  const notas =[
    {id: 1, disciplina: "DW-1", nota: 16},
    {id: 1, disciplina: "DW-1", nota: 16},
    {id: 1, disciplina: "DW-1", nota: 16}
  ]

  const notas2 =[
    {id: 1, disciplina: "DW-1", nota: 15},
    {id: 1, disciplina: "DW-1", nota: 15},
    {id: 1, disciplina: "DW-1", nota: 15}
  ]

  let soma = 20;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Diogo Fonseca</code>
          <p>Aluno1: </p>
          <ListaNotas notas={notas}/>
          <p>Aluno2: </p>
          <ListaNotas notas={notas2}/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
