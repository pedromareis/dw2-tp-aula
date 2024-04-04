// V1: Props explicitamente definido
const NotaProps = (props) => {
  // props.funcao();
  return <p>{props.nota.disciplina + ": " + props.nota.nota + " valores"}</p>;
};

// V2: Props destruturadas
const Nota = ({ nota, funcao }) => {
  return (
    <div
      onClick={() => {
        console.log("Cliquei no elemento no ficheiro Nota.jsx");
        funcao(nota.disciplina);
      }}
    >
      {nota.disciplina + ": " + nota.nota + " valores"}
    </div>
  );
};

export default Nota;
