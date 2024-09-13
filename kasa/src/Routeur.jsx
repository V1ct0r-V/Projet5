import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Propos from "./pages/Propos.jsx";
import FicheLogement from "./pages/FicheLogement.jsx";
import Error from "./pages/Erreur404.jsx";
import logementData from "./data/logements.json";

function Routeur() {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<Propos />} />

          {logementData.map((logement) => (
            <Route
              key={logement.id}
              path={`/fiche-logement/${logement.id}`}
              element={<FicheLogement id={logement.id} />}
            />
          ))}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default Routeur;
