import "./Header.scss";
import { Link } from "react-router-dom";
import armsImage from "../../assets/images/arms.png";
import logoImage from "../../assets/images/logo.jpeg";
import Nav from "../Nav/Nav";

const Header = () => (
  <header className="site-header">
    <div className="container">
      <div className="site-header__brand">
        <Link className="site-header__logo" to="/" aria-label="Petal Girls School home">
          <img src={logoImage} alt="Petal Girls School logo" />
        </Link>
        <div className="site-header__title">
          <h1>
            <Link to="/">Petal Girls School</Link>
          </h1>
          <p>With God We Triumph</p>
        </div>
        <img className="site-header__arms" src={armsImage} alt="Coat of arms" />
      </div>
      <Nav />
    </div>
  </header>
);

export default Header;
