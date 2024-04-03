import logo from './logo.svg';
import './App.css';

import ListaNotas from "./components/ListaNotas";

function App() {

  const notas =[
    {id: 1, disciplina: "DW-1", nota: 16},
    {id: 1, disciplina: "DW-1", nota: 16},
    {id: 1, disciplina: "DW-1", nota: 16}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Diogo Fonseca</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ListaNotas/>
      </header>
    </div>
  );
}

export default App;
