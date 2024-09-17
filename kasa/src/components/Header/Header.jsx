import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Header/Header.scss";

function Header() {
  const location = useLocation();
  return (
    <header>
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-item active" : "nav-item"}
        >
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={
            location.pathname === "/a-propos" ? "nav-item active" : "nav-item"
          }
        >
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
