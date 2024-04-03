import Nota from "./nota";
const ListaNotas = ({ notas }) => {
   
    console.log(notas);

    return notas.map((nota) => <Nota nota={nota} />);

};
export default ListaNotas;