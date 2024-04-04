const Nota = ({ nota, funcao, style }) => {
  return (
    <div
      style={{ ...style, cursor: "pointer", backgroundColor: "yellow" }}
      onClick={() => {
        console.log("CLiquei no elemento no ficheiro Nota.jsx");
        funcao(nota.disciplina);
      }}
    >
      {nota.disciplina + ": " + nota.nota + " valores"}
    </div>
  );
};

const NotaProps = (props) => {
  return <p>{props.nota.disciplina + ": " + props.nota.nota + " valores"}</p>;
};

export default Nota;
