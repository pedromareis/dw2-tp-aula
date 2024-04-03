import logo from './logo.svg';
import './App.css';
import ListaNotas from './components/ListaNotas';

function App() {
  const aluno1 = [
    {id:1, disciplina: 'DW-1', nota: 16},
    {id:2, disciplina: 'DW-2', nota: 17},
    {id:3, disciplina: 'FP', nota: 13},
  ];

  const aluno2 = [
    {id:1, disciplina: 'DW-1', nota: 18},
    {id:2, disciplina: 'DW-2', nota: 17},
    {id:3, disciplina: 'FP', nota: 13},
  ];
  let soma = 20;

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <code>Luis Vieira</code>
        </p>
        <p>Aluno1</p>
        <ListaNotas notasTestes={aluno1} />
        <p>Aluno2</p>
        <ListaNotas notasTestes={aluno2} />
        
      </header>
    </div>
  );
}

export default App;
