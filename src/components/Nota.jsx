const Nota = ({ nota, funcao, estilos }) => {
  return (
    <div
      style={{ ...estilos, crusor: "pointer", backgroundColor: "yellow" }}
      onClick={() => {
        console.log("Cliquei no elemento na ficheiro Nota.jsx");
        funcao(nota.disciplina);
      }}
    >
      {nota.disciplina + ": " + nota.nota + " valores"}
    </div>
  );
};

export default Nota;
