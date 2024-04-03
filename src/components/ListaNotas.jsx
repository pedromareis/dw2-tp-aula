import Nota from "./Nota.jsx"

const ListaNotas = ({notas}) =>
{
    console.log(notas);

    return notas.map((nota) => <Nota nota={nota}/>)
}

export default ListaNotas;