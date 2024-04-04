import { useState } from "react";
import Nota from "./Nota";
import "./ListaNotas.css";

const ListaNotas = ({ notas }) => {
  const [ultimaNotaClicada, setUltimaNotaClicada] = useState("nada");

  const clickNaNota = (disc) => {
    setUltimaNotaClicada(disc);
  };

  return (
    <div className="container">
      <p style={{ fontSize: 48, fontWeight: "bold" }}>
        Última nota clicada: {ultimaNotaClicada}
      </p>

      {notas.map((nota, index) => (
        <Nota
          estilos={{ fontSize: 48, fontWeight: "bold" }}
          // key={index}
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
