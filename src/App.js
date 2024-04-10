import React, { useState } from "react";
import "./App.css";
import ListaNotas from "./components/ListaNotas";
import { aluno1 } from "./data/notas-alunos";
import Select from "react-select";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <div>{/* <ListaNotas notas={aluno1} /> */}</div>
    //     {/* <Select
    //       defaultValue={selectedOption}
    //       onChange={setSelectedOption}
    //       options={options}
    //       className="react-select-container"
    //       classNamePrefix="react-select"
    //     /> */}
    //   </header>
    // </div>
  );
}

export default App;
