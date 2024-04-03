import logo from './logo.svg';
import './App.css';
import ListaNotas from './Components/ListaNotas';

function App() {
  const aluno1 = [
    {id: 1, disciplina: 'DW-1', nota: 16},
    {id: 2, disciplina: 'DW-2', nota: 17},
    {id: 3, disciplina: 'FP', nota: 13},
  ];
  const aluno2 = [
    {id: 1, disciplina: 'DW-1', nota: 20},
    {id: 2, disciplina: 'DW-2', nota: 11},
    {id: 3, disciplina: 'FP', nota: 17},
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>Vasco Fernandes</code> 
          <p>Aluno 1:</p>
          <ListaNotas notas = {aluno1}/>
          <p>Aluno 2:</p>
          <ListaNotas notas = {aluno2}/>
        </p>
        
      </header>
    </div>
  );
}

export default App;
