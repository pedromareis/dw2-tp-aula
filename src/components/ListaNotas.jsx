import Nota from "./Nota";

const ListaNotas = ({notasTestes}) =>{
    console.log(notasTestes);


    /* return notasTestes.map(nota => (
        <p>{nota.id + ": " + nota.disciplina + " " + nota.nota} </p>
        )); */


    /* return notasTestes.map(nota => {
        return (
        <>
            <p>{nota.id}</p>
            <p>{nota.disciplina}</p>
            <p>{nota.nota}</p>
        
        </>);

    }); */


    return notasTestes.map(nota => (
        <Nota nota={nota} />
        ));
}

export default ListaNotas;