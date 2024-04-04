import { useState } from "react";
import Nota from "./Nota.jsx";
import "./styles/ListaNotas.css";

const ListaNotas = ({ notas }) => {
  const [numero, setNumero] = useState();

  const [ultimaNotaClicada, setUltimaNotaClicada] = useState("NENHUM");

  const clickNaNota = (disc) => {
    console.log("cliquei numa nota", disc);
    setUltimaNotaClicada(disc);
  };

  return (
    <div className="container">
      <p style={{ fontSize: 62, fontWeight: "bold" }}>
        Última nota clicada: {ultimaNotaClicada}
      </p>
      <br />
      {notas.map((nota, index) => (
        <Nota
          style={{ fontSize: 48, fontWeight: "bold" }}
          //key={index}
          key={nota.id}
          nota={nota}
          funcao={(disc) => {
            clickNaNota(disc);
          }}
          funcao2={function (disc) {
            clickNaNota(disc);
          }}
          funcao3={clickNaNota}
        />
      ))}
    </div>
  );
};

export default ListaNotas;
