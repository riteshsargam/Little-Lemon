import { Link } from "react-router-dom";
import logoImage from '../../../src/assets/Logo.svg';
import './Nav.css';

function NavMenu(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img
            src={logoImage}
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
        </Link>
      )}
      <Link className="hover-effect" to="/">
        <h1>Home</h1>
      </Link>
      <Link className="hover-effect" to="/about">
        <h1>About</h1>
      </Link>
      <Link className="hover-effect" to="/menu">
        <h1>Menu</h1>
      </Link>
      <Link className="hover-effect" to="/reservations">
        <h1>Reservations</h1>
      </Link>
      <Link className="hover-effect" to="/order">
        <h1>Order Online</h1>
      </Link>
      <Link className="hover-effect" to="/login">
        <h1>Login</h1>
      </Link>
    </menu>
  );
}

export default NavMenu;