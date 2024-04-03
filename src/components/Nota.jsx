const Nota = ({nota}) =>{

    return <p>{nota.id + ": " + nota.disciplina + " " + nota.nota} </p>;

}

export default Nota;