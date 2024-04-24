import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ListHouses from "./pages/ListHouses";
import EditHouse from "./pages/EditHouse";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <h2>Projeto aula</h2>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ListHouses />} />
            <Route path="edit" element={<EditHouse />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
