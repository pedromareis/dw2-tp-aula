import Nota from "./Nota";
export const ListaNotas = ({notas, testeVariavel, numero}) => {
    console.log(notas);
    //console.log(testeVariavel);
    //console.log(numero);
 
    return notas.map((nota) => <Nota nota={nota} />);
    //return <p>{JSON.stringify(notas)}</p>
};
 
export default ListaNotas;