const Nota = ({ nota, funcao }) => {
  return (
    <div
      onClick={() => {
        console.log("cliquei no elemento no ficheiro nota.jsx");
        funcao();
      }}
    >
      <p>{nota.id + ": " + nota.disciplina + " " + nota.nota} </p>
    </div>
  );
};

export default Nota;
