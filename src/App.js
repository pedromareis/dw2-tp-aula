import logo from './logo.svg';
import './App.css';
import ListaNotas from './components/ListaNotas';

function App() {
  const aluno1 = [
    { id: 1, disciplina: "DW-1", notas: 16 },
    { id: 2, disciplina: "DW-2", notas: 17 },
    { id: 3, disciplina: "FP", notas: 13 },
  ];
  const aluno2 = [
    { id: 1, disciplina: "DW-1", notas: 12 },
    { id: 2, disciplina: "DW-2", notas: 11 },
    { id: 3, disciplina: "FP", notas: 10 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Gabriel</code>
          <p>Dabide Neto</p>
          <ListaNotas notas={aluno1} />
          <br />
          <p>Aluno 2:</p>
          <ListaNotas notas={aluno2} />
        </p>
      </header>

    </div>
  );
}

export default App;
