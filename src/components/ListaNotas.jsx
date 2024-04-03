const ListaNotas = ({ notasTestes}) => {
    console.log(notasTestes);

    return notasTestes.map((notas) => (<p>{notas.disciplina + ": " + notas.nota + " valores"}</p>))

}
export default ListaNotas;