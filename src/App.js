import logo from './logo.svg';
import './App.css';
import { ListaNotas } from './components/ListaNotas';

function App() {
  const aluno1 = [
    {id: 1, disciplina: 'DW-1', nota: 11},
    {id: 2, disciplina: 'DW-2', nota: 13},
    {id: 3, disciplina: 'FP', nota: 16}
  ];
  
  const aluno2 = [
    {id: 1, disciplina: 'DW-1', nota: 15},
    {id: 2, disciplina: 'DW-2', nota: 17},
    {id: 3, disciplina: 'FP', nota: 20}
  ];


  let soma = 20;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Joao Belo</code>
        </p>
      <ListaNotas notas={aluno1} testeVariavel={"Teste"} numero={soma}></ListaNotas>
      <br />
      <ListaNotas notas={aluno2} testeVariavel={"Teste"} numero={soma}></ListaNotas>
      </header>
    </div>
  );
}

export default App;
