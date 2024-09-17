import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Propos from "./pages/Propos.jsx";
import FicheLogement from "./pages/FicheLogement.jsx";
import Error from "./pages/Erreur404.jsx";

function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Propos />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeur;
