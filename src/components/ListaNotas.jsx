import { useState } from "react";
import "./ListaNotas.css";
import Nota from "./Nota";

const ListaNotas = ({ notas }) => {
  //const [numero, setNumero] = useState();
  const [ultimaNotaClicada, setUltimaNotaClicada] = useState("NENHUM");

  // let ultimaNotaClicada = null;

  const clickNaNota = (disc) => {
    console.log("cliquei na nota de", disc);
    setUltimaNotaClicada(disc);
  };

  return (
    <div className="container">
      <p style={{ fontSize: 48, fontWeight: "bold" }}>
        Última nota clicada: {ultimaNotaClicada}
      </p>
      <br />
      {notas.map((nota, index) => (
        <Nota
          estilos={{ fontSize: 48, fontWeight: "bold " }}
          //key = {index.toString()}
          key={nota.id}
          nota={nota}
          funcao={(d) => {
            clickNaNota(d);
          }}
          funcao2={function () {
            clickNaNota();
          }}
          funcao3={clickNaNota}
        />
      ))}
    </div>
    //return <p>{JSON.stringify(notas)}</p>
  );
};

export default ListaNotas;
