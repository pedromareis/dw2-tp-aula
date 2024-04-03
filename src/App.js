import logo from './logo.svg';
import './App.css';
import ListaNotas from './components/listaNotas';

function App() {
  const notas= [
    {id: 1,disciplina: "DW-1", nota: 16},
    {id: 2,disciplina: "DW-2", nota: 17},
    {id: 3,disciplina: "FP", nota: 13},
  ]

  const notas2= [
    {id: 1,disciplina: "DW-1", nota: 12},
    {id: 2,disciplina: "DW-2", nota: 12},
    {id: 3,disciplina: "FP", nota: 13},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <code>josé Feitor</code>
        </p>
        <p>Aluno 1:</p>
        <ListaNotas notas={notas}/>
        <p>Aluno 2:</p>
        <ListaNotas notas={notas2}/>
      </header>
    </div>
  );
}

export default App;
