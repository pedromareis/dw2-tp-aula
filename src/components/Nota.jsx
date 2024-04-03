const Nota = ({nota}) => {
    return nota => <p>{`${nota.disciplina}: ${nota.nota} valores`}</p>

}

export default Nota;