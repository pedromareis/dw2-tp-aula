import Nota from "./Nota";

const ListaNotas = ({ notas}) => {
    console.log(notas);

    return notas.map((nota) => <Nota nota={nota}/>);

} 
export default ListaNotas;