import { Link } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "../pages/Home/index.scss";

function Erreur404() {
  return (
    <>
      <Header />
      <section className="section-error">
        <p className="type-error">404</p>
        <p className="comment-error">
          Oups! La page que vous demandez n'existe pas
        </p>
        <Link to="/" className="link">
          Retournez sur la page d'accueil
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Erreur404;
