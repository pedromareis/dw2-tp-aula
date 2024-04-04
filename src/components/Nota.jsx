const Nota = ({ nota, funcao, estilos }) => {
    return (
      <div
      style={{...estilos, cursor: "pointer", backgroundColor: "yellow" }}
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
   