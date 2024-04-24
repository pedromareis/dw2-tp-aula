import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ListHouses from "./pages/ListHouses";
import EditHouse from "./pages/EditHouse";
import NoPage from "./pages/NoPage";

import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://jipepkdsvouerqxvjucl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppcGVwa2Rzdm91ZXJxeHZqdWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3MTE4NzksImV4cCI6MjAyOTI4Nzg3OX0.7zKNz9EpkZa49gxL7TVCZsu54hXTyK2tPIGjvrZlP8w"
);

function App() {
  return (
    <div className="App">
      <h2>Projeto aula</h2>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ListHouses supabase={supabase} />} />
            <Route path="/add" element={<EditHouse supabase={supabase} />} />
            <Route
              path="/edit/:id"
              element={<EditHouse supabase={supabase} />}
            />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
