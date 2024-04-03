const Nota = ({nota}) =>{

    return <p>{nota.id + ': ' + nota.disciplina + ': ' + nota.nota + '  Valores'}</p>;
}

export default Nota;