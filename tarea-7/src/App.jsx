import React, { useState } from "react";
import "./app.css";
import Form from "./components/formulario/form";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Personajes from "./pages/personajes/personajes";
import Episodios from "./pages/episodios/episodios";

function App() {
  const [user, setUser] = useState([]);

  return (
    <BrowserRouter>
      <div >
        {user.length === 0 ? (
          <Form setUser={setUser} />
        ) : (
          <Routes>
            <Route path="/" element={<Home user={user} setUser={setUser} />} />
          </Routes>
        )}
      </div>
        <Routes>
        <Route path="/personajes" element={<Personajes  />} />
        <Route path="/episodios" element={<Episodios  />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
