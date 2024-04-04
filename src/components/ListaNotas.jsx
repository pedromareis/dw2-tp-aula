import Nota from "./Nota";

const ListaNotas = ({ notasTestes }) => {
  console.log(notasTestes);

  /* return notasTestes.map(nota => (
        <p>{nota.id + ": " + nota.disciplina + " " + nota.nota} </p>
        )); */

  /* return notasTestes.map(nota => {
        return (
        <>
            <p>{nota.id}</p>
            <p>{nota.disciplina}</p>
            <p>{nota.nota}</p>
        
        </>);

    }); */

  const clickNaNota = () => {
    console.log("Cliquei na nota");
  };

  return (
    <div>
      <p>Ultima nota clicada: </p>
      <br />

      {notasTestes.map((nota, index) => (
        <Nota
          /* key={index.toString()} */
          key={nota.id}
          nota={nota}
          funcao={clickNaNota}
        />
      ))}
    </div>
  );
};

export default ListaNotas;
