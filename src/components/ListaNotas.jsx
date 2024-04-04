// const ListaNotas = (props) => {
//   return <p>{JSON.stringify(props.notas)}</p>;
// };

import Nota from "./Nota";

const ListaNotas = ({ notas }) => {
  let ultimaNotaClicada = null;

  const clickNaNota = () => {
    console.log("cliquei numa nota");
  };

  return (
    <div>
      <p>Última nota clicada: {ultimaNotaClicada}</p>
      <br />

      {notas.map((nota) => (
        <Nota
          nota={nota}
          funcao={() => {
            clickNaNota();
          }}
          funcao2={function () {
            clickNaNota();
          }}
          funcao3={clickNaNota}
        />
      ))}
    </div>
  );
};

export default ListaNotas;
