import React, { useEffect, useState } from "react";
import "./App.css";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://ulplsaiimovuibgacewe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscGxzYWlpbW92dWliZ2FjZXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMDk5OTAsImV4cCI6MjAyODY4NTk5MH0.QWejC96bJ5bQ5VxQMRBqdKS90Ri8m5CDi--PfYOmPWE"
);

function App() {
  const [numero, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [alerta, setAlerta] = useState(undefined);

  const [casas, setCasas] = useState([]);

  useEffect(() => {
    console.log("useEffect tipo 1: sem dependências");
  });

  useEffect(() => {
    console.log("useEffect tipo 2: array dependências vazio");
  }, []);

  async function getCasas() {
    const { data } = await supabase.from("casas").select();
    setCasas(data);
  }

  useEffect(() => {
    getCasas();
  }, []);

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
        <ul>
          {casas &&
            casas.map((casa) => (
              <>
                <li key={casa.nome}>{casa.nome}</li>
                <li key={casa.preco}>{casa.preco}</li>
              </>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
