const Nota = ({ nota, funcao }) => {
  return (
    <div
      onClick={() => {
        console.log("Cliquei no elemnto no ficheiro Nota.jsx");
        funcao(nota.disciplina);
      }}
    >
      {nota.disciplina + ": " + nota.nota + " valores"}
    </div>
  );
};

export default Nota;
