import { useState } from "react";

import Nota from "./Nota";
import "../styles/ListaNotas.css";

const ListaNotas = ({ notas }) => {
	const [ultimaNotaClicada, setUltimaNotaClicada] = useState("NENHUM");
	// console.log(notas);

	const clickNaNota = (disc) => {
		console.log("cliquei numa nota " + disc);
		setUltimaNotaClicada(disc);
	};

	return (
		<div className="container">
			<p style={{ fontSize: 32, fontWeight: "bold" }}>
				Ultima nota clicada: {ultimaNotaClicada}
			</p>
			{notas.map((nota) => (
				<Nota
                    stilos ={{backgroundColor: "red"}}
					key={nota.id}
					nota={nota}
					// funca3={clickNaNota}
					// funcao2={function () {
					// 	clickNaNota();
					// }}
					funcao={(disc) => {
						clickNaNota(disc);
					}}
				></Nota>
			))}
		</div>
	);

	//  <p>{JSON.stringify(notas)}</p>
};
export default ListaNotas;
// function ListaNotas(){}
