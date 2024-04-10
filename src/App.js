import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [numero, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [alerta, setAlerta] = useState(undefined);

  useEffect(() => {
    console.log("useEffect tipo 3: array dependências com dependência numero");
    if (numero > 10) {
      setAlerta("Numero maior que 10");
    }
  }, [numero, numero2]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Valor do numero: {numero}</p>
        <button
          style={{ fontSize: 32 + numero }}
          onClick={() => setNumero(numero + 1)}
        >
          Incrementa
        </button>
        <button
          style={{ fontSize: 32 + numero2 }}
          onClick={() => setNumero2(numero2 + 1)}
        >
          Incrementa o n2
        </button>
        {alerta && <p>{alerta}</p>}
      </header>
    </div>
  );
}

export default App;
