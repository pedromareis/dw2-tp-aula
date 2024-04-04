// const Nota = ({ nota }) => {
// 	return <p>{nota.disciplina + ": " + nota.nota + " valores"}</p>;
// };

const Nota = ({ nota, funcao, stilos }) => {
	return (
		<div
			style={{ ...stilos, color: "blue" }}
			onClick={() => {
				console.log("Cliquei no elemento no ficheiro Notas.jsx");
				funcao(nota.disciplina);
			}}
		>
			{nota.disciplina + ": " + nota.nota + " valores"}
		</div>
	);
};

// const NotaProps = (props) => {
// 	return <p> props.nota.disciplina + ": "+ props.nota.nota + "valores"</p>;
// };

export default Nota;
