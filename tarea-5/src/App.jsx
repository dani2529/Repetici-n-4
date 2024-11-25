import React, { useState } from "react";
import "./app.css";
import RickAndMortyCaractercard from "./components/rickAndMortyCaractercard/rickAndMortyCaractercard";
import Form from "./components/formulario/form";

function App() {
  const [user, setUser] = useState([]);

  return (
    <div>
      <div className="container-global">
        {!user.length > 0 ? (
          <Form setUser={setUser} />
        ) : (
          <RickAndMortyCaractercard user={user} setUser={setUser} />
        )}
      </div>
    </div>
  );
}

export default App;
