
import './App.css';
import ListaNotas from"./components/ListaNotas";


function App() {
  const aluno1 = [
    {id: 1, disciplina: 'DW-1', nota: 16},
    {id: 2, disciplina: 'DW-2', nota: 17},
    {id: 3, disciplina: 'FP', nota: 11},
  ];

  const aluno2 = [
    {id: 4, disciplina: 'DW-1', nota: 13},
    {id: 5, disciplina: 'DW-2', nota: 5},
    {id: 6, disciplina: 'FP', nota: 19},
  ];


  return (
    <div className="App">
      <header className="App-header">
        <p>

          <code>João Brito</code>
        
        <p>Aluno 1:</p>
        <ListaNotas notas = {aluno1}/> 
        <br />
        <p>Aluno 2:</p>
        <ListaNotas notas = {aluno2}/> 

        </p>
      </header>
    </div>
  );
}

export default App;
