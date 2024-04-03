import logo from './logo.svg';
import './App.css';
import ListaNotas from './components/listanotas';
import Nota from './components/Nota';

function App() {
  const alunos1= [
    {id: 1, disciplina: "DW-1", nota: 16},
    {id: 2, disciplina: "DW-2", nota: 17},
    {id: 3, disciplina: "FP", nota: 13},
  ];
  const alunos2= [
    {id: 1, disciplina: "DW-1", nota: 12},
    {id: 2, disciplina: "DW-2", nota: 15},
    {id: 3, disciplina: "FP", nota: 17},
  ];

let soma=20;
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Simão Neves</p>
      <p>Aluno 1</p>
      <ListaNotas notas={alunos1} />
      <p>Aluno 2</p>
      <ListaNotas notas={alunos2} />
      </header>
      

      
    </div>
  );
}

export default App;
