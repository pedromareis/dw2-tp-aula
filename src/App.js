import logo from './logo.svg';
import './App.css';
import ListaNotas from './components/ListaNotas';

function App() {
  const notas = [
    {id: 1, disciplina: 'DW-1', nota: '16'},
    {id: 2, disciplina: 'DW-2', nota: '17'},
    {id: 3, disciplina: 'FP', nota: '13'},
  ];

  const notas2 = [
    {id: 1, disciplina: 'DW-1', nota: '19'},
    {id: 2, disciplina: 'DW-2', nota: '7'},
    {id: 3, disciplina: 'FP', nota: '1'},
  ];

  const soma = [20, 10 ,13]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Tomás Santos</code>
        </p>
        <code>Aluno 1:</code>
          <ListaNotas notasTestes = {notas}/>
          <p></p>
        <code>Aluno 2:</code>
          <ListaNotas notasTestes = {notas2}/>
      </header>
    </div>
  );
}

export default App;
