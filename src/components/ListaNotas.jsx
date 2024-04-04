import { useState } from "react";
import Nota from "./Nota";
import "./ListaNotas.css";

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

  const [numero, setNumero] = useState();

  const [ultimaNotaClicada, setUltimaNotaClicada] = useState("Nenhum");

  const clickNaNota = (disc) => {
    console.log("Cliquei na nota - " + disc);
    setUltimaNotaClicada(disc);
  };

  return (
    <div className="container">
      <p style={{ fontSize: 52, fontWeight: "bold" }}>
        Ultima nota clicada: {ultimaNotaClicada}
      </p>
      <br />

      {notasTestes.map((nota, index) => (
        <Nota
          /* key={index.toString()} */
          estilo={{ fontSize: 22, fontWeight: "bold" }}
          key={nota.id}
          nota={nota}
          funcao={(disc) => {
            clickNaNota(disc);
          }}
          /* funcao={clickNaNota} */
        />
      ))}
    </div>
  );
};

export default ListaNotas;
