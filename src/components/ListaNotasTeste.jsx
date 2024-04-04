import { useState } from "react";
import Nota from "./Nota";
import { CSSProperties } from "react";

const ListaNotas = ({ notas }) => {
  let aux = 0;
  console.log(notas);
  const [numero, setNumero] = useState();
  const [ultimaNotaCarregada, setUltimaNotaCarregada] = useState("Nenhum");

  const clickNaNota = (disc) => {
    console.log("cliquei na nota", disc);
    setUltimaNotaCarregada(disc);
  };

  return (
    <div
      className="container"
      onClick={() => {
        console.log(aux++);
      }}
    >
      <p>Última nota clicada: {ultimaNotaCarregada}</p>
      <br />
      {notas.map((nota) => (
        <Nota
          nota={nota}
          funcao={(disc) => {
            clickNaNota(disc);
          }}
          funcao2={() => {
            clickNaNota();
          }}
          funcao3={clickNaNota}
        />
      ))}
    </div>
  );
};
export default ListaNotas;
