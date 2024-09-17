import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Propos from "./pages/Propos.jsx";
import FicheLogement from "./pages/FicheLogement.jsx";
import Error from "./pages/Erreur404.jsx";

function Routeur() {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<Propos />} />
          <Route path="/fiche-logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default Routeur;
