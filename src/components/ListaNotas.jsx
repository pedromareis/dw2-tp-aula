import { useState } from "react";
import Nota from "./Nota";
import "./ListaNotas.css";

const ListaNotas = ({ notas }) => {
  // const [numero, setNumero] = useState();
  const [ultimaNotaClicada, setUltimaNotaClicada] = useState("NENHUM");

  const clicknaNota = (disc) => {
    console.log("cliquei numa nota", disc);
    setUltimaNotaClicada(disc);
  };

  return (
    <div className="container">
      <p style={{ fontSize: 48, fontWeight: "bold" }}>
        Ultima nota clicada: {ultimaNotaClicada}
      </p>
      <br />

      {notas.map((nota, index) => (
        <Nota
          estilos={{ fontSize: 48, fontWeight: "bold" }}
          key={nota.id}
          nota={nota}
          funcao={(disc) => {
            clicknaNota(disc);
          }}
          funcao2={(disc) => {
            clicknaNota(disc);
          }}
          funcao3={(disc) => {
            clicknaNota(disc);
          }}
        />
      ))}
    </div>
  );
};

export default ListaNotas;
