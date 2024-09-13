import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Header/Header.scss";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <Link to="/" className="nav-item">
          Accueil
        </Link>
        <Link to="/a-propos" className="nav-item">
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
