import Nota from "./Nota";

const listaNotas = ({notas}) =>{
    console.log(notas);
    return  notas.map((nota) => <Nota nota={nota}/> ) 
};

export default listaNotas