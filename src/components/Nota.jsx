const Nota = ({ nota, funcao, estilo }) => {
  return (
    <div
      onClick={() => {
        console.log("cliquei no elemento no ficheiro Nota.jsx");
        funcao(nota.disciplina);
      }}
    >
      <p style={{ ...estilo, cursor: "pointer", fontSize: 30 }}>
        {nota.id + ": " + nota.disciplina + " " + nota.nota}{" "}
      </p>
    </div>
  );
};

export default Nota;
