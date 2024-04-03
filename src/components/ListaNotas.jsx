import Nota from "./Nota";


const ListaNotas = ({ notas }) => {
    // console.log(notas);

    return notas.map((nota) => 
        <Nota nota = {nota}/>
    );
    //  <p>{JSON.stringify(notas)}</p>
}
export default ListaNotas;
// function ListaNotas(){}