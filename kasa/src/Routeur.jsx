import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index.jsx';
import APropos from './pages/APropos.jsx';
import FicheLogement from './pages/FicheLogement.jsx';
import Error404 from './pages/Erreur404.jsx';

function Routeur () {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<APropos />} />
                    <Route path="/" element={<FicheLogement />} />
                </Routes>
                      </Router>
        </React.StrictMode>,
    document.getElementById('root')
    )
}

export default Routeur