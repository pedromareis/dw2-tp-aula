import React, { useEffect, useState } from "react";
import "./App.css";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
// const supabase = createClient(
//   "https://ulplsaiimovuibgacewe.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscGxzYWlpbW92dWliZ2FjZXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMDk5OTAsImV4cCI6MjAyODY4NTk5MH0.QWejC96bJ5bQ5VxQMRBqdKS90Ri8m5CDi--PfYOmPWE"
// );

// import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://jipepkdsvouerqxvjucl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppcGVwa2Rzdm91ZXJxeHZqdWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3MTE4NzksImV4cCI6MjAyOTI4Nzg3OX0.7zKNz9EpkZa49gxL7TVCZsu54hXTyK2tPIGjvrZlP8w";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [alunos, setAlunos] = useState([]);
  const [novoAluno, setNovoAluno] = useState({});

  async function getAlunos() {
    const { data } = await supabase.from("Alunos").select();
    setAlunos(data);
  }

  async function insertAluno() {
    await supabase.from("Alunos").insert({
      nome: novoAluno.name,
      data_nascimento: novoAluno.data_nascimento,
      ativo: false,
    });

    setNovoAluno({});
    getAlunos();
  }

  async function deleteAluno(id) {
    await supabase.from("Alunos").delete().eq("id", id);
    getAlunos();
  }

  async function updateAluno(id, novoNome) {
    await supabase.from("Alunos").update({ nome: novoNome }).eq("id", id);
    getAlunos();
  }

  useEffect(() => {
    getAlunos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {alunos &&
            alunos.map((aluno) => (
              <div style={{ display: "flex", gap: 24 }}>
                <span key={aluno.id}>
                  {aluno.nome} | {aluno.data_nascimento}
                </span>
                <button onClick={() => deleteAluno(aluno.id)}>
                  Apaga aluno
                </button>
              </div>
            ))}
        </ul>
        <input
          type="text"
          placeholder="Nome aluno"
          onChange={(e) => {
            setNovoAluno({ ...novoAluno, name: e.target.value });
          }}
        />
        <input
          type="date"
          placeholder="Data nascimento aluno"
          onChange={(e) => {
            setNovoAluno({ ...novoAluno, data_nascimento: e.target.value });
          }}
        />
        <button onClick={insertAluno}>Insere aluno</button>
      </header>
    </div>
  );
}

export default App;
